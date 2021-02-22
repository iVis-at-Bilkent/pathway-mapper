import 'jquery-ui-dist/jquery-ui';
import EditorActionsManager from "../managers/EditorActionsManager";
export default class DragDropNodeAddPlugin {
    pathwayHandler: (pathwayName: string) => void;
    private cy;
    private editor;
    constructor(editor: EditorActionsManager, cy: any, pathwayHandler: (pathwayName: string) => void);
    initNodeAdd(): void;
}
