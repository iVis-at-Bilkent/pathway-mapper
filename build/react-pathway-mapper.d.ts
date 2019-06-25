import React from 'react';
import EditorActionsManager from "./EditorActionsManager";
import FileOperationsManager from './FileOperationsManager';
import PathwayActions from './PathwayActions';
import CBioPortalAccessor from './CBioPortalAccessor';
import "./base.css";
import "cytoscape-panzoom/cytoscape.js-panzoom.css";
import "cytoscape-navigator/cytoscape.js-navigator.css";
interface IPathwayMapperProps {
    isCBioPortal: boolean;
    genes: any[];
    store: any;
    pathwayName?: string;
    alterationData?: IAlterationData;
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
    itemArray: any[];
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
    extractAllGenes(): void;
    loadRedirectedPortalData(): void;
    readonly profileEnabledMap: {};
    loadFromCBio(dataTypes: {
        [dataType: string]: IDataTypeMetaData;
    }, selectedStudyData: any[]): void;
    render(): JSX.Element;
    openChangeNameModal(oldName: string): void;
    handleOpen(): void;
    handleClose(modalId: number): void;
    editorHandler(editor: any, fileManager: any, eh: any): void;
    pathwayHandler(pathway: string): void;
}
export {};
