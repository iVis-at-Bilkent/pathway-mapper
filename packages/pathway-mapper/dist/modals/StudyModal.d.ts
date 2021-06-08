import React from "react";
import { IDataTypeMetaData } from "../ui/react-pathway-mapper";
import CBioPortalAccessor from "../utils/CBioPortalAccessor";
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
        data: any[];
        dataTypes: {
            [dataType: string]: IDataTypeMetaData;
        };
    }[];
    checkboxModalPosition: {
        bottom: number;
    };
    selectedDataTypesPerStudy: string[];
    itemArray: any[];
    searchQuery: string;
    showDataTypeSelectionModal: boolean;
    studyListItemCheckboxChecked: boolean[];
    selectedStudyData: any[];
    portalAccessor: CBioPortalAccessor;
    constructor(props: IStudyModalProps);
    setDataTypeFetchResultsReady(ready: boolean): void;
    setItemArray(itemArray: any[]): void;
    setSearchQuery(query: string): void;
    setSelectedStudyData(data: any[]): void;
    setDataTypeProperties(dataType: string, properties: IDataTypeMetaData): void;
    initStudyListItemCheckboxChecked(studyCount: number): void;
    initSelectedDataTypesPerStudy(studyCount: number): void;
    toggleStudyListItemCheckboxChecked(studyIndex: number): void;
    addSelectedStudy(selectedStudy: {
        data: any[];
        dataTypes: {
            [dataType: string]: IDataTypeMetaData;
        };
    }): void;
    removeSelectedStudy(selectedStudyData: any[]): void;
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
    get selectedStudyDataTitle(): any;
    render(): JSX.Element;
}
export {};
