import { IGeneticAlterationRuleSetParams } from 'oncoprintjs';
import React from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import "../css/pmv1.css";
import "../css/pmv2.css";
import '../css/qtip.css';
import "../css/supp.css";
import EditorActionsManager from "../managers/EditorActionsManager";
import FileOperationsManager from '../managers/FileOperationsManager';
import GridOptionsManager from '../managers/GridOptionsManager';
import ViewOperationsManager from '../managers/ViewOperationsManager';
import CBioPortalAccessor from '../utils/CBioPortalAccessor';
import PathwayActions from '../utils/PathwayActions';
interface IPathwayMapperProps {
    isCBioPortal: boolean;
    genes: any[];
    isCollaborative?: boolean;
    cBioAlterationData?: ICBioData[];
    sampleIconData?: ISampleIconData;
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
    messageBanner?: () => JSX.Element;
}
export interface ICBioData {
    altered: number;
    gene: string;
    percentAltered: string;
    sequenced: number;
    geneticTrackData?: any[];
    geneticTrackRuleSetParams?: IGeneticAlterationRuleSetParams;
}
export interface ISampleIconData {
    sampleIndex: {
        [s: string]: number;
    };
    sampleColors: {
        [s: string]: string;
    };
}
/**
 * Maps integer values to color code strings
 */
export interface IColorValueMap {
    [value: string]: string;
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
    CHELP = 8,
    PROFILES_COLOR_SCHEME = 9
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
export declare class PathwayMapper extends React.Component<IPathwayMapperProps, {}> {
    static readonly CBIO_PROFILE_NAME = "cBioPortal_data";
    readonly MAX_ALLOWED_PROFILES_ENABLED = 6;
    selectedPathway: string;
    fileManager: FileOperationsManager;
    editor: EditorActionsManager;
    pathwayActions: PathwayActions;
    isModalShown: boolean[];
    colorValueMap: IColorValueMap;
    portalAccessor: CBioPortalAccessor;
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
    setColorMapping(colorValueMap: IColorValueMap): void;
    setSelectedPathway(pathway: string): void;
    setEditor(editor: EditorActionsManager): void;
    addProfile(profile: IProfileMetaData): void;
    toggleProfileEnabled(index: number): void;
    calculateAlterationData(cBioAlterationData: ICBioData[]): void;
    calculatePatientData(cBioAlterationData: ICBioData[]): void;
    addSampleIconData(sampleIconData: any): void;
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
    exists(profileId: string): boolean;
    loadFromCBio(dataTypes: {
        [dataType: string]: IDataTypeMetaData;
    }, studyData: any[]): void;
    setActiveEdgeHandler(setActiveEdge: (edgeId: number) => void): void;
    colorSchemeChangeCallback(colorScheme: IColorValueMap): void;
    addGenomicData(cBioAlterationData: ICBioData[]): void;
    emphasizeQueryGenes(): void;
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(): void;
    handleOpen(modalId: EModalType): void;
    handleClose(modalId: EModalType): void;
    editorHandler(editor: any, eh: any, undoRedoManager: any): void;
    pathwayHandler(pathway: string): void;
}
export default PathwayMapper;
