import EditorActionsManager from "./EditorActionsManager";

export default class ViewOperationsManager{
    movedNodes: any[];
    editor: EditorActionsManager;
    cy: any;

    constructor(editor: EditorActionsManager,cy: any)
    {
        this.cy = cy;
        this.editor = editor;
        this.movedNodes = [];
    }

    //TODO use align function from cytoscape.js-grid-guide extension
    handleNodeAlignment(param)
    {
        var tmpNodes = this.editor.selectedNodeStack;
        var nodes = this.cy.collection();
        var nodeMap = {};
        this.movedNodes = [];

        for (const key in tmpNodes)
        {
            nodes = nodes.add(tmpNodes[key]);
        }

        nodes.forEach(function(node)
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
            //OuterHeight variable added due to miscalculation of boundingBox function in pathwaymapper
            var firstOuterHeight = firstSelected.outerHeight();
            var self = this;
            nodes.forEach(function(node,index)
            {
                if (index == 0)
                {
                    return ;
                }

                //If parent of selected node is in selection do nothing !
                if (nodeMap[node.parent().id()] == null)
                {
                    var newPosition = self.calculateNewPosition(param, node, firstBbox, firstOuterHeight);
                    //Recursively traverse leaf nodes
                    self.changePosition(node,0,0,newPosition);
                }
            });
            this.editor.handleChangePositionByAlignment(self.movedNodes);
        }
    }

    /*
     Determine new position according to the alignment
     node that node.position works on center positions thats why all calculations
     are performed accordingly
     */
    calculateNewPosition(param, node, referenceBbox, referenceOuterHeight)
    {
        var currentPos = node.position();
        var currentBbox = node.boundingBox();
        var newPosition;
        //This parameter is used to move the compounds less upwards when they contain label
        var moveParam = node.isParent() ? node.outerHeight() - ((currentBbox.h - node.outerHeight())/2) - ((node.outerHeight() - node.height())/2) : node.height();
        //This param is used only when the node is parent, for simple nodes is 0
        var labelHeight = node.isParent()? currentBbox.h - node.outerHeight(): 0;

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
        //Checks for the case where compounds don't have names (name isn't taken in consideration in that case)
        else if (param === 'hMid' && node.isParent() && node.data('name') == "")
        {
            newPosition = {x: currentPos.x, y: referenceBbox.y1 + referenceBbox.h/2};
        }
        else if (param === 'hMid' )
        {
            newPosition = {x: currentPos.x, y: referenceBbox.y1 + referenceOuterHeight/2 + labelHeight/2};
        }
        //Checks for the case where compounds don't have names (name isn't taken in consideration in that case)
        else if (param === 'hBot' && node.isParent() && node.data('name') == "")
        {
            newPosition = {x: currentPos.x, y: referenceBbox.y2 - currentBbox.h/2};
        }
        else if (param === 'hBot')
        {
            newPosition = {x: currentPos.x, y: referenceBbox.y1 + referenceOuterHeight - moveParam/2};
        }
        else {
            console.log('Error: wrong alignment name ' + param);
            return;
        }

        return newPosition;
    }

    //Recursively move leaf nodes
    changePosition(node, dx, dy, newPos)
    {
        if (node.isParent())
        {
            var childNodes = node.children();
            var parentBbox = node.boundingBox();
            var self = this;
            childNodes.forEach(function(childNode, index)
            {
                var childBbox = childNode.boundingBox();
                var _dx = -(parentBbox.x1 - childBbox.x1)-parentBbox.w/2+childBbox.w/2;
                var _dy = -(parentBbox.y1 - childBbox.y1)-parentBbox.h/2+childBbox.h/2;

                //If further compound node is found, set position accordingly
                if (childNode.isParent())
                {
                    self.changePosition(childNode, 0, 0, {x: newPos.x+_dx, y:newPos.y+_dy});
                }
                else
                {
                    self.changePosition(childNode, _dx, _dy, newPos);
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

            this.movedNodes.push({node: node, nextPosition: position, oldPosition: null});
        }
    }

}
