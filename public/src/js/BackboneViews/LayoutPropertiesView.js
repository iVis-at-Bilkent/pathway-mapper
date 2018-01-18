var layoutProps = Backbone.View.extend(
{
  currentLayoutProperties: null,
  events:{
    'click #save-layout': 'saveLayoutHandler',
    'click #default-layout': 'defaultLayoutHandler'
  },
  initialize: function (options)
  {
    //A reference to editor actions manager
    this.editorActionsManagerRef = options.editorActionsManager;
    this.copyProperties(this.editorActionsManagerRef.layoutProperties);

    //Subscribe this object as observer to the editor actions manager
    //So that it will be notified when necessary easily
    this.editorActionsManagerRef.registerObserver(this);
  },
  copyProperties: function (params)
  {
    this.currentLayoutProperties = _.clone(params);
  },
  render: function ()
  {
    var templateProperties = _.clone(this.currentLayoutProperties);
    this.template = _.template($("#layoutPropertiesTemplate").html());
    var tplContent = this.template(templateProperties);
    this.$el.empty();
    this.$el.append(tplContent);

    this.delegateEvents();
  },
  saveLayoutHandler: function(event)
  {
    this.currentLayoutProperties.nodeRepulsion = Number(this.$el.find("#node-repulsion").val());
    this.currentLayoutProperties.idealEdgeLength = Number(this.$el.find("#ideal-edge-length").val());
    this.currentLayoutProperties.edgeElasticity = Number(this.$el.find("#edge-elasticity").val());
    this.currentLayoutProperties.nestingFactor = Number(this.$el.find("#nesting-factor").val());
    this.currentLayoutProperties.gravity = Number(this.$el.find("#gravity").val());
    this.currentLayoutProperties.numIter = Number(this.$el.find("#num-iter").val());
    this.currentLayoutProperties.gravityRangeCompound = Number(this.$el.find("#comp-gravRange").val());
    this.currentLayoutProperties.gravityCompound = Number(this.$el.find("#comp-grav").val());
    this.currentLayoutProperties.gravityRange = Number(this.$el.find("#grav-range").val());
    this.currentLayoutProperties.tilingPaddingVertical = Number(this.$el.find("#tile-verticalPadding").val());
    this.currentLayoutProperties.tilingPaddingHorizontal = Number(this.$el.find("#tile-horizontalPadding").val());
    this.currentLayoutProperties.initialEnergyOnIncremental = Number(this.$el.find("#incr-coolingFactor").val());

    this.currentLayoutProperties.tile = this.$el.find("#tile").is(':checked');
    this.currentLayoutProperties.animate = this.$el.find("#animate").is(':checked');
    this.currentLayoutProperties.randomize = !(this.$el.find("#randomize").is(':checked'));

    // Call a function from editor actions manager that saves layout properties on local usage and
    // Updates real time model in collaborative usage
    this.editorActionsManagerRef.saveLayoutProperties(this.currentLayoutProperties);
    this.$el.modal('toggle');
  },
  changeParameters: function()
  {
    this.$el.find("#node-repulsion").val(this.currentLayoutProperties.nodeRepulsion);
    // this.$el.find("#node-overlap").val(this.currentLayoutProperties.nodeOverlap);
    this.$el.find("#ideal-edge-length").val(this.currentLayoutProperties.idealEdgeLength);
    this.$el.find("#edge-elasticity").val(this.currentLayoutProperties.edgeElasticity);
    this.$el.find("#nesting-factor").val(this.currentLayoutProperties.nestingFactor);
    this.$el.find("#gravity").val(this.currentLayoutProperties.gravity);
    this.$el.find("#comp-gravRange").val(this.currentLayoutProperties.gravityRangeCompound);
    this.$el.find("#comp-grav").val(this.currentLayoutProperties.gravityCompound);
    this.$el.find("#grav-range").val(this.currentLayoutProperties.gravityRange);
    this.$el.find("#tile-verticalPadding").val(this.currentLayoutProperties.tilingPaddingVertical);
    this.$el.find("#tile-horizontalPadding").val(this.currentLayoutProperties.tilingPaddingHorizontal);
    this.$el.find("#incr-coolingFactor").val(this.currentLayoutProperties.initialEnergyOnIncremental);

    this.$el.find("#num-iter").val(this.currentLayoutProperties.numIter);
    this.$el.find("#tile")[0].checked = this.currentLayoutProperties.tile;
    this.$el.find("#animate")[0].checked = this.currentLayoutProperties.animate;
    this.$el.find("#randomize")[0].checked = !this.currentLayoutProperties.randomize;
  },
  defaultLayoutHandler: function(event)
  {
    this.copyProperties(this.editorActionsManagerRef.defaultLayoutProperties);
    this.changeParameters();
  },
  //For observer observable pattern usage !!!!
  notify: function()
  {
    //Editor actions manager notified us here, that means layout properties on editor actions manager
    //is changed. reflect it to view
    this.copyProperties(this.editorActionsManagerRef.layoutProperties);
    this.changeParameters();
  }
});

module.exports = layoutProps;
