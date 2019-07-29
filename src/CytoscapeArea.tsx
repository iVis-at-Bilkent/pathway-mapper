import React from 'react';
import cytoscape from 'cytoscape';
import $ from "jquery";
// @ts-ignore
window.$ = $;
import autobind from "autobind-decorator";
import {observer} from "mobx-react";
import ViewOperationsManager from "./ViewOperationsManager";
import EditorActionsManager from "./EditorActionsManager";
import DragDropNodeAddPlugin from "./DragDropNodeAddPlugin";
import ContextMenuManager from "./ContextMenuManager";
import QtipManager from "./QtipManager";
import ShareDBManager from "./ShareDBManager";
import CBioPortalAccessor from "./CBioPortalAccessor";
import SaveLoadUtility from "./SaveLoadUtility";
import pathways from "./pathways.json";
import {action, computed} from "mobx";
// @ts-ignore
import resizeCue from './resizeCue.svg';
// @ts-ignore
import geneImg from "./nodes/gene.svg";
// @ts-ignore
import familyImg from "./nodes/family.svg";
// @ts-ignore
import complexImg from "./nodes/complex.svg";
// @ts-ignore
import compartmentImg from "./nodes/compartment.svg";
// @ts-ignore
import processImg from "./nodes/process.svg";
import { IProfileMetaData, IPathwayData, EModalType } from './react-pathway-mapper';

const edgeHandles = require('cytoscape-edgehandles');
const edgeEditing = require('cytoscape-edge-editing');
const regCose = require('cytoscape-cose-bilkent');
const nodeResize = require('cytoscape-node-resize');
const undoRedo = require('cytoscape-undo-redo');
const panzoom = require('cytoscape-panzoom');
const styleSheet = require('./GraphStyleSheet.tsx');
const panzoomOpts = require('./PanzoomOptions.tsx');
const navigator = require('cytoscape-navigator');
const contextMenus = require('cytoscape-context-menus');
const konva = require('konva');
const viewUtilities = require('cytoscape-view-utilities');
const grid_guide = require('cytoscape-grid-guide');
const cyqtip = require('cytoscape-qtip');

type PathwayMapperType = {
  isCollaborative: boolean;
  isCbioPortal: boolean;
  editorHandler: Function;
  selectedPathway: string;
  setActiveEdge: Function;
  profiles: IProfileMetaData[];
  pathwayHandler: (pathwayName: string) => void;
  handleOpen: (modalId: EModalType) => void;
};
@observer
export default class CytoscapeArea extends React.Component<PathwayMapperType, {}>{
  private cy:any;
  private cyDiv: HTMLDivElement | undefined;
  private editor: EditorActionsManager;
  private edgeAddingMode: any;
  private viewOperationsManager: ViewOperationsManager;
  private qtipManager: QtipManager;
  private genomicDataExplorerView: any;
  private pathwayDetailsView: any;
  private viewUtilities: any;
  private isCollaborative: boolean;
  private isCbioPortal: boolean;
  private shareDBManager: ShareDBManager;
  private cxtMenuManager: ContextMenuManager;
  private dragDropNodeAddManager: DragDropNodeAddPlugin;
  private undoRedoManager: any;
  private portalAccessor: CBioPortalAccessor;
  private isMountedFirst = true;
  private eh: any;


  constructor (props: PathwayMapperType) {
    super(props);
    this.isCollaborative = props.isCollaborative;
    this.edgeAddingMode = 0;
    this.isCbioPortal = props.isCbioPortal;
    // this.init();
    // this.createSampleMenu(); //TODO: AMENDMENT Menu must be react.
    // this.createCBioPortalAccessModal();
  }


  componentWillUpdate(nextProps: PathwayMapperType) {
    console.log("Component will update", nextProps.selectedPathway);
    this.getPathway(nextProps.selectedPathway);
  }

  // This method only opens pathways that are available in pathway.json. Namely, imported or merged pathways are not opened via this method.
  // Yet, they individually call parsing method.
  getPathway(selectedPathway: string){

    if(!selectedPathway || selectedPathway === '') return;

    const data = pathways[selectedPathway];

    // It might be non-existent due to pathway being created using collaborative mode, or pathway loaded elsewhere (import vs.)
    if(!data){ 
      return;
    }
    // TODO Problematic const data = pathways["../samples/BLCA-2014-RTK-RAS-PI(3)K-pathway.txt"];

    const parsedGraph = SaveLoadUtility.parseGraph(data, true);


    const allEles = parsedGraph;
    this.editor.loadFile(allEles.nodes, allEles.edges);
  }

