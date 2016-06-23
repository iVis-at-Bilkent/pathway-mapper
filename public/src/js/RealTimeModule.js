module.exports = (function(cy, editorActionsManager)
{
    "use strict";

    var RealTimeModule = function()
    {
        this.clientId = '781185170494-n5v6ukdtorbs0p8au8svibjdobaad35c.apps.googleusercontent.com';

        // if (!/^([0-9])$/.test(clientId[0]))
        // {
        //     throw new Error('Invalid Client ID - did you forget to insert your application Client ID?');
        // }

        // Create a new instance of the realtime utility with your client ID.
        this.realtimeUtils = new utils.RealtimeUtils({
            clientId: this.clientId
        });
        this.authorize();

    }

    RealTimeModule.prototype.authorize = function()
    {
        // Attempt to authorize
        var self = this;
        this.realtimeUtils.authorize(function(response)
        {
            //TODO Modal ?
            if (response.error)
            {
                // Authorization failed because this is the first time the user has used your application,
                // show the authorize button to prompt them to authorize manually.
                var button = document.getElementById('auth_button');
                button.classList.add('visible');
                button.addEventListener('click', function() {
                    self.realtimeUtils.authorize(function(response) {
                        start();
                    }, true);
                });
            }
            else
            {
                self.initRealTimeAPI();
            }
        }, false);
    }

    RealTimeModule.prototype.initRealTimeAPI = function()
    {
        // With auth taken care of, load a file, or create one if there
        // is not an id in the URL.
        var id = this.realtimeUtils.getParam('id');

        // Register Types before load event !
        this.registerTypes();
        var self = this;

        var initFileCallback = function(model)
        {
            self.onFileInitialize(model);
        }

        var loadFileCallback = function(model)
        {
            self.onFileLoaded(model);
        }

        if (id)
        {
            // Load the document id from the URL
            this.realtimeUtils.load(id.replace('/', ''), loadFileCallback, initFileCallback);
        }
        else
        {
            // Create a new document, add it to the URL
            this.realtimeUtils.createRealtimeFile('New Graph', function(createResponse) {
                window.history.pushState(null, null, '?id=' + createResponse.id);
                self.realtimeUtils.load(createResponse.id, loadFileCallback, initFileCallback);
            });
        }
    }

    
    // The first time a file is opened, it must be initialized with the
    // document structure.
    RealTimeModule.prototype.onFileInitialize = function(model)
    {
        var root = model.getRoot();

        var nodeMap = model.createMap();
        var edgeMap = model.createMap();
        var elementCounter = model.createString();
        elementCounter.setText("0");

        root.set('nodes', nodeMap);
        root.set('edges', edgeMap);
        root.set('element_counter', elementCounter);

        // var nodes = cy.nodes();
        // var edges = cy.edges();
        //
        // nodes.forEach(function(node, index)
        // {
        //     var nodeData = node.data();
        //     var nodePos = node.position();
        //
        //     var newNode = model.create(NodeR, {
        //         label: nodeData.name,
        //         nodeID: nodeData.id,
        //         type: nodeData.type,
        //         x: nodePos.x,
        //         y: nodePos.y
        //     });
        //
        //     nodeList.push(newNode);
        // });
        //
        // edges.forEach(function(edge, index)
        // {
        //     var edgeData = edge.data();
        //
        //     var newEdge = model.create(EdgeR, {
        //         edgeID: edgeData.id,
        //         source: edgeData.source,
        //         target: edgeData.target,
        //         type: edgeData.type
        //     });
        //
        //     edgeList.push(newEdge);
        // });
    }

    // After a file has been initialized and loaded, we can access the
    // document. We will wire up the data model to the UI.
    RealTimeModule.prototype.onFileLoaded =  function(doc)
    {
        // this.realTimeDoc = doc;
        var model = doc.getModel();
        var root = model.getRoot();

        //Keep a reference to the file !
        this.realTimeDoc = doc;

        //Setup event handlers for maps
        var nodeAddRemoveHandler = function(event)
        {
            editorActionsManager.realTimeNodeAddRemoveEventCallBack(event);
        }

        var edgeAddRemoveHandler = function(event)
        {
            editorActionsManager.realTimeEdgeAddRemoveEventCallBack(event);
        }

        //Event listeners for edge and node map
        root.get('nodes').addEventListener( gapi.drive.realtime.EventType.VALUE_CHANGED, nodeAddRemoveHandler);
        root.get('edges').addEventListener( gapi.drive.realtime.EventType.VALUE_CHANGED, edgeAddRemoveHandler);

        //Just for debugging
        var debugRButton = document.getElementById('debugR');
        debugRButton.addEventListener('click', function(event)
        {
            gapi.drive.realtime.debug();
        });
    }

    RealTimeModule.prototype.addNewNode = function(nodeData, posData)
    {
        var model = this.realTimeDoc.getModel();
        var root = model.getRoot();
        var nodeMap =  root.get('nodes');
        var newNode = model.create(NodeR,
            {
                name: nodeData.name,
                type: nodeData.type,
                parent: nodeData.parent,
                x: posData.x,
                y: posData.y
            });

        var realTimeGeneratedID = this.getCustomObjId(newNode);
        nodeMap.set(realTimeGeneratedID, newNode);
    }

    RealTimeModule.prototype.addNewEdge = function(edgeData)
    {
        var model = this.realTimeDoc.getModel();
        var root = model.getRoot();
        var edgeMap =  root.get('edges');

        var newEdge = model.create(EdgeR,
            {
                type: edgeData.type,
                source: edgeData.source,
                target: edgeData.target
            });

        var realTimeGeneratedID = this.getCustomObjId(newEdge);
        edgeMap.set(realTimeGeneratedID, newEdge);
    }

    RealTimeModule.prototype.removeElement = function(elementID)
    {
        var model = this.realTimeDoc.getModel();
        var root = model.getRoot();
        var edgeMap =  root.get('edges');
        var nodeMap =  root.get('nodes');

        if (nodeMap.has(elementID))
        {
            nodeMap.delete(elementID);
        }
        else if (edgeMap.has(elementID))
        {
            edgeMap.delete(elementID);
        }
        else
        {
            throw new Error('Element does not exists in Real Time');
            return;
        }
    }

    RealTimeModule.prototype.moveElement = function(ele)
    {
        var model = this.realTimeDoc.getModel();
        var root = model.getRoot();
        var nodeMap =  root.get('nodes');

        var elementID = ele.id();
        var newPos = ele.position();

        if (nodeMap.has(elementID))
        {
            var tmpNode = nodeMap.get(elementID);
            model.beginCompoundOperation();
            tmpNode.x = newPos.x;
            tmpNode.y = newPos.y;
            model.endCompoundOperation();
        }
        else
        {
            throw new Error('Element does not exists in nodes !!! ');
            return;
        }
        
    }

    RealTimeModule.prototype.changeParent = function (rootNode, newParentId, connectedEdges)
    {
        var model = this.realTimeDoc.getModel();
        var root = model.getRoot();
        var nodeMap =  root.get('nodes');

        var nodeLookupTable = {};

        var self = this;
        
        function traverseFromRoot(rootNode, parId)
        {
            /*
             remove outermost node,
             create new real time node with given parentId,
             pass id of this real time node to children,
             repeat in a recursive manner
             after that restore the edges that dissapear by removed nodes 
             during change parent
             */

            var refNode = rootNode.nodeRef;
            var children = rootNode.children;
            var newParentId = parId;

            if (refNode)
            {
                var refNodeId = refNode.id();
                var nodeData = refNode.data();
                var posData = refNode.position();

                var newNodeData =
                {
                    name: nodeData.name,
                    type: nodeData.type,
                    x: posData.x,
                    y: posData.y
                }

                if(parId)
                {
                    newNodeData.parent = parId;
                }

                //TODO compound operations ?
                self.removeElement(refNodeId);
                var newNode = model.create(NodeR, newNodeData);
                var newNodeId = self.getCustomObjId(newNode);
                nodeMap.set(newNodeId, newNode);
                newParentId = newNodeId;
                nodeLookupTable[refNodeId] = newNodeId;
            }

            for (var i in children)
            {
                var childNode = children[i];
                traverseFromRoot(childNode, newParentId);
            }
        }

        //Begin traversing from given root node
        traverseFromRoot(rootNode, newParentId);

        //Restore edges that dissapear by the change parent operation
        //TODO compound operations ?
        connectedEdges.forEach(function (edge, index)
        {
            var edgeData = edge.data();
            self.removeElement(edge.id());

            var newSource = nodeLookupTable[edgeData.source];
            var newTarget = nodeLookupTable[edgeData.target];
            
            if (newSource)
            {
                edgeData.source = newSource;
            }

            if (newTarget)
            {
                edgeData.target = newTarget;
            }

            self.addNewEdge(edgeData);
        });
    }

    //Google Real Time's custom object ids are retrieved in this way
    RealTimeModule.prototype.getCustomObjId = function(object)
    {
        return gapi.drive.realtime.custom.getId(object);
    }

    // You must register the custom object before loading or creating any file that
    // uses this custom object.
    RealTimeModule.prototype.registerTypes = function()
    {
        //Register our custom objects go Google Real Time API
        gapi.drive.realtime.custom.registerType(EdgeR, 'EdgeR');
        gapi.drive.realtime.custom.registerType(NodeR, 'NodeR');
        gapi.drive.realtime.custom.setInitializer(NodeR, NodeRInitializer);
        gapi.drive.realtime.custom.setInitializer(EdgeR, EdgeRInitializer);
        createNodeAndEdgeFieldsR();

        function registerAttributeChangeHandlersNodeR()
        {
            function logObjectChange(event)
            {
                console.log(event);
            }

            this.addEventListener(gapi.drive.realtime.EventType.OBJECT_CHANGED, logObjectChange);
        }

        gapi.drive.realtime.custom.setOnLoaded(NodeR, registerAttributeChangeHandlersNodeR);

    }

    //Custom object Definitions and Registration Part
    var NodeR = function() {}
    var EdgeR = function() {}

    var createNodeAndEdgeFieldsR = function() {
        // NodeR.prototype.nodeID = gapi.drive.realtime.custom.collaborativeField('nodeID');
        NodeR.prototype.name = gapi.drive.realtime.custom.collaborativeField('name');
        NodeR.prototype.type = gapi.drive.realtime.custom.collaborativeField('type');
        NodeR.prototype.x = gapi.drive.realtime.custom.collaborativeField('x');
        NodeR.prototype.y = gapi.drive.realtime.custom.collaborativeField('y');
        NodeR.prototype.parent = gapi.drive.realtime.custom.collaborativeField('parent');

        // EdgeR.prototype.edgeID = gapi.drive.realtime.custom.collaborativeField('edgeID');
        EdgeR.prototype.source = gapi.drive.realtime.custom.collaborativeField('source');
        EdgeR.prototype.target = gapi.drive.realtime.custom.collaborativeField('target');
        EdgeR.prototype.type = gapi.drive.realtime.custom.collaborativeField('type');
    }

    var NodeRInitializer = function(params) {
        var model = gapi.drive.realtime.custom.getModel(this);
        this.name = params.name || "undefined";
        this.type = params.type || "undefined";
        this.parent = params.parent || "undefined";
        this.x = params.x || "undefined";
        this.y = params.y || "undefined";
    }

    var EdgeRInitializer = function(params) {
        var model = gapi.drive.realtime.custom.getModel(this);
        // this.edgeID = params.edgeID || "undefined";
        this.type = params.type || "undefined";
        this.source = params.source || "undefined";
        this.target = params.target || "undefined";
    }

    return RealTimeModule;

})(window.cy, window.editorActionsManager)
