import EditorActionsManager from "./EditorActionsManager";
import { EModalType } from "./react-pathway-mapper";
export default class ContextMenuManager {
    private cy;
    private editor;
    private isCBioPortal;
    private handleOpen;
    private undoRedoManager;
    constructor(cy: any, editor: EditorActionsManager, isCBioPortal: boolean, handleOpen: (modalId: EModalType) => void, undoRedoManager: any);
    init(): void;
    isChildren(node: any, queryNode: any): boolean;
}
