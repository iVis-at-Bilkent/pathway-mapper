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
var regCose = require("../../lib/js/cose-bilkent/src/index.js");

//Panzoom options
var panzoomOpts = require('./panzoomUtils.js');
var styleSheet = require('./stylesheet.js');
var edgeHandleOpts = require('./edgeHandlingUtils.js');
var SaveLoadUtilities = require('./saveLoadUtils.js');
var LayoutProperties = require('./Views/LayoutProperties.js');

//Other requires
require('./fileOperationsModule.js');
require('./viewOperationsModule.js');


var sampleGraph = "﻿﻿--NODE_NAME	NODE_ID	NODE_TYPE	PARENT_ID	POSX	POSY--\n\
RAS	ele5	FAMILY	-1	591	649	\n\
KRAS	ele6	GENE	ele5	516	664	\n\
HRAS	ele7	GENE	ele5	616	634	\n\
NRAS	ele8	GENE	ele5	543	635	\n\
RIT1	ele9	GENE	ele5	667	661	\n\
ALK	ele19	GENE	-1	406	559	\n\
RET	ele20	GENE	-1	489	528	\n\
ROS1	ele21	GENE	-1	591	529	\n\
RAF	ele22	GENE	-1	600	727	\n\
NF1	ele50	GENE	-1	792	652	\n\
PI3K	ele40	GENE	-1	470	766	\n\
BRAF	ele62	GENE	-1	290	546	\n\
MAP2K1	ele63	GENE	-1	289	615	\n\
Proliferation	ele64	PROCESS	-1	291	684	\n\
RTK	ele71	FAMILY	-1	399	673	\n\
EGFR	ele10	GENE	ele71	399	673	\n\
ERBB2	ele11	GENE	ele71	398	639	\n\
IGF1R	ele39	GENE	ele71	400	708	\n\
\n\
--EDGE_ID	SOURCE	TARGET	EDGE_TYPE\n\
ele509	ele8	ele22	ACTIVATES\n\
ele510	ele7	ele22	ACTIVATES\n\
ele511	ele9	ele22	ACTIVATES\n\
ele512	ele6	ele22	ACTIVATES\n\
ele513	ele50	ele5	INHIBITS\n\
ele514	ele19	ele5	ACTIVATES\n\
ele515	ele20	ele5	ACTIVATES\n\
ele516	ele21	ele5	ACTIVATES\n\
ele517	ele62	ele63	ACTIVATES\n\
ele518	ele63	ele64	ACTIVATES\n\
ele519	ele39	ele40	ACTIVATES\n\
ele520	ele11	ele5	ACTIVATES\n\
ele521	ele10	ele5	ACTIVATES\n\
";

//For better handling mouseover node details pop up
var qtipTimeoutFunctions = [];

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

    var allEles = SaveLoadUtilities.parseGraph(sampleGraph);

    cy = window.cy = cytoscape(
    {
      container: document.querySelector('#cy'),

      boxSelectionEnabled: true,
      autounselectify: false,
      wheelSensitivity: 0.1,

      style: styleSheet,

      elements: allEles,
      ready: function(){

        // var selectedNodes = this.nodes();
        // var compNode = this.add({group: "nodes"})[0];
        // var compId = compNode.id();
        // selectedNodes.move({parent: compId});
      },

      layout: {name: 'preset'}
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

    cy.on('mouseover', 'node', function( e )
    {
      var eventIsDirect = (e.cyTarget === this);

      if( eventIsDirect )
      {
        var self = this;

        var newQtipTimeoutFunc = setTimeout(function()
        {
          //Remove qtips
          $(".qtip").remove();
          addQtipToElements(self);
          var api = self.qtip('api');
          if (api)
          {
              api.show();
          }
        }, 1000);

        qtipTimeoutFunctions.push(newQtipTimeoutFunc);

      }
    });

    cy.on('mouseout', 'node', function(e)
    {
        clearQtipTimeoutStack();
    });

    // cy.on('tap', 'node', function( e )
    // {
    //     clearQtipTimeoutStack();
    // });

    //These dependencies requeire window.cy object so that they are imported here
    //TODO better refactor these
    var qTipModule = require('./qTipModule.js');
    var cxMenuModule = require('./contextMenuModule.js');
    var RealTimeModule = require('./RealTimeModule.js');
    var EditorActionsManager = require('./EditorActionsManager.js');
    window.realTimeManager = new RealTimeModule();
    window.editorActionsManager = new EditorActionsManager();

});

function clearQtipTimeoutStack()
{
  for (var i = 0; i < qtipTimeoutFunctions.length; i++) {
    clearTimeout(qtipTimeoutFunctions[i]);
  }
  qtipTimeoutFunctions = [];
}




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
    var clickedNodeType = $(event.target).text();
    cy.add(
    {
        group: "nodes",
        data: {type: clickedNodeType.toUpperCase(), name:'New ' + clickedNodeType },
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
