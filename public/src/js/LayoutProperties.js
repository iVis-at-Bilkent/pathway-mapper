var layoutProps = Backbone.View.extend(
{
  defaultLayoutProperties: {
    name: 'cose-bilkent',
    nodeRepulsion: 4500,
    nodeOverlap: 10,
    idealEdgeLength: 50,
    edgeElasticity: 0.45,
    nestingFactor: 0.1,
    gravity: 0.25,
    numIter: 2500,
    tile: true,
    animate: true,
    randomize: true,
  },
  currentLayoutProperties: null,
  events:{
    '#save-layout click': 'saveLayoutHandler',
    '#default-layout click': 'defaultLayoutHandler'
  },
  initialize: function () {
    var self = this;
    self.copyProperties();

    var templateProperties = _.clone(self.currentLayoutProperties);

    self.template = _.template($("#layoutPropertiesTemplate").html());
    self.template(templateProperties);
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
  render: function () {
    var self = this;

    var templateProperties = _.clone(self.currentLayoutProperties);

    self.template = _.template($("#layoutPropertiesTemplate").html());
    var tplContent = self.template(templateProperties);
    this.$el.append(tplContent);
    return this.$el;
  },
  saveLayoutHandler: function(event)
  {
    self.currentLayoutProperties.nodeRepulsion = Number(document.getElementById("node-repulsion").value);
    self.currentLayoutProperties.nodeOverlap = Number(document.getElementById("node-overlap").value);
    self.currentLayoutProperties.idealEdgeLength = Number(document.getElementById("ideal-edge-length").value);
    self.currentLayoutProperties.edgeElasticity = Number(document.getElementById("edge-elasticity").value);
    self.currentLayoutProperties.nestingFactor = Number(document.getElementById("nesting-factor").value);
    self.currentLayoutProperties.gravity = Number(document.getElementById("gravity").value);
    self.currentLayoutProperties.numIter = Number(document.getElementById("num-iter").value);
    self.currentLayoutProperties.tile = document.getElementById("tile").checked;
    self.currentLayoutProperties.animate = document.getElementById("animate").checked;
    self.currentLayoutProperties.randomize = !document.getElementById("incremental").checked;
  },
  defaultLayoutHandler: function(event)
  {
    self.copyProperties();
    var templateProperties = _.clone(self.currentLayoutProperties);

    self.template = _.template($("#layout-settings-template").html());
    var tplContent = self.template(templateProperties);

    $(self.el).html(self.template);
  }
});

module.exports = layoutProps;
