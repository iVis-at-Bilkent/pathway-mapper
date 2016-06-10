module.exports = (function($)
{
  'use strict';

  function handleNodeAlignment(param)
  {
    var nodes = cy.nodes(':selected');
    if (nodes.length > 0)
    {
      var firstSelected = nodes[0];
      var firstBbox = firstSelected.boundingBox();

      nodes.forEach(function(node,index)
      {
        if (index == 0)
        {
          return;
        }

        var currentPos = node.position();
        var currentBbox = node.boundingBox();

        if (param === 'vLeft')
        {
          node.position({x: firstBbox.x1+currentBbox.w/2, y: currentPos.y});
        }
        else if (param === 'vCen')
        {
          node.position({x: firstBbox.x1+firstBbox.w/2, y: currentPos.y});
        }
        else if (param === 'vRight')
        {
          node.position({x: firstBbox.x2-currentBbox.w/2, y: currentPos.y});
        }
        else if (param === 'hTop')
        {
          node.position({x: currentPos.x, y: firstBbox.y1 + currentBbox.h/2});
        }
        else if (param === 'hMid')
        {
          node.position({x: currentPos.x, y: firstBbox.y1+firstBbox.h/2});
        }
        else if (param === 'hBot')
        {
          node.position({x: currentPos.x, y: firstBbox.y2 - + currentBbox.h/2});
        }
      });
    }
  }

  //Recursively moves leaf nodes
  function moveNode(){}

  $(".viewDropdown").click(function(event)
  {
    event.preventDefault();
    var dropdownLinkRole = $(event.target).attr('role');
    handleNodeAlignment(dropdownLinkRole);
  });

})(window.$)
