import React from 'react';
import EditorActionsManager from "./EditorActionsManager";
import FileOperationsManager from './FileOperationsManager';
import PathwayActions from './PathwayActions';
import CBioPortalAccessor from './CBioPortalAccessor';
import "./pmv1.css";
import "./pmv2.css";
import "cytoscape-panzoom/cytoscape.js-panzoom.css";
import "cytoscape-navigator/cytoscape.js-navigator.css";
import 'react-toastify/dist/ReactToastify.css';
import './qtip.css';
import ViewOperationsManager from './ViewOperationsManager';
import GridOptionsManager from './GridOptionsManager';
interface IPathwayMapperProps {
    isCBioPortal: boolean;
    isCollaborative: boolean;
    genes: any[];
    cBioAlterationData?: ICBioData[];
    pathwayName?: string;
    alterationData?: IAlterationData;
    queryParameter?: any;
    oncoPrintTab?: string;
}
interface ICBioData {
    altered: number;
    gene: string;
    oqlLine: string;
    percentAltered: string;
    sequenced: number;
}
export declare enum EModalType {
    STUDY = 0,
    CONFIRMATION = 1,
    PROFILES = 2,
    ABOUT = 3,
    PW_DETAILS = 4,
    GRID = 5,
    HELP = 6,
    LAYOUT = 7
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
export interface IPathwayMapperTable {
    name: string;
    score: string;
    genes: string;
}
export default class PathwayMapper extends React.Component<IPathwayMapperProps, {}> {
    readonly NUMBER_OF_PATHWAYS_TO_SHOW = 10;
    readonly CBIO_PROFILE_NAME = "cBioPortal_data";
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
    viewOperationsManager: ViewOperationsManager;
    gridOptionsManager: GridOptionsManager;
    constructor(props: IPathwayMapperProps);
    getGeneStudyMap(studyGeneMap: any): any;
    getAlterationAveragePerGene(genomicDataMap: any): any;
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
    handleOpen(modalId: EModalType): void;
    handleClose(modalId: EModalType): void;
    editorHandler(editor: any, eh: any, undoRedoManager: any): void;
    pathwayHandler(pathway: string): void;
}
export {};
