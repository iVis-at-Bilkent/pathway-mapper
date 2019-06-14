import EditorActionsManager from "./EditorActionsManager";

export default class ContextMenuManager {
  private cy: any;
  private editor: EditorActionsManager;
  constructor(cy: any, editor: EditorActionsManager){
    this.cy = cy;
    this.editor = editor;
  }
}
