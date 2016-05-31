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
var regCose = require('cytoscape-cose-bilkent');

//Panzoom options
var panzoomOpts = require('./panzoomUtils.js');
var styleSheet = require('./stylesheet.js');
var edgeHandleOpts = require('./edgeHandlingUtils.js');
var SaveLoadUtilities = require('./saveLoadUtils.js');

var LayoutProperties = require('./LayoutProperties.js');

//Wait all components to load
$(window).load(function()
{
    panzoom( cytoscape, $ );  // register extension
    cxtmenu( cytoscape, $ ); // register extension
    // edgehandles( cytoscape, $ ); // register extension
    cyqtip( cytoscape, $ ); // register extension
    regCose( cytoscape ); // register extension


    window.edgeAddingMode = 0;
    window.layoutProperties = new LayoutProperties();
    var layoutPropertiesContent = window.layoutProperties.render();
    $('#layoutPropertiesDiv').append(layoutPropertiesContent);

    cy = window.cy = cytoscape(
    {
      container: document.querySelector('#cy'),

      boxSelectionEnabled: true,
      autounselectify: false,
      wheelSensitivity: 0.1,

      style: styleSheet,

      elements: {
        nodes: [
          { data: { id: 'TP53', name:'TP53', type:'GENE' } },
          { data: { id: 'MDM2', name:'MDM2',type:'GENE'}},
          { data: { id: 'MDM4', name:'MDM4',type:'GENE'}},
          { data: { id: 'IGFR', name:'IGFR',type:'GENE'}},
          { data: { id: 'Process',name:'Process', type:'PROCESS'}}
        ],
        edges: [
          { data: { source: 'TP53', target: 'MDM2', type: 'ACTIVATES' } },
          { data: { source: 'MDM4', target: 'IGFR' , type: 'INDUCES'} },
          { data: { source: 'MDM2', target: 'MDM4' , type: 'BINDS'} },
          { data: { source: 'IGFR', target: 'TP53' ,type: 'REPRESSES'} },
          { data: { source: 'TP53', target: 'Process' ,type: 'BINDS'} }
        ]
      },
      ready: function(){

        // var selectedNodes = this.nodes();
        // var compNode = this.add({group: "nodes"})[0];
        // var compId = compNode.id();
        // selectedNodes.move({parent: compId});
      },

      layout: window.layoutProperties.currentLayoutProperties
    });

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


function saveGraph(){
  var graphJSON = cy.json();
  var returnString = SaveLoadUtilities.exportGraph(graphJSON);
  var blob = new Blob([returnString], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "pathway.txt");
}

//Jquery handles
$('#saveGraphBtn').on('click', function(evt)
{
  saveGraph();
});

$('#loadGraphBtn').on('click', function(evt)
{
  $('#fileinput').attr('value', "");
  $('#fileinput').trigger('click');


});

//TODO server side integration needed because of CORS
$('#fileinput').on('change', function()
{
  var file = this.files[0];
  // Create a new FormData object.
  var formData = new FormData();
  formData.append('graphFile', file);
  var request = new XMLHttpRequest();
  request.onreadystatechange = function ()
  {
    if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
    {
        cy.remove(cy.elements());
        var allEles = SaveLoadUtilities.parseGraph(request.responseText);
        cy.add(allEles);
        cy.layout(window.layoutProperties.currentLayoutProperties);
    }
  };
  request.open("POST", "/loadGraph");
  request.send(formData);

  // var self = this;
  // var reader = new FileReader();
  // reader.onload = function()
  // {
  //   cy.remove(cy.elements());
  //   var allEles = SaveLoadUtilities.parseGraph(reader.result);
  //   cy.add(allEles);
  //   cy.layout(window.layoutProperties.currentLayoutProperties);
  // };
  // reader.readAsText(file);

});


//Selected element on dropdown
$(".edge-palette a").click(function(event)
{
  event.preventDefault();

  if ($(event.target).hasClass('active'))
  {
    cy.edgehandles('disable');
    cy.edgehandles('drawoff');
    $('.edge-palette a').blur().removeClass('active');
  }
  else
  {
    $('.edge-palette a').blur().removeClass('active');
    $(event.target).toggleClass('active');
    window.edgeAddingMode = $(event.target).attr('edgeTypeIndex');
    cy.edgehandles('enable');
  }

});


//About edit drop down handler
$(".editDropDown li a").click(function(event)
{
  event.preventDefault();
  var dropdownLinkRole = $(event.target).attr('role');

  if (dropdownLinkRole == 'addGene')
  {
    var clickedNodeType = $(event.target).text().toUpperCase();
    cy.add(
    {
        group: "nodes",
        data: {type: clickedNodeType, name:'newNode'},
        renderedPosition:
        {
            x: 100,
            y: 100
        }
    });
  }
  else if (dropdownLinkRole == 'addEdge')
  {
    var edgeTypeIndex = $(event.target).attr('edgeTypeIndex');
    $('.edge-palette a').blur().removeClass('active');
    $('.edge-palette a[edgeTypeIndex="'+edgeTypeIndex+'"]').addClass('active');
    window.edgeAddingMode = edgeTypeIndex;
    cy.edgehandles('enable');
  }
  else
  //delete
  {
      cy.elements(':selected').remove();
  }
});


//About drop down handler
$(".fileDropDown li a").click(function(event)
{
  event.preventDefault();
  var dropdownLinkRole = $(event.target).attr('role');

  if (dropdownLinkRole == 'save')
  {
    saveGraph();
  }
  else if (dropdownLinkRole == 'load')
  {
    $('#fileinput').trigger('click');
  }

});

//About drop down handler
$(".layoutDropDown li a").click(function(event)
{
  event.preventDefault();
  var dropdownLinkRole = $(event.target).attr('role');

  if (dropdownLinkRole == 'perform_layout')
  {
    cy.layout(window.layoutProperties.currentLayoutProperties);
  }
  else if (dropdownLinkRole == 'layout_properties')
  {
    $('#layoutPropertiesDiv').modal('show');
  }

});


//About drop down handler
$(".aboutDropDown li a").click(function(event)
{
  event.preventDefault();
  var dropdownLinkRole = $(event.target).attr('role');

  if (dropdownLinkRole == 'about')
  {
    $('#aboutModal').modal('show');
  }
  else if (dropdownLinkRole == 'edge_legend')
  {
    $('#edge_legend_modal').modal('show');
  }
  else if (dropdownLinkRole == 'node_legend')
  {
    $('#node_legend_modal').modal('show');
  }
  else if(dropdownLinkRole == 'help')
  {
    $('#quickHelpModal').modal('show');
  }
});

//Flat UI fix for highlights
$('.input-group').on('focus', '.form-control', function () {
  $(this).closest('.input-group, .form-group').addClass('focus');
}).on('blur', '.form-control', function () {
  $(this).closest('.input-group, .form-group').removeClass('focus');
});