  render(){
      return (<div>
        <div ref={this.cyDivHandler} id="cy" 
        style={{"border": `3px solid ${this.isCbioPortal ? "#4389c0" : "#1abc9c"}`, 
        "height": "800px", "borderRadius": "6px", marginTop: "0px"}}/>
        <div className="cytoscape-navigator-wrapper"></div>
      </div>);
  }

  componentDidMount(): void {
    if(this.isMountedFirst){
      this.init();
      this.isMountedFirst = false;
    }
    this.getPathway(this.props.selectedPathway);
  }

  @autobind
  cyDivHandler(div:HTMLDivElement){
      this.cyDiv = div;
  }

  init(){

    // Create portal accessor
    this.portalAccessor = new CBioPortalAccessor();

    // Initializes cytoscape
    this.initCyJS();
    // Initialize cytoscape based handlers here
    this.initCyHandlers();
    this.initKeyboardHandlers();
    this.initUndoRedoFunctionality();
    this.initCBioPortalFunctionalities();
    this.placePanzoomAndOverlay();

    //this.appManager = this;
  }

  placePanzoomAndOverlay(){
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
    var widthCy = ((!this.isCbioPortal ? window.innerWidth * 0.81 :($(this.cyDiv).outerWidth())));
    var heightNavigator = $('.cytoscape-navigator-wrapper').outerHeight();
    var widthNavigator = $('.cytoscape-navigator-wrapper').outerWidth();
    var heightPatwayNavbar = $('.pathway-navbar').outerHeight();
    var heightPathwayToolbar = $('.pathway-toolbar').outerHeight();
    var widthSideBar = $('.sideBarWrapper').outerWidth();
    var widthcBioPortalSideBar = $('.cBioPortal-sidebar').outerWidth();


    //var heightPanzoom = $('.cy-panzoom').outerHeight();
    //var widthPanzoom = $('.cy-panzoom').outerWidth();

    if(!this.isCbioPortal) {
      $('.cytoscape-navigator-wrapper').css('top', heightCy + topCy - 330);
      $('.cytoscape-navigator-wrapper').css('right', 22);
      //$('.cytoscape-navigator-wrapper').css('left', widthCy + leftCy - widthNavigator - offset);
    }
    else {
      $('.cytoscape-navigator-wrapper').css('top', heightCy + topCy - 428);
      $('.cytoscape-navigator-wrapper').css('right', 20);
      //$('.cytoscape-navigator-wrapper').css('left', widthCy + leftCy - widthNavigator + widthcBioPortalSideBar + offset - widthSideBar);
    }

    //Relative is used so that its position depends on the below properties
    $('.cy-panzoom').css('position', 'relative');
    $('.cy-panzoom').css('top', 2);
    $('.cy-panzoom').css('left', widthCy - 57);
    $('.cy-panzoom').css('z-index', 1039);
    //Makes the width of panzoom container to 0
    $('.cy-panzoom').css('width', 200);
  }

  getPathwayData() {
    return this.pathwayDetailsView.getPathwayData();
  }

