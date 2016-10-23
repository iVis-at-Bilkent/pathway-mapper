var pathwayDetails = Backbone.View.extend(
{
    currentLayoutProperties: null,
    events:
    {
        'click #savePathwayDetails': 'saveHandler'
    },
    initialize: function (options)
    {
        this.properties =
        {
            pathwayName: "pathway.txt",
            pathwayTitle: "New Pathway",
            pathwayDescription: ""
        };
    },
    saveHandler: function(event)
    {
        this.properties.pathwayName = this.$el.find("#pName").val();
        this.properties.pathwayTitle = this.$el.find("#pTitle").val();
        this.properties.pathwayDescription = this.$el.find("#pDesc").val();

    },
    copyProperties: function (params)
    {
        this.currentLayoutProperties = _.clone(params);
    },
    render: function ()
    {
        this.template = _.template($("#pathwayDetailsTemplate").html());
        var tplContent = this.template(this.properties);
        this.$el.empty();
        this.$el.append(tplContent);
        this.delegateEvents();
        this.$el;
        return this;
    }
});

module.exports = pathwayDetails;
