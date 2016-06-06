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

var LayoutProperties = require('./Views/LayoutProperties.js');

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


    cy.nodes(':parent').on('tap', function( e )
    {
      var eventIsDirect = (e.cyTarget === this);

      if( eventIsDirect )
      {
        this.trigger('directtap');
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

// see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

function saveAsJPEG()
{
  var graphData = cy.jpeg();
  // this is to remove the beginning of the pngContent: data:img/png;base64,
  var b64data = graphData.substr(graphData.indexOf(",") + 1);
  var imageData = b64toBlob(b64data, "image/jpeg");
  var blob = new Blob([imageData]);
  saveAs(blob, "pathway.jpeg");
}

function saveAsPNG()
{
  var graphData = cy.png();
  // this is to remove the beginning of the pngContent: data:img/png;base64,
  var b64data = graphData.substr(graphData.indexOf(",") + 1);
  var imageData = b64toBlob(b64data, "image/png");
  var blob = new Blob([imageData]);
  saveAs(blob, "pathway.png");
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
        cy.fit(50);
    }
  };
  request.open("POST", "/loadGraph");
  request.send(formData);
  $('#fileinput').val(null);

});

//TODO server side integration needed because of CORS
$('#mergeInput').on('change', function()
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
      var allEles = SaveLoadUtilities.parseGraph(request.responseText);
      for (var index in allEles)
      {
        ele = allEles[index];
        if (cy.filter('node[name = "'+ele.data.name+'"]').length > 0)
        {
          delete allEles[index];
        }
      }
      cy.add(allEles);
      cy.fit(50);
    }
  };
  request.open("POST", "/loadGraph");
  request.send(formData);
  $('#mergeInput').val(null);

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
  else if (dropdownLinkRole == 'new')
  {
    cy.remove(cy.elements());
  }
  else if (dropdownLinkRole == 'merge')
  {
    $('#mergeInput').val(null);
    $('#mergeInput').trigger('click');
  }
  else if (dropdownLinkRole == 'jpeg')
  {
    saveAsJPEG();
  }
  else if (dropdownLinkRole == 'png')
  {
    saveAsPNG();
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
