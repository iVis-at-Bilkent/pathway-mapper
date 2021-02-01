import EditorActionsManager from "../managers/EditorActionsManager";
import 'jquery-ui-dist/jquery-ui';
export default class DragDropNodeAddPlugin {
    pathwayHandler: (pathwayName: string) => void;
    private cy;
    private editor;
    constructor(editor: EditorActionsManager, cy: any, pathwayHandler: (pathwayName: string) => void);
    initNodeAdd(): void;
}
