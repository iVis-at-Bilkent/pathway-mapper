;
module.exports = (function(cy)
{
  "use strict";
  window.edgeAddingMode = false;

  cy.cxtmenu({
    selector: 'core',
    commands: [
      {
        content: '<span class="fa fa-flash fa"></span>perform layout',
        select: function(ele)
        {
          cy.layout({name:'cose', padding: 50, animate: 'true'});
        }
      },
    ]
  });

  cy.cxtmenu({
    selector: 'node',
    commands:
    [
      {
        content: '<span class="fa fa-flash fa"></span>delete node(s)',
        select: function(ele)
        {
          cy.nodes(':selected').remove();
          ele.remove();
        }
      },
      {
        content: '<span class="fa fa-star"></span> create compound',
        select: function(ele)
        {
          var selectedNodes = cy.nodes(':selected').size() > 0 ? cy.$(':selected') : ele;
          var compNode = cy.add({group: "nodes"})[0];
          var compId = compNode.id();
          selectedNodes.move({parent: compId});
        }
      }
    ]
  });

  cy.cxtmenu({
    selector: 'edge',
    commands: [
      {
        content: '<span class="fa fa-flash fa"></span>delete edge(s)',
        select: function(ele)
        {
          cy.edges(':selected').remove();
          ele.remove();
        }
      }
    ]
  });
}(window.cy));
