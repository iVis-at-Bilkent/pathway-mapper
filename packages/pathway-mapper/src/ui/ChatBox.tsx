import autobind, { boundMethod } from "autobind-decorator";
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
  charactersPerLine: number = 21;

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
    let index = 0;
    
    while(index < message.length) {
      let lastIndexinLine = index + this.charactersPerLine - 1;
      if( lastIndexinLine >= message.length - 1 ){
          lastIndexinLine = message.length - 1;
      }

      else if( message.charAt( lastIndexinLine +  1 ) === " " ) {          
      }
      else {
        while( lastIndexinLine >= 0 ) {
          if( message.charAt( lastIndexinLine) === " "  ){
              break;
          }
          lastIndexinLine = lastIndexinLine - 1;
        }
      }
      if( index > lastIndexinLine ){
          for( let i = index ;  i < index + this.charactersPerLine; i++){
               convertedMessage = convertedMessage + message.charAt( i );
          }
          convertedMessage = convertedMessage + "-";
          convertedMessage = convertedMessage + "\n";
          index = index + this.charactersPerLine;
      }                      
      else {
        for( let i = index ;  i <= lastIndexinLine; i++){
          convertedMessage = convertedMessage + message.charAt( i );
     }
     convertedMessage = convertedMessage + "\n";
     index = lastIndexinLine + 1;
      }                                                                                                                                     
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

 @autobind
 dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  document.getElementById("chatBoxxDrag").onmousedown = dragMouseDown;

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
      <div id = "chatBoxx" className = {this.props.showChat ? "ChatBox" : "ChatBoxHidden"}   onMouseEnter = {()=> this.dragElement(document.getElementById("chatBoxx"))} onMouseDown={()=>{this.dragElement(document.getElementById("chatBoxx"))}} >
          <div id = "chatBoxxDrag" className = "ChatBoxTitle" > </div>
           <div id = "chatBoxxheader" >    
           <ListGroup
              style={{
                height: "200px"  ,
                overflow: "auto",
                resize: "vertical"
                //color:  "#C0C0C0"
              }}
            >
              { 
                this.props.messages
                  .map( (message) => {
                     const id = message.id;
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