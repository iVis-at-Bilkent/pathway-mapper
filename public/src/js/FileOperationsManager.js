var SaveLoadUtilities = require('./SaveLoadUtility.js');

module.exports = (function($)
{
    'use strict';

    function FileOperationsManager()
    {

    }


    // see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
    FileOperationsManager.prototype.b64toBlob = function(b64Data, contentType, sliceSize)
    {
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
    };

    FileOperationsManager.prototype.saveAsJPEG = function()
    {
        // var fileName = getFileName();
        var graphData = cy.jpeg();
        // this is to remove the beginning of the pngContent: data:img/png;base64,
        var b64data = graphData.substr(graphData.indexOf(",") + 1);
        var imageData = this.b64toBlob(b64data, "image/jpeg");
        var blob = new Blob([imageData]);
        saveAs(blob, "pathway.jpg");
    }

    FileOperationsManager.prototype.saveAsPNG = function()
    {
        // var fileName = getFileName();
        var graphData = cy.png();
        // this is to remove the beginning of the pngContent: data:img/png;base64,
        var b64data = graphData.substr(graphData.indexOf(",") + 1);
        var imageData = this.b64toBlob(b64data, "image/png");
        var blob = new Blob([imageData]);
        saveAs(blob, "pathway.png");
    }

    FileOperationsManager.prototype.saveGraph = function(isSIFNX)
    {

        var pathwayData = this.getPathwayData();
        pathwayData.graphJSON = cy.json();

        var returnString = (isSIFNX) ? SaveLoadUtilities.exportAsSIFNX(pathwayData):
                                       SaveLoadUtilities.exportGraph(pathwayData);
        var blob = new Blob([returnString], {type: "text/plain;charset=utf-8"});
        saveAs(blob, pathwayData.fileName);
    }

    FileOperationsManager.prototype.getPathwayData = function()
    {
        //TODO ??
        var pathwayData =
        {
            fileName: $("#pName").val(),
            pathwayTitle: $("#pTitle").val(),
            pathwayDescription: $("#pDesc").val()
        };

        return pathwayData;
    }

    FileOperationsManager.prototype.changePathwayDetails = function(pathwayData)
    {
        window.appManager.pathwayDetailsView.updatePathwayProperties(pathwayData);
    }

    FileOperationsManager.prototype.sampleFileRequestHandler = function()
    {
      var self = this;
      var request = new XMLHttpRequest();
      request.onreadystatechange = function ()
      {
          if(request.readyState === XMLHttpRequest.DONE && request.status === 200)
          {
              var graphData = SaveLoadUtilities.parseGraph(request.responseText);
              window.editorActionsManager.loadFile(graphData.nodes, graphData.edges);

              self.changePathwayDetails(
                  {
                      fileName: graphData.name,
                      pathwayTitle: graphData.title,
                      pathwayDescription: graphData.description
                  });

              self.resetUndoStack();
          }
      };
      request.open("GET", "/sampleGraph");
      request.send();
    }



    FileOperationsManager.prototype.resetUndoStack = function()
    {
        window.undoRedoManager.reset();
    }

    return FileOperationsManager;

})(window.$)
