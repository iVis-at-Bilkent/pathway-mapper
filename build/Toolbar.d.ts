import React from 'react';
import PathwayActions from './PathwayActions';
import { IAlterationData } from './react-pathway-mapper';
interface IToolbarProps {
    pathwayActions: PathwayActions;
    selectedPathway: string;
    alterationData: IAlterationData;
}
export default class Toolbar extends React.Component<IToolbarProps, {}> {
    private editor;
    constructor(props: IToolbarProps);
    render(): JSX.Element;
}
export {};
