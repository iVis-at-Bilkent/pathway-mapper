var ModelResultItem = Backbone.Model.extend({
  defaults:
  {
    label: 'NA',
    labelId: 'NA',
    model: 'NA',
    inserted_id: 'NA',
    confidenceScore: 0
  },
  initialize: function(){

  },
  toString: function()
  {
  }
});

module.exports = ModelResultItem;
