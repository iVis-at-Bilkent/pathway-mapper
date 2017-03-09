//Cytoscape related requires !
window.oCanvas = global.oCanvas = require("ocanvas");
var cytoscape =  window.cytoscape = require('cytoscape');
var panzoom = require('cytoscape-panzoom');
//var cxtmenu = require('cytoscape-cxtmenu');
var navigator = require('cytoscape-navigator');
var cyqtip = require('cytoscape-qtip');
var regCose = require("../../lib/js/cose-bilkent/src/index.js");
// var regCose = require('cytoscape-cose-bilkent');
var grid_guide = require('cytoscape-grid-guide');
var undoRedo = require('cytoscape-undo-redo');
var contextMenus = require('cytoscape-context-menus');
var nodeResize = require('cytoscape-node-resize');
require('bootstrap-select');


//Panzoom options
var panzoomOpts = require('./PanzoomOptions.js');
var styleSheet = require('./GraphStyleSheet.js');
var edgeHandleOpts = require('./EdgeHandlesOptions.js');
var LayoutProperties = require('./BackboneViews/LayoutPropertiesView.js');
var GenomicDataExplorerView = require('./BackboneViews/GenomicDataExplorerView.js');
var PathwayDetailsView = require('./BackboneViews/PathwayDetailsView.js');
var GridOptionsView = require('./BackboneViews/GridOptionsView.js');
var NodeResizeOptionsView = require('./BackboneViews/NodeResizeOptionsView.js');
var CBioPortalAccessView = require('./BackboneViews/CbioPortalAccessView.js');

//Other requires
require('./FileOperationsManager.js');
require('./OtherMenuOperations.js');
require('./GenomicMenuOperations.js');
require('./ViewOperationsManager.js');
require('./GraphUtilities.js');

var QtipManager = require('./QtipManager.js');
var ContextMenuManager = require('./ContextMenuManager.js');
var DragDropNodeAddPlugin = require('./DragDropNodeAddPlugin.js');
var EditorActionsManager = require('./EditorActionsManager.js');
var SaveLoadUtilities = require('./SaveLoadUtility.js');
var CBioPortalAccessor = require('./cBioPortalAccessor.js');

