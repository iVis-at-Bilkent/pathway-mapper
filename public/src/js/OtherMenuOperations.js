module.exports = (function()
{
    'use strict';

    //Selected element on dropdown
    $(".edge-palette a").click(function(event)
    {
        event.preventDefault();

        if ($(event.target).hasClass('active'))
        {
            cy.edgehandles('disable');
            cy.edgehandles('drawoff');
            $('.edge-palette a').blur().removeClass('active');
        }
        else
        {
            $('.edge-palette a').blur().removeClass('active');
            $(event.target).toggleClass('active');
            window.edgeAddingMode = $(event.target).attr('edgeTypeIndex');
            cy.edgehandles('enable');
        }
    });


    //Edit drop down handler
    $(".editDropDown li a").click(function(event)
    {
        event.preventDefault();
        var dropdownLinkRole = $(event.target).attr('role');

        if (dropdownLinkRole == 'addGene')
        {
            var clickedNodeType = $(event.target).text();
            var nodeData =
            {
                type: clickedNodeType.toUpperCase(),
                name:'New ' + clickedNodeType
            };

            var posData =
            {
                x: cy.width()/2,
                y: cy.height()/2
            };

            window.editorActionsManager.addNode(nodeData, posData);
        }
        else if (dropdownLinkRole == 'addEdge')
        {
            var edgeTypeIndex = $(event.target).attr('edgeTypeIndex');
            $('.edge-palette a').blur().removeClass('active');
            $('.edge-palette a[edgeTypeIndex="'+edgeTypeIndex+'"]').addClass('active');
            window.edgeAddingMode = edgeTypeIndex;
            cy.edgehandles('enable');
        }
        else if(dropdownLinkRole == 'deleteSelected')
        //delete
        {
            var selectedEles = cy.elements(':selected');
            selectedEles.forEach(function (ele, index)
            {
                window.editorActionsManager.removeElement(ele);
            });
        }
        else if(dropdownLinkRole == 'undo')
        //undo
        {
            window.undoRedoManager.undo();
        }
        else if(dropdownLinkRole == 'redo')
        //redo
        {
            window.undoRedoManager.redo();
        }
    });


    //Layout drop down handler
    $(".layoutDropDown li a").click(function(event)
    {
        event.preventDefault();
        var dropdownLinkRole = $(event.target).attr('role');

        if (dropdownLinkRole == 'perform_layout')
        {
            window.editorActionsManager.performLayout();
        }
        else if (dropdownLinkRole == 'layout_properties')
        {
            $('#layoutPropertiesDiv').modal('show');
        }
    });

    //About drop down handler
    $(".aboutDropDown li a").click(function(event)
    {
        event.preventDefault();
        var dropdownLinkRole = $(event.target).attr('role');

        if (dropdownLinkRole == 'about')
        {
            $('#aboutModal').modal('show');
        }
        else if (dropdownLinkRole == 'edge_legend')
        {
            $('#edge_legend_modal').modal('show');
        }
        else if (dropdownLinkRole == 'node_legend')
        {
            $('#node_legend_modal').modal('show');
        }
        else if(dropdownLinkRole == 'help')
        {
            $('#quickHelpModal').modal('show');
        }
    });

    $('#fileinput').on('change', function()
    {
        var file = this.files[0];
        // Create a new FormData object.
        var formData = new FormData();
        formData.append('graphFile', file);
        var request = new XMLHttpRequest();
        request.onreadystatechange = function ()
        {
            if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
            {
                var allEles = SaveLoadUtilities.parseGraph(request.responseText);
                window.editorActionsManager.loadFile(allEles.nodes, allEles.edges);
                changeFileName(file.name);
            }
        };
        request.open("POST", "/loadGraph");
        request.send(formData);
        $('#fileinput').val(null);
    });
    

})();