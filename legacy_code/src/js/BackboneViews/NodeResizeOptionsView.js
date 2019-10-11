var nodeResizeOptionsView = Backbone.View.extend(
    {
        currentProperties: null,
        events:{
            "click #applyNodeResizeOptions": "saveProperties"
        },
        initialize: function (options)
        {
        },
        copyProperties: function (params)
        {
        },
        render: function ()
        {
            // var templateProperties = _.clone(this.currentProperties);
            this.template = _.template($("#nodeResizeOptionsTemplate").html());
            var tplContent = this.template({jsVariable: "hello"});
            this.$el.empty();
            this.$el.append(tplContent);
            this.delegateEvents();
        },
        saveProperties: function(event)
        {
            this.$el.modal('toggle');
        },
        changeParameters: function()
        {
        },
        defaultLayoutHandler: function(event)
        {

        }
    });


module.exports = nodeResizeOptionsView;
