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
        'width': 60,
        'height': 15,
        'background-color': '#fff',
        'background-opacity': 0.5,
        'text-margin-y' : 50,
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
          return nodeBorderColorFunction(ele);
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
          'padding-left': 5,
          'padding-right': 5,
          'padding-bottom': 5,
          'padding-top': 5,
          'background-opacity': 0.5,
          'border-width': function(ele)
          {
              return borderWidthFunction( ele );
          },
          'border-color': function(ele)
          {
            return nodeBorderColorFunction(ele);
          },
          'background-color': function(ele){
            return nodeBackgroundColorFunction(ele);
          }
        }
    },
    {
      selector: 'edge',
      style:
      {
        'curve-style': 'bezier',
        'target-arrow-shape': function( ele )
        {
            return edgeTargetArrowTypeHandler(ele);
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
        'line-style': function(ele)
        {
            return edgeLineTypeHandler(ele);
        },
        'opacity': 1
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
      'shadow-color' : '#f1c40f',
      'shadow-opacity': 1.0
    }
  }
];


var contentFunction = function( ele )
{
  if (ele._private.data.name) {
    return ele._private.data.name;
  }
  return 'newNode';
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
    case "PROCESS": return 0; break;
    case "FAMILY": return 1.0; break;
    case "COMPARTMENT": return 2; break;
    default: return 0.5; break;
  }
}

var parentNodeShapeFunc = function( ele )
{
  switch (ele._private.data['type'])
  {
    case "GENE": return "roundrectangle"; break;
    case "PROCESS": return "roundrectangle"; break;
    case "FAMILY": return "rectangle"; break;
    case "COMPARTMENT": return "roundrectangle"; break;
    default: return "roundrectangle"; break;
  }
}

var nodeBackgroundColorFunction = function( ele )
{
  switch (ele._private.data['type'])
  {
    case "GENE": return "#fff"; break;
    case "FAMILY": return "#CCCCCC"; break;
    case "COMPARTMENT": return "#fff"; break;
    default: return "#fff"; break;
  }
}

var nodeBorderColorFunction = function( ele )
{
  switch (ele._private.data['type'])
  {
    case "GENE": return "#000000"; break;
    case "FAMILY": return "#CCCCCC"; break;
    case "COMPARTMENT": return "#000000"; break;
    default: return "#000000"; break;
  }
}

var edgeColorHandler = function( ele )
{
  // switch (ele._private.data['type']){
  //   case "ACTIVATES": return "#904930"; break;
  //   case "INHIBITS": return "#7B7EF7"; break;
  //   case "INDUCES": return "#ad47c2"; break;
  //   case "REPRESSES": return "#67C1A9"; break;
  //   case "BINDS": return "#67C1A9"; break;
  //   default: return "#989898"; break;
  // }
  return "#1b1b1b";
}

var edgeTargetArrowTypeHandler = function( ele )
{
    switch (ele._private.data['type']){
      case "ACTIVATES": return "triangle"; break;
      case "INHIBITS": return "tee"; break;
      case "INDUCES": return "triangle"; break;
      case "REPRESSES": return "tee"; break;
      case "BINDS": return "none"; break;
      default: return "none"; break;
    }
}

var edgeLineTypeHandler = function( ele )
{
    switch (ele._private.data['type']){
      case "ACTIVATES": return "solid"; break;
      case "INHIBITS": return "solid"; break;
      case "INDUCES": return "dashed"; break;
      case "REPRESSES": return "dashed"; break;
      case "BINDS": return "solid"; break;
      default: return "solid"; break;
    }
}


module.exports = styleSheet;
