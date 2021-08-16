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
        
    return (
        <div className = {(this.props.username === this.props.message.username  && this.props.message.userId === this.props.userId) ? "MyMessage" : "OtherMessage" } >
            <div style={{whiteSpace: 'pre-line'}}>{this.props.message.username + "" + this.props.message.userId + "\n" + this.props.message.message} </div>
        </div>
    );
  }
}
