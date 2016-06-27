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
        cy.nodes().updateCompoundBounds();
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
            var cyEle = cy.$("#" + nodeID);
            this.removeElementCy(cyEle);
            cy.nodes().updateCompoundBounds();
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
            cy.nodes().updateCompoundBounds();

        }

    }

    _EditorActionsManager.prototype.addNewNodeToRealTime = function(nodeData, posData)
    {
        window.realTimeManager.addNewNode(nodeData,posData);
    }

    //Edge related functions
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

    //Removal functions
    _EditorActionsManager.prototype.removeElement = function(ele)
    {
        if (this.isCollaborative)
        {
            var self = this;
            ele.forEach(function (elem, index)
            {
                var connectedEdges = elem.connectedEdges();

                //Remove all connected edges also !
                connectedEdges.forEach(function (edge, j)
                {
                   self.removeElementFromRealTime(edge);
                });

                self.removeElementFromRealTime(elem);
            });
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
    
    _EditorActionsManager.prototype.changeParents = function(eles, newParentId)
    {
        if(this.isCollaborative)
        {
            //TODO collaborative change parent
            // this.changeParentCy(eles, newParentId);
            this.changeParentRealTime(eles, newParentId);
        }
        else
        {
            this.changeParentCy(eles, newParentId);
        }
    }

    _EditorActionsManager.prototype.changeParentCy = function(eles, newParentId)
    {
        var lockedNodes = {};

        function removeNodes(nodes)
        {
            //Get removed edges first
            var removedEles = nodes.connectedEdges().remove();
            var children = nodes.children();

            if (children != null && children.length > 0)
            {
                children.forEach(function(childNode, i)
                {
                    lockedNodes[childNode.id()] = true;
                });

                removedEles = removedEles.union(removeNodes(children));
            }

            removedEles = removedEles.union(nodes.remove());
            cy.nodes().updateCompoundBounds();
            return removedEles;
        }


        var removedNodes = removeNodes(eles);

        for (var i = 0; i < removedNodes.length; i++)
        {
            var removedNode = removedNodes[i];

            //Just alter the parent id of corresponding nodes !
            if (removedNode.isEdge() || lockedNodes[removedNode.id()])
            {
                continue;
            }

            removedNode._private.data.parent = newParentId;
            if(removedNode._private.parent){
                delete removedNode._private.parent;
            }
        }

        cy.add(removedNodes);
        cy.nodes().updateCompoundBounds();
    }
    
    _EditorActionsManager.prototype.changeParentRealTime = function (eles, newParentId) 
    {

        function getTopLevelParents(eles)
        {
            var tpMostNodes = cy.collection();
            var parentMap = {};

            //Get all parents
            eles.forEach(function (node, index)
            {
                if(node.isParent())
                    parentMap[node.id()] = node;
            });

            //Get all parents
            eles.forEach(function (node, index)
            {
                var nodeParent = node.parent();

                if(parentMap[nodeParent.id()] === undefined)
                    tpMostNodes = tpMostNodes.union(node);
            });

            return tpMostNodes;
        }




        var NodeObj = function(nodeObj){
            this.nodeRef  = nodeObj;
            this.children = [];
        }


        //TODO need to pass this to function somehow
        var connectedEdges = eles.connectedEdges();
        // Traverses given elements and constructs subgraph relations
        // creates a nested structure into rootnodeObj
        function traverseNodes(eles, rootNodeObj)
        {
            eles.forEach(function (ele, index)
            {
                connectedEdges = connectedEdges.union(ele.connectedEdges());

                if(ele.isParent())
               {
                   rootNodeObj.children.push(new NodeObj(ele));
                   var lengthOfChildrenArray = rootNodeObj.children.length;
                   traverseNodes(ele.children(), rootNodeObj.children[lengthOfChildrenArray-1]);
               }
               else
               {
                   rootNodeObj.children.push(new NodeObj(ele));
               }
            });
        }

        //Create new collection
        var topMostNodes = getTopLevelParents(eles);

        var rootNodeR = new NodeObj(null);

        traverseNodes(topMostNodes, rootNodeR);
        window.realTimeManager.changeParent(rootNodeR, newParentId, connectedEdges);
        console.log(rootNodeR);
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

    _EditorActionsManager.prototype.changeName = function(ele, newName)
    {
        if (this.isCollaborative)
        {
            window.realTimeManager.changeName(ele, newName);
        }
        else
        {
            this.changeName(ele, newName);
        }
    }

    _EditorActionsManager.prototype.changeNameCy = function(ele, newName)
    {
        ele.data('name', newName);
        ele.css('content', newName);
    }


    _EditorActionsManager.prototype.updateElementCallback = function(ele, id)
    {
        //Remove element from existing graph
        var nodeID = id;
        var cyEle = cy.$("#" + nodeID);
        cyEle.position({x: ele.x, y: ele.y});
        this.changeNameCy(cyEle, ele.name);
    }


    //Utility Functions
    //TODO move functions thar are inside class functions here

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
