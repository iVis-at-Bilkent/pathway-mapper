import React from "react";
import PathwayActions from "../utils/PathwayActions";
import "../css/supp.css";
interface ISideBarProps {
    pathwayActions: PathwayActions;
    setActiveEdgeHandler: Function;
    handleOpen: Function;
}
export default class Sidebar extends React.Component<ISideBarProps, {}> {
    activeEdge: number;
    constructor(props: ISideBarProps);
    addEdge(edgeIndex: number): void;
    setActiveEdge(edgeIndex: number): void;
    render(): JSX.Element;
}
export {};
