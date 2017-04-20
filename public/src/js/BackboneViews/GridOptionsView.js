var gridOptionsView = Backbone.View.extend(
    {
        currentProperties: null,
        events:{
            "click #applyGridOptions": "saveProperties"
        },
        initialize: function (options)
        {
            this.defaultGridGuideOptions = {
                // On/Off Modules
                snapToGrid: false, // Snap to grid functionality
                discreteDrag: false, // Discrete Drag
                distributionGuidelines: true, // Distribution guidelines
                geometricGuideline: true, // Geometric guidelines
                initPosAlignment: false, // Guideline to initial mouse position
                centerToEdgeAlignment: false, // Center to edge alignment
                snapToAlignmentLocation: true, // Snap to alignment location
                resize: false, // Adjust node sizes to cell sizes
                parentPadding: false, // Adjust parent sizes to cell sizes by padding
                drawGrid: false, // Draw grid background

                // General
                gridSpacing: 20, // Distance between the lines of the grid.

                // Draw Grid
                zoomDash: true, // Determines whether the size of the dashes should change when the drawing is zoomed in and out if grid is drawn.
                panGrid: true, // Determines whether the grid should move then the user moves the graph if grid is drawn.
                gridStackOrder: -1, // Namely z-index
                strokeStyle: '#dedede', // Color of grid lines
                lineWidth: 1.0, // Width of grid lines

                // Guidelines
                guidelinesStackOrder: 4, // z-index of guidelines
                guidelinesTolerance: 2.00, // Tolerance distance for rendered positions of nodes' interaction.
                guidelinesStyle: { // Set ctx properties of line. Properties are here:
                    strokeStyle: "#8b6412", // color of geometric guidelines
                    geometricGuidelineRange: 400, // range of geometric guidelines
                    range: 100, // max range of distribution guidelines
                    minDistRange: 10, // min range for distribution guidelines
                    horizontalDistColor: "#ff0000", // color of horizontal distribution alignment
                    verticalDistColor: "#00ff00", // color of vertical distribution alignment
                    initPosAlignmentColor: "#0000ff", // color of alignment to initial mouse location
                    lineDash: [0, 0], // line style of geometric guidelines
                    horizontalDistLine: [0, 0], // line style of horizontal distribution guidelines
                    verticalDistLine: [0, 0], // line style of vertical distribution guidelines
                    initPosAlignmentLine: [0, 0], // line style of alignment to initial mouse position
                },

                // Parent Padding
                parentSpacing: -1 // -1 to set paddings of parents to gridSpacing
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
            this.currentProperties.geometricGuideline = this.$el.find("#showGuides").is(':checked');
            this.currentProperties.snapToGrid = this.$el.find("#snapToGrid").is(':checked');
            this.currentProperties.guidelinesStyle.strokeStyle = this.$el.find('input[type="color"]').val();

            //TODO update grid options
            cy.gridGuide(this.currentProperties);

            this.$el.modal('toggle');
        },
        changeParameters: function()
        {
            this.$el.find("#gridSize").val(this.currentProperties.gridSpacing);
            this.$el.find("#showGrid")[0].checked = this.currentProperties.drawGrid;
            this.$el.find("#showGuides")[0].checked = this.currentProperties.geometricGuideline;
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
