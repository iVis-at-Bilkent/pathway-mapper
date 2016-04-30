//Import node modules here !
var $ = window.$ = window.jQuery = require('jquery');
var _ = window._ = require('underscore');
var Backbone = window.Backbone = require('backbone');
Backbone.$ = $;
require('bootstrap');

//Cytoscape related requires !
var cytoscape =  window.cytoscape = require('cytoscape');
var panzoom = require('cytoscape-panzoom');
var cxtmenu = require('cytoscape-cxtmenu');
var edgehandles = require('cytoscape-edgehandles');

//Panzoom options
panzoomOpts = require('./panzoomUtils.js');
styleSheet = require('./stylesheet.js');

var edgeAddingMode = false;

// the default values of each option are outlined below:
var edgeHandleDefaults =
{
  preview: true, // whether to show added edges preview before releasing selection
  stackOrder: 4, // Controls stack order of edgehandles canvas element by setting it's z-index
  handleSize: 10, // the size of the edge handle put on nodes
  handleColor: '#f99b70', // the colour of the handle and the line drawn from it
  handleLineType: 'ghost', // can be 'ghost' for real edge, 'straight' for a straight line, or 'draw' for a draw-as-you-go line
  handleLineWidth: 1, // width of handle line in pixels
  handleNodes: 'node', // selector/filter function for whether edges can be made from a given node
  hoverDelay: 150, // time spend over a target node before it is considered a target selection
  cxt: false, // whether cxt events trigger edgehandles (useful on touch)
  enabled: false, // whether to start the extension in the enabled state
  toggleOffOnLeave: false, // whether an edge is cancelled by leaving a node (true), or whether you need to go over again to cancel (false; allows multiple edges in one pass)
  edgeType: function( sourceNode, targetNode ) {
    // can return 'flat' for flat edges between nodes or 'node' for intermediate node between them
    // returning null/undefined means an edge can't be added between the two nodes
    return 'flat';
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
  start: function( sourceNode ) {
    // fired when edgehandles interaction starts (drag on handle)
  },
  complete: function( sourceNode, targetNodes, addedEntities ) {
    // fired when edgehandles is done and entities are added
  },
  stop: function( sourceNode ) {
    // fired when edgehandles interaction is stopped (either complete with added edges or incomplete)
  }
};

var cy;
//Wait all components to load
$(window).load(function()
{

    panzoom( cytoscape, $ );  // register extension
    cxtmenu( cytoscape, $ ); // register extension
    edgehandles( cytoscape, $ ); // register extension


    cy = window.cy = cytoscape(
    {
      container: document.querySelector('#cy'),

      boxSelectionEnabled: true,
      autounselectify: false,

      style: styleSheet,

      elements: {
        nodes: [
          { data: { id: 'j', name: 'Jerry' } },
          { data: { id: 'e', name: 'Elaine' } },
          { data: { id: 'k', name: 'Kramer' } },
          { data: { id: 'g', name: 'George' } }
        ],
        edges: [
          { data: { source: 'j', target: 'e' } },
          { data: { source: 'j', target: 'k' } },
          { data: { source: 'j', target: 'g' } },
          { data: { source: 'e', target: 'j' } },
          { data: { source: 'e', target: 'k' } },
          { data: { source: 'k', target: 'j' } },
          { data: { source: 'k', target: 'e' } },
          { data: { source: 'k', target: 'g' } },
          { data: { source: 'g', target: 'j' } }
        ]
      },

      layout: {
        name: 'cose',
        padding: 50
      }
    });

    cy.panzoom( panzoomOpts );
    cy.nodeadd( {container: $('#simpleNodeDiv'), explanationText: 'Simple Node', icon: 'fa fa-circle-o'} );
    // cy.nodeadd( {container: $('#compoundNodeDiv'), explanationText: 'Compound Node', icon: 'fa fa-square-o'} );
    cy.edgehandles( edgeHandleDefaults );


    cy.cxtmenu({
      selector: 'core',
      commands: [
        {
          content: '<span class="fa fa-flash fa"></span>perform layout',
          select: function(ele)
          {
            cy.layout({name:'cose', padding: 50});
          }
        },
        {
          content: '<span class="fa fa-star"></span> Toggle Edge Addition Mode',
          select: function(ele)
          {
            edgeAddingMode = !edgeAddingMode;
            var flag = edgeAddingMode ? 'enable' : 'disable';
            cy.edgehandles(flag);
          }
        }
      ]
    });

    cy.cxtmenu({
      selector: 'node',
      commands: [
        {
          content: '<span class="fa fa-flash fa"></span>delete node(s)',
          select: function(ele)
          {
            cy.nodes(':selected').remove();
            ele.remove();
          }
        },
        {
          content: '<span class="fa fa-star"></span> create compound',
          select: function(ele)
          {
            var selectedNodes = cy.nodes(':selected').size() > 0 ? cy.$(':selected') : ele;
            var compNode = cy.add({group: "nodes"})[0];
            var compId = compNode.id();
            selectedNodes.move({parent: compId});
          }
        }
      ]
    });

    cy.cxtmenu({
      selector: 'edge',
      commands: [
        {
          content: '<span class="fa fa-flash fa"></span>delete edge(s)',
          select: function(ele)
          {
            cy.edges(':selected').remove();
            ele.remove();
          }
        }
      ]
    });

    cy.on('tap', 'node', function(e){
      // var node = e.cyTarget;
      // var neighborhood = node.neighborhood().add(node);
      //
      // cy.elements().addClass('faded');
      // neighborhood.removeClass('faded');

    });

    cy.on('tap', function(e){
      if( e.cyTarget === cy ){
        cy.elements().removeClass('faded');
      }
    });
});

$('#saveGraphBtn').on('click', function(evt)
{
  var blob = new Blob([JSON.stringify(cy.json())], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "grahp.json");
});

$('#loadGraphBtn').on('click', function(evt)
{
  $('#fileinput').trigger('click');
});

//TODO server side integration needed because of CORS
$('#fileinput').on('change', function()
{
  var file = this.files[0];
  // // Create a new FormData object.
  // var formData = new FormData();
  // formData.append('graphFile', file);
  // var request = new XMLHttpRequest();
  // request.onreadystatechange = function ()
  // {
  //   if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
  //     console.log(request.responseText);
  // };
  // request.open("POST", "/loadGraph");
  // request.send(formData);

  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    cy.json(JSON.parse(text));
  };
  reader.readAsText(file);
});





$('.input-group').on('focus', '.form-control', function () {
  $(this).closest('.input-group, .form-group').addClass('focus');
}).on('blur', '.form-control', function () {
  $(this).closest('.input-group, .form-group').removeClass('focus');
});
