import React from 'react';
import EditorActionsManager from "../managers/EditorActionsManager";
import FileOperationsManager from '../managers/FileOperationsManager';
import PathwayActions from '../utils/PathwayActions';
import CBioPortalAccessor from '../utils/CBioPortalAccessor';
import ViewOperationsManager from '../managers/ViewOperationsManager';
import GridOptionsManager from '../managers/GridOptionsManager';
import "../css/pmv1.css";
import "../css/pmv2.css";
import '../css/qtip.css';
interface IPathwayMapperProps {
    isCBioPortal: boolean;
    genes: any[];
    isCollaborative?: boolean;
    cBioAlterationData?: ICBioData[];
    pathwayName?: string;
    alterationData?: IAlterationData;
    onAddGenes?: (selectedGenes: string[]) => void;
    changePathwayHandler?: (pathwayGenes: string[]) => void;
    addGenomicDataHandler?: (addGenomicData: (alterationData: ICBioData[]) => void) => void;
    tableComponent?: (data: IPathwayMapperTable[], selectedPathway: string, onPathwaySelect: (pathway: string) => void) => JSX.Element;
    validGenes?: any;
    toast: any;
    showMessage: (message: string) => void;
    patientView?: boolean;
}
export interface ICBioData {
    altered: number;
    gene: string;
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
    LAYOUT = 7,
    CHELP = 8
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
    score: number;
    genes: string[];
}
export default class PathwayMapper extends React.Component<IPathwayMapperProps, {}> {
    static readonly CBIO_PROFILE_NAME = "cBioPortal_data";
    readonly NUMBER_OF_PATHWAYS_TO_SHOW = 10;
    selectedPathway: string;
    fileManager: FileOperationsManager;
    editor: EditorActionsManager;
    pathwayActions: PathwayActions;
    isModalShown: boolean[];
    portalAcessor: CBioPortalAccessor;
    alterationData: IAlterationData;
    patientData: any[][];
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
    calculateAlterationData(cBioAlterationData: ICBioData[]): void;
    calculatePatientData(cBioAlterationData: ICBioData[]): void;
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
    addGenomicData(cBioAlterationData: ICBioData[]): void;
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(): void;
    handleOpen(modalId: EModalType): void;
    handleClose(modalId: EModalType): void;
    editorHandler(editor: any, eh: any, undoRedoManager: any): void;
    pathwayHandler(pathway: string): void;
}
export {};
