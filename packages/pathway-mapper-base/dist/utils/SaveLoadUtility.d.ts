import { IPathwayInfo } from "../managers/FileOperationsManager";
export default class SaveLoadUtility {
    static exportGraph(pathwayDetails: IPathwayInfo, cy: any, edgeEditing: any, graphJSON: any): string;
    static exportAsSIFNX(pathwayDetails: any, graphJSON: any): string;
    static exportNode(node: any): string;
    static parseGraph(graph: any, isArray: any): {
        title: any;
        description: any;
        nodes: any[];
        edges: any[];
    };
}
