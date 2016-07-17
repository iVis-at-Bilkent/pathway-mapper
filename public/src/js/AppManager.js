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

//Other requires
require('./FileOperationsManager.js');
require('./OtherMenuOperations.js');
require('./ViewOperationsManager.js');

var QtipManager = require('./QtipManager.js');
var ContextMenuManager = require('./ContextMenuManager.js');
var DragDropNodeAddPlugin = require('./DragDropNodeAddPlugin.js');
var EditorActionsManager = require('./EditorActionsManager.js');


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
    };

    AppManager.prototype.initCyJS = function()
    {
        panzoom( cytoscape, $ );  // register extension
        cxtmenu( cytoscape, $ ); // register extension
        cyqtip( cytoscape, $ ); // register extension
        regCose( cytoscape ); // register extension
        navigator( cytoscape ); // register extension


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

        // //Navigator for cytoscape js
        // var navDefaults = {
        //     container: false // can be a HTML or jQuery element or jQuery selector
        //     , viewLiveFramerate: 0 // set false to update graph pan only on drag end; set 0 to do it instantly; set a number (frames per second) to update not more than N times per second
        //     , thumbnailEventFramerate: 30 // max thumbnail's updates per second triggered by graph updates
        //     , thumbnailLiveFramerate: false // max thumbnail's updates per second. Set false to disable
        //     , dblClickDelay: 200 // milliseconds
        //     , removeCustomContainer: true // destroy the container specified by user on plugin destroy
        //     , rerenderDelay: 100 // ms to throttle rerender updates to the panzoom for performance
        // };
        //
        // var nav = cy.navigator( navDefaults ); // get navigator instance, nav
    };

    AppManager.prototype.initCyHandlers = function()
    {
        var that = this;
        cy.on('click', 'node', function( e )
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
            cy.style().update();
        });

        cy.on('click')
    };

    var overlayExprData = false;
    $('#exprData').on('click', function (evt)
    {
        overlayExprData = !overlayExprData;
        if (overlayExprData)
        {
            $(evt.target).text('Remove Data Overlay');
            cy.style()
                .selector('node[type="GENE"]')
                .style('height', 60)
                .style('text-margin-y',-20)
                .style('background-image', function(ele)
                {
                    var overlayRecBoxW = 110;
                    var overlayRecBoxH = 25;

                    var eleBBox = ele.boundingBox();

                    //Experimental data overlay part !
                    var dataURI = "data:image/svg+xml,";

                    var svgNameSpace = 'http://www.w3.org/2000/svg';

                    var svg = document.createElementNS(svgNameSpace,'svg');
                    //It seems this should be set according to the node size !
                    svg.setAttribute('width', eleBBox.w);
                    svg.setAttribute('height', eleBBox.h);
                    //This is important you need to include this to succesfully render in cytoscape.js!
                    svg.setAttribute('xmlns', svgNameSpace);


                    //Overlay Data Rect
                    var overLayRectBBox =
                    {
                        w: overlayRecBoxW,
                        h: overlayRecBoxH,
                        x: eleBBox.w/2 - overlayRecBoxW/2,
                        y: eleBBox.h/2 + overlayRecBoxH/2 - 20
                    };


                    //Leftmost rectangle
                    genomicDataRectangleGenerator(
                        overLayRectBBox.x,
                        overLayRectBBox.y,
                        overLayRectBBox.w/3,
                        overLayRectBBox.h,
                        0,
                        svg
                    );

                    //Middle rectangle
                    genomicDataRectangleGenerator(
                        overLayRectBBox.x + overLayRectBBox.w/3,
                        overLayRectBBox.y,
                        overLayRectBBox.w/3,
                        overLayRectBBox.h,
                        60,
                        svg);

                    //Rightmost rectangle
                    genomicDataRectangleGenerator(
                        overLayRectBBox.x + 2*overLayRectBBox.w/3,
                        overLayRectBBox.y,
                        overLayRectBBox.w/3,
                        overLayRectBBox.h,
                        80,
                        svg);

                    function genomicDataRectangleGenerator(x,y,w,h,percent,parentSVG)
                    {

                        var _percent = (percent < 20) ? 20:percent;
                        var percentColor =  255 -  _percent * (255/100);
                        //Rectangle Part
                        var overlayRect = document.createElementNS(svgNameSpace, 'rect');
                        overlayRect.setAttribute('x', x);
                        overlayRect.setAttribute('y', y );
                        overlayRect.setAttribute('width', w);
                        overlayRect.setAttribute('height', h);
                        overlayRect.setAttribute('style', "stroke-width:1;stroke:rgb(0,0,0);opacity:1;fill:rgb(255,"+percentColor+","+percentColor+")");


                        //Text Part
                        var text = (percent < 1) ? '<1%':percent+'%';
                        var fontSize = 14;
                        var textLength = text.length;
                        var xOffset = (textLength > 2) ? 5:6;
                        var yOffset = fontSize/3;

                        var svgText = document.createElementNS(svgNameSpace, 'text');
                        svgText.setAttribute('x', x + xOffset );
                        svgText.setAttribute('y', y + h/2 + yOffset );
                        svgText.setAttribute('font-family', 'Verdana');
                        svgText.setAttribute('font-size', fontSize);
                        svgText.innerHTML = text;

                        parentSVG.appendChild(overlayRect);
                        parentSVG.appendChild(svgText);
                    }


                    return dataURI+svg.outerHTML;
                })
                .update();
        }
        else
        {
            $(evt.target).text('Preview Data Overlay');
            cy.style()
                .selector('node[type="GENE"]')
                .style('height', 60)
                .style('text-margin-y',0)
                .style('background-image', function(ele)
                {
                    var eleBBox = ele.boundingBox();

                    //Experimental data overlay part !
                    var dataURI = "data:image/svg+xml,";

                    return dataURI;
                })
                .update();
        }
    })

    return AppManager;

})();
