module.exports = (function ($)
{

    //TODO Toolbar part, we will refactor it later
    $("#viewToolbarButtons img").click(function (event)
    {
        event.preventDefault();
        var clickedImageRole = $(event.target).attr('role');
        window.viewOperationsManager.handleNodeAlignment(clickedImageRole);
    });

    $("#gridGuideToolbarButtons img").click(function (event)
    {
        var clickedImageRole = $(event.target).attr('role');
        if (clickedImageRole === 'snapToGrid')
        {
            var boolStatus = !window.gridOptionsManager.currentProperties.snapToGrid;
            window.gridOptionsManager.toggleSnapToGrid(boolStatus);
        }
        else if (clickedImageRole === 'showGrid')
        {
            var boolStatus = !window.gridOptionsManager.currentProperties.drawGrid;
            window.gridOptionsManager.toggleShowGrid(boolStatus);
        }
    });

}(window.$))