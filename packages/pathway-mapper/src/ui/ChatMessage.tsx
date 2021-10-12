import autobind from "autobind-decorator";
import { action, computed, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import React ,{Component} from "react";
import "../css/supp.css";
import {
  Button,
  Checkbox,
  FormControl,
  ListGroup,
  ListGroupItem,
  Modal,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { ChatMessageMetaData, EModalType, IDataTypeMetaData } from "../ui/react-pathway-mapper";
import CBioPortalAccessor from "../utils/CBioPortalAccessor";

interface ChatMessageProps {
  message: ChatMessageMetaData;
  username: string;
  userId: number;
}

@observer
export default class ChatBox extends React.Component<ChatMessageProps>{

  constructor(props: ChatMessageProps) {
    super(props);
    makeObservable(this);
  }

  render() {  
    /*let MyMessageColors = ['#1e90ff', '#ff0000', '#ffd700', '#006400', '#0000ff', '#257359', '#c71585', '#ff4500']; 
    let OthersMessageColors = ['#8ec7fe', '#ff7f7f', '#ffeb7f', '#31ff31', '#7f7fff', '#b2e5d4', '#f17bc5', '#ffa27f' ]; */
    let MyMessageColors = ['#1e90ff', '#ff0000', /*'#bbc704'*/'#bdc801', '#006400', '#0000ff', '#257359', '#c71585', '#fd713d']; 
    let OthersMessageColors = ['#8ec7fe', '#f08c8c', '#f6f7b6', '#31ff31', '#b3b3f7', '#b2e5d4', '#f17bc5', '#fdb89e' ]; 
    return (
        <div className = {(this.props.username === this.props.message.username  && this.props.message.userId === this.props.userId) ? "MyMessage" : "OtherMessage" } >
            <div style = {{color: this.props.message.userId === this.props.userId ? MyMessageColors[this.props.message.userId % 8] : OthersMessageColors[this.props.message.userId % 8 ]}}> {this.props.message.username + "_" + this.props.message.userId } </div>
            <div style={{whiteSpace: 'pre' }} >{this.props.message.message}</div>           
        </div>
    );
  }
}
