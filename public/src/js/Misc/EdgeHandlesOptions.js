;
// the default values of each option are outlined below:
var edgeHandleDefaults =
{
  preview: true, // whether to show added edges preview before releasing selection
  stackOrder: 4, // Controls stack order of edgehandles canvas element by setting it's z-index
  handleSize: 10, // the size of the edge handle put on nodes
  handleColor: '#1abc9c', // the colour of the handle and the line drawn from it
  handleLineType: 'ghost', // can be 'ghost' for real edge, 'straight' for a straight line, or 'draw' for a draw-as-you-go line
  handleLineWidth: 1, // width of handle line in pixels
  handleNodes: 'node', // selector/filter function for whether edges can be made from a given node
  hoverDelay: 1, // time spend over a target node before it is considered a target selection
  cxt: false, // whether cxt events trigger edgehandles (useful on touch)
  enabled: false, // whether to start the extension in the enabled state
  toggleOffOnLeave: true, // whether an edge is cancelled by leaving a node (true), or whether you need to go over again to cancel (false; allows multiple edges in one pass)
  edgeType: function( sourceNode, targetNode ) {
    // can return 'flat' for flat edges between nodes or 'node' for intermediate node between them
    // returning null/undefined means an edge can't be added between the two nodes
    return 'flat';
  },
  loopAllowed: function( node ) {
    // for the specified node, return whether edges from itself to itself are allowed
    return false;
  },
  nodeLoopOffset: -50, // offset for edgeType: 'node' loops
  nodeParams: function( sourceNode, targetNode ) {
    // for edges between the specified source and target
    // return element object to be passed to cy.add() for intermediary node
    return {};
  },
  edgeParams: function( sourceNode, targetNode, i ) {
    // for edges between the specified source and target
    // return element object to be passed to cy.add() for edge
    // NB: i indicates edge index in case of edgeType: 'node'
    return {};
  },
  start: function( sourceNode )
  {
    // fired when edgehandles interaction starts (drag on handle)
    var type = this.getGlobalEdgeType();
    cy.edgehandles('option', 'ghostEdgeType', type);
  },
  complete: function( sourceNode, targetNodes, addedEntities )
  {
      //  // Remove recently added edge !
      //  // FBI takes this case from now on :O
      //  // We will take care of addition in our manager :)
      cy.remove(addedEntities);
      window.editorActionsManager.addEdge({
        source: sourceNode.id(),
        target: targetNodes[0].id(),
        type: this.getGlobalEdgeType(),
        pubmedIDs: [],
        name: ""
      });
  },
  stop: function( sourceNode )
  {
    // fired when edgehandles interaction is stopped (either complete with added edges or incomplete)
    //TODO refactor this, so terrible for now
    $('.edge-palette a').blur().removeClass('active');
    window.edgeAddingMode == -1;
    cy.edgehandles('disable');

  },
  getGlobalEdgeType: function()
  {
    var type = "NONE";
    if (window.edgeAddingMode == 1)
    {
      type = 'ACTIVATES';
    }
    else if (window.edgeAddingMode == 2)
    {
      type = 'INHIBITS';
    }
    else if (window.edgeAddingMode == 3)
    {
      type = 'INDUCES';
    }
    else if (window.edgeAddingMode == 4)
    {
      type = 'REPRESSES';
    }
    else if (window.edgeAddingMode == 5)
    {
      type = 'BINDS';
    }
    return type;
  }
};

module.exports = edgeHandleDefaults;
