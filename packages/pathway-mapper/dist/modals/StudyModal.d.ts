import React from "react";
import { IDataTypeMetaData } from "../ui/react-pathway-mapper";
import CBioPortalAccessor from "../utils/CBioPortalAccessor";
import { CancerStudy } from "cbioportal-ts-api-client";
interface IStudyModalProps {
    show: boolean;
    loadFromCBio: Function;
    handleClose: Function;
}
export default class StudyModal extends React.Component<IStudyModalProps, {}> {
    dataTypes: {
        [dataType: string]: IDataTypeMetaData;
    };
    dataTypeFetchResultsReady: boolean;
    currentlySelectedItemIndex: number;
    selectedStudies: {
        data: CancerStudy;
        dataTypes: {
            [dataType: string]: IDataTypeMetaData;
        };
    }[];
    checkboxModalPosition: {
        bottom: number;
    };
    selectedDataTypesPerStudy: string[];
    cancerStudies: CancerStudy[];
    searchQuery: string;
    showDataTypeSelectionModal: boolean;
    studyListItemCheckboxChecked: boolean[];
    selectedStudyData: CancerStudy | undefined;
    portalAccessor: CBioPortalAccessor;
    constructor(props: IStudyModalProps);
    setDataTypeFetchResultsReady(ready: boolean): void;
    setCancerStudies(itemArray: CancerStudy[]): void;
    setSearchQuery(query: string): void;
    setSelectedStudyData(data: CancerStudy): void;
    setDataTypeProperties(dataType: string, properties: IDataTypeMetaData): void;
    initStudyListItemCheckboxChecked(studyCount: number): void;
    initSelectedDataTypesPerStudy(studyCount: number): void;
    toggleStudyListItemCheckboxChecked(studyIndex: number): void;
    addSelectedStudy(selectedStudy: {
        data: CancerStudy;
        dataTypes: {
            [dataType: string]: IDataTypeMetaData;
        };
    }): void;
    removeSelectedStudy(selectedStudyData: CancerStudy): void;
    clearSelectedStudies(): void;
    setShowDataTypeSelectionModal(show: boolean): void;
    clearStudyCheckboxesChecked(): void;
    clearSelectedDataTypesPerStudy(): void;
    unselectDataTypesForStudy(index: number): void;
    preparePortalAccess(studyId: string): void;
    disableAllDataTypes(): void;
    fetchStudy(): void;
    resetModal(): void;
    handleCheckboxClick(dataType: any): void;
    get selectedStudyDataTitle(): string;
    render(): JSX.Element;
}
export {};
