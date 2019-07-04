import React from 'react';
import PathwayActions from './PathwayActions.js';
interface IMenubarProps {
    pathwayActions: PathwayActions;
    handleOpen: (modalId: number) => void;
    setActiveEdge: Function;
}
export default class Menubar extends React.Component<IMenubarProps, {}> {
    constructor(props: IMenubarProps);
    render(): JSX.Element;
}
export {};
