/// <reference types="jquery" />
import EditorActionsManager from "./EditorActionsManager";
export default class QtipManager {
    private cy;
    private editor;
    constructor(cy: any, editor: EditorActionsManager);
    generateEdgeQtipContentHTML(edge: any): JQuery<HTMLElement>;
    generateNodeQtipContentHTML(ele: any): JQuery<HTMLElement>;
    addQtipToElements(eles: any): void;
    capitalizeFirstLetter(string: any): any;
}
