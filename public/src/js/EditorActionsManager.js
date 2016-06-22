module.exports = (function(cy)
{
  "use strict";

  var _EditorActionsManager = function(isCollaborative)
  {
      // this.realTimeDoc = realTimeDoc;
      this.isCollaborative = true;
      this.nodeCounter = 0;
      this.edgeCounter = 0;
  };


   //Node Related Functions
  _EditorActionsManager.prototype.addNode = function(nodeData, posData)
  {
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

  _EditorActionsManager.prototype.realTimeNodeAddRemoveEventCallBack = function(event)
  {
    //Get real time node object and sync it to node addition or removal
    var node = event.newValue;
    var nodeID = event.property;

    //Removal Operation
    if (node === null)
    {
      //Remove element from existing graph
      var ele = event.newValue;
      var cyEle = cy.$("#" + nodeID)
      this.removeElementCy(cyEle);
    }
    //Addition Operation
    else
    {
      var nodeID = window.realTimeManager.getCustomObjId(node);
      var nodeData =
      {
        id: nodeID,
        type: node.type,
        name:'New '+ node.type
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

  }

  _EditorActionsManager.prototype.addNewNodeToRealTime = function(nodeData, posData)
  {
      window.realTimeManager.addNewNode(nodeData,posData);
  }

  _EditorActionsManager.prototype.addEdge = function(edgeData)
  {
    if (this.isCollaborative)
    {
      this.addNewEdgeRealTime(edgeData);
    }
    else
    {
      this.addNewEdgetoCy(edgeData);
    }
  }

  _EditorActionsManager.prototype.addNewEdgeRealTime = function(edgeData)
  {
      window.realTimeManager.addNewEdge(edgeData);
  }

  _EditorActionsManager.prototype.addNewEdgetoCy = function(edgeData)
  {
      cy.add(
      {
          group: "edges",
          data: edgeData
      });
  }

  _EditorActionsManager.prototype.realTimeEdgeAddRemoveEventCallBack = function(event)
  {

    //Get real time node object and sync it to node addition or removal
    var edge = event.newValue;
    var edgeID = event.property;

    //Removal Operation
    if (edge === null)
    {
      //Remove element from existing graph
      var ele = event.newValue;
      var cyEle = cy.$("#" + edgeID)
      this.removeElementCy(cyEle);
    }
    //Addition Operation
    else
    {
      var edgeData =
      {
        id: edgeID,
        type: edge.type,
        source: edge.source,
        target: edge.target
      };
      this.addNewEdgetoCy(edgeData);
    }
  }

  //Node Related Functions
 _EditorActionsManager.prototype.removeElement = function(ele)
 {
     if (this.isCollaborative)
     {
         this.removeElementFromRealTime(ele);
     }
     else
     {
         this.removeElementCy(ele);
     }
 }

   _EditorActionsManager.prototype.removeElementCy = function(ele)
  {
    cy.remove(ele);
  }

  _EditorActionsManager.prototype.removeElementFromRealTime = function(ele)
  {
    window.realTimeManager.removeElement(ele.id());
  }

  _EditorActionsManager.prototype.realTimeElementDeletedEventCallback = function(event)
  {
    this.removeElementCy(cyEle);
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
