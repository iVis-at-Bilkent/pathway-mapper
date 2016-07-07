module.exports = (function($)
{
    'use strict';

    function handleNodeAlignment(param)
    {
        var nodes = cy.nodes(':selected');
        var nodeMap = {};

        nodes.forEach(function(node,index)
        {
            if (node.isParent())
            {
                nodeMap[node.id()] = node;
            }
        });


        if (nodes.length > 0)
        {
            var firstSelected = nodes[0];
            var firstBbox = firstSelected.boundingBox();

            nodes.forEach(function(node,index)
            {
                if (index == 0)
                {
                    return ;
                }

                //If parent of selected node is in selection do nothing !
                if (nodeMap[node.parent().id()] == null)
                {
                    var newPosition = calculateNewPosition(param, node, firstBbox)
                    //Recursively traverse leaf nodes
                    moveNode(node,0,0,newPosition);
                }

            });
        }
    }

    /*
     Determine new position according to the alignment
     node that node.position works on center positions thats why all calculations
     are performed accordingly
     */
    function calculateNewPosition(param, node, referenceBbox)
    {
        var currentPos = node.position();
        var currentBbox = node.boundingBox();
        var newPosition;

        if (param === 'vLeft')
        {
            newPosition = {x: referenceBbox.x1+currentBbox.w/2, y: currentPos.y};
        }
        else if (param === 'vCen')
        {
            newPosition = {x: referenceBbox.x1+referenceBbox.w/2, y: currentPos.y};
        }
        else if (param === 'vRight')
        {
            newPosition = {x: referenceBbox.x2-currentBbox.w/2, y: currentPos.y};
        }
        else if (param === 'hTop')
        {
            newPosition = {x: currentPos.x, y: referenceBbox.y1 + currentBbox.h/2};
        }
        else if (param === 'hMid')
        {
            newPosition = {x: currentPos.x, y: referenceBbox.y1 + referenceBbox.h/2};
        }
        else if (param === 'hBot')
        {
            newPosition = {x: currentPos.x, y: referenceBbox.y2 - currentBbox.h/2};
        }
        else {
            console.log('Error: wrong alignment name ' + param);
            return;
        }

        return newPosition;

    }

    //Recursively move leaf nodes
    function moveNode(node, dx, dy, newPos)
    {
        if (node.isParent())
        {
            var childNodes = node.children();
            var parentBbox = node.boundingBox();
            childNodes.forEach(function(childNode, index)
            {
                var childBbox = childNode.boundingBox();
                var _dx = -(parentBbox.x1 - childBbox.x1)-parentBbox.w/2+childBbox.w/2;
                var _dy = -(parentBbox.y1 - childBbox.y1)-parentBbox.h/2+childBbox.h/2;

                //If further compound node is found, set position accordingly
                if (childNode.isParent())
                {
                    moveNode(childNode, 0, 0, {x: newPos.x+_dx, y:newPos.y+_dy});
                }
                else
                {
                    moveNode(childNode, _dx, _dy, newPos);
                }

            });
        }
        else
        {
            //Move locally and let editor actions manager know a move happened
            //If in collaborative mode editor actions manager will update collaborative model
            node.position({x: newPos.x+dx, y:newPos.y+dy});
            window.editorActionsManager.moveElements(node);
        }
    }

    $(".viewDropdown li a").click(function(event)
    {
        event.preventDefault();
        var dropdownLinkRole = $(event.target).attr('role');
        handleNodeAlignment(dropdownLinkRole);
    });

})(window.$)
