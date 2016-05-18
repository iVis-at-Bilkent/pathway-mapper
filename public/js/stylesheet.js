var styleSheet = [
{
      selector: 'node',
      style:
      {
        'content': function(ele){
            return contentFunction(ele);
        },
        'text-valign': function(ele)
        {
          return 'center';
        },
        'color': '#1e2829',
        'width': 50,
        'height': 20,
        'background-color': '#fff',
        'shape': function(ele)
        {
            return parentNodeShapeFunc( ele );
        },
        'border-width': function(ele)
        {
            return borderWidthFunction( ele );
        },
        'border-color': function(ele)
        {
          return nodeColorFunction(ele);
        },
        'font-size': 7
      }
    },
    {
      selector: ':parent',
      style:
      {
        'shape': function(ele)
        {
            return parentNodeShapeFunc( ele );
        }
      }
    },
    {
        selector: 'node:parent',
        style:
        {
          'text-valign': function(ele)
          {
            return 'bottom';
          },
          'background-color': '#fff',
          'border-color': '#000000',
          'border-width': 2
        }
    },
    {
      selector: 'edge',
      style:
      {
        'curve-style': 'bezier',
        'target-arrow-shape': function( ele )
        {
            return 'none';
        },
        'width': 1,
        'line-color': function( ele )
        {
            return edgeColorHandler(ele);
        },
        'target-arrow-color': function( ele )
        {
            return edgeColorHandler(ele);
        },
        'opacity': 0.8
      }
  },
  // {
  //     selector: 'edge.segments',
  //     style:
  //     {
  //       'curve-style': 'segments',
  //       'segment-distances': '0 100',
  //       'segment-weights': '0 1'
  //     }
  // },
  {
    selector: ':selected',
    style:
    {
      'shadow-color' : '#faff0e',
      'shadow-opacity': 0.8
    }
  }
];


var contentFunction = function( ele )
{
  if (ele.id())
  {
    return ele.id();
  }
  else {
    return "";
  }
}

var vTextPositionFunction = function( ele )
{
  switch (ele._private.data['type'])
  {
    case "GENE": 'center'; break;
    case "FAMILY": 'top'; break;
    case "COMPARTMENT": 'top'; break;
    default: return 'center'; break;
  }
}

var borderWidthFunction = function( ele )
{
  switch (ele._private.data['type'])
  {
    case "GENE": return 0.5; break;
    case "FAMILY": return 2; break;
    case "COMPARTMENT": return 2; break;
    default: return 0.5; break;
  }
}

var parentNodeShapeFunc = function( ele )
{
  switch (ele._private.data['type'])
  {
    case "GENE": return "roundrectangle"; break;
    case "FAMILY": return "roundrectangle"; break;
    case "COMPARTMENT": return "rectangle"; break;
    default: return "roundrectangle"; break;
  }
}

var nodeColorFunction = function( ele )
{
  switch (ele._private.data['type'])
  {
    case "GENE": return "#616161"; break;
    case "FAMILY": return "#000000"; break;
    case "COMPARTMENT": return "#000000"; break;
    default: return "#000000"; break;
  }
}

var edgeColorHandler = function( ele )
{
  switch (ele._private.data['type']){
    case "IN_SAME_COMPONENT": return "#904930"; break;
    case "REACTS_WITH": return "#7B7EF7"; break;
    case "STATE_CHANGE": return "#67C1A9"; break;
    default: return "#989898"; break;
  }
}

var edgeArrowColorHandler = function( ele )
{
  switch (ele._private.data['type']){
    case "STATE_CHANGE": return "triangle"; break;
    default: return "none"; break;
  }
}


module.exports = styleSheet;
