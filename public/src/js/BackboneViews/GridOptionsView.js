var gridOptionsView = Backbone.View.extend(
    {
        currentProperties: null,
        events:{
            "click #applyGridOptions": "saveProperties"
        },
        initialize: function (options)
        {
            this.defaultGridGuideOptions = {
                snapToGrid: false, // Snap to grid functionality
                discreteDrag: false, // Discrete Drag
                guidelines: true, // Guidelines on dragging nodes
                resize: false, // Adjust node sizes to cell sizes
                gridSpacing: 20,
                parentPadding: false, // Adjust parent sizes to cell sizes by padding
                drawGrid: false, // Draw grid background
                // Guidelines
                guidelinesStackOrder: 4, // z-index of guidelines
                guidelinesTolerance: 2.00, // Tolerance distance for rendered positions of nodes' interaction.
                guidelinesStyle:
                { // Set ctx properties of line. Properties are here:
                    lineWidth: 2.0,
                    strokeStyle: "#000000",
                    lineDash: [7, 15] // read https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
                }
            };

            this.copyProperties(this.defaultGridGuideOptions);
            cy.gridGuide(this.currentProperties);
        },
        copyProperties: function (params)
        {
            this.currentProperties = _.clone(params);
        },
        render: function ()
        {
            var templateProperties = _.clone(this.currentProperties);
            this.template = _.template($("#gridOptionsTemplate").html());
            var tplContent = this.template(templateProperties);
            this.$el.empty();
            this.$el.append(tplContent);
            this.delegateEvents();
        },
        saveProperties: function(event)
        {
            this.currentProperties.gridSpacing = Number(this.$el.find("#gridSize").val());
            this.currentProperties.drawGrid = this.$el.find("#showGrid").is(':checked');
            this.currentProperties.guidelines = this.$el.find("#showGuides").is(':checked');
            this.currentProperties.snapToGrid = this.$el.find("#snapToGrid").is(':checked');
            this.currentProperties.guidelinesStyle.strokeStyle = this.$el.find('input[type="color"]').val();


            //TODO update grid options
            cy.gridGuide(this.currentProperties);

            this.$el.modal('toggle');
        },
        changeParameters: function()
        {
            this.$el.find("#gridSize").val(this.currentProperties.gridSize);
            this.$el.find("#showGrid")[0].checked = this.currentProperties.showGrid;
            this.$el.find("#showGuides")[0].checked = this.currentProperties.showGuides;
            this.$el.find('input[type="color"]').val(this.currentProperties.guidelinesStyle.strokeStyle);
        },
        defaultLayoutHandler: function(event)
        {

        },
        //For observer observable pattern usage !!!!
        notify: function()
        {

        }
    });


module.exports = gridOptionsView;
