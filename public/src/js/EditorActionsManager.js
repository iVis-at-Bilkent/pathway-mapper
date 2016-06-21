module.exports = (function(cy)
{
  "use strict";

  var _EditorActionsManager = function(isCollaborative,realTimeDoc)
  {
      this.realTimeDoc = realTimeDoc;
      this.isCollaborative = isCollaborative;
      this.nodeCounter = 0;
      this.edgeCounter = 0;
  };

  _EditorActionsManager.prototype.addNode = function(nodeData, posData)
  {
      nodeData.id =  this.nodeCounter++;

      if (this.isCollaborative)
      {
          this.addNewNodeToRealTime(nodeData, posData);
      }
      else
      {
          this.addNodetoCy(nodeData,posData);
      }
  }

  _EditorActionsManager.prototype.addNodetoCy = function(nodeData, posData)
  {
    var newNode;

    if (posData)
    {
      newNode = cy.add(
      {
          group: "nodes",
          data: nodeData,
          renderedPosition:
          {
              x: posData.x,
              y: posData.y
          }
      });
    }
    else
    {
      newNode = cy.add(
      {
          group: "nodes",
          data: nodeData,
      });
    }
  }

  _EditorActionsManager.prototype.realTimeNodeAddEventCallBack = function(event)
  {
    //Get real time node object and sync it to node addition
    var node = event.values[0];
    var nodeData =
    {
      id: node.nodeID,
      type: node.type,
      name:'New '+ node.type,
    };

    if (node.posX != "undefined" && node.posY != "unedfined")
    {
      this.addNodetoCy(nodeData, {x: node.x, y: node.y});
    }
    else
    {
      this.addNodetoCy(nodeData);
    }
  }

  _EditorActionsManager.prototype.addNewNodeToRealTime = function(nodeData, posData)
  {
    var model = this.realTimeDoc.getModel();
    var root = model.getRoot();

    var newNode;

    if (posData)
    {
      newNode = model.create(NodeR,
      {
          name: nodeData.name,
          type: "Gene",
          x: posData.x,
          y: posData.y,
      });
    }
    else
    {
      newNode = model.create(NodeR,
      {
          name: nodeData.name,
          type: nodeData.type,
      });
    }
  }

  // Singleton Class related stuff here !
  var EditorActionsManager = function()
  {
    // var instance;
    //
    // function createInstance()
    // {
    //     var object = new _EditorActionsManager();
    //     return object;
    // }
    //
    // this.prototype.getInstance = function()
    // {
    //     if (!instance) {
    //         instance = createInstance();
    //     }
    //     return instance;
    // }
    return new _EditorActionsManager();
  }

  return EditorActionsManager;

})(window.cy);
