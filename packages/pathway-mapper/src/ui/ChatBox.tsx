import autobind from "autobind-decorator";
import { action, computed, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import React ,{Component} from "react";
import ChatMessage from "./ChatMessage";
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
import { threadId } from "worker_threads";

interface ChatBoxProps {
  messages: ChatMessageMetaData[];
  addMessage: Function;
  showChat: boolean;
  username: string;
  openChat: Function;
  userId: number;
}

@observer
export default class ChatBox extends React.Component<ChatBoxProps, {}>{

  
  message: string = "";

  constructor(props: ChatBoxProps) {
    super(props);
    makeObservable(this);
    this.state = {
      diffX: 0,
      diffY: 0,
      dragging: false,
      styles: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);   
  }

  convertMessage( message: string){
    let convertedMessage = "";
    for( let i = 0; i < message.length; i++){
        if( i > 0 && i %30 === 0)
            convertedMessage = convertedMessage + "\n";
        convertedMessage = convertedMessage + message.charAt(i);
    }
    return convertedMessage;
  }

 

  handleClose(){
    this.props.openChat();
  }

  handleElement( element){
    element.value = "";
  }

  handleSubmit(event){
    event.preventDefault();
    let element = document.getElementById("message-text");
    this.handleElement(document.getElementById("message-text"));
    this.props.addMessage(this.convertMessage(this.message));
    this.message = "";

 }
 
 handleChange(event){
    this.message = event.target.value;
 }


dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if( elmnt.id === "chatBoxxbutton"){
    return ;
  }
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }


  
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:  <div className = {this.props.showChat ? "ChatBox" : "ChatBoxHidden"}  style={this.state.styles} onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd}>
    */
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

  render() {
    return (
      <div id = "chatBoxx" className = {this.props.showChat ? "ChatBox" : "ChatBoxHidden"}   onMouseDown={()=>this.dragElement(document.getElementById("chatBoxx"))} >
           
           <div id = "chatBoxxheader">
               <div className = "ChatBoxTitle" ></div>
            <ListGroup
              style={{
                maxHeight: "200px",
                overflow: "auto",
              }}
            >
              { 
                this.props.messages
                  .map( (message) => {
                     const id = message.id;
                     console.log(id + " " + message.message + " " + message.username + " " + message.userId + " " + this.props.userId + " " + (this.props.userId === message.userId) );
                     console.log(this.props.userId);
                     //console.log(message.userId);
                     console.log(message.message);
                     if( this.props.userId !== message.userId)
                         console.log( this.props.userId + " " + message.userId + " " + ( this.props.userId - message.userId))
                     if( message.username === this.props.username &&  this.props.userId === message.userId ) {
                    return (
                        <div className = "MessageDate">
                        <div className = "MyMessageDate"> {message.date} </div>
                        <ChatMessage message = {message} username = {this.props.username} userId = {this.props.userId} />
                       </div>
                    );
                    }
                    else{
                      return (
                        <div className = "MessageDate">
                        <ChatMessage message = {message} username = {this.props.username} userId = {this.props.userId} />
                        <div  className = "OtherMessageDate"  > {message.date} </div>
                       </div>
                    );
                    }

                      })
              }
             </ListGroup> 

            </div>          

             <div className = "ChatBoxTitle2" ></div>  
            
            <div id = "chatBoxxbutton" className = "chatBoxButton" >
            <form onSubmit={this.handleSubmit}  onReset = {() => (this.props.addMessage(this.convertMessage(this.message),), this.message = "")} >   
           
            <input  id = "message-text" className = "messageText" type="textarea" autoComplete = "off"  placeholder = "Enter Message" onChange={this.handleChange} disabled = {false} />  
            <button className = "chatButtons" type="submit"><img src= { require('../images/send.svg')} /> </button>
            </form>
            </div>
            <div className = "ChatBoxTitle2" ></div>
                                              
               

      </div>
    );
  }
}