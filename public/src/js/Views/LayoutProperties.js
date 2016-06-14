var layoutProps = Backbone.View.extend(
{
  defaultLayoutProperties:
  {
    name: 'cose-bilkent',
    nodeRepulsion: 4500,
    nodeOverlap: 10,
    idealEdgeLength: 50,
    edgeElasticity: 0.45,
    nestingFactor: 0.1,
    gravity: 0.25,
    numIter: 2500,
    tile: false,
    animate: "end",
    randomize: true,
  },
  currentLayoutProperties: null,
  events:{
    'click #save-layout': 'saveLayoutHandler',
    'click #default-layout': 'defaultLayoutHandler'
  },
  initialize: function ()
  {
    this.copyProperties();
  },
  copyProperties: function () {
    this.currentLayoutProperties = _.clone(this.defaultLayoutProperties);
  },
  applyLayout: function () {
    var options = this.currentLayoutProperties;
    options.fit = options.randomize;
    cy.elements().filter(':visible').layout(options);
  },
  applyIncrementalLayout: function ()
  {
    var options = _.clone(this.currentLayoutProperties);
    options.randomize = false;
    options.animate = false;
    options.fit = true;
    cy.elements().filter(':visible').layout(options);
  },
  render: function ()
  {
    var templateProperties = _.clone(this.currentLayoutProperties);
    this.template = _.template($("#layoutPropertiesTemplate").html());
    var tplContent = this.template(templateProperties);
    this.$el.empty();
    this.$el.append(tplContent);
    this.delegateEvents();
    return this.$el;
  },
  saveLayoutHandler: function(event)
  {
    this.currentLayoutProperties.nodeRepulsion = Number(this.$el.find("#node-repulsion").val());
    this.currentLayoutProperties.nodeOverlap = Number(this.$el.find("#node-overlap").val());
    this.currentLayoutProperties.idealEdgeLength = Number(this.$el.find("#ideal-edge-length").val());
    this.currentLayoutProperties.edgeElasticity = Number(this.$el.find("#edge-elasticity").val());
    this.currentLayoutProperties.nestingFactor = Number(this.$el.find("#nesting-factor").val());
    this.currentLayoutProperties.gravity = Number(this.$el.find("#gravity").val());
    this.currentLayoutProperties.numIter = Number(this.$el.find("#num-iter").val());
    this.currentLayoutProperties.tile = this.$el.find("#tile").is(':checked');
    this.currentLayoutProperties.animate = this.$el.find("#animate").is(':checked');
    this.currentLayoutProperties.randomize = !(this.$el.find("#randomize").is(':checked'));
    this.$el.parent().modal('toggle');
  },
  defaultLayoutHandler: function(event)
  {
    this.copyProperties();
    this.$el.find("#node-repulsion").val(this.currentLayoutProperties.nodeRepulsion);
    this.$el.find("#node-overlap").val(this.currentLayoutProperties.nodeOverlap);
    this.$el.find("#ideal-edge-length").val(this.currentLayoutProperties.idealEdgeLength);
    this.$el.find("#edge-elasticity").val(this.currentLayoutProperties.edgeElasticity);
    this.$el.find("#nesting-factor").val(this.currentLayoutProperties.nestingFactor);
    this.$el.find("#gravity").val(this.currentLayoutProperties.gravity);
    this.$el.find("#num-iter").val(this.currentLayoutProperties.numIter);
    this.$el.find("#tile")[0].checked = this.currentLayoutProperties.tile;
    this.$el.find("#animate")[0].checked = this.currentLayoutProperties.animate;
    this.$el.find("#randomize")[0].checked = !this.currentLayoutProperties.randomize;
  }
});

module.exports = layoutProps;
