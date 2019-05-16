import React from 'react'
import cytoscape from 'cytoscape';
import autobind from "autobind-decorator";
import {observer} from "mobx-react";
import {observable} from "mobx";
import Timeout = NodeJS.Timeout;
import EditorActionsManager from "./EditorActionsManager";
import $ from "jquery"
@observer
export default class PathwayMapper extends React.Component{
    private cy:any;
    private cyDiv: HTMLDivElement | undefined;
    private editor: EditorActionsManager;
    private edgeAddingMode: any;
    private viewOperationsManager: ViewOperationsManager;
    private gridOptionsManager: GridOptionsManager;
    private fileOperationsManager: FileOperationsManager;
    private qtipManager: QtipManager;
    private genomicDataExplorerView: any;
    private pathwayDetailsView: any;
    private edgeEditing: any;
    private viewUtilities: any;
    constructor(props: any){
        super(props);
        this.edgeAddingMode = 0;
        this.editor = new EditorActionsManager(false, null, this.cy, true, this.edgeEditing);
    }

    render(){
        return <div ref={this.cyDivHandler} id="cy"></div>;
    }

    componentDidMount(): void {
        this.initCyJS();
    }



    initCyJS() {
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
            layout: {name: 'preset'}
        });

        //Create Manager Classes
        this.viewOperationsManager = new ViewOperationsManager();
        this.fileOperationsManager = new FileOperationsManager();


        this.qtipManager = new QtipManager(this.cy);


        // this.nodeResizeOptionsView = new NodeResizeOptionsView({
        //     el: $('#nodeResizeOptionsDiv')
        // }).render();

        this.genomicDataExplorerView = new GenomicDataExplorerView({
            el: $('#genomicDataExplorerDiv'),
            editorActionsManager: this.editor
        }).render();

        this.pathwayDetailsView = new PathwayDetailsView({
            el: $('#pathwayDetailsDiv')
        }).render();

        //Initialize panzoom
        this.cy.panzoom(panzoomOpts);

        //Node Add initialization
        this.cy.nodeadd(
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
        this.cy.edgehandles(edgeHandleOpts);

        var edgeEditingOptions = {
            // this function specifies the positions of bend points
            bendPositionsFunction: function (ele: any) {
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

        this.cy.nodeResize({
            padding: 5, // spacing between node and grapples/rectangle
            undoable: true, // and if cy.undoRedo exists

            grappleSize: 8, // size of square dots
            grappleColor: "#ffc90e", // color of grapples
            inactiveGrappleStroke: "inside 1px blue",
            boundingRectangle: true, // enable/disable bounding rectangle
            boundingRectangleLineDash: [4, 8], // line dash of bounding rectangle
            boundingRectangleLineColor: "ffc90e",
            boundingRectangleLineWidth: 1.5,
            zIndex: 999,

            moveSelectedNodesOnKeyEvents: function () {
                return true;
            },

            minWidth: function (node: any) {
                var data = node.data("resizeMinWidth");
                return data ? data : 15;
            }, // a function returns min width of node
            minHeight: function (node: any) {
                var data = node.data("resizeMinHeight");
                return data ? data : 15;
            }, // a function returns min height of node

            // Getters for some style properties the defaults returns ele.css('property-name')
            // you are encouraged to override these getters
            getCompoundMinWidth: function (node: any) {
                return node.style('min-width');
            },
            getCompoundMinHeight: function (node: any) {
                return node.style('min-height');
            },
            getCompoundMinWidthBiasRight: function (node: any) {
                return node.style('min-width-bias-right');
            },
            getCompoundMinWidthBiasLeft: function (node: any) {
                return node.style('min-width-bias-left');
            },
            getCompoundMinHeightBiasTop: function (node: any) {
                return node.style('min-height-bias-top');
            },
            getCompoundMinHeightBiasBottom: function (node: any) {
                return node.style('min-height-bias-bottom');
            },


            isFixedAspectRatioResizeMode: function (node: any) {
                return node.is(".fixedAspectRatioResizeMode")
            },// with only 4 active grapples (at corners)
            isNoResizeMode: function (node: any) {
                return undefined;
            }, // no active grapples

            // These optional function will be executed to set the width/height of a node in this extension
            // Using node.css() is not a recommended way (http://js.cytoscape.org/#eles.style) to do this. Therefore, overriding these defaults
            // so that a data field or something like that will be used to set node dimentions instead of directly calling node.css()
            // is highly recommended (Of course this will require a proper setting in the stylesheet).
            setWidth: function (node: any, width: number) {
                node.style('width', width);
            },
            setHeight: function (node: any, height: number) {
                node.style('height', height);
            },
            setCompoundMinWidth: function (node: any, minWidth: number) {
                node.style('min-width', minWidth);
            },
            setCompoundMinHeight: function (node: any, minHeight: number) {
                node.style('min-height', minHeight);
            },
            setCompoundMinWidthBiasLeft: function (node: any, minWidthBiasLeft: number) {
                node.style('min-width-bias-left', minWidthBiasLeft);
            },
            setCompoundMinWidthBiasRight: function (node: any, minHeightBiasRight: number) {
                node.style('min-width-bias-right', minHeightBiasRight);
            },
            setCompoundMinHeightBiasTop: function (node: any, minHeightBiasTop: number) {
                node.style('min-height-bias-top', minHeightBiasTop);
            },
            setCompoundMinHeightBiasBottom: function (node: any, minHeightBiasBottom: number) {
                node.style('min-height-bias-bottom', minHeightBiasBottom);
            },

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
            },

            resizeToContentCueImage: '/assets/nodes/ResizeCue.svg',

            resizeToContentFunction: this.editor.resizeNodesToContent.bind(this.editor),

        });

        let viewUtilitiesOpts = {
            node: {
                highlighted: {
                    'border-width': 2,
                    'border-color': '#bc1142'
                }, // styles for when nodes are highlighted.
                unhighlighted: {
                    'opacity': function (ele: any) {
                        // We return the same opacity because to override the unhibhlighted ele opacity in view-utilities
                        return ele.css('opacity');
                    }
                }// styles for when nodes are unhighlighted.}
            },
            edge: {
                highlighted: {}, // styles for when edges are highlighted.
                unhighlighted: {
                    'opacity': function (ele: any) {
                        // We return the same opacity because to override the unhibhlighted ele opacity in view-utilities
                        return ele.css('opacity');
                    }
                } // styles for when edges are unhighlighted.
            },
            setVisibilityOnHide: false, // whether to set visibility on hide/show
            setDisplayOnHide: true, // whether to set display on hide/show
            neighbor: function (node: any) { // return desired neighbors of tapheld node
                return false;
            },
            neighborSelectTime: 500 //ms, time to taphold to select desired neighbors
        }

        this.viewUtilities = this.cy.viewUtilities(viewUtilitiesOpts);

        //this.placePanzoomAndOverlay();
    };

    @autobind
    private initCyHandlers(){
        /*
        var that = this;

        var tappedBefore: Timeout;
        var tappedTimeout: Timeout;
        this.cy.on('tap', function (event: any) {
            var tappedNow = event.target;
            if (tappedTimeout && tappedBefore) {
                clearTimeout(tappedTimeout);
            }
            if (tappedBefore === tappedNow) {
                tappedNow.trigger('doubleTap');
                tappedBefore = new Timeout();
            } else {
                tappedTimeout = setTimeout(function () {
                    tappedBefore = new Timeout();
                }, 300);
                tappedBefore = tappedNow;
            }
        });

        this.cy.on('select', 'node', function (e: any) {
            editorActionsManager.pushSelectedNodeStack(e.target);
        });

        cy.on('select', 'edge', function( e )
        {
          var eventIsDirect = (e.target === this);
          $(".qtip").remove();

          if( eventIsDirect ) {
              that.qtipManager.addQtipToElements(e.target);
          }
        });

        this.cy.on('unselect', 'node', function (e) {
            editorActionsManager.removeElementFromSelectedNodeStack(e.target);
        });

        this.cy.on('free', 'node', function (e) {
            //Collect all nodes with descendants in case of compounds
            var selectedNodes = cy.nodes(':selected');
            var nodes = e.target;
            nodes = nodes.union(nodes.descendants());
            nodes = nodes.union(selectedNodes);
            that.editorActionsManager.moveElements(nodes);
        });

        this.cy.on('layoutstop', function (event) {
            that.editorActionsManager.postLayout();
        });

        //TODO fix this when cytoscape is updated !!!
        //Due to cytoscape.js bug, only workaround that worked :(
        cy.on('add', 'node', function(event)
        {
            // event.target.select();
            cy.style().update();
            cy.forceRender();
        });*/

    }

    @autobind
    private cyDivHandler(div:HTMLDivElement){
        this.cyDiv = div;
    }
}
