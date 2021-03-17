import EditorActionsManager from "../managers/EditorActionsManager";
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
    EDGE_ARROW_SCALE: number;
    EDGE_WIDTH: number;
    T_ARROW_HEAD_WIDTH: number;
    T_ARROW_HEAD_HEIGHT: number;
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
    drawEdge(edge: any): void;
    createRect(node: any): Element;
    createNodeLabel(node: any, genomicDataOffset: any): Element;
    createStyleForNodes(node: any, nodeRectangle: any): any;
    createEdgeLabel(edge: any): Element;
    getEdgeLabelRotationAngle(edge: any): number;
    toDegrees(radians: any): number;
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
