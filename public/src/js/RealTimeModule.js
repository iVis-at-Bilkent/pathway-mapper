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
        // gapi.drive.realtime.custom.setOnLoaded(NodeR, onLoadCallback);
    }


    // The first time a file is opened, it must be initialized with the
    // document structure.
    RealTimeModule.prototype.onFileInitialize = function(model)
    {
        var root = model.getRoot();

        var nodeMap = model.createMap();
        var edgeMap = model.createMap();

        root.set('nodes', nodeMap);
        root.set('edges', edgeMap);


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

        //Setup event handlers for lists
        var nodeAddEventHandler = function(event)
        {
          editorActionsManager.realTimeNodeAddEventCallBack(event);
        }

        var edgeAddEventHandler = function(event)
        {
          editorActionsManager.realTimeNodeAddEventCallBack(event);
        }

        root.get('nodes').addEventListener( gapi.drive.realtime.EventType.VALUE_CHANGED, nodeAddEventHandler);
        root.get('edges').addEventListener( gapi.drive.realtime.EventType.VALUE_CHANGED, edgeAddEventHandler);

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
      var currentSize = nodeMap.size;
      var newID = "elem"+currentSize;

      var newNode;

      if (posData)
      {
        newNode = model.create(NodeR,
        {
            nodeID: newID,
            name: nodeData.name,
            type: nodeData.type,
            x: posData.x,
            y: posData.y,
        });
      }
      else
      {
        newNode = model.create(NodeR,
        {
            nodeID: newID,
            name: nodeData.name,
            type: nodeData.type,
        });
      }

      nodeMap.set(newID, newNode);
    }

    RealTimeModule.prototype.addNewEdge = function(edgeData)
    {
      var model = this.realTimeDoc.getModel();
      var root = model.getRoot();
      var nodeMap =  root.get('edges');
      var currentSize = nodeMap.size;
      var newID = "elem"+currentSize;

      var newNode;

      if (posData)
      {
        newNode = model.create(NodeR,
        {
            nodeID: newID,
            name: nodeData.name,
            type: nodeData.type,
            x: posData.x,
            y: posData.y,
        });
      }
      else
      {
        newNode = model.create(NodeR,
        {
            nodeID: newID,
            name: nodeData.name,
            type: nodeData.type,
        });
      }

      nodeMap.set(newID, newNode);
    }

    //Custom object Definitions and Registration Part
    var NodeR = function() {}
    var EdgeR = function() {}

    var createNodeAndEdgeFieldsR = function() {
        NodeR.prototype.nodeID = gapi.drive.realtime.custom.collaborativeField('nodeID');
        NodeR.prototype.name = gapi.drive.realtime.custom.collaborativeField('name');
        NodeR.prototype.type = gapi.drive.realtime.custom.collaborativeField('type');
        NodeR.prototype.x = gapi.drive.realtime.custom.collaborativeField('x');
        NodeR.prototype.y = gapi.drive.realtime.custom.collaborativeField('y');

        EdgeR.prototype.edgeID = gapi.drive.realtime.custom.collaborativeField('edgeID');
        EdgeR.prototype.source = gapi.drive.realtime.custom.collaborativeField('source');
        EdgeR.prototype.target = gapi.drive.realtime.custom.collaborativeField('target');
        EdgeR.prototype.type = gapi.drive.realtime.custom.collaborativeField('type');
    }

    var NodeRInitializer = function(params) {
        var model = gapi.drive.realtime.custom.getModel(this);
        this.nodeID = params.nodeID || "undefined";
        this.label = params.name || "undefined";
        this.type = params.type || "undefined";
        this.x = params.x || "undefined";
        this.y = params.y || "undefined";
    }

    var EdgeRInitializer = function(params) {
        var model = gapi.drive.realtime.custom.getModel(this);
        this.edgeID = params.edgeID || "undefined";
        this.type = params.type || "undefined";
        this.source = params.source || "undefined";
        this.target = params.target || "undefined";
    }

    return RealTimeModule;

})(window.cy, window.editorActionsManager)
