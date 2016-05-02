var cytoscape = require('cytoscape');

var styleSheet = cytoscape.stylesheet()
  .selector('node')
    .css({
      'content': 'data(name)',
      'text-valign': 'center',
      'color': '#000000',
      'width': 80,
      'height': 40,
      'background-color': 'white',
      'shape': 'roundrectangle',
      'border-width': 1,
      'border-color': '#3e3e3e',
      'font-size': 9
    })
  .selector('edge')
    .css({
      'curve-style': 'bezier',
      'target-arrow-shape': 'tee',
      'line-color': '#35aef2',
    })
  .selector('node:parent')
        .css({
          'background-color': '#ffffff',
          'border-color': '#000000',
          'border-width': 2
  })
  .selector(':selected')
    .css({
      'border-color': '#f99b70',
      'line-color': '#f99b70',
      'target-arrow-color': '#f99b70'
    })
  .selector('.faded')
    .css({
      'opacity': 0.25,
      'text-opacity': 0
    });

module.exports = styleSheet;
