;
module.exports = (function()
{
  "use strict";

  var CxtMenu = function(cy, editorActionsManager)
  {
    this.cy = cy;
    this.editorActionsManager = editorActionsManager;
    this.init();
  };

  CxtMenu.prototype.init = function()
  {
    var classRef = this;

    //Core context menu
    this.cy.cxtmenu({
      selector: 'core',
      activeFillColor: contextMenuSelectionColor, // the colour used to indicate the selected command
      commands: [
        {
          content: 'Perform Layout',
          select: function(ele)
          {
            window.editorActionsManager.performLayout();
          }
        },
      ]
    });

    //Node context menu
    this.cy.cxtmenu({
      selector: 'node',
      openMenuEvents: 'cxttapstart',
      activeFillColor: contextMenuSelectionColor, // the colour used to indicate the selected command
      commands:
          [
            {
              content: 'Delete Node(s)',
              select: function(ele)
              {
                var selectedNodes = cy.nodes(':selected').union(ele);
                var nodesToBeRemoved = selectedNodes.remove();
                nodesToBeRemoved.forEach(function(node, index)
                {
                  classRef.editorActionsManager.removeElement(node);
                });
              }
            },
            {
              content: 'Remove Selected From Parent',
              select: function(ele)
              {
                var selectedNodes = cy.nodes(':selected').union(ele);

                var notValid = false;
                selectedNodes.forEach(function(tmpNode, i)
                {

                  if (tmpNode.isParent())
                  {
                    notValid = isChildren(tmpNode, ele);
                    if (notValid)
                    {
                      return false;
                    }
                  }
                });

                if (notValid)
                {
                  return;
                }

                //classRef.editorActionsManager.changeParents(selectedNodes);
                selectedNodes.move({parent: null});
              }
            },
            {
              content: 'Add Selected Into This Node',
              select: function(ele)
              {
                var selectedNodes = cy.nodes(':selected');

                //Do nothing if node is GENE
                if (ele._private.data['type'] === 'GENE' || selectedNodes.size() < 1)
                {
                  return;
                }
                //Prevent actions like adding root node to children & addition to itself
                else
                {
                  var notValid = false;
                  selectedNodes.forEach(function(tmpNode, i)
                  {
                    if (ele.id() == tmpNode.id())
                    {
                      notValid = true;
                      return false;
                    }

                    if (tmpNode.isParent())
                    {
                      notValid = isChildren(tmpNode, ele);
                      if (notValid)
                      {
                        return false;
                      }
                    }
                  });

                  if (notValid)
                  {
                    return;
                  }
                }

                var compId = ele.id();
                selectedNodes.move({parent: compId});
                //classRef.editorActionsManager.changeParents(selectedNodes, compId);
              }
            }
          ]
    });

    //Edge context menu
    this.cy.cxtmenu({
      selector: 'edge',
      openMenuEvents: 'cxttapstart',
      activeFillColor: contextMenuSelectionColor, // the colour used to indicate the selected command
      commands: [
        {
          content: 'Delete Edge(s)',
          select: function(ele)
          {
            var selectedEdges = cy.edges(':selected').union(ele);
            selectedEdges.forEach(function(edge, index)
            {
              classRef.editorActionsManager.removeElement(edge);
            });

          }
        }
      ]
    });
  }

  //TODO ??????
  window.edgeAddingMode = false;
  var contextMenuSelectionColor = 'rgba(51, 247, 182, 0.88)';

  //TODO better move this to another class
  //Utility function to check whether query node is children of given node
  function isChildren(node, queryNode)
  {
    var parent = queryNode.parent()[0];
    while(parent)
    {
      if (parent.id() == node.id()) {
        return true;
      }
      parent = parent.parent()[0];
    }
    return false;
  }
  

  return CxtMenu;

}());
