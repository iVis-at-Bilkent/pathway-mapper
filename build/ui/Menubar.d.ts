import React from 'react';
import PathwayActions from '../utils/PathwayActions';
import { EModalType } from './react-pathway-mapper';
interface IMenubarProps {
    pathwayActions: PathwayActions;
    handleOpen: (modalId: EModalType) => void;
    setActiveEdge: Function;
}
export default class Menubar extends React.Component<IMenubarProps, {}> {
    constructor(props: IMenubarProps);
    render(): JSX.Element;
}
export {};
