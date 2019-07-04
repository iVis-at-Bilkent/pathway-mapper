import EditorActionsManager from "./EditorActionsManager";
export default class ContextMenuManager {
    private cy;
    private editor;
    private isCBioPortal;
    constructor(cy: any, editor: EditorActionsManager, isCBioPortal: boolean);
    init(): void;
    isChildren(node: any, queryNode: any): boolean;
}
