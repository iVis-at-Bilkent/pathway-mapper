import React from "react";
import "../css/supp.css";
import { ChatMessageMetaData } from "../ui/react-pathway-mapper";
interface ChatBoxProps {
    messages: ChatMessageMetaData[];
    addMessage: Function;
    showChat: boolean;
    username: string;
    openChat: Function;
    userId: number;
}
export default class ChatBox extends React.Component<ChatBoxProps, {}> {
    message: string;
    charactersPerLine: number;
    constructor(props: ChatBoxProps);
    convertMessage(message: string): string;
    handleClose(): void;
    handleElement(element: any): void;
    handleSubmit(event: any): void;
    handleChange(event: any): void;
    dragElement(elmnt: any): void;
    render(): JSX.Element;
}
export {};
