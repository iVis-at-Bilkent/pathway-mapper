import React from "react";
import "../css/supp.css";
import PathwayActions from "../utils/PathwayActions";
import { ChatMessageMetaData } from "./react-pathway-mapper";
interface ISideBarProps {
    pathwayActions: PathwayActions;
    setActiveEdgeHandler: Function;
    handleOpen: Function;
    messages: ChatMessageMetaData[];
    addMessage: Function;
    username: string;
    userId: number;
    isCollaborative: boolean;
}
export default class Sidebar extends React.Component<ISideBarProps, {}> {
    activeEdge: number;
    showChat: boolean;
    constructor(props: ISideBarProps);
    addEdge(edgeIndex: number): void;
    setActiveEdge(edgeIndex: number): void;
    changeScroll(): void;
    openChat(): void;
    render(): JSX.Element;
}
export {};
