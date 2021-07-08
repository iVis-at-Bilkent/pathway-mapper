module.exports = (function()
{
  var styleSheet = [
    {
      selector: 'node',
      style:
      {
        'text-valign': 'center',
        'text-halign': 'center',
        'color': '#1e2829',
        'width': function (ele)
        {
          return ele.data('w') || 0;
        },
        'height': function (ele)
        {
          return ele.data('h') || 0;
        },
        'background-color': 'white',
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
        'font-size': 14,
        'background-opacity': function(ele)
        {
          return nodeBackgroundOpacityFunction(ele);
        },
      }
    },
    {
      selector: 'node[name]',
      style: {
        'label': 'data(name)'
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
        'text-margin-y' : 2,
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
    /*{ 
      selector: 'node[type = FAMILY ]',
      style: 
      {
        'background-opacity': 0.5,
      }
    },*/
    {
      selector: 'edge',
      style:
      {
        'arrow-scale': 1.7,
        'curve-style': 'bezier',
        'text-background-color': '#EEEEEE',
        'text-background-opacity': 0,
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
        'opacity': 1,

      }
    },
    {
      selector: 'edge[name]',
      style: {
        'label': function(edge) {
          const label = edge.data('name');
          if (label === "") {
            return label;
          }
          //https://github.com/cytoscape/cytoscape.js/issues/2329
          return (label + "\n \u2060"); 
        },
        'text-wrap': 'wrap',
        'edge-text-rotation': 'autorotate',
        'text-background-opacity': '0'
      }
    },

    // some style for the Edge Handles !!!

    {
      selector: '.eh-handle',
      style: {
        'background-color': '#1abc9c',
        'width': 12,
        'height': 12,
        'shape': 'ellipse',
        'overlay-opacity': 0,
        'border-width': 12, // makes the handle easier to hit
        'border-opacity': 0
      }
    },

    {
      selector: '.eh-hover',
      css: {
        'background-color': '#1abc9c'
      }
    },

    {
      selector: '.eh-source',
      css: {
        'border-width': 2,
        'border-color': '#1abc9c'
      }
    },

    {
      selector: '.eh-target',
      css: {
        'border-width': 2,
        'background-color': '#1abc9c',
        'border-color': '#1abc9c'
      }
    },

    {
      selector: '.eh-preview, .eh-ghost-edge',
      css: {
        'line-color': '#1abc9c',
        'target-arrow-color': '#1abc9c',
        'source-arrow-color': '#1abc9c'
      }
    },

    {
      selector: '.highlightedEdge',
      style:
          {
              'width': 3.5,
              'border-width':4,
              'line-color' : '#1abc9c' ,
              'target-arrow-color': '#1abc9c',
              'arrow-scale': 2
          }
    },
    {
      selector: '.highlightedNode',
      style:
      {
          'border-width': function(ele)
          {
              return highlightedBorderWidthFunction( ele );
          },
          'border-color': '#1abc9c',
          'background-color': '#fff',
      }
    },
    {
      selector: '.invalidGene',
      style:
      {
          'border-width': 2,
          'border-color': '#e94332',
          'color': '#e94332'
      }
    },
    {
      // The css properties when a node is highlighted and an invalid gene
      selector: '.invalidGeneHighlight',
      style:
      {
          'border-width': 3,
          'font-weight' : 'bold',
          'border-color': '#e94332',
          'color': '#e94332',
      }
    },
    {
        selector: 'node:selected',
        style:
            {
                'border-width': function(ele)
                {
                    return selectedBorderWidthFunction( ele );
                },
                'border-color' : '#ffc90e', /*#f1c40f'*/
            }
    },
    {
        selector: '.highlightedNode:selected, .invalidGeneHighlight:selected',
        style:
            {
                'border-width': function(ele)
                {
                    return selectedHighlightedBorderWidthFunction( ele );
                },
            }
    },
    {
        selector: 'edge:selected',
        style:
            {
                'width' : 3,
                'line-color' : '#ffc90e',
                'target-arrow-color': '#ffc90e'
            }
    },
  ];


  var nodeBackgroundOpacityFunction = function( ele )
  {
    switch (ele._private.data['type'])
    {
      case "FAMILY": return 0.5;
      case "COMPLEX": return 0.5;
      case "COMPARTMENT": return 0.5;
      default: return 1;
    }
  };


  var compoundPaddingFunction = function( ele )
  {
    switch (ele._private.data['type'])
    {
      case "FAMILY": return 5;
      case "COMPLEX": return '5'; 
      case "COMPARTMENT": return 10;
      case "PROCESS": return 10;
      default: return 5;
    }
  };

  var contentFunction = function( ele )
  {
    if (ele._private.data.name) {
      return ele._private.data.name;
    }
    return 'newNode';
  };

  var vTextPositionFunction = function( ele )
  {
    switch (ele._private.data['type'])
    {
      case "GENE": return 'center';
      case "FAMILY": return 'top';
      case "COMPLEX": return 'top';
      case "COMPARTMENT": return 'top';
      default: return 'center';
    }
  };

  var borderWidthFunction = function( ele )
  {
    switch (ele._private.data['type'])
    {
      case "GENE": return 1;
      case "PROCESS": return 0;
      case "FAMILY": return 2;
      case "COMPARTMENT": return 4;
      default: return 1;
    }
  };

  var parentBorderWidthFunction = function( ele )
  {
    switch (ele._private.data['type'])
    {
      case "GENE": return 1;
      case "PROCESS": return 0;
      case "FAMILY": return 2;
      case "COMPLEX": return 1;
      case "COMPARTMENT": return 4;
      default: return 1;
    }
  };

  var highlightedBorderWidthFunction = function( ele )
  {
      switch (ele._private.data['type'])
      {
          case "GENE": return 3;
          case "PROCESS": return 1;
          case "FAMILY": return 4;
          case "COMPARTMENT": return 6;
          default: return 3;
      }
  };

    var selectedBorderWidthFunction = function( ele )
    {
        switch (ele._private.data['type'])
        {
            case "GENE": return 2;
            case "PROCESS": return 1;
            case "FAMILY": return 3;
            case "COMPARTMENT": return 5;
            default: return 2;
        }
    };
    var selectedHighlightedBorderWidthFunction = function( ele )
    {
        switch (ele._private.data['type'])
        {
            case "GENE": return 3;
            case "PROCESS": return 1;
            case "FAMILY": return 4;
            case "COMPARTMENT": return 6;
            default: return 3;
        }
    };


  var parentNodeShapeFunc = function( ele )
  {
    switch (ele._private.data['type'])
    {
      case "GENE": return "roundrectangle";
      case "PROCESS": return "roundrectangle";
      case "FAMILY": return "rectangle";
      case "COMPARTMENT": return "roundrectangle";
      case "COMPLEX": return "rectangle";
      default: return "roundrectangle";
    }
  };

  var nodeBackgroundColorFunction = function( ele )
  {
    return "#fff";
  };

  var nodeBorderColorFunction = function( ele )
  {
    switch (ele._private.data['type'])
    {
      case "GENE": return "#00000a";
      case "FAMILY": return "#a3a3a3";
      case "COMPLEX": return "#000000";
      case "COMPARTMENT": return "#000000";
      default: return "#000000";
    }
  };

  var edgeColorHandler = function( ele )
  {
    return "#1b1b1b";
  };

  var edgeTargetArrowTypeHandler = function( ele )
  {
    switch (ele._private.data['type']){
      case "ACTIVATES": return "triangle";
      case "INHIBITS": return "tee";
      case "INDUCES": return "triangle";
      case "REPRESSES": return "tee";
      case "BINDS": return "none";
      default: return "none";
    }
  };

  var edgeLineTypeHandler = function( ele )
  {
    switch (ele._private.data['type']){
      case "ACTIVATES": return "solid";
      case "INHIBITS": return "solid";
      case "INDUCES": return "dashed";
      case "REPRESSES": return "dashed";
      case "BINDS": return "solid";
      default: return "solid";
    }
  };

  return styleSheet;
})();
