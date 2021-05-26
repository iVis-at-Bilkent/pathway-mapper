import 'tippy.js/dist/tippy.css';
import EditorActionsManager from "./EditorActionsManager";
export default class QtipManager {
    private cy;
    private editor;
    constructor(cy: any, editor: EditorActionsManager);
    generateEdgeQtip(edge: any): HTMLDivElement;
    generateNodeQtip(node: any): HTMLDivElement;
    addQtipToElements(eles: any): void;
    capitalizeFirstLetter(string: any): any;
}
