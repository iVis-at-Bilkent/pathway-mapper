import React from 'react';
import EditorActionsManager from "./EditorActionsManager";
import FileOperationsManager from './FileOperationsManager';
import PathwayActions from './PathwayActions';
import CBioPortalAccessor from './CBioPortalAccessor';
import "./base.css";
import "./base.min.css";
import "cytoscape-panzoom/cytoscape.js-panzoom.css";
import "cytoscape-navigator/cytoscape.js-navigator.css";
import 'react-toastify/dist/ReactToastify.css';
interface IPathwayMapperProps {
    isCBioPortal: boolean;
    isCollaborative: boolean;
    genes: any[];
    store: any;
    pathwayName?: string;
    alterationData?: IAlterationData;
}
export interface IPathwayData {
    title: string;
    description: string;
    nodes: any[];
    edges: any[];
}
export interface IAlterationData {
    [key: string]: {
        [key: string]: number;
    };
}
export interface IProfileMetaData {
    profileId: string;
    studyId?: string;
    enabled: boolean;
}
export interface IDataTypeMetaData {
    enabled: boolean;
    checked: boolean;
    profile: string;
}
export default class PathwayMapper extends React.Component<IPathwayMapperProps, {}> {
    readonly NUMBER_OF_PATHWAYS_TO_SHOW = 10;
    selectedPathway: string;
    fileManager: FileOperationsManager;
    editor: EditorActionsManager;
    pathwayActions: PathwayActions;
    isModalShown: boolean[];
    portalAcessor: CBioPortalAccessor;
    alterationData: IAlterationData;
    pathwayGeneMap: {
        [key: string]: {
            [key: string]: string;
        };
    };
    bestPathwaysAlgos: any[][];
    oldName: string;
    profiles: IProfileMetaData[];
    setActiveEdge: (edgeId: number) => void;
    viewOperationsManager: any;
    constructor(props: IPathwayMapperProps);
    getGeneStudyMap(studyGeneMap: any): any;
    getAlterationAveragePerGene(genomicDataMap: any): any;
    handleMutations(): void;
    overlayPortalData(): void;
    /**
     *
     * @param rankingMode: number => 0 = Count, 1 = Percentage, 2 = Count with Alteration, 3 = Percentage with Alteration
     *
     */
    getBestPathway(rankingMode: number): void;
    includePathway(pathwayData?: IPathwayData, pathwayName?: string): void;
    extractAllGenes(): void;
    loadRedirectedPortalData(): void;
    readonly profileEnabledMap: {};
    doesProfileExist(profileId: string): boolean;
    loadFromCBio(dataTypes: {
        [dataType: string]: IDataTypeMetaData;
    }, selectedStudyData: any[]): void;
    setActiveEdgeHandler(setActiveEdge: (edgeId: number) => void): void;
    render(): JSX.Element;
    componentDidMount(): void;
    openChangeNameModal(oldName: string): void;
    handleOpen(modalId: number): void;
    handleClose(modalId: number): void;
    editorHandler(editor: any, eh: any, undoRedoManager: any): void;
    pathwayHandler(pathway: string): void;
}
export {};
