import EditorActionsManager from "./EditorActionsManager";
export default class ViewOperationsManager {
    movedNodes: any[];
    editor: EditorActionsManager;
    cy: any;
    constructor(editor: EditorActionsManager, cy: any);
    handleNodeAlignment(param: any): void;
    calculateNewPosition(param: any, node: any, referenceBbox: any, referenceOuterHeight: any): any;
    changePosition(node: any, dx: any, dy: any, newPos: any): void;
}
