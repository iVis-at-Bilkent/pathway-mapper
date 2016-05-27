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

//Wait all components to load
$(window).load(function()
{
    panzoom( cytoscape, $ );  // register extension
    cxtmenu( cytoscape, $ ); // register extension
    // edgehandles( cytoscape, $ ); // register extension
    cyqtip( cytoscape, $ ); // register extension
    regCose( cytoscape ); // register extension


    window.edgeAddingMode = 0;

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

      layout: {
        name: 'cose-bilkent',
        padding: 50
      }
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
              explanationText: 'Gene',
              icon: 'fa fa-square-o'
            },
            {
              container: $('#familyNodeDiv'),
              explanationText: 'Family',
              icon: 'fa fa-square-o'
            },
            {
              container: $('#compartmentNodeDiv'),
              explanationText: 'Compartment',
              icon: 'fa fa-square-o'
            },
            {
              container: $('#processNodeDiv'),
              explanationText: 'Process',
              icon: 'fa fa-square-o'
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

//Jquery handles
$('#saveGraphBtn').on('click', function(evt)
{
  var graphJSON = cy.json();
  var returnString = SaveLoadUtilities.exportGraph(graphJSON);
  var blob = new Blob([returnString], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "pathway.txt");
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
    var allEles = SaveLoadUtilities.parseGraph(reader.result);
    cy.add(allEles);
    cy.layout({name:'preset', padding: 50, animate: 'false'});
  };
  reader.readAsText(file);
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
  }else if (dropdownLinkRole == 'node_legend')
  {
    $('#node_legend_modal').modal('show');
  }
});

//Flat UI fix for highlights
$('.input-group').on('focus', '.form-control', function () {
  $(this).closest('.input-group, .form-group').addClass('focus');
}).on('blur', '.form-control', function () {
  $(this).closest('.input-group, .form-group').removeClass('focus');
});
