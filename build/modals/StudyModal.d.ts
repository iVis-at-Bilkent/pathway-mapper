import React from 'react';
import { IDataTypeMetaData } from '../ui/react-pathway-mapper';
import CBioPortalAccessor from '../utils/CBioPortalAccessor';
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
    preparePortalAccess(studyId: string): void;
    disableAllDataTypes(): void;
    fetchStudy(): void;
    resetModal(): void;
    handleCheckboxClick(dataType: any): void;
    render(): JSX.Element;
}
export {};
