import SaveLoadUtilities from './SaveLoadUtility.js';
import {saveAs} from 'file-saver';

export default class FileOperationsManager{
    private cy: any;
    constructor(cy: any){
        this.cy = cy;
    }
    
    // see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
    b64toBlob(b64Data, contentType, sliceSize = 512)
    {
        contentType = contentType || '';

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

    saveAsJPEG()
    {
        // var fileName = getFileName();
        var graphData = this.cy.jpeg();
        // this is to remove the beginning of the pngContent: data:img/png;base64,
        var b64data = graphData.substr(graphData.indexOf(",") + 1);
        var imageData = this.b64toBlob(b64data, "image/jpeg");
        var blob = new Blob([imageData]);
        saveAs(blob, "pathway.jpg");
    };

    saveAsPNG()
    {
        // var fileName = getFileName();
        var graphData = this.cy.png();
        // this is to remove the beginning of the pngContent: data:img/png;base64,
        var b64data = graphData.substr(graphData.indexOf(",") + 1);
        var imageData = this.b64toBlob(b64data, "image/png");
        var blob = new Blob([imageData]);
        saveAs(blob, "pathway.png");
    };
    /*

    saveGraph(isSIFNX)
    {
        var pathwayData = window.appManager.pathwayDetailsView.getPathwayData();
        pathwayData.graphJSON = this.cy.json();

        var returnString = (isSIFNX) ? SaveLoadUtilities.exportAsSIFNX(pathwayData):
                                       SaveLoadUtilities.exportGraph(pathwayData);
        var blob = new Blob([returnString], {type: "text/plain;charset=utf-8"});
        saveAs(blob, pathwayData.fileName);
    };

    changePathwayDetails(pathwayData)
    {
        window.appManager.pathwayDetailsView.updatePathwayProperties(pathwayData);
    };

    resetUndoStack()
    {
        window.undoRedoManager.reset();
    };

    createNewPathway()
    {
        window.editorActionsManager.removeAllElements();
        this.changePathwayDetails(
        {
            fileName: "pathway.txt",
            pathwayTitle: "New Pathway",
            pathwayDescription: ""
        });
        this.resetUndoStack();

    };*/
}