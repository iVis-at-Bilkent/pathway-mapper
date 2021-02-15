import _ from "lodash";

export default class GridOptionsManager
{

    static defaultGridGuideOptions = 
        {
            // On/Off Modules
            /* From the following four snap options, at most one should be true at a given time */
            snapToGridOnRelease: false, // Snap to grid on release
            snapToGridDuringDrag: false, // Snap to grid during drag
            snapToAlignmentLocationOnRelease: false, // Snap to alignment location on release
            snapToAlignmentLocationDuringDrag: false, // Snap to alignment location during drag
            distributionGuidelines: false, // Distribution guidelines
            geometricGuideline: false, // Geometric guidelines
            initPosAlignment: false, // Guideline to initial mouse position
            centerToEdgeAlignment: false, // Center to edge alignment
            resize: false, // Adjust node sizes to cell sizes
            parentPadding: false, // Adjust parent sizes to cell sizes by padding
            drawGrid: false, // Draw grid background

            // General
            gridSpacing: 20, // Distance between the lines of the grid.

            // Draw Grid
            zoomDash: true, // Determines whether the size of the dashes should change when the drawing is zoomed in and out if grid is drawn.
            panGrid: true, // Determines whether the grid should move then the user moves the graph if grid is drawn.
            gridStackOrder: -1, // Namely z-index
            gridColor: '#dedede', // Color of grid lines
            lineWidth: 1.0, // Width of grid lines

            // Guidelines
            guidelinesStackOrder: 4, // z-index of guidelines
            guidelinesTolerance: 5.00, // Tolerance distance for rendered positions of nodes' interaction.
            guidelinesStyle: { // Set ctx properties of line. Properties are here:
                strokeStyle: "#4286f4", // color of geometric guidelines
                geometricGuidelineRange: 750, // range of geometric guidelines
                range: 500, // max range of distribution guidelines
                minDistRange: 10, // min range for distribution guidelines
                distGuidelineOffset: 10, // shift amount of distribution guidelines
                horizontalDistColor: "#4286f4", // color of horizontal distribution alignment
                verticalDistColor: "#4286f4", // color of vertical distribution alignment
                initPosAlignmentColor: "#34495E", // color of alignment to initial mouse location
                lineDash: [6, 8], // line style of geometric guidelines
                horizontalDistLine: [0, 0], // line style of horizontal distribution guidelines
                verticalDistLine: [0, 0], // line style of vertical distribution guidelines
                initPosAlignmentLine: [0, 0], // line style of alignment to initial mouse position
            },

            // Parent Padding
            parentSpacing: -1 // -1 to set paddings of parents to gridSpacing
        };
    currentProperties: any;
    cy: any;
    constructor(cy: any)
    {
        this.cy = cy;

        this.currentProperties = {};
        this.changeParameters(GridOptionsManager.defaultGridGuideOptions);

    }

    changeParameters(params)
    {
        this.currentProperties = _.clone(params);
        this.refreshGridOptionsExtension();
    }

    getCurrentOptions()
    {
        return this.currentProperties;
    }

    getDefaultOptions()
    {
        return GridOptionsManager.defaultGridGuideOptions;
    }

    setSnapToGuidelines(state)
    {
        this.currentProperties.geometricGuideline = state;
        this.currentProperties.snapToAlignmentLocationDuringDrag = state;
        this.currentProperties.distributionGuidelines = state;
        this.refreshGridOptionsExtension();
        //this.appManager.gridOptionsView.changeParameters();
    }

    setShowGrid(state)
    {
        this.currentProperties.drawGrid = state;
        this.currentProperties.snapToGridDuringDrag = state;
        this.refreshGridOptionsExtension();
    }

    refreshGridOptionsExtension()
    {
        this.cy.gridGuide(this.currentProperties);
    }

    //TODO expose individual functions related for changing parameters from toolbar here

}
