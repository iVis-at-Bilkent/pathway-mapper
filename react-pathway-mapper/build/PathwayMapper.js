var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from 'react';
import cytoscape from 'cytoscape';
import autobind from "autobind-decorator";
import { observer } from "mobx-react";
import ViewOperationsManager from "./ViewOperationsManager";
import EditorActionsManager from "./EditorActionsManager";
import $ from "jquery";
import DragDropNodeAddPlugin from "./DragDropNodeAddPlugin";
import ContextMenuManager from "./ContextMenuManager";
import GridOptionsManager from "./GridOptionsManager";
import FileOperationsManager from "./FileOperationsManager";
import QtipManager from "./QtipManager";
import ShareDBManager from "./ShareDBManager";
import CBioPortalAccessor from "./CBioPortalAccessor";
const regCose = require('cytoscape-cose-bilkent');
const nodeResize = require('cytoscape-node-resize');
const styleSheet = require('GraphStyleSheet.js');
const panzoomOpts = require('PanzoomOptions.js');
const edgeHandleOpts = require('EdgeHandlesOptions.js');
const konva = require('konva');
let PathwayMapper = class PathwayMapper extends React.Component {
    constructor(props) {
        super(props);
        this.isCollaborative = props.isCollaborative;
        this.edgeAddingMode = 0;
        this.shareDBManager = new ShareDBManager();
        this.isCbioPortal = props.isCbioPortal;
        this.init();
        //this.createSampleMenu(); //TODO: AMENDMENT Menu must be react.
        this.createCBioPortalAccessModal();
    }
    render() {
        return React.createElement("div", null,
            React.createElement("div", { ref: this.cyDivHandler, id: "cy" }),
            React.createElement("div", { className: "cytoscape-navigator-wrapper" }));
    }
    componentDidMount() {
        this.initCyJS();
    }
    cyDivHandler(div) {
        this.cyDiv = div;
    }
    init() {
        //Initializes cytoscape
        this.initCyJS();
        //Initialize cytoscape based handlers here
        this.initCyHandlers();
        this.initKeyboardHandlers();
        this.initUndoRedoFunctionality();
        this.initCBioPortalFunctionalities();
        var that = this;
        //  window.onresize = function () {
        //      that.placePanzoomAndOverlay();
        //  }
        //Create portal accessor
        this.portalAccessor = new CBioPortalAccessor();
        //this.appManager = this;
    }
    ;
    placePanzoomAndOverlay() {
        //TODO place navigator !!!
        var offset = 5;
        // @ts-ignore
        var topCy = $(this.cyDiv).offset().top;
        //var bottomCy = $('.cyContainer').offset().bottom;
        // @ts-ignore
        var leftCy = $(this.cyDiv).offset().left;
        //var rightCy = $('.cyContainer').offset().right;
        // @ts-ignore
        var heightCy = $(this.cyDiv).outerHeight();
        // @ts-ignore
        var widthCy = $(this.cyDiv).outerWidth();
        var heightNavigator = $('.cytoscape-navigator-wrapper').outerHeight();
        var widthNavigator = $('.cytoscape-navigator-wrapper').outerWidth();
        var heightPatwayNavbar = $('.pathway-navbar').outerHeight();
        var heightPathwayToolbar = $('.pathway-toolbar').outerHeight();
        var widthSideBar = $('.sideBarWrapper').outerWidth();
        var widthcBioPortalSideBar = $('.cBioPortal-sidebar').outerWidth();
        //var heightPanzoom = $('.cy-panzoom').outerHeight();
        //var widthPanzoom = $('.cy-panzoom').outerWidth();
        if (!this.isCbioPortal) {
            $('.cytoscape-navigator-wrapper').css('top', heightCy + topCy - heightNavigator - offset);
            $('.cytoscape-navigator-wrapper').css('left', widthCy + leftCy - widthNavigator - offset);
        }
        else {
            $('.cytoscape-navigator-wrapper').css('top', heightCy + topCy - heightNavigator - heightPathwayToolbar - heightPatwayNavbar - 3 * offset);
            $('.cytoscape-navigator-wrapper').css('left', widthCy + leftCy - widthNavigator + widthcBioPortalSideBar + offset - widthSideBar);
        }
        //Relative is used so that its position depends on the below properties
        $('.cy-panzoom').css('position', 'relative');
        $('.cy-panzoom').css('top', 2);
        $('.cy-panzoom').css('left', widthCy - 57);
        $('.cy-panzoom').css('z-index', 1039);
        //Makes the width of panzoom container to 0
        $('.cy-panzoom').css('width', 0);
    }
    /*
      createSampleMenu(){
        //Get template file data first
        const self = this;
        const request = new XMLHttpRequest();
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
                  sampleLink.on('click', checkMenuClickHandler);
    
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
                  if (self.isCbioPortal) {
                    $('#templateSubMenu').append(newTCGAMenu);
                  }
                }
    
              }
            }
          }
        };
    
        //Checks whether there is a visible pathway and displays a warning
        function checkMenuClickHandler(event: MouseEvent) {
          if (this.cy.elements().length != 0)
            window.appManager.promptConfirmationView.render(function () {
              sampleMenuClickHandler(event)
            });
          else
            sampleMenuClickHandler(event);
        };
    
        function updateTCGAInformation(title, desription) {
          document.getElementById("TCGA-header").innerHTML = title;
          document.getElementById("TCGA-textarea").innerText = desription;
        }
    
        function sampleMenuClickHandler(event) {
          var request = new XMLHttpRequest();
          request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
              var allEles = SaveLoadUtilities.parseGraph(request.responseText);
              self.editor.loadFile(allEles.nodes, allEles.edges);
              window.undoRedoManager.reset();
              window.appManager.pathwayDetailsView.updatePathwayProperties({
                fileName: allEles.title + ".txt",
                pathwayTitle: allEles.title,
                pathwayDescription: allEles.description
              });
              if(self.isCbioPortal) {
                updateTCGAInformation(allEles.title, allEles.description);
              }
            }
          };
          //Send request for selected pathway
          var pathwayName = event.target.attributes[0].value;
          request.open("GET", "/pathway?filename=" + pathwayName);
          request.send();
        }
    
    
        request.open("GET", "/getTemplateFileData");
        request.send();
      };*/
    getPathwayData() {
        return this.pathwayDetailsView.getPathwayData();
    }
    ;
    createCBioPortalAccessModal() {
        var self = this;
        /* TODO: AMENDMENT SUPPRESSED FUNCTIONALITY
        this.portalAccessView = new CBioPortalAccessView({
          el: $("#cbioPortalAccessDiv")
        });*/
        this.portalAccessor.fetchCancerStudies(function (cancerStudies) {
            /*TODO: AMENDMENT SUPPRESSED FUNCTIONALITY
            self.portalAccessView.updateCancerStudies(cancerStudies);
            */
            console.log("Returned from CBio: ", cancerStudies);
        });
    }
    ;
    initCyJS() {
        // panzoom(cytoscape, $);  // register extension
        //cxtmenu( cytoscape, $ ); // register extension
        // cyqtip(cytoscape, $); // register extension
        regCose(cytoscape); // register extension
        // navigator(cytoscape); // register extension
        // grid_guide(cytoscape, $); // register extension
        // undoRedo(cytoscape); // register extension
        // contextMenus(cytoscape, $); // register extension
        nodeResize(cytoscape, $, konva); //register extension
        // edgeEditing(cytoscape, $); // register extension
        // viewUtilities(cytoscape, $); // register extension
        this.edgeAddingMode = 0;
        // var allEles = SaveLoadUtilities.parseGraph(sampleGraph);
        this.cy = cytoscape({
            container: this.cyDiv,
            boxSelectionEnabled: true,
            autounselectify: false,
            wheelSensitivity: 0.1,
            style: styleSheet,
            // elements: allEles,
            textureOnViewport: false,
            motionBlur: true,
            layout: { name: 'preset' }
        });
        this.undoRedoManager = this.cy.undoRedo;
        //Create Manager Classes
        this.editor = new EditorActionsManager(this.isCollaborative, this.shareDBManager, this.cy, this.isCbioPortal, this.edgeEditing, this.undoRedoManager, this.portalAccessor);
        this.gridOptionsManager = new GridOptionsManager();
        this.viewOperationsManager = new ViewOperationsManager();
        this.fileOperationsManager = new FileOperationsManager();
        this.qtipManager = new QtipManager(this.cy);
        this.cxtMenuManager = new ContextMenuManager(this.cy, this.editor);
        this.dragDropNodeAddManager = new DragDropNodeAddPlugin(this.editor);
        // this.nodeResizeOptionsView = new NodeResizeOptionsView({
        //     el: $('#nodeResizeOptionsDiv')
        // }).render();
        /* TODO AMENDMENT These will be moved to react
        //Render layout properties view after editor actions manager is created !
        this.layoutPropertiesView = new LayoutProperties({
          el: $('#layoutPropertiesDiv'),
          editorActionsManager: this.editorActionsManager
        }).render();
    
        this.promptConfirmationView = new PromptConfirmationView({
          el: $('#promptConfirmationDiv')
        }).render();
    
        this.gridOptionsView = new GridOptionsView({
          el: $('#gridOptionsDiv')
        }).render();
    
    
    
        this.genomicDataExplorerView = new GenomicDataExplorerView({
          el: $('#genomicDataExplorerDiv'),
          editorActionsManager: this.editor
        }).render();
    
        this.pathwayDetailsView = new PathwayDetailsView({
          el: $('#pathwayDetailsDiv')
        }).render();*/
        //Initialize panzoom
        this.cy.panzoom(panzoomOpts);
        //Node Add initialization
        this.cy.nodeadd({
            //Once the explanationText is cast to uppercase they will be node types
            components: [
                {
                    container: $('#simpleNodeDiv'),
                    nodeType: 'Gene',
                },
                {
                    container: $('#familyNodeDiv'),
                    nodeType: 'Family',
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
                }
            ]
        });
        //Edge Handles initialization
        this.cy.edgehandles(edgeHandleOpts);
        //Navigator for cytoscape js
        var navDefaults = {
            container: '.cytoscape-navigator-wrapper' // can be a HTML or jQuery element or jQuery selector
            ,
            viewLiveFramerate: 0 // set false to update graph pan only on drag end; set 0 to do it instantly; set a number (frames per second) to update not more than N times per second
            ,
            thumbnailEventFramerate: 10 // max thumbnail's updates per second triggered by graph updates
            ,
            thumbnailLiveFramerate: false // max thumbnail's updates per second. Set false to disable
            ,
            dblClickDelay: 200 // milliseconds
            ,
            removeCustomContainer: true // destroy the container specified by user on plugin destroy
            ,
            rerenderDelay: 100 // ms to throttle rerender updates to the panzoom for performance
        };
        //TODO: AMENDMENT declaration removed
        this.cy.navigator(navDefaults); // get navigator instance, nav
        const edgeEditingOptions = {
            // this function specifies the positions of bend points
            bendPositionsFunction: function (ele) {
                return ele.data('bendPointPositions');
            },
            // whether to initilize bend points on creation of this extension automatically
            initBendPointsAutomatically: true,
            // whether the bend editing operations are undoable (requires cytoscape-undo-redo.js)
            undoable: true,
            // the size of bend shape is obtained by multipling width of edge with this parameter
            bendShapeSizeFactor: 6,
            // whether to start the plugin in the enabled state
            enabled: true,
            // title of add bend point menu item (User may need to adjust width of menu items according to length of this option)
            addBendMenuItemTitle: "Add Bend Point",
            // title of remove bend point menu item (User may need to adjust width of menu items according to length of this option)
            removeBendMenuItemTitle: "Remove Bend Point",
            handleReconnectEdge: this.editor.reconnectEdge.bind(this.editor),
        };
        this.edgeEditing = this.cy.edgeEditing(edgeEditingOptions);
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        this.cy.nodeResize({
            padding: 5,
            undoable: true,
            grappleSize: 8,
            grappleColor: "#ffc90e",
            inactiveGrappleStroke: "inside 1px blue",
            boundingRectangle: true,
            boundingRectangleLineDash: [4, 8],
            boundingRectangleLineColor: "ffc90e",
            boundingRectangleLineWidth: 1.5,
            zIndex: 999,
            moveSelectedNodesOnKeyEvents: function () {
                return true;
            },
            minWidth: function (node) {
                var data = node.data("resizeMinWidth");
                return data ? data : 15;
            },
            minHeight: function (node) {
                var data = node.data("resizeMinHeight");
                return data ? data : 15;
            },
            // Getters for some style properties the defaults returns ele.css('property-name')
            // you are encouraged to override these getters
            getCompoundMinWidth: function (node) {
                return node.style('min-width');
            },
            getCompoundMinHeight: function (node) {
                return node.style('min-height');
            },
            getCompoundMinWidthBiasRight: function (node) {
                return node.style('min-width-bias-right');
            },
            getCompoundMinWidthBiasLeft: function (node) {
                return node.style('min-width-bias-left');
            },
            getCompoundMinHeightBiasTop: function (node) {
                return node.style('min-height-bias-top');
            },
            getCompoundMinHeightBiasBottom: function (node) {
                return node.style('min-height-bias-bottom');
            },
            isFixedAspectRatioResizeMode: function (node) {
                return node.is(".fixedAspectRatioResizeMode");
            },
            // @ts-ignore
            isNoResizeMode: function (node) {
                return null;
            },
            // These optional function will be executed to set the width/height of a node in this extension
            // Using node.css() is not a recommended way (http://js.cytoscape.org/#eles.style) to do this. Therefore, overriding these defaults
            // so that a data field or something like that will be used to set node dimentions instead of directly calling node.css()
            // is highly recommended (Of course this will require a proper setting in the stylesheet).
            setWidth: function (node, width) {
                node.style('width', width);
            },
            setHeight: function (node, height) {
                node.style('height', height);
            },
            setCompoundMinWidth: function (node, minWidth) {
                node.style('min-width', minWidth);
            },
            setCompoundMinHeight: function (node, minHeight) {
                node.style('min-height', minHeight);
            },
            setCompoundMinWidthBiasLeft: function (node, minWidthBiasLeft) {
                node.style('min-width-bias-left', minWidthBiasLeft);
            },
            setCompoundMinWidthBiasRight: function (node, minHeightBiasRight) {
                node.style('min-width-bias-right', minHeightBiasRight);
            },
            setCompoundMinHeightBiasTop: function (node, minHeightBiasTop) {
                node.style('min-height-bias-top', minHeightBiasTop);
            },
            setCompoundMinHeightBiasBottom: function (node, minHeightBiasBottom) {
                node.style('min-height-bias-bottom', minHeightBiasBottom);
            },
            cursors: {
                // May take any "cursor" css property
                default: "default",
                inactive: "not-allowed",
                nw: "nw-resize",
                n: "n-resize",
                ne: "ne-resize",
                e: "e-resize",
                se: "se-resize",
                s: "s-resize",
                sw: "sw-resize",
                w: "w-resize"
            },
            resizeToContentCueImage: '/assets/nodes/ResizeCue.svg',
            resizeToContentFunction: this.editor.resizeNodesToContent.bind(this.editor),
        });
        var viewUtilitiesOpts = {
            node: {
                highlighted: {
                    'border-width': 2,
                    'border-color': '#bc1142'
                },
                unhighlighted: {
                    'opacity': function (ele) {
                        // We return the same opacity because to override the unhibhlighted ele opacity in view-utilities
                        return ele.css('opacity');
                    }
                } // styles for when nodes are unhighlighted.}
            },
            edge: {
                highlighted: {},
                unhighlighted: {
                    'opacity': function (ele) {
                        // We return the same opacity because to override the unhibhlighted ele opacity in view-utilities
                        return ele.css('opacity');
                    }
                } // styles for when edges are unhighlighted.
            },
            setVisibilityOnHide: false,
            setDisplayOnHide: true,
            neighbor: () => {
                return false;
            },
            neighborSelectTime: 500 //ms, time to taphold to select desired neighbors
        };
        this.viewUtilities = this.cy.viewUtilities(viewUtilitiesOpts);
        this.placePanzoomAndOverlay();
    }
    ;
    initCyHandlers() {
        var that = this;
        var tappedBefore;
        var tappedTimeout;
        this.cy.on('tap', function (event) {
            var tappedNow = event.target;
            if (tappedTimeout != -1 && tappedBefore != -1) {
                clearTimeout(tappedTimeout);
            }
            if (tappedBefore === tappedNow) {
                tappedNow.trigger('doubleTap');
                tappedBefore = -1;
            }
            else {
                // @ts-ignore TODO AMENDMENT
                tappedTimeout = setTimeout(function () {
                    tappedBefore = -1;
                }, 300);
                tappedBefore = tappedNow;
            }
        });
        this.cy.on('doubleTap', 'node', function (e) {
            // TODO: this.cy
            // @ts-ignore
            var eventIsDirect = (e.target === this);
            if (eventIsDirect) {
                //Remove qtips
                $(".qtip").remove();
                that.qtipManager.addQtipToElements(e.target);
                // @ts-ignore
                var api = this.cy.qtip('api');
                if (api) {
                    api.show();
                }
            }
        });
        this.cy.on('doubleTap', 'edge', function (e) {
            // @ts-ignore
            var eventIsDirect = (e.target === this);
            if (eventIsDirect) {
                $(".qtip").remove();
                that.qtipManager.addQtipToElements(e.target);
                // var api = this.qtip('api');
                // if (api) {
                //     api.show();
                // }
            }
        });
        this.cy.on('select', 'node', (e) => {
            this.editor.pushSelectedNodeStack(e.target);
        });
        // this.cy.on('select', 'edge', function( e )
        // {
        //   var eventIsDirect = (e.target === this);
        //   $(".qtip").remove();
        //
        //   if( eventIsDirect ) {
        //       that.qtipManager.addQtipToElements(e.target);
        //   }
        // });
        this.cy.on('unselect', 'node', (e) => {
            this.editor.removeElementFromSelectedNodeStack(e.target);
        });
        this.cy.on('free', 'node', (e) => {
            //Collect all nodes with descendants in case of compounds
            var selectedNodes = this.cy.nodes(':selected');
            var nodes = e.target;
            nodes = nodes.union(nodes.descendants());
            nodes = nodes.union(selectedNodes);
            this.editor.moveElements(nodes);
        });
        this.cy.on('layoutstop', () => {
            this.editor.postLayout();
        });
        // //TODO fix this when cytoscape is updated !!!
        // //Due to cytoscape.js bug, only workaround that worked :(
        // this.cy.on('add', 'node', function(event)
        // {
        //     // event.target.select();
        //     this.cy.style().update();
        //     this.cy.forceRender();
        // });
        this.cy.on("noderesize.resizeend", (_e, _type, node) => {
            //Updates 'data' properties from 'style'
            node.data('w', node.width());
            node.data('h', node.height());
            //Used for collaborative mode
            this.editor.resizeElements(node);
        });
        this.cy.on('bendPointMovement', () => {
            this.editor.updateEdgeBendPoints(this.cy.elements(":selected").first());
        });
        this.cy.on('noderesize.moveend', () => {
            this.editor.changeNodePositionsByArrows(this.cy.nodes(":selected"));
        });
    }
    ;
    initKeyboardHandlers() {
        if (!this.isCollaborative && !this.isCbioPortal) {
            $(document).keydown((e) => {
                if (e.which === 89 && (e.ctrlKey || e.metaKey)) {
                    this.undoRedoManager.redo();
                }
                else if (e.which === 90 && (e.ctrlKey || e.metaKey)) {
                    this.undoRedoManager.undo();
                }
            });
        }
        else {
            $('a[role="redo"]').hide();
            $('a[role="undo"]').hide();
        }
        $(document).keydown((e) => {
            if (e.which === 65 && (e.ctrlKey || e.metaKey)) {
                // @ts-ignore
                var tn = document.activeElement.tagName;
                if (tn != "TEXTAREA" && tn != "INPUT") {
                    e.preventDefault();
                    this.cy.elements().select();
                }
            }
            else if (e.which === 8 || e.which === 46) {
                // @ts-ignore
                var tn = document.activeElement.tagName;
                if (tn != "TEXTAREA" && tn != "INPUT") {
                    var selectedElements = this.cy.$(':selected');
                    this.editor.removeElement(selectedElements);
                }
            }
        });
    }
    ;
    initUndoRedoFunctionality() {
        if (this.isCollaborative || this.isCbioPortal) {
            $('[role="undo"]').hide();
            $('[role="redo"]').hide();
            /* TODO: AMENDMENT
            document.getElementById("localOrCollaborativeToolbar").style.display = "none";
            */
        }
    }
    ;
    initCBioPortalFunctionalities() {
        if (this.isCbioPortal) {
            const contextMenu = this.cy.contextMenus('get');
            //Destroy context menu
            contextMenu.destroy();
            //Hide toolbar, sidebar, navbar
            /* TODO: AMENDMENT
            document.getElementById("pathway-toolbar").style.display = "none";
            document.getElementById("pathway-sidebar").style.display = "none";
            document.getElementById("pathway-navbar").style.display = "none";
            document.getElementById("cBioPortal-Wrapper").style.display = "inline-block";
            document.getElementById("about-model-header").innerHTML = "PathwayMapper Viewer 2.0";*/
        }
    }
    ;
};
__decorate([
    autobind
], PathwayMapper.prototype, "cyDivHandler", null);
PathwayMapper = __decorate([
    observer
], PathwayMapper);
export default PathwayMapper;
//# sourceMappingURL=PathwayMapper.js.map