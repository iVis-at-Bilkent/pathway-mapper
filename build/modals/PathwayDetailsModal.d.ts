import React from 'react';
import PathwayActions from '../PathwayActions';
import { IPathwayInfo } from '../FileOperationsManager';
interface IPathwayDetailsModalProps {
    isModalShown: boolean;
    handleClose: Function;
    pathwayActions: PathwayActions;
}
export default class PathwayDetailsModal extends React.Component<IPathwayDetailsModalProps, {}> {
    pathwayInfo: IPathwayInfo;
    constructor(props: IPathwayDetailsModalProps);
    render(): JSX.Element;
}
export {};