  initCyJS() {
    try{
      panzoom(cytoscape, $);  // register extension
    } catch(err){
      console.log(err);
    }
    // cxtmenu( cytoscape, $ ); // register extension
    try { 
      regCose(cytoscape); // register extension
    } catch(err){
      console.log(err);
    }
    try { 
      navigator(cytoscape); // register extension
    } catch(err){
      console.log(err);
    }
    try { 
      grid_guide(cytoscape, $); // register extension
    } catch(err){
      console.log(err);
    }
    try { 
      undoRedo(cytoscape); // register extension
    } catch(err){
      console.log(err);
    }
    try { 
      contextMenus(cytoscape, $); // register extension
    } catch(err){
      console.log(err);
    }
    try { 
      nodeResize(cytoscape, $, konva); // register extension
    } catch(err){
      console.log(err);
    }
    try { 
      edgeEditing(cytoscape, $); // register extension
    } catch(err){
      console.log(err);
    }
    try { 
      viewUtilities(cytoscape, $); // register extension
    } catch(err){
      console.log(err);
    }
    try { 
      cyqtip(cytoscape, $); // register extension
    } catch(err){
      console.log(err);
    }
    try { 
      edgeHandles(cytoscape, $);
    } catch(err){
      console.log(err);
    }

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

    

    this.undoRedoManager = this.cy.undoRedo();
    console.log("undoRedoManager" + this.undoRedoManager);
    // Create Manager Classes
    this.shareDBManager = new ShareDBManager(() => {
      const dbDoc = this.shareDBManager.getDoc();
    });
    this.editor = new EditorActionsManager(this.isCollaborative,
                                           this.shareDBManager,
                                           this.cy,
                                           this.isCbioPortal,
                                           this.undoRedoManager,
                                           this.portalAccessor,
                                           this.props.profiles);
    this.shareDBManager.setEditor(this.editor);
    if(this.isCollaborative){
      this.shareDBManager.initShareDB();
    }
    //@ts-ignore
    window.editorActionsManager = this.editor;


    this.qtipManager = new QtipManager(this.cy, this.editor);
    this.cxtMenuManager = new ContextMenuManager(this.cy, this.editor, this.isCbioPortal,
                                                 this.props.handleOpen, this.undoRedoManager, this.props.isCollaborative);
    this.dragDropNodeAddManager = new DragDropNodeAddPlugin(this.editor, this.cy, this.props.pathwayHandler);

    // Initialize panzoom
    this.cy.panzoom(panzoomOpts);

    // Node Add initialization
    this.cy.nodeadd(
      {
        // Once the explanationText is cast to uppercase they will be node types
        components:
          [
            {
              container: $('#simpleNodeDiv'),
              nodeType: 'Gene',
              icon: geneImg
            },
            {
              container: $('#familyNodeDiv'),
              nodeType: 'Family',
              icon: familyImg
            },
            {
              container: $('#complexNodeDiv'),
              nodeType: 'Complex',
              icon: complexImg
            },
            {
              container: $('#compartmentNodeDiv'),
              nodeType: 'Compartment',
              icon: compartmentImg
            },
            {
              container: $('#processNodeDiv'),
              nodeType: 'Process',
              icon: processImg
            }
          ]

      });
    const self = this;
    const edgeHandleDefaults ={
        preview: true, // whether to show added edges preview before releasing selection
        stackOrder: 4, // Controls stack order of edgehandles canvas element by setting it's z-index
        handleSize: 10, // the size of the edge handle put on nodes
        handleColor: '#1abc9c', // the colour of the handle and the line drawn from it
        handleLineType: 'ghost', // can be 'ghost' for real edge, 'straight' for a straight line, or 'draw' for a draw-as-you-go line
        handleLineWidth: 1, // width of handle line in pixels
        handleNodes: 'node', // selector/filter function for whether edges can be made from a given node
        hoverDelay: 1, // time spend over a target node before it is considered a target selection
        cxt: false, // whether cxt events trigger edgehandles (useful on touch)
        enabled: false, // whether to start the extension in the enabled state
        toggleOffOnLeave: true, // whether an edge is cancelled by leaving a node (true), or whether you need to go over again to cancel (false; allows multiple edges in one pass)
        edgeType: function( sourceNode, targetNode ) {
          // can return 'flat' for flat edges between nodes or 'node' for intermediate node between them
          // returning null/undefined means an edge can't be added between the two nodes
          return 'flat';
        },
        handlePosition: function( node ){
          return 'middle top'; // sets the position of the handle in the format of "X-AXIS Y-AXIS" such as "left top", "middle top"
        },
        loopAllowed: function( node ) {
          // for the specified node, return whether edges from itself to itself are allowed
          return false;
        },
        nodeLoopOffset: -50, // offset for edgeType: 'node' loops
        nodeParams: function( sourceNode, targetNode ) {
          // for edges between the specified source and target
          // return element object to be passed to cy.add() for intermediary node
          return {};
        },
        edgeParams: function( sourceNode, targetNode, i ) {
          // for edges between the specified source and target
          // return element object to be passed to cy.add() for edge
          // NB: i indicates edge index in case of edgeType: 'node'
          return {};
        },
        start: function( sourceNode )
        {
          console.log("Inside start");
          // fired when edgehandles interaction starts (drag on handle)
          var type = self.getGlobalEdgeType();
          console.log("Type");
          console.log(type);
          //self.cy.edgehandles('option', 'ghostEdgeType', type);
        },
        complete: function( sourceNode, targetNodes, addedEntities )
        {
            // @ts-ignore
            console.log(window.edgeAddingMode);
            //  // Remove recently added edge !
            //  // FBI takes this case from now on :O
            //  // We will take care of addition in our manager :)
            self.cy.remove(addedEntities);
            console.log(addedEntities);
            self.editor.addEdge({
              source: sourceNode.id(),
              target: targetNodes[0].id(),
              // @ts-ignore
              type: self.getGlobalEdgeType(window.edgeAddingMode),
              pubmedIDs: [],
              name: ""
            });
        },
        stop: function( sourceNode )
        {
          // fired when edgehandles interaction is stopped (either complete with added edges or incomplete)
          //TODO refactor this, so terrible for now
          //$('.edge-palette a').blur().removeClass('active');
          self.edgeAddingMode = -1;
          self.eh.disable();
          self.eh.hide();
          self.props.setActiveEdge(-1);
        },
      };
    //Edge Handles initialization

    console.log("Edge Handles inside Cytoscape ARea");
    this.eh = this.cy.edgehandles(edgeHandleDefaults);
    this.eh.disable();
    this.props.editorHandler(this.editor, this.eh, this.undoRedoManager);

    if(!this.isCbioPortal)
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
      zIndex: 1,

      moveSelectedNodesOnKeyEvents: function () {
          return true;
      },

      minWidth: function (node) {
          var data = node.data("resizeMinWidth");
          return data ? data : 15;
      }, // a function returns min width of node
      minHeight: function (node) {
          var data = node.data("resizeMinHeight");
          return data ? data : 15;
      }, // a function returns min height of node

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
          return node.is(".fixedAspectRatioResizeMode")
      },// with only 4 active grapples (at corners)
      isNoResizeMode: function (node) {
          return undefined;
      }, // no active grapples

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

      resizeToContentCueImage: resizeCue,

      resizeToContentFunction: this.editor.resizeNodesToContent.bind(this.editor),

  });

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

    //TODO: AMENDMENT declaration removed
    this.cy.navigator(navDefaults); // get navigator instance, nav

    const viewUtilitiesOpts = {
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
      neighbor: () => { // return desired neighbors of tapheld node
        return false;
      },
      neighborSelectTime: 500 //ms, time to taphold to select desired neighbors
    };

    this.viewUtilities = this.cy.viewUtilities(viewUtilitiesOpts);

    this.placePanzoomAndOverlay();
  }

  getGlobalEdgeType()
  {
    var type = "NONE";
    // @ts-ignore
    if (window.edgeAddingMode === 1)
    {
      type = 'ACTIVATES';
    }
    // @ts-ignore
    else if (window.edgeAddingMode === 2)
    {
      type = 'INHIBITS';
    }
    // @ts-ignore
    else if (window.edgeAddingMode === 3)
    {
      type = 'INDUCES';
    }
    // @ts-ignore
    else if (window.edgeAddingMode === 4)
    {
      type = 'REPRESSES';
    }
    // @ts-ignore
    else if (window.edgeAddingMode === 5)
    {
      type = 'BINDS';
    }
    return type;
  }

  initCyHandlers(){
    var that = this;

    var tappedBefore: number;
    var tappedTimeout: number;
    this.cy.on('tap', function (event: any) {
      var tappedNow = event.target;
      if (tappedTimeout !== -1 && tappedBefore !== -1) {
        clearTimeout(tappedTimeout);
      }
      if (tappedBefore === tappedNow) {
        tappedNow.trigger('doubleTap');
        tappedBefore = -1;
      } else {
        // @ts-ignore TODO AMENDMENTsa
        tappedTimeout = setTimeout(function () {
          tappedBefore = -1;
        },                         300);
        tappedBefore = tappedNow;
      }
    });

    this.cy.on('doubleTap', 'node',  function (e: any) {

      // if cBioPortal ignore
      if(that.props.isCbioPortal) return;

      const eventIsDirect = (e.target === this);

      if (eventIsDirect) {
        //Remove qtips
        $(".qtip").remove();
        that.qtipManager.addQtipToElements(e.target);
        var api = this.qtip('api');
        if (api) {
            api.show();
        }
      }
    });

    this.cy.on('doubleTap', 'edge', function (e: any) {

      // if cBioPortal ignore
      if(that.props.isCbioPortal) return;
      
      const eventIsDirect = (e.target === this);

      if (eventIsDirect) {
          $(".qtip").remove();
          that.qtipManager.addQtipToElements(e.target);
          // var api = this.qtip('api');
          // if (api) {
          //     api.show();
          // }
      }
    });

    this.cy.on('select', 'node', (e: any) => {
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

    this.cy.on('unselect', 'node', (e: any) => {
      this.editor.removeElementFromSelectedNodeStack(e.target);
    });

    this.cy.on('free', 'node', (e: any) => {
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

    this.cy.on("noderesize.resizeend", (_e: any, _type: any, node: any) => {
      
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

  initKeyboardHandlers() {
    if (!this.isCollaborative && !this.isCbioPortal) {
      $(document).keydown((e: any) => {
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
    $(document).keydown((e: any) => {
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

  initUndoRedoFunctionality() {
    if (this.isCollaborative || this.isCbioPortal) {
      $('[role="undo"]').hide();
      $('[role="redo"]').hide();
      /* TODO: AMENDMENT
      document.getElementById("localOrCollaborativeToolbar").style.display = "none";
      */
    }
  }


  initCBioPortalFunctionalities() {
    if (this.isCbioPortal) {
      const contextMenu = this.cy.contextMenus('get');

      contextMenu.destroy();
    }
  }


}