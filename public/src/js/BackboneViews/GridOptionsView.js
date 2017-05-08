var gridOptionsView = Backbone.View.extend(
    {
        currentProperties: null,
        events:{
            "click #applyGridOptions": "saveProperties"
        },
        initialize: function (options)
        {
            this.copyProperties(window.gridOptionsManager.getDefaultOptions());
        },
        copyProperties: function (params)
        {
           window.gridOptionsManager.changeParameters(params);
        },
        render: function ()
        {
            var templateProperties = _.clone(window.gridOptionsManager.currentProperties);
            this.template = _.template($("#gridOptionsTemplate").html());
            var tplContent = this.template(templateProperties);
            this.$el.empty();
            this.$el.append(tplContent);
            this.delegateEvents();
        },
        saveProperties: function(event)
        {
            var currentProperties = _.clone(window.gridOptionsManager.currentProperties);
            currentProperties.gridSpacing = Number(this.$el.find("#gridSize").val());
            currentProperties.drawGrid = this.$el.find("#showGrid").is(':checked');
            currentProperties.geometricGuideline = this.$el.find("#showGuides").is(':checked');
            currentProperties.snapToGrid = this.$el.find("#snapToGrid").is(':checked');
            currentProperties.guidelinesStyle.strokeStyle = this.$el.find('input[type="color"]').val();

            //TODO update grid options
            window.gridOptionsManager.changeParameters(currentProperties);

            this.$el.modal('toggle');
        },
        changeParameters: function()
        {
            var currentProperties = _.clone(window.gridOptionsManager.currentProperties);
            this.$el.find("#gridSize").val(currentProperties.gridSpacing);
            this.$el.find("#showGrid")[0].checked = currentProperties.drawGrid;
            this.$el.find("#showGuides")[0].checked = currentProperties.geometricGuideline;
            this.$el.find('input[type="color"]').val(currentProperties.guidelinesStyle.strokeStyle);
        }
    });


module.exports = gridOptionsView;
