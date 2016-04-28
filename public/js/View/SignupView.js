var SignupView = Backbone.View.extend(
{
  tag: "div",
  className: "resultList",
  cachedItemTpl: _.template($('#item-view-template').html()),
  cachedItemLocalizationTpl: _.template($('#item-view-localization-template').html()),
  initialize: function(options)
  {
  },
  events: {
  },
  render: function()
  {

  },
});

module.exports = SignupView;
