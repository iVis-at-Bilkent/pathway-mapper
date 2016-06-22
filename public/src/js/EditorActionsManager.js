module.exports = (function(cy)
{
  "use strict";

  var _EditorActionsManager = function(isCollaborative)
  {
      // this.realTimeDoc = realTimeDoc;
      this.isCollaborative = true;
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

    _EditorActionsManager.prototype.addNodes = function(nodes)
    {
        var self = this;
        nodes.forEach(function (node, index)
        {
            self.addNode(node.data(),node.position());
        });
    }

  _EditorActionsManager.prototype.addNodetoCy = function(nodeData, posData)
  {
      var newNode =
      {
        group: "nodes",
        data: nodeData
      };

      if (nodeData.parent === undefined )
      {
        delete newNode.data.parent;
      }

      if (posData)
      {
          newNode.renderedPosition =
          {
              x: posData.x,
              y: posData.y
          }
      }

      cy.add(newNode);
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
        name: node.name,
        parent: node.parent
      };

      if (node.x != "undefined" && node.y != "unedfined")
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
         var self = this;
         ele.forEach(function (elem, index)
         {
             self.removeElementFromRealTime(elem);
         })
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

    _EditorActionsManager.prototype.moveElements = function(ele)
    {
        //Sync movement to real time api
        if(this.isCollaborative)
        {
            ele.forEach(function (ele,index)
            {
               window.realTimeManager.moveElement(ele);
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
