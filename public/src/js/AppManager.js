//Cytoscape related requires !
var cytoscape =  window.cytoscape = require('cytoscape');
var panzoom = require('cytoscape-panzoom');
var cxtmenu = require('cytoscape-cxtmenu');
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
var QtipModule = require('./qTipModule.js');
var CxtMenu = require('./contextMenuModule.js');

module.exports = (function()
{
    function AppManager(realTimeManager)
    {
        this.realTimeManager = realTimeManager;
        this.init();
    }

    AppManager.prototype.init = function()
    {
        //Initializes cytoscape
        this.initCytoscape();
        //Initialize cytoscape based handlers here
        this.initCyHandlers();
    }

    AppManager.prototype.initCytoscape = function()
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

        // var allEles = SaveLoadUtilities.parseGraph(sampleGraph);

        cy = window.cy = cytoscape({
            container: document.querySelector('#cy'),
            boxSelectionEnabled: true,
            autounselectify: false,
            wheelSensitivity: 0.1,
            style: styleSheet,
            // elements: allEles,
            ready: function(){},
            layout: {name: 'preset'}
        });

        //These dependencies requeire window.cy object so that they are imported here
        //TODO better refactor these
        this.qtipHandler = new QtipModule(window.cy);
        this.cxMenuHandler = new CxtMenu(window.cy);
        
        var EditorActionsManager = require('./EditorActionsManager.js');
        window.editorActionsManager = new EditorActionsManager(true, this.realTimeManager);
        require('./cytoscape.js-nodeadd.js');



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

    }

    AppManager.prototype.initCyHandlers = function()
    {
        var that = this;
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
                    that.qtipHandler.addQtipToElements(self);
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

        cy.on('cxttap', 'node', function( e )
        {
            clearQtipTimeoutStack();
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
        });
    }

    //Utility Functions
    //For better handling mouseover node details pop up
    var qtipTimeoutFunctions = [];

    function clearQtipTimeoutStack()
    {
        for (var i = 0; i < qtipTimeoutFunctions.length; i++) {
            clearTimeout(qtipTimeoutFunctions[i]);
        }
        qtipTimeoutFunctions = [];
    }

    return AppManager;

})();