import React from "react";
import { IDataTypeMetaData } from "../ui/react-pathway-mapper";
import CBioPortalAccessor from "../utils/CBioPortalAccessor";
interface IStudyModalProps {
    isModalShown: boolean;
    loadFromCBio: Function;
    handleClose: Function;
}
export default class StudyModal extends React.Component<IStudyModalProps, {}> {
    dataTypes: {
        [dataType: string]: IDataTypeMetaData;
    };
    itemArray: any[];
    selectedStudyData: any[];
    portalAccessor: CBioPortalAccessor;
    constructor(props: IStudyModalProps);
    setSelectedStudyData(data: any[]): void;
    setDataTypeProperties(dataType: string, properties: IDataTypeMetaData): void;
    preparePortalAccess(studyId: string): void;
    disableAllDataTypes(): void;
    fetchStudy(): void;
    resetModal(): void;
    handleCheckboxClick(dataType: any): void;
    get selectedStudyDataTitle(): any;
    render(): JSX.Element;
}
export {};
