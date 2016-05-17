var styleSheet = [
{
      selector: 'node',
      style:
      {
        'content': 'data(name)',
        'text-valign': 'center',
        'color': '#1e2829',
        'width': 50,
        'height': 20,
        'background-color': '#fff',
        'shape': 'roundrectangle',
        'border-width': 0.5,
        'border-color': '#1e2829',
        'font-size': 7
      }
    },
    {
      selector: "node.changeContent",
      style:{
        'content': 'data(name)'
      }
    },
    {
        selector: 'node:parent',
        style:
        {
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
