import EditorActionsManager from './EditorActionsManager.js';
export default class FileOperationsManager {
    private cy;
    undoRedoManager: any;
    editor: EditorActionsManager;
    constructor(cy: any, undoRedoManager: any, editor: EditorActionsManager);
    b64toBlob(b64Data: any, contentType: any, sliceSize?: number): Blob;
    saveAsJPEG(): void;
    saveAsPNG(): void;
    resetUndoStack(): void;
    createNewPathway(): void;
}
