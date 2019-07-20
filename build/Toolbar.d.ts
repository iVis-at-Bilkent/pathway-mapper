import React from 'react';
import PathwayActions from './PathwayActions';
import { IAlterationData } from './react-pathway-mapper';
interface IToolbarProps {
    pathwayActions: PathwayActions;
    selectedPathway: string;
    alterationData: IAlterationData;
    handleOpen: (modalId: number) => void;
    queryParameter: any;
    oncoPrintTab: string;
}
export default class Toolbar extends React.Component<IToolbarProps, {}> {
    selectedGenes: string[];
    private editor;
    constructor(props: IToolbarProps);
    render(): JSX.Element;
    private onAddGenes;
}
export {};
