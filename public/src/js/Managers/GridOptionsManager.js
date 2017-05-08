module.exports = (function ()
{
    function GridOptionsManager()
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
                range: 200, // max range of distribution guidelines
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
        this.currentProperties = {};
        this.changeParameters(this.defaultGridGuideOptions);

    }

    GridOptionsManager.prototype.changeParameters= function(params)
    {
        this.currentProperties = _.clone(params);
        this.refreshGridOptionsExtension();
    }

    GridOptionsManager.prototype.getCurrentOptions = function()
    {
        return this.currentProperties;
    }

    GridOptionsManager.prototype.getDefaultOptions = function()
    {
        return this.defaultGridGuideOptions;
    }

    GridOptionsManager.prototype.toggleSnapToGrid = function(snapToGrid)
    {
        this.currentProperties.snapToGrid = snapToGrid;
        this.refreshGridOptionsExtension();
    }

    GridOptionsManager.prototype.toggleShowGrid = function(drawGrid)
    {
        this.currentProperties.drawGrid = drawGrid;
        this.refreshGridOptionsExtension();
    }

    GridOptionsManager.prototype.refreshGridOptionsExtension = function()
    {
        window.cy.gridGuide(this.currentProperties);
    }

    //TODO expose individual functions related for changing parameters from toolbar here

    return GridOptionsManager;

})()