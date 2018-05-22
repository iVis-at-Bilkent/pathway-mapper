var SaveLoadUtilities = require('./../Utils/SaveLoadUtility.js');

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
    };

    FileOperationsManager.prototype.saveAsPNG = function()
    {
        // var fileName = getFileName();
        var graphData = cy.png();
        // this is to remove the beginning of the pngContent: data:img/png;base64,
        var b64data = graphData.substr(graphData.indexOf(",") + 1);
        var imageData = this.b64toBlob(b64data, "image/png");
        var blob = new Blob([imageData]);
        saveAs(blob, "pathway.png");
    };

    FileOperationsManager.prototype.saveGraph = function(isSIFNX)
    {
        var pathwayData = window.appManager.pathwayDetailsView.getPathwayData();
        pathwayData.graphJSON = cy.json();

        var returnString = (isSIFNX) ? SaveLoadUtilities.exportAsSIFNX(pathwayData):
                                       SaveLoadUtilities.exportGraph(pathwayData);
        var blob = new Blob([returnString], {type: "text/plain;charset=utf-8"});
        saveAs(blob, pathwayData.fileName);
    };

    FileOperationsManager.prototype.changePathwayDetails = function(pathwayData)
    {
        window.appManager.pathwayDetailsView.updatePathwayProperties(pathwayData);
    };

    FileOperationsManager.prototype.resetUndoStack = function()
    {
        window.undoRedoManager.reset();
    };

    FileOperationsManager.prototype.createNewPathway = function()
    {
        window.editorActionsManager.removeAllElements();
        window.fileOperationsManager.changePathwayDetails(
        {
            fileName: "pathway.txt",
            pathwayTitle: "New Pathway",
            pathwayDescription: ""
        });
        window.fileOperationsManager.resetUndoStack();

    };

    return FileOperationsManager;

})(window.$);
