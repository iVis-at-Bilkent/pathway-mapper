var cytoscape = require('cytoscape');

var styleSheet = cytoscape.stylesheet()
  .selector('node')
    .css({
      'content': 'data(name)',
      'text-valign': 'center',
      'color': 'white',
      'text-outline-width': 2,
      'text-outline-color': '#888'
    })
  .selector('edge')
    .css({
      'target-arrow-shape': 'triangle'
    })
  .selector('node:parent')
        .css({
          'background-color': '#ffffff',
          'border-color': '#963d14',
          'border-width': 2
  })
  .selector(':selected')
    .css({
      'background-color': '#f99b70',
      'border-color': '#f99b70'
    })
  .selector('.faded')
    .css({
      'opacity': 0.25,
      'text-opacity': 0
    });

module.exports = styleSheet;
