//Cytoscape related requires !
var cytoscape =  window.cytoscape = require('cytoscape');
var panzoom = require('cytoscape-panzoom');
var cxtmenu = require('cytoscape-cxtmenu');
var navigator = require('cytoscape-navigator');
var cyqtip = require('cytoscape-qtip');
var regCose = require("../../lib/js/cose-bilkent/src/index.js");

//Panzoom options
var panzoomOpts = require('./PanzoomOptions.js');
var styleSheet = require('./GraphStyleSheet.js');
var edgeHandleOpts = require('./EdgeHandlesOptions.js');
var LayoutProperties = require('./BackboneViews/LayoutPropertiesView.js');
var GenomicDataExplorerView = require('./BackboneViews/GenomicDataExplorerView.js');

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
var grid_guide = require('cytoscape-grid-guide');




module.exports = (function()
{
    function AppManager(isCollaborative,realTimeManager)
    {
        this.isCollaborative = isCollaborative;
        this.realTimeManager = realTimeManager;
        this.init();
    }

    AppManager.prototype.init = function()
    {
        //Initializes cytoscape
        this.initCyJS();
        //Initialize cytoscape based handlers here
        this.initCyHandlers();

        var that = this;
        window.onresize = function()
        {
          that.placePanzoomAndOverlay();
        }
    };

    AppManager.prototype.placePanzoomAndOverlay = function()
    {
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

    AppManager.prototype.initCyJS = function()
    {
        panzoom( cytoscape, $ );  // register extension
        cxtmenu( cytoscape, $ ); // register extension
        cyqtip( cytoscape, $ ); // register extension
        regCose( cytoscape ); // register extension
        navigator( cytoscape ); // register extension
        grid_guide( cytoscape, $ ); // register extension


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

        this.genomicDataExplorerView = new GenomicDataExplorerView({
            el: $('#genomicDataExplorerDiv'),
            editorActionsManager: this.editorActionsManager
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


        var gridGuide = cy.gridGuide({
            snapToGrid: false, // Snap to grid functionality
            discreteDrag: false, // Discrete Drag
            guidelines: true, // Guidelines on dragging nodes
            resize: false, // Adjust node sizes to cell sizes
            parentPadding: false, // Adjust parent sizes to cell sizes by padding
            drawGrid: true, // Draw grid background
            // Guidelines
            guidelinesStackOrder: 4, // z-index of guidelines
            guidelinesTolerance: 2.00, // Tolerance distance for rendered positions of nodes' interaction.
            guidelinesStyle: { // Set ctx properties of line. Properties are here:
                lineWidth: 2.0,
                strokeStyle: "#000000",
                lineDash: [7, 15] // read https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
            },
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

        cy.on('select', 'node', function( e )
        {
            window.editorActionsManager.pushSelectedNodeStack(e.cyTarget);
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
            that.editorActionsManager.moveElements(cy.nodes());
            var newState = {
                zoomLevel: cy.zoom(),
                panLevel: cy.pan()
            };
            that.editorActionsManager.updateGlobalOptions(newState);
        });

        //TODO fix this when cytoscape is updated !!!
        //Due to cytoscape.js bug, only workaround that worked :(
        cy.on('add', 'node', function(event)
        {
            // event.cyTarget.select();
            cy.style().update();
            cy.forceRender();
        });

        cy.on('click')
    };

    return AppManager;
})();
