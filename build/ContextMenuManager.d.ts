import EditorActionsManager from "./EditorActionsManager";
import { EModalType } from "./react-pathway-mapper";
export default class ContextMenuManager {
    private cy;
    private editor;
    private isCBioPortal;
    private handleOpen;
    private undoRedoManager;
    private isCollaborative;
    constructor(cy: any, editor: EditorActionsManager, isCBioPortal: boolean, handleOpen: (modalId: EModalType) => void, undoRedoManager: any, isCollaborative: boolean);
    init(): void;
    isChildren(node: any, queryNode: any): boolean;
}
