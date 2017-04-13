module.exports = (function($)
{
    'use strict'

    var movedNodes = [];

    function handleNodeAlignment(param)
    {
        var tmpNodes = window.editorActionsManager.selecteNodeStack;
        var nodes = cy.collection();
        var nodeMap = {};
        movedNodes = [];

        for (var key in tmpNodes)
        {
            nodes = nodes.add(tmpNodes[key]);
        }

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
                    changePosition(node,0,0,newPosition);
                }
            });
            window.editorActionsManager.handleChangePositionByAlignment(movedNodes);
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
    function changePosition(node, dx, dy, newPos)
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
                    changePosition(childNode, 0, 0, {x: newPos.x+_dx, y:newPos.y+_dy});
                }
                else
                {
                    changePosition(childNode, _dx, _dy, newPos);
                }

            });
        }
        else
        {
            //Move locally and let editor actions manager know a move happened
            //If in collaborative mode editor actions manager will update collaborative model
            var position =
            {
                x: newPos.x+dx,
                y: newPos.y+dy
            };

            movedNodes.push({node: node, nextPosition: position, oldPosition: null});
        }
    }

    $(".viewDropdown li a").click(function(event)
    {
        event.preventDefault();
        var dropdownLinkRole = $(event.target).attr('role');

        if(dropdownLinkRole == "grid")
        {
            $("#gridOptionsDiv").modal('show');
        }
        else
        {
            handleNodeAlignment(dropdownLinkRole);
        }
        
    });

    $(".highlightDropDown li a").click(function (event)
    {
        event.preventDefault();
        var dropdownLinkRole = $(event.target).attr('role');

        if(dropdownLinkRole == "highlightInvalidGenes")
        {
            window.editorActionsManager.validateGenes();
        }
        else if(dropdownLinkRole == "removeHighlights")
        {
            window.editorActionsManager.removeInvalidGeneHighlights();
            window.editorActionsManager.removeHighlight();
        }
        else if (dropdownLinkRole == "goToSearch")
        {
            editorActionsManager.goToSearch();
        }
    })

    //TODO Toolbar part, we will refactor it later
    $("#gridGuideToolbarButtons img").click(function (event)
    {
        console.log("grid toolbar buttons clicked");
    });

    $("#viewToolbarButtons img").click(function (event)
    {
        console.log("view toolbar buttons clicked");
    });

})(window.$)
