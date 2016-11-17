var SaveLoadUtilities = require('./SaveLoadUtility.js');

module.exports = (function($)
{
    'use strict';


    // see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
    function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, {type: contentType});
        return blob;
    }

    function saveAsJPEG()
    {
        // var fileName = getFileName();
        var graphData = cy.jpeg();
        // this is to remove the beginning of the pngContent: data:img/png;base64,
        var b64data = graphData.substr(graphData.indexOf(",") + 1);
        var imageData = b64toBlob(b64data, "image/jpeg");
        var blob = new Blob([imageData]);
        saveAs(blob, "pathway.jpg");
    }

    function saveAsPNG()
    {
        // var fileName = getFileName();
        var graphData = cy.png();
        // this is to remove the beginning of the pngContent: data:img/png;base64,
        var b64data = graphData.substr(graphData.indexOf(",") + 1);
        var imageData = b64toBlob(b64data, "image/png");
        var blob = new Blob([imageData]);
        saveAs(blob, "pathway.png");
    }

    function saveGraph()
    {

        var pathwayData = getPathwayData();
        pathwayData.graphJSON = cy.json();

        var returnString = SaveLoadUtilities.exportGraph(pathwayData);
        var blob = new Blob([returnString], {type: "text/plain;charset=utf-8"});
        saveAs(blob, pathwayData.fileName);
    }


    function getPathwayData()
    {
        var pathwayData =
        {
            fileName: $("#pName").val(),
            pathwayTitle: $("#pTitle").val(),
            pathwayDescription: $("#pDesc").val()
        };

        return pathwayData;
    }

    function changePathwayDetails(pathwayData)
    {
        window.appManager.pathwayDetailsView.updatePathwayProperties(pathwayData);
    }

    function sampleFileRequestHandler()
    {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function ()
      {
          if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
          {
              var graphData = SaveLoadUtilities.parseGraph(request.responseText);
              window.editorActionsManager.loadFile(graphData.nodes, graphData.edges);

              changePathwayDetails(
                  {
                      fileName: graphData.name,
                      pathwayTitle: graphData.title,
                      pathwayDescription: graphData.description
                  });

              resetUndoStack();
          }
      };
      request.open("GET", "/sampleGraph");
      request.send();
    }

    //Jquery handles
    $('#saveGraphBtn').on('click', function(evt)
    {
        saveGraph();
    });

    $('#loadGraphBtn').on('click', function(evt)
    {
        $('#fileinput').attr('value', "");
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

                changePathwayDetails(
                {
                    fileName: file.name,
                    pathwayTitle: graphData.title,
                    pathwayDescription: graphData.description
                });

                resetUndoStack();
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

                resetUndoStack();
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

    //File drop down handler
    $(".fileDropDown li a").click(function(event)
    {
        event.preventDefault();
        var dropdownLinkRole = $(event.target).attr('role');

        if (dropdownLinkRole == 'save')
        {
            saveGraph();
        }
        else if (dropdownLinkRole == 'load')
        {
            $('#fileinput').trigger('click');
        }
        else if (dropdownLinkRole == 'details')
        {
            $('#pathwayDetailsBtn').trigger('click');
        }
        else if (dropdownLinkRole == 'sample')
        {
            sampleFileRequestHandler();
        }
        else if (dropdownLinkRole == 'new')
        {
            window.editorActionsManager.removeAllElements();
        }
        else if (dropdownLinkRole == 'merge')
        {
            $('#mergeInput').trigger('click');
        }
        else if (dropdownLinkRole == 'jpeg')
        {
            saveAsJPEG();
        }
        else if (dropdownLinkRole == 'png')
        {
            saveAsPNG();
        }
        else if (dropdownLinkRole == 'svg')
        {
            var returnString = window.editorActionsManager.exportSVG();
            var fileName = 'pathway.svg';
            var blob = new Blob([returnString], {type: "text/plain;charset=utf-8"});
            saveAs(blob, fileName);
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
                var graphData = SaveLoadUtilities.parseGraph(request.responseText);
                window.editorActionsManager.loadFile(graphData.nodes, graphData.edges);
                changePathwayDetails({
                        fileName: file.name,
                        pathwayTitle: graphData.title,
                        pathwayDescription: graphData.description
                    });
            }
        };
        request.open("POST", "/loadGraph");
        request.send(formData);
        $('#fileinput').val(null);
    });
    
    function resetUndoStack()
    {
        window.undoRedoManager.reset();
    }

})(window.$)
