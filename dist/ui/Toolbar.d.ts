import React from 'react';
import PathwayActions from '../utils/PathwayActions';
import { IAlterationData } from '../ui/react-pathway-mapper';
interface IToolbarProps {
    pathwayActions: PathwayActions;
    selectedPathway: string;
    alterationData: IAlterationData;
    handleOpen: (modalId: number) => void;
    genes: any[];
    validGenes: any;
    showMessage: (message: string) => void;
    pathwayGenes: string[];
    onAddGenes: (selectedGenes: string[]) => void;
    patientView?: boolean;
}
export default class Toolbar extends React.Component<IToolbarProps, {}> {
    selectedGenes: string[];
    private editor;
    constructor(props: IToolbarProps);
    render(): JSX.Element;
}
export {};