var notify = require('bootstrap-notify');
window.notificationManager = require('./NotificationFactory');

 module.exports = (function()
 {
     function AppManager(isCollaborative, realTimeManager) {
         this.isCollaborative = isCollaborative;
         this.realTimeManager = realTimeManager;
         this.init();
         this.createSampleMenu();
         this.createCBioPortalAccessModal();
     }

     AppManager.prototype.init = function () {
         //Initializes cytoscape
         this.initCyJS();
         //Initialize cytoscape based handlers here
         this.initCyHandlers();

         var that = this;
         window.onresize = function () {
             that.placePanzoomAndOverlay();
         }

         //TODO undo redo is not working properly in collaborative mode
         if (!this.isCollaborative) {
             $(document).keydown(function (e) {
                 if (e.which === 89 && (e.ctrlKey || event.metaKey)) {
                     window.undoRedoManager.redo();
                 }
                 else if (e.which === 90 && (e.ctrlKey || event.metaKey)) {
                     window.undoRedoManager.undo();
                 }
             });
         }
         else {
             $('a[role="redo"]').hide();
             $('a[role="undo"]').hide();
         }

         window.appManager = this;
     };

     AppManager.prototype.placePanzoomAndOverlay = function () {
         //TODO place navigator !!!
         var offset = 5;
         var topCy = $('.cyContainer').offset().top;
         var leftCy = $('.cyContainer').offset().left;
         var heightCy = $('.cyContainer').outerHeight();
         var widthCy = $('.cyContainer').outerWidth();
         var heightNavigator = $('.cytoscape-navigator-wrapper').outerHeight();
         var widthNavigator = $('.cytoscape-navigator-wrapper').outerWidth();
         var heightPanzoom = $('.cy-panzoom').outerHeight();
         var widthPanzoom = $('.cy-panzoom').outerWidth();
         $('.cytoscape-navigator-wrapper').css('top', heightCy + topCy - heightNavigator - offset);
         $('.cytoscape-navigator-wrapper').css('left', widthCy + leftCy - widthNavigator - offset);

         $('.cy-panzoom').css('top', topCy + 5);
         $('.cy-panzoom').css('left', widthCy + leftCy - 55);
     }

     AppManager.prototype.createSampleMenu = function ()
     {
         //Get template file data first
         var request = new XMLHttpRequest();
         request.onreadystatechange = function () {
             if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                 var templateData = JSON.parse(request.responseText);

                 for (var key in templateData) {
                     if (templateData.hasOwnProperty(key)) {
                         var newTCGAMenu = $('<li class="dropdown-submenu" id="' + key + '">' +
                             '<a href="#">' + key + '</a>' +
                             '</li>');
                         var newTCGAPathway = $('<ul class="dropdown-menu"></ul>');

                         for (var i in templateData[key]) {
                             var newPath = templateData[key][i];
                             var pName = newPath.replace(/-/gi, " ").substring(0, newPath.length - 4);
                             var sampleLink = $('<li><a  path="' + newPath + '" href="#">' + pName + '</a></li>');
                             sampleLink.on('click', sampleMenuClickHandler);

                             //Add it to pan cancer menu
                             if (key.includes('PanCancer')) {
                                 //panCancerSubMenu
                                 $('#panCancerSubMenu').append(sampleLink);
                             }
                             else {
                                 newTCGAPathway.append(sampleLink);
                                 newTCGAMenu.append(newTCGAPathway);
                             }
                         }

                         //Add sub menus if they do not include pancaner and creighton
                         if (!key.includes('PanCancer') && !key.includes('Creighton')) {
                             $('#sampleSubMenu').append(newTCGAMenu);
                         }

                     }
                 }
             }
         };


         function sampleMenuClickHandler(event) {
             var request = new XMLHttpRequest();
             request.onreadystatechange = function () {
                 if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                     var allEles = SaveLoadUtilities.parseGraph(request.responseText);
                     window.editorActionsManager.loadFile(allEles.nodes, allEles.edges);
                     window.undoRedoManager.reset();
                     window.appManager.pathwayDetailsView.updatePathwayProperties({
                         fileName: allEles.title + ".txt",
                         pathwayTitle: allEles.title,
                         pathwayDescription: allEles.description
                     });
                 }
             };

             //Send request for selected pathway
             var pathwayName = event.target.attributes[0].value;
             request.open("GET", "/pathway?filename=" + pathwayName);
             request.send();
         }


         request.open("GET", "/getTemplateFileData");
         request.send();
     };

     AppManager.prototype.createCBioPortalAccessModal = function ()
     {
         var portalAccessor = new CBioPortalAccessor();
         var self = this;

         this.portalAccessView = new CBioPortalAccessView({
             el: $("#cbioPortalAccessDiv")
         });

         portalAccessor.fetchCancerStudies(function (cancerStudies)
         {
             self.portalAccessView.updateCancerStudies(cancerStudies);
         });
     };

    AppManager.prototype.initCyJS = function()
    {
        panzoom( cytoscape, $ );  // register extension
        //cxtmenu( cytoscape, $ ); // register extension
        cyqtip( cytoscape, $ ); // register extension
        regCose( cytoscape ); // register extension
        navigator( cytoscape ); // register extension
        grid_guide( cytoscape, $ ); // register extension
        undoRedo(cytoscape); // register extension
        contextMenus( cytoscape, $ ); // register extension
        nodeResize( cytoscape, $ );


        window.edgeAddingMode = 0;
        // var allEles = SaveLoadUtilities.parseGraph(sampleGraph);
        cy = window.cy = cytoscape({
            container: document.querySelector('#cy'),
            boxSelectionEnabled: true,
            autounselectify: false,
            wheelSensitivity: 0.1,
            style: styleSheet,
            // elements: allEles,
            ready: function(){},
            textureOnViewport: false,
            motionBlur: true,
            layout: {name: 'preset'}
        });

        //TODO remove window.editorActionsManager from real time module ASAP !
        //Create Manager Classes
        window.editorActionsManager = this.editorActionsManager = new EditorActionsManager(this.isCollaborative,
            this.realTimeManager,
            window.cy);

        this.qtipManager = new QtipManager(window.cy), this.editorActionsManager;
        this.cxtMenuManager = new ContextMenuManager(window.cy, this.editorActionsManager);
        this.dragDropNodeAddManager = new DragDropNodeAddPlugin(this.editorActionsManager);

        //Render layout properties view after editor actions manager is created !
        this.layoutPropertiesView = new LayoutProperties({
            el: $('#layoutPropertiesDiv'),
            editorActionsManager: this.editorActionsManager
        }).render();

        this.gridOptionsView = new GridOptionsView({
            el: $('#gridOptionsDiv')
        }).render();

        // this.nodeResizeOptionsView = new NodeResizeOptionsView({
        //     el: $('#nodeResizeOptionsDiv')
        // }).render();

        this.genomicDataExplorerView = new GenomicDataExplorerView({
            el: $('#genomicDataExplorerDiv'),
            editorActionsManager: this.editorActionsManager
        }).render();

        this.pathwayDetailsView = new PathwayDetailsView({
            el: $('#pathwayDetailsDiv')
        }).render();

        //Initialize panzoom
        cy.panzoom( panzoomOpts );

        //Node Add initialization
        cy.nodeadd(
            {
                //Once the explanationText is cast to uppercase they will be node types
                components:
                    [
                        {
                            container: $('#simpleNodeDiv'),
                            nodeType: 'Gene',
                            // icon: 'fa fa-square-o'
                        },
                        {
                            container: $('#familyNodeDiv'),
                            nodeType: 'Family',
                            // icon: 'fa fa-square-o'
                        },
                        {
                            container: $('#complexNodeDiv'),
                            nodeType: 'Complex',
                            icon: 'fa fa-square-o'
                        },
                        {
                            container: $('#compartmentNodeDiv'),
                            nodeType: 'Compartment',
                            icon: 'fa fa-square-o'
                        },
                        {
                            container: $('#processNodeDiv'),
                            nodeType: 'Process',
                            // icon: 'fa fa-square-o'
                        }
                    ]

            });

        //Edge Handles initialization
        cy.edgehandles( edgeHandleOpts );

        //Navigator for cytoscape js
        var navDefaults = {
            container: '.cytoscape-navigator-wrapper' // can be a HTML or jQuery element or jQuery selector
            , viewLiveFramerate: 0 // set false to update graph pan only on drag end; set 0 to do it instantly; set a number (frames per second) to update not more than N times per second
            , thumbnailEventFramerate: 10 // max thumbnail's updates per second triggered by graph updates
            , thumbnailLiveFramerate: false // max thumbnail's updates per second. Set false to disable
            , dblClickDelay: 200 // milliseconds
            , removeCustomContainer: true // destroy the container specified by user on plugin destroy
            , rerenderDelay: 100 // ms to throttle rerender updates to the panzoom for performance
        };

        var nav = cy.navigator( navDefaults ); // get navigator instance, nav

        cy.nodeResize({
            padding: 5, // spacing between node and grapples/rectangle
            undoable: true, // and if cy.undoRedo exists

            grappleSize: 8, // size of square dots
            grappleColor: "#1abc9c", // color of grapples
            inactiveGrappleStroke: "inside 1px blue",
            boundingRectangle: true, // enable/disable bounding rectangle
            boundingRectangleLineDash: [4, 8], // line dash of bounding rectangle
            boundingRectangleLineColor: "#1abc9c",
            /*#994d00*/
            boundingRectangleLineWidth: 1.5,
            zIndex: 999,

            minWidth: function (node) {
                var data = node.data("resizeMinWidth");
                return data ? data : 15;
            }, // a function returns min width of node
            minHeight: function (node) {
                var data = node.data("resizeMinHeight");
                return data ? data : 15;
            }, // a function returns min height of node

            isFixedAspectRatioResizeMode: function (node) { return node.is(".fixedAspectRatioResizeMode") },// with only 4 active grapples (at corners)
            isNoResizeMode: function (node) {
                return undefined;
            }, // no active grapples

            cursors: { // See http://www.w3schools.com/cssref/tryit.asp?filename=trycss_cursor
                // May take any "cursor" css property
                default: "default", // to be set after resizing finished or mouseleave
                inactive: "not-allowed",
                nw: "nw-resize",
                n: "n-resize",
                ne: "ne-resize",
                e: "e-resize",
                se: "se-resize",
                s: "s-resize",
                sw: "sw-resize",
                w: "w-resize"
            }
        });


        this.placePanzoomAndOverlay();
    };


    AppManager.prototype.initCyHandlers = function()
    {
        var that = this;

        var tappedBefore;
        var tappedTimeout;
        cy.on('tap', function(event) {
            var tappedNow = event.cyTarget;
            if (tappedTimeout && tappedBefore) {
                clearTimeout(tappedTimeout);
            }
            if(tappedBefore === tappedNow) {
                tappedNow.trigger('doubleTap');
                tappedBefore = null;
            } else {
                tappedTimeout = setTimeout(function(){ tappedBefore = null; }, 300);
                tappedBefore = tappedNow;
            }
        });

        cy.on('doubleTap', 'node', function(e)
        {
            var eventIsDirect = (e.cyTarget === this);

            if( eventIsDirect ) {
                //Remove qtips
                $(".qtip").remove();
                that.qtipManager.addQtipToElements(e.cyTarget);
                var api = this.qtip('api');
                if (api) {
                    api.show();
                }
            }
        });

        // cy.on('doubleTap', 'edge', function(e)
        // {
        //     var eventIsDirect = (e.cyTarget === this);
        //     $(".qtip").remove();
        //
        //     if( eventIsDirect ) {
        //         that.qtipManager.addQtipToElements(e.cyTarget);
        //     }
        // });

        cy.on('select', 'node', function( e )
        {
            window.editorActionsManager.pushSelectedNodeStack(e.cyTarget);
        });

        cy.on('select', 'edge', function( e )
        {
          var eventIsDirect = (e.cyTarget === this);
          $(".qtip").remove();

          if( eventIsDirect ) {
              that.qtipManager.addQtipToElements(e.cyTarget);
          }
        });

        cy.on('unselect', 'node', function( e )
        {
            window.editorActionsManager.removeElementFromSelectedNodeStack(e.cyTarget);
        });

        cy.on('free', 'node', function (e)
        {
            //Collect all nodes with descendants in case of compounds
            var selectedNodes = cy.nodes(':selected');
            var nodes = e.cyTarget;
            nodes = nodes.union(nodes.descendants());
            nodes = nodes.union(selectedNodes);
            that.editorActionsManager.moveElements(nodes);
        });

        cy.on('layoutstop', function(event)
        {
            that.editorActionsManager.postLayout();
        });

        //TODO fix this when cytoscape is updated !!!
        //Due to cytoscape.js bug, only workaround that worked :(
        cy.on('add', 'node', function(event)
        {
            // event.cyTarget.select();
            cy.style().update();
            cy.forceRender();
        });

        cy.on("noderesize.resizeend", function(e, type, node){
            console.log();
            that.editorActionsManager.resizeElements(node);
        })

    };

    return AppManager;
})();
