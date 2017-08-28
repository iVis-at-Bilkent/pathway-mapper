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

            var that = this;
            //Set options initially false
            this.$el.find("#enableGrid").change(function(event)
            {
                that.$el.find("#enableGuides")[0].checked = false;
            });

            this.$el.find("#enableGuides").change(function(event)
            {
                that.$el.find("#enableGrid")[0].checked = false;
            });

            return this;
        },
        saveProperties: function(event)
        {
            var isGridEnabled = this.$el.find("#enableGrid").is(':checked');
            var isGuidelinesEnabled = this.$el.find("#enableGuides").is(':checked');
            window.gridOptionsManager.currentProperties.gridSpacing = Number(this.$el.find("#gridSize").val());

            var showGridEle = $( "img[role='showGrid']" );
            var snapToGridEle = $( "img[role='snapToGrid']" );
            var showGridEleParent = showGridEle.parent();
            var snapToGridEleParent = snapToGridEle.parent();

            if (!isGridEnabled && !isGuidelinesEnabled)
            {
                if (showGridEleParent.hasClass('toolbar-button-focused'))
                {
                    $("#gridGuideToolbarButtons").find("img[role='showGrid']").trigger("click");
                }
                else if (snapToGridEleParent.hasClass('toolbar-button-focused'))
                {
                    $("#gridGuideToolbarButtons").find("img[role='snapToGrid']").trigger("click");
                }
            }
            else if(isGridEnabled && !window.gridOptionsManager.currentProperties.drawGrid)
            {
                $("#gridGuideToolbarButtons").find("img[role='showGrid']").trigger("click");
            }
            else if(isGuidelinesEnabled && !window.gridOptionsManager.currentProperties.snapToAlignmentLocationDuringDrag)
            {
                $("#gridGuideToolbarButtons").find("img[role='snapToGrid']").trigger("click");
            }

            // var currentProperties = _.clone(window.gridOptionsManager.currentProperties);
            // currentProperties.gridSpacing = Number(this.$el.find("#gridSize").val());
            //
            // //Enable and snap to grid
            // currentProperties.drawGrid = this.$el.find("#enableGrid").is(':checked');
            // currentProperties.snapToGridDuringDrag = this.$el.find("#enableGrid").is(':checked');
            //
            // //Enable and snap to guidelines
            // currentProperties.geometricGuideline = this.$el.find("#enableGuides").is(':checked');
            // currentProperties.snapToAlignmentLocationDuringDrag = this.$el.find("#enableGuides").is(':checked');
            //
            // //TODO update grid options
            // window.gridOptionsManager.changeParameters(currentProperties);

            window.gridOptionsManager.refreshGridOptionsExtension();
            this.$el.modal('toggle');
        },
        changeParameters: function()
        {
            var currentProperties = _.clone(window.gridOptionsManager.currentProperties);
            this.$el.find("#gridSize").val(currentProperties.gridSpacing);
            this.$el.find("#enableGrid")[0].checked = currentProperties.drawGrid;
            this.$el.find("#enableGuides")[0].checked = currentProperties.geometricGuideline;
        }
    });


module.exports = gridOptionsView;
