import { EModalType } from "../ui/react-pathway-mapper";
import EditorActionsManager from "./EditorActionsManager";
export default class ContextMenuManager {
    private cy;
    private editor;
    private handleOpen;
    private undoRedoManager;
    private isCollaborative;
    constructor(cy: any, editor: EditorActionsManager, handleOpen: (modalId: EModalType) => void, undoRedoManager: any, isCollaborative: boolean);
    init(): void;
    isChildren(node: any, queryNode: any): boolean;
}
