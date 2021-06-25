import React from 'react';
import PathwayActions from '../utils/PathwayActions';
interface IGridSettingsProps {
    show: boolean;
    handleClose: Function;
    pathwayActions: PathwayActions;
}
export declare enum EGridType {
    GRID = 0,
    GUIDE = 1,
    NONE = 2
}
export default class GridSettings extends React.Component<IGridSettingsProps, {}> {
    private gridSize;
    private guideColor;
    private defaultSettings;
    private enabledType;
    constructor(props: IGridSettingsProps);
    setEnabledType(newType: EGridType): void;
    render(): JSX.Element;
}
export {};
