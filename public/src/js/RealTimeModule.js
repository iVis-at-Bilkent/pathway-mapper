module.exports = (function()
{
    "use strict";

    var NODEMAP_NAME = 'nodes';
    var EDGEMAP_NAME = 'edges';

    var RealTimeModule = function(postFileLoadCallback)
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
        this.postFileLoad = postFileLoadCallback;
    }

    RealTimeModule.prototype.authorize = function(callbackFunction, isModal)
    {
        // Attempt to authorize
        this.realtimeUtils.authorize(function(response)
        {
            callbackFunction(response);

        }, isModal);
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

        root.set(NODEMAP_NAME, nodeMap);
        root.set(EDGEMAP_NAME, edgeMap);
    }

    // After a file has been initialized and loaded, we can access the
    // document. We will wire up the data model to the UI.
    RealTimeModule.prototype.onFileLoaded =  function(doc)
    {
        // this.realTimeDoc = doc;
        var model = doc.getModel();
        var root = model.getRoot();

        var nodeMap = root.get(NODEMAP_NAME);
        var edgeMap = root.get(EDGEMAP_NAME);

        var nodeMapKeys = nodeMap.keys();
        var edgeMapKeys = edgeMap.keys();

        //Add real time nodes to local graph
        for (var index in nodeMapKeys)
        {
            var realtimeNode = nodeMap.get(nodeMapKeys[index]);
            window.editorActionsManager.addNewNodeLocally(realtimeNode);
        }

        //Add real time edges to local graph
        for (var index in edgeMapKeys)
        {
            var realTimeEdge = edgeMap.get(edgeMapKeys[index]);
            window.editorActionsManager.addNewEdgeLocally(realTimeEdge);
        }

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
        root.get(NODEMAP_NAME).addEventListener( gapi.drive.realtime.EventType.VALUE_CHANGED, nodeAddRemoveHandler);
        root.get(EDGEMAP_NAME).addEventListener( gapi.drive.realtime.EventType.VALUE_CHANGED, edgeAddRemoveHandler);

        //Just for debugging
        var debugRButton = document.getElementById('debugR');
        debugRButton.addEventListener('click', function(event)
        {
            gapi.drive.realtime.debug();
        });

        this.postFileLoad();
        
    }

    RealTimeModule.prototype.addNewNode = function(nodeData, posData)
    {
        var model = this.realTimeDoc.getModel();
        var root = model.getRoot();
        var nodeMap =  root.get(NODEMAP_NAME);
        var newNode = model.create(NodeR, {
            name: nodeData.name,
            type: nodeData.type,
            parent: nodeData.parent
        });

        if (posData)
        {
            newNode.x = posData.x;
            newNode.y = posData.y;
        }

        var realTimeGeneratedID = this.getCustomObjId(newNode);
        nodeMap.set(realTimeGeneratedID, newNode);
    }

    RealTimeModule.prototype.addNewEdge = function(edgeData)
    {
        var model = this.realTimeDoc.getModel();
        var root = model.getRoot();
        var edgeMap =  root.get(EDGEMAP_NAME);

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
        var edgeMap =  root.get(EDGEMAP_NAME);
        var nodeMap =  root.get(NODEMAP_NAME);

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
        var nodeMap =  root.get(NODEMAP_NAME);

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

    RealTimeModule.prototype.changeName = function(ele, newName)
    {
        var model = this.realTimeDoc.getModel();
        var root = model.getRoot();
        var nodeMap =  root.get(NODEMAP_NAME);

        var elementID = ele.id();

        if (nodeMap.has(elementID))
        {
            var tmpNode = nodeMap.get(elementID);
            model.beginCompoundOperation();
            tmpNode.name = newName;
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
        var nodeMap =  root.get(NODEMAP_NAME);

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
                var posData = refNode.renderedPosition();

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
        var self = this;
        //Register our custom objects go Google Real Time API
        gapi.drive.realtime.custom.registerType(EdgeR, 'EdgeR');
        gapi.drive.realtime.custom.registerType(NodeR, 'NodeR');
        gapi.drive.realtime.custom.setInitializer(NodeR, NodeRInitializer);
        gapi.drive.realtime.custom.setInitializer(EdgeR, EdgeRInitializer);
        createNodeAndEdgeFieldsR();

        function registerAttributeChangeHandlersNodeR()
        {
            function updateElementHandler(event)
            {
                var node = event.currentTarget;
                window.editorActionsManager.updateElementCallback(node, self.getCustomObjId(node));
            }

            this.addEventListener(gapi.drive.realtime.EventType.OBJECT_CHANGED, updateElementHandler);
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

})()
