module.exports = (function()
{
  var styleSheet = [
    {
      selector: 'node',
      style:
      {
        'content': function(ele){
          return contentFunction(ele);
        },
        'text-valign': 'center',
        'text-halign': 'center',
        'text-margin-y': 10,
        'color': '#1e2829',
        'width': 60,
        'height': 15,
        // 'background-image-opacity': 1,
        // 'background-image': function (ele)
        // {
        //   return backgroundImageHandler(ele);
        // },
        'background-color': '#fff',
        'background-opacity': 0.5,
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
      selector: 'node:parent',
      style:
      {
        'shape': function(ele)
        {
          return parentNodeShapeFunc( ele );
        },
        'text-valign': function(ele)
        {
          return 'bottom';
        },
        'text-margin-y' : 50,
        'padding-left': function(ele){ return compoundPaddingFunction(ele); },
        'padding-right': function(ele){ return compoundPaddingFunction(ele); },
        'padding-bottom': function(ele){ return compoundPaddingFunction(ele); },
        'padding-top':  function(ele){ return compoundPaddingFunction(ele); },
        'background-opacity': 0.5,
        'border-width': function(ele)
        {
          return parentBorderWidthFunction( ele );
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


  var compoundPaddingFunction = function( ele )
  {
    switch (ele._private.data['type'])
    {
      case "FAMILY": return 5; break;
      case "COMPARTMENT": return 10; break;
      case "PROCESS": return 10; break;
      default: return 5; break;
    }
  }

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
      case "GENE": return 'center'; break;
      case "FAMILY": return 'top'; break;
      case "COMPARTMENT": return 'top'; break;
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

  var parentBorderWidthFunction = function( ele )
  {
    switch (ele._private.data['type'])
    {
      case "GENE": return 0.5; break;
      case "PROCESS": return 1.0; break;
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

  // var backgroundImageHandler = function(ele)
  // {
  //   var dataURI = "data:image/svg+xml,";
  //   var svgNameSpace = 'http://www.w3.org/2000/svg';
  //
  //
  //   var svg = document.createElementNS(svgNameSpace,'svg');
  //   //TODO it seems this should be set according to the node size !
  //   svg.setAttribute('width', 60);
  //   svg.setAttribute('height', 15);
  //   //This is important you need to include this to succesfully render in cytoscape.js!
  //   svg.setAttribute('xmlns', svgNameSpace);
  //
  //   //Background Rect
  //   var rect = document.createElementNS(svgNameSpace, 'rect');
  //   rect.setAttribute('x', 0);
  //   rect.setAttribute('y', 0);
  //   rect.setAttribute('width', 60);
  //   rect.setAttribute('height', 15);
  //   rect.setAttribute('style', "fill:rgb(255,255,255);opacity:0");
  //
  //   //Overlay Data Rect
  //   var overlayRect = document.createElementNS(svgNameSpace, 'rect');
  //   overlayRect.setAttribute('x', 30);
  //   overlayRect.setAttribute('y', 7);
  //   overlayRect.setAttribute('width', 10);
  //   overlayRect.setAttribute('height', 10);
  //   overlayRect.setAttribute('style', "fill:rgb(255,0,0)");
  //
  //   svg.appendChild(rect);
  //   svg.appendChild(overlayRect);
  //
  //   return dataURI+svg.outerHTML;
  // }

  return styleSheet;
})();


