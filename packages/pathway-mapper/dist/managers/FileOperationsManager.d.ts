import EditorActionsManager from './EditorActionsManager.js';
export interface IPathwayInfo {
    pathwayTitle: string;
    pathwayDetails: string;
}
export default class FileOperationsManager {
    pathwayInfo: IPathwayInfo;
    constructor();
    get getPathwayInfo(): IPathwayInfo;
    setPathwayInfo(other: IPathwayInfo): void;
    b64toBlob(b64Data: any, contentType: any, sliceSize?: number): Blob;
    saveAsJPEG(cy: any): void;
    saveAsSVG(editor: EditorActionsManager): void;
    saveAsPNG(cy: any): void;
    saveGraph(isSIFNX: boolean, editor: EditorActionsManager): void;
}
