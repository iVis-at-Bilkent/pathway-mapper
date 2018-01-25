var SaveLoadUtilities = require('./../Utils/SaveLoadUtility.js');


module.exports = (function ($)
{
    //File drop down handler
    $(".fileDropDown li a").click(function(event)
    {
        event.preventDefault();
        var dropdownLinkRole = $(event.target).attr('role');

        if (dropdownLinkRole == 'new')
        {
            if(cy.elements().length != 0)
                window.appManager.promptConfirmationView.render(function(){window.fileOperationsManager.createNewPathway()});
            else
                window.fileOperationsManager.createNewPathway();
        }
        else if (dropdownLinkRole == 'details')
        {
            $('#pathwayDetailsBtn').trigger('click');
        }
        else if (dropdownLinkRole == 'load')
        {
            if(cy.elements().length != 0)
                window.appManager.promptConfirmationView.render(function(){$('#fileinput').trigger('click')});
            else
                $('#fileinput').trigger('click');
        }
        else if (dropdownLinkRole == 'sample')
        {
            window.fileOperationsManager.sampleFileRequestHandler();
        }
        else if (dropdownLinkRole == 'merge')
        {
            $('#mergeInput').trigger('click');
        }
        else if (dropdownLinkRole == 'save')
        {
            window.fileOperationsManager.saveGraph(false);
        }
        else if (dropdownLinkRole == 'jpeg')
        {
            window.fileOperationsManager.saveAsJPEG();
        }
        else if (dropdownLinkRole == 'png')
        {
            window.fileOperationsManager.saveAsPNG();
        }
        else if (dropdownLinkRole == 'svg')
        {
            var returnString = window.editorActionsManager.exportSVG();
            var fileName = 'pathway.svg';
            var blob = new Blob([returnString], {type: "text/plain;charset=utf-8"});
            saveAs(blob, fileName);
        }
        else if (dropdownLinkRole == 'sifnx')
        {
            window.fileOperationsManager.saveGraph(true);
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
                    name:'New ' + clickedNodeType,
                    w: "150",
                    h: "52"
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
            window.editorActionsManager.removeElement(selectedEles);
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

    //View drop down handler
    $(".viewDropdown li a").click(function(event)
    {
        event.preventDefault();
        var dropdownLinkRole = $(event.target).attr('role');

        if(dropdownLinkRole == "grid")
        {
            $("#gridOptionsDiv").modal('show');
        }
        else if(dropdownLinkRole == "hideSelectedNodes")
        {
            window.editorActionsManager.hideSelectedNodes();
        }
        else if(dropdownLinkRole == "showAllNodes")
        {
            window.editorActionsManager.showAllNodes();
        }
        else
        {
            window.viewOperationsManager.handleNodeAlignment(dropdownLinkRole);
        }

    });

    //Highlight drop down handler
    $(".highlightDropDown li a").click(function (event)
    {
        event.preventDefault();
        var dropdownLinkRole = $(event.target).attr('role');

        if (dropdownLinkRole == "goToSearch")
        {
            document.getElementById("searchGene").focus();
        }
        else if(dropdownLinkRole == "highlightSelected")
        {
            window.editorActionsManager.highlightSelected();
        }
        else if(dropdownLinkRole == "highlightNeighbors")
        {
            window.editorActionsManager.highlightNeighbors();
        }
        else if(dropdownLinkRole == "highlightInvalidGenes")
        {
            window.editorActionsManager.validateGenes();
        }
        else if(dropdownLinkRole == "removeAllHighlight")
        {
            window.editorActionsManager.removeAllHighlight();
        }
    });

    //Genomic data menu handler
    $(".dataDropdown li a").click(function(event)
    {
        event.preventDefault();
        var dropdownLinkRole = $(event.target).attr('role');

        if (dropdownLinkRole == 'loadGenomic')
        {
            $('#genomicDataInput').trigger('click');
        }
        else if (dropdownLinkRole == 'loadPortal')
        {
            window.appManager.portalAccessView.render();
        }
        else if (dropdownLinkRole == 'dataViewSettings')
        {
            $('#genomicDataExplorerDiv').modal('show');
        }
        else if (dropdownLinkRole == 'loadSampleGenomicData')
        {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function ()
            {
                if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
                {
                    window.editorActionsManager.addGenomicData(request.responseText);
                }
            };
            request.open("GET", "/sampleGenomicData");
            request.send();
        }
        else if(dropdownLinkRole == 'removeGenomicData')
        {
            window.editorActionsManager.removeGenomicData();
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
        else if(dropdownLinkRole == 'howToUse')
        {
            window.open('https://github.com/iVis-at-Bilkent/pathway-mapper', '_blank');
        }
    });

    //Search genes handler
    $("#searchGene").keypress(function(event)
    {
        //event.preventDefault();
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            var searchedGene = event.currentTarget.value;
            var selector = "node[name @*= '" + searchedGene + "']";
            var nodesContainingSearchedGene  = cy.filter(selector);
            var nodesToSelect = cy.collection();
            nodesContainingSearchedGene.forEach(function(ele, index){
                if (!ele.hasClass('highlightedNode') &&  !ele.hasClass('invalidGeneHighlight'))
                    nodesToSelect = nodesToSelect.union(ele);
            });
            editorActionsManager.highlightBySearch(nodesToSelect);
        }
    });

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

    //Jquery handles
    $('#saveGraphBtn').on('click', function(evt)
    {
        window.fileOperationsManager.saveGraph();
    });

    $('#loadGraphBtn').on('click', function(evt)
    {
        if(cy.elements().length != 0)
            window.appManager.promptConfirmationView.render(function(){$('#fileinput').trigger('click')});
        else
            $('#fileinput').trigger('click');
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
                var graphData = SaveLoadUtilities.parseGraph(request.responseText);
                window.editorActionsManager.loadFile(graphData.nodes, graphData.edges);
                window.fileOperationsManager.changePathwayDetails(
                    {
                        fileName: file.name,
                        pathwayTitle: graphData.title,
                        pathwayDescription: graphData.description
                    });

                window.fileOperationsManager.resetUndoStack();
            }
        };
        request.open("POST", "/loadGraph");
        request.send(formData);
        $('#fileinput').val(null);
    });

    $('#mergeInput').on('change', function()
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
                var graphData = SaveLoadUtilities.parseGraph(request.responseText);
                window.editorActionsManager.mergeGraph(graphData.nodes,graphData.edges);
                //TODO change file name maybe, probabyly  not necessary ?

                window.fileOperationsManager.resetUndoStack();
            }
        };

        request.open("POST", "/loadGraph");
        request.send(formData);
        $('#mergeInput').val(null);
    });

    $('#pathwayDetailsBtn').on('click', function(evt)
    {
        window.appManager.pathwayDetailsView.render();
        $('#pathwayDetailsDiv').modal('show');
    });

    /*$('#fileinput').on('change', function()
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
                var graphData = SaveLoadUtilities.parseGraph(request.responseText);
                window.editorActionsManager.loadFile(graphData.nodes, graphData.edges);
                window.fileOperationsManager.changePathwayDetails({
                    fileName: file.name,
                    pathwayTitle: graphData.title,
                    pathwayDescription: graphData.description
                });
            }
        };
        request.open("POST", "/loadGraph");
        request.send(formData);
        $('#fileinput').val(null);
    });*/

    //////// GENOMIC DATA PART //////////////////
    //Genomic data file part
    $('#genomicDataInput').on('change', function()
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
                window.editorActionsManager.addGenomicData(request.responseText);
            }
        };
        request.open("POST", "/loadGraph");
        request.send(formData);
        $('#genomicDataInput').val(null);
    });

})(window.$)
