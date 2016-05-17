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
var cyqtip = require('cytoscape-qtip');


//Panzoom options
var panzoomOpts = require('./panzoomUtils.js');
var styleSheet = require('./stylesheet.js');
var edgeHandleOpts = require('./edgeHandlingUtils.js');


//Wait all components to load
$(window).load(function()
{
    panzoom( cytoscape, $ );  // register extension
    cxtmenu( cytoscape, $ ); // register extension
    // edgehandles( cytoscape, $ ); // register extension
    cyqtip( cytoscape, $ ); // register extension

    window.edgeAddingMode = 0;

    cy = window.cy = cytoscape(
    {
      container: document.querySelector('#cy'),

      boxSelectionEnabled: true,
      autounselectify: false,

      style: styleSheet,

      elements: {
        nodes: [
          { data: { id: 'j', name: 'TP53' } },
          { data: { id: 'e', name: 'MDM2' } },
          { data: { id: 'k', name: 'MDM4' } },
          { data: { id: 'g', name: 'IGFR' } }
        ],
        edges: [
          { data: { source: 'j', target: 'e', type: 'IN_SAME_COMPONENT' } },
          { data: { source: 'j', target: 'k' , type: 'REACTS_WITH'} },
          { data: { source: 'e', target: 'k' , type: 'IN_SAME_COMPONENT'} },
          { data: { source: 'g', target: 'j' ,type: 'REACTS_WITH'} }
        ]
      },
      ready: function(){

        // var selectedNodes = this.nodes();
        // var compNode = this.add({group: "nodes"})[0];
        // var compId = compNode.id();
        // selectedNodes.move({parent: compId});
      },

      layout: {
        name: 'cose',
        padding: 50
      }
    });

    cy.panzoom( panzoomOpts );
    cy.nodeadd( {container: $('#simpleNodeDiv'), explanationText: 'Gene', icon: 'fa fa-square-o'} );
    // cy.nodeadd( {container: $('#compoundNodeDiv'), explanationText: 'Compound Node', icon: 'fa fa-square-o'} );
    cy.edgehandles( edgeHandleOpts );

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

    cy.on('add', 'node', function(event)
    {
      addQtipToElements(event.cyTarget);
    });

    var qTipModule = require('./qTipModule.js');
    var cxMenuModule = require('./contextMenuModule.js');

    addQtipToElements(cy.nodes());
});

//Jquery handles
$('#saveGraphBtn').on('click', function(evt)
{
  var graphJSON = cy.json();
  var nodes = graphJSON.elements.nodes;
  var edges = graphJSON.elements.edges;

  console.log(nodes);
  console.log(edges);

  var returnString = '--NODE_NAME\tPARENTID\tPOSX\tPOSY\tNODE_ID'+'\n';

  for (var i = 0; i < nodes.length; i++)
  {
    var nodeName = nodes[i].data.name;
    var parentID = nodes[i].data.parent;

    if (nodes[i].data.parent)
    {
      parentID = nodes[i].data.parent;
    }
    else
    {
      parentID = -1;
    }

    var pos = nodes[i].position;
    returnString +=  nodeName + '\t' + parentID + '\t' + nodes[i].position.x + '\t' + nodes[i].position.y + '\t' + nodes[i].data.id + '\n';
  }

  returnString += '\n';
  returnString += '--EDGE_TYPE \t SOURCE \t TARGET \t\n';

  for (var i = 0; i < edges.length; i++)
  {
    var edgeType = edges[i].data.type;
    var source = edges[i].data.source;
    var target = edges[i].data.target;

    returnString += edgeType + '\t' + source + '\t' + target + '\n';
  }

  var blob = new Blob([returnString], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "grahp.txt");
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
  reader.onload = function()
  {
    cy.remove(cy.elements());
    var text = reader.result;

    var allEles = [];

    // By lines
    var lines = this.result.split('\n');

    var edgesStartIndex = -1;

    // start from first line skip node meta data
    for(var i =1; i < lines.length; i++)
    {
      if (lines[i].length == 0)
      {
        edgesStartIndex = i + 2;
        break;
      }

      var lineData = lines[i].split('\t');

      var newNode;
      if (lineData[1] == '-1')
      {
        newNode = {group: 'nodes', data:{id: lineData[4], name:lineData[0]} ,position:{x: parseFloat(lineData[2]), y:parseFloat(lineData[3])}};
      }
      else {
        newNode = {group: 'nodes', data:{id: lineData[4],name:lineData[0], parent:lineData[1]} ,position:{x: parseFloat(lineData[2]), y:parseFloat(lineData[3])}};
      }
      allEles.push(newNode);
    }

    for(var i = edgesStartIndex; i < lines.length; i++)
    {
      if (lines[i].length == 0)
      {
        break;
      }

      var lineData = lines[i].split('\t');
      newEdge = {group: 'edges', data:{type: lineData[0], source: lineData[1], target: lineData[2]}};
      allEles.push(newEdge);
    }

    cy.add(allEles);
    cy.layout({name:'cose', padding: 50, animate: 'true'});
  };
  reader.readAsText(file);
});


//Selected element on dropdown
$(".edgePaletteWrapper li a").click(function(){

  $(".edgePaletteWrapper .btn:first-child").text($(this).text());
  $(".edgePaletteWrapper .btn:first-child").val($(this).text());
  $(".edgePaletteWrapper .btn:first-child").append('<span class="caret"></span>');

  console.log($(this).attr('dropDownIndex'));
  window.edgeAddingMode = $(this).attr('dropDownIndex');
  var flag = (window.edgeAddingMode != 0) ? 'drawon' : 'drawoff';
  cy.edgehandles(flag);

});

//Flat UI fix for highlights
$('.input-group').on('focus', '.form-control', function () {
  $(this).closest('.input-group, .form-group').addClass('focus');
}).on('blur', '.form-control', function () {
  $(this).closest('.input-group, .form-group').removeClass('focus');
});
