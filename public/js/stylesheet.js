var cytoscape = require('cytoscape');

var styleSheet = cytoscape.stylesheet()
.selector('node')
.css({
  'content': 'data(name)',
  'text-valign': 'center',
  'color': '#1e2829',
  'width': 80,
  'height': 40,
  'background-color': '#fff',
  'shape': 'roundrectangle',
  'border-width': 1,
  'border-color': '#1e2829',
  'font-size': 9
})
.selector('edge')
.css({
  'curve-style': 'bezier',
  'target-arrow-shape': 'triangle',
  'width': 2,
  'line-color': '#898d98',
  'target-arrow-color': '#898d98',
  'opacity': 0.8
})
.selector('node:parent')
.css({
  'background-color': '#fff',
  'border-color': '#000000',
  'border-width': 2
})
.selector('node:selected')
.css({
})
.selector(':selected')
.css({
  'shadow-color' : '#faff0e',
  'shadow-opacity': 0.8
})
.selector('.faded')
.css({
  'opacity': 0.25,
  'text-opacity': 0
});

module.exports = styleSheet;
