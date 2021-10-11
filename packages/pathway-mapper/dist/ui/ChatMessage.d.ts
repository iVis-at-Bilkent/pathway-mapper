import React from "react";
import "../css/supp.css";
import { ChatMessageMetaData } from "../ui/react-pathway-mapper";
interface ChatMessageProps {
    message: ChatMessageMetaData;
    username: string;
    userId: number;
}
export default class ChatBox extends React.Component<ChatMessageProps> {
    constructor(props: ChatMessageProps);
    render(): JSX.Element;
}
export {};
