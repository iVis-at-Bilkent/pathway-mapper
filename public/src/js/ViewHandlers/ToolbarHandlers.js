module.exports = (function ($)
{

    //TODO Toolbar part, we will refactor it later
    $("#viewToolbarButtons img").click(function (event)
    {
        event.preventDefault();
        var clickedImageRole = $(event.target).attr('role');
        window.viewOperationsManager.handleNodeAlignment(clickedImageRole);
    });

    //Refactoring needed on this function, too complex in this form !
    $("#gridGuideToolbarButtons img").click(function (event)
    {
        var clickedImageRole = $(event.target).attr('role');
        var imgParent = $(event.target).parent();

        var showGridEle = $( "img[role='showGrid']" );
        var snapToGridEle = $( "img[role='snapToGrid']" );

        if (clickedImageRole === 'snapToGrid')
        {
            var status = true;
            if (imgParent.hasClass('toolbar-button-focused'))
            {
              status = false;
              imgParent.removeClass('toolbar-button-focused');
            }
            else
            {
              //Other option is active
              if (showGridEle.parent().hasClass('toolbar-button-focused'))
              {
                showGridEle.parent().removeClass('toolbar-button-focused');
                window.gridOptionsManager.setShowGrid(false);
              }

              imgParent.addClass('toolbar-button-focused');
            }

            window.gridOptionsManager.setSnapToGuidelines(status);
        }
        else if (clickedImageRole === 'showGrid')
        {
            var status = true;
            if (imgParent.hasClass('toolbar-button-focused'))
            {
              status = false;
              imgParent.removeClass('toolbar-button-focused');
            }
            else
            {
              //Other option is active
              if (snapToGridEle.parent().hasClass('toolbar-button-focused'))
              {
                snapToGridEle.parent().removeClass('toolbar-button-focused');
                window.gridOptionsManager.setSnapToGuidelines(false);
              }

              imgParent.addClass('toolbar-button-focused');
            }

            window.gridOptionsManager.setShowGrid(status);
        }
    });

    $("#fileToolbarButtons img").click(function (event)
    {
        var clickedImageRole = $(event.target).attr('role');
        if (clickedImageRole === 'new')
        {
          window.fileOperationsManager.createNewPathway();
        }
        else if (clickedImageRole === 'save')
        {
          window.fileOperationsManager.saveGraph(false);
        }
        else if (clickedImageRole === 'load')
        {
          $('#fileinput').trigger('click');
        }
    });

    $("#editToolbarButtons img").click(function (event)
    {
        var clickedImageRole = $(event.target).attr('role');
        if (clickedImageRole === 'undo')
        {
          window.undoRedoManager.undo();
        }
        else if (clickedImageRole === 'redo')
        {
          window.undoRedoManager.redo();
        }
    });

    $("#layoutToolbarButtons img").click(function (event)
    {
        var clickedImageRole = $(event.target).attr('role');

        if (clickedImageRole === 'performLayout')
        {
            window.editorActionsManager.performLayout();
        }
        else if (clickedImageRole === 'layoutProperties')
        {
            $('#layoutPropertiesDiv').modal('show');
        }
    });

    $("#portalToolbarButtons img").click(function (event)
    {
        var clickedImageRole = $(event.target).attr('role');

        if (clickedImageRole === 'portalData')
        {
          $('#cbioPortalAccessDiv').modal('show');
        }
        else if (clickedImageRole === 'portalSettings')
        {
            $('#genomicDataExplorerDiv').modal('show');
        }
    });

}(window.$))
