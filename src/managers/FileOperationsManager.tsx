import SaveLoadUtilities from '../utils/SaveLoadUtility.js';
import {saveAs} from 'file-saver';
import EditorActionsManager from './EditorActionsManager.js';
import { observable, computed, makeObservable } from 'mobx';
import SaveLoadUtility from '../utils/SaveLoadUtility';


export interface IPathwayInfo{
    fileName: string;
    pathwayTitle: string;
    pathwayDetails: string;
}


export default class FileOperationsManager{

    @observable
    pathwayInfo: IPathwayInfo;

    constructor(){
        makeObservable(this);
        this.pathwayInfo = {pathwayTitle: "New Pathway", pathwayDetails: "", fileName: "pathway.txt"};
    }


    @computed get
    getPathwayInfo(){
        return this.pathwayInfo;
    }

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
        // var fileName = getFileName();
        const graphData = cy.jpeg();
        // this is to remove the beginning of the pngContent: data:img/png;base64,
        const b64data = graphData.substr(graphData.indexOf(",") + 1);
        const imageData = this.b64toBlob(b64data, "image/jpeg");
        const blob = new Blob([imageData]);
        saveAs(blob, "pathway.jpg");
    };

    saveAsSVG(editor: EditorActionsManager){
        const returnString: any = editor.exportSVG();
        const fileName = 'pathway.svg';
        const blob = new Blob([returnString], {type: "text/plain;charset=utf-8"});
        saveAs(blob, fileName);
    }

    saveAsPNG(cy: any)
    {
        // var fileName = getFileName();
        const graphData = cy.png();
        // this is to remove the beginning of the pngContent: data:img/png;base64,
        const b64data = graphData.substr(graphData.indexOf(",") + 1);
        const imageData = this.b64toBlob(b64data, "image/png");
        const blob = new Blob([imageData]);
        saveAs(blob, "pathway.png");
    };
    

    saveGraph(isSIFNX: boolean, editor: EditorActionsManager)
    {
        const pathwayData = this.pathwayInfo;
        const returnString = (isSIFNX) ? SaveLoadUtility.exportAsSIFNX(pathwayData, editor.cy.json()):
                                       SaveLoadUtility.exportGraph(pathwayData, editor.cy, editor.edgeEditing, editor.cy.json());
        const blob = new Blob([returnString], {type: "text/plain;charset=utf-8"});
        saveAs(blob, pathwayData.fileName);
    };
}