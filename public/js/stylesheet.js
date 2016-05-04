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
        'target-arrow-shape': 'triangle',
        'width': 0.5,
        'line-color': '#898d98',
        'target-arrow-color': '#898d98',
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


module.exports = styleSheet;
