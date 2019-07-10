import EditorActionsManager from "./EditorActionsManager";
export default class SVGExporter {
    SVGNameSpace: string;
    svg: Element;
    NODE_FILL_COLOR: string;
    FAMILY_FILL_COLOR: string;
    FAMILY_STROKE_COLOR: string;
    NODE_STROKE_COLOR: string;
    COMPARTMENT_STROKE_WIDTH: number;
    NODE_STROKE_WIDTH: number;
    NODE_OPACITY: number;
    ROUNDING_FACTOR: number;
    GENOMICDATA_LABEL_Y_OFFSET: number;
    EDGE_WIDTH: number;
    T_WIDTH: number;
    T_HEIGHT: number;
    T_ARROW_HEAD_OFFSET: number;
    TRIANGLE_ARROW_HEAD_HEIGHT: number;
    TRIANGLE_ARROW_HEAD_WIDTH: number;
    DASH_PARAMETERS: string;
    COMPOUND_MARGIN: number;
    NODE_FONT_SIZE: number;
    edgeEditing: any;
    editor: EditorActionsManager;
    constructor(edgeEditing: any, editor: EditorActionsManager);
    resetSVG(): void;
    exportGraph(nodes: any, edges: any): string;
    drawEdge(edge: any, source: any, target: any): void;
    /**
     *
     * **/
    findClippingPoints(sourceRectangle: any, targetRectangle: any): {
        sourceClipPoints: {
            x: any;
            y: any;
            slope: number;
        };
        targetClipPoints: {
            x: any;
            y: any;
            slope: number;
        };
    };
    createRect(node: any): Element;
    createText(node: any, genomicDataOffset: any): Element;
    createStyleForNodes(node: any, nodeRectangle: any): any;
    /**
     * Cohen Sutherland Line Clipping algorithm implementation
     * **/
    clipLine(line: any, rectangle: any): {
        x: any;
        y: any;
        slope: number;
    };
    /**
     * Utility vector functions
     * */
    dotProduct(v1: any, v2: any): {
        x: number;
        y: number;
    };
    unitVector(v: any): {
        x: number;
        y: number;
    };
    rotateVector(v: any, radians: any): {
        x: number;
        y: number;
    };
    scale(v: any, scalar: any): {
        x: number;
        y: number;
    };
}
