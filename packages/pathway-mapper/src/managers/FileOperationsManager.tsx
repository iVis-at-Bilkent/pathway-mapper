import { saveAs } from 'file-saver';
import { action, computed, makeObservable, observable } from 'mobx';
import SaveLoadUtility from '../utils/SaveLoadUtility';
import EditorActionsManager from './EditorActionsManager.js';

export interface IPathwayInfo{
    pathwayTitle: string;
    pathwayDetails: string;
}

export default class FileOperationsManager{

    @observable
    pathwayInfo: IPathwayInfo;

    constructor(){
        makeObservable(this);
        this.pathwayInfo = {pathwayTitle: "New Pathway", pathwayDetails: ""};
    }


    @computed get
    getPathwayInfo(){
        return this.pathwayInfo;
    }

    @action
    setPathwayInfo(other: IPathwayInfo){
        this.pathwayInfo = other;
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

    saveAsJPEG(cy: any)
    {
        const graphData = cy.jpeg();
        // this is to remove the beginning of the pngContent: data:img/png;base64,
        const b64data = graphData.substr(graphData.indexOf(",") + 1);
        const imageData = this.b64toBlob(b64data, "image/jpeg");
        const blob = new Blob([imageData]);
        const fileName = this.pathwayInfo.pathwayTitle + ".jpg"
        saveAs(blob, fileName);
    };

    saveAsSVG(editor: EditorActionsManager){
        const returnString: any = editor.exportSVG();
        const fileName = this.pathwayInfo.pathwayTitle + ".svg"
        const blob = new Blob([returnString], {type: "text/plain;charset=utf-8"});
        saveAs(blob, fileName);
    }

    saveAsPNG(cy: any)
    {
        const graphData = cy.png();
        // this is to remove the beginning of the pngContent: data:img/png;base64,
        const b64data = graphData.substr(graphData.indexOf(",") + 1);
        const imageData = this.b64toBlob(b64data, "image/png");
        const blob = new Blob([imageData]);
        const fileName = this.pathwayInfo.pathwayTitle + ".png"
        saveAs(blob, fileName);
    };
    

    saveGraph(isSIFNX: boolean, editor: EditorActionsManager)
    {
        const pathwayData = this.pathwayInfo;
        const returnString = (isSIFNX) ? SaveLoadUtility.exportAsSIFNX(editor.cy):
                                       SaveLoadUtility.exportGraph(pathwayData, editor.cy, editor.edgeEditing);
        const blob = new Blob([returnString], {type: "text/plain;charset=utf-8"});
        const fileName = pathwayData.pathwayTitle + ".txt";
        saveAs(blob, fileName);
    };
}