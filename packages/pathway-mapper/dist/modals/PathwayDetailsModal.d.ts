import React from 'react';
import { IPathwayInfo } from '../managers/FileOperationsManager';
import PathwayActions from '../utils/PathwayActions';
interface IPathwayDetailsModalProps {
    show: boolean;
    handleClose: Function;
    pathwayActions: PathwayActions;
}
export default class PathwayDetailsModal extends React.Component<IPathwayDetailsModalProps, {}> {
    pathwayInfo: IPathwayInfo;
    constructor(props: IPathwayDetailsModalProps);
    render(): JSX.Element;
}
export {};
