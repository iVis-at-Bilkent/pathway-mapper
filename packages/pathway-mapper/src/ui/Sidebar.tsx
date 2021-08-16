import { action, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import { Button, Panel } from "react-bootstrap";
import "../css/supp.css";
// @ts-ignore
import acImg from "../images/edges/activates.svg";
// @ts-ignore
import bindImg from "../images/edges/binds.svg";
// @ts-ignore
import indImg from "../images/edges/induces.svg";
// @ts-ignore
import inhImg from "../images/edges/inhibits.svg";
// @ts-ignore
import repImg from "../images/edges/represses.svg";
import PathwayActions from "../utils/PathwayActions";
import ChatBox from "./ChatBox";

import { ChatMessageMetaData, EModalType } from "./react-pathway-mapper";
import {
  Checkbox,
  FormControl,
  ListGroup,
  ListGroupItem,
  Modal,
} from "react-bootstrap";


interface ISideBarProps{
  pathwayActions: PathwayActions;
  setActiveEdgeHandler: Function;
  handleOpen: Function;
  messages: ChatMessageMetaData[];
  addMessage: Function;
  username: string;
  userId: number;
  isCollaborative: boolean;
}

@observer
export default class Sidebar extends React.Component<ISideBarProps, {}>{

    @observable
    activeEdge: number = -1;

    @observable
    showChat: boolean = false;   

    constructor(props: ISideBarProps){
        super(props);
        makeObservable(this);
        props.setActiveEdgeHandler(this.setActiveEdge);
        
    }

    addEdge(edgeIndex: number){
      if(edgeIndex === this.activeEdge){
        this.setActiveEdge(-1);
        this.props.pathwayActions.addEdge(-1);
        return;
      }
      this.setActiveEdge(edgeIndex);
      this.props.pathwayActions.addEdge(edgeIndex);
    }

    @action.bound
    setActiveEdge(edgeIndex: number){
      this.activeEdge = edgeIndex;
    }

    changeScroll(){
      document.getElementById('chatBoxxheader').children[1].scrollTop = document.getElementById('chatBoxxheader').children[1].scrollHeight;
    }
    @action.bound
    openChat(){
      this.showChat = !this.showChat;
      setTimeout(this.changeScroll, 50);
      
    }

   



    render(){

        const edgeTypes = ["Activates", "Inhibits", "Induces", "Represses", "Binds"];

        const edgeImgs = [acImg, inhImg, indImg, repImg, bindImg];

        const nodeIds = ["simpleNodeDiv", "familyNodeDiv", "complexNodeDiv", "compartmentNodeDiv", "processNodeDiv"];

        if( this.props.isCollaborative){
          return(
          <div id="pathway-sidebar" className="sideBarWrapper">
            <Panel className="pnl">
                <Panel.Heading className="pnl-header">
                  Network
                </Panel.Heading>
                <Panel.Body className="pnl-body pathwayPanel">
                    
                    <div className="buttonContainer">
                        <Button onClick={() => {this.props.handleOpen(EModalType.PW_DETAILS)}}>Properties</Button>
                    </div>
                    <div className="buttonContainer"> 
                        <Button onClick={() => {this.props.pathwayActions.upload();}}>Import</Button>
                    </div>
                    <div className="buttonContainer">
                        <Button onClick={() => {this.props.pathwayActions.export(false)}}>Export</Button>
                    </div>
                </Panel.Body>
              </Panel>

            <Panel className="pnl">
                <Panel.Heading className="pnl-header">
                 Node Palette
                </Panel.Heading>
                <Panel.Body className="pnl-body">
                      
                {
                        nodeIds.map((id) => {
                        return (
                        <div key={id} id={id} data-tip="Click on this and drag to the location on drawing canvas and release!" data-effect="solid" data-place="bottom" data-delay-show="1000" className="dragButtonContainer">
                        </div>);
                        })
                      }
                </Panel.Body>
              </Panel>

            <Panel className="pnl edgePanel">
                <Panel.Heading className="pnl-header">
                  Interaction Palette
                </Panel.Heading>
                <Panel.Body className="pnl-body edgePaletteWrapper">
                    <div className="list-group edge-palette">
                    {
                    edgeTypes.map((edgeType: string, i: number) => {
                    return (<div key={i} data-tip="Click to activate; then, start the interaction from the little circle on the source node!" data-effect="solid" data-place="bottom" data-delay-show="1000" >
                        <a style={{marginBottom: "5px"}} className={ "list-group-item " + (this.activeEdge === i ? "active" : "")} 
                        onClick={() => {this.addEdge(i);}} href="#" >
                        <img style={{width:"30px"}} className="pull-left" src={edgeImgs[i]}></img>{' '}
                        {edgeType}
                        </a></div>);
                    })
                    }
                    </div>
                </Panel.Body>
              </Panel>
              
              <Panel className="pnl edgePanel">
                <Panel.Heading className="pnl-header">
                <button className = "chatButton" onClick ={() => this.openChat()} onSubmit =  { () => (1+2)}> 
                  {this.showChat ?  "Chat <<" : "Chat >>" }
                </button>
                </Panel.Heading>
              
                
              <div id = "chat-box" className = "chatBoxBorder">
              <ChatBox  messages = {this.props.messages} addMessage = {this.props.addMessage} showChat = {this.showChat} username = {this.props.username} openChat = {this.openChat} userId = {this.props.userId}/>
              
              </div>
              </Panel>
              </div>
              
        );
      }
      else {
        return(
          <div id="pathway-sidebar" className="sideBarWrapper">
            <Panel className="pnl">
                <Panel.Heading className="pnl-header">
                  Network
                </Panel.Heading>
                <Panel.Body className="pnl-body pathwayPanel">
                    
                    <div className="buttonContainer">
                        <Button onClick={() => {this.props.handleOpen(EModalType.PW_DETAILS)}}>Properties</Button>
                    </div>
                    <div className="buttonContainer"> 
                        <Button onClick={() => {this.props.pathwayActions.upload();}}>Import</Button>
                    </div>
                    <div className="buttonContainer">
                        <Button onClick={() => {this.props.pathwayActions.export(false)}}>Export</Button>
                    </div>
                </Panel.Body>
              </Panel>

            <Panel className="pnl">
                <Panel.Heading className="pnl-header">
                 Node Palette
                </Panel.Heading>
                <Panel.Body className="pnl-body">
                      
                {
                        nodeIds.map((id) => {
                        return (
                        <div key={id} id={id} data-tip="Click on this and drag to the location on drawing canvas and release!" data-effect="solid" data-place="bottom" data-delay-show="1000" className="dragButtonContainer">
                        </div>);
                        })
                      }
                </Panel.Body>
              </Panel>

            <Panel className="pnl edgePanel">
                <Panel.Heading className="pnl-header">
                  Interaction Palette
                </Panel.Heading>
                <Panel.Body className="pnl-body edgePaletteWrapper">
                    <div className="list-group edge-palette">
                    {
                    edgeTypes.map((edgeType: string, i: number) => {
                    return (<div key={i} data-tip="Click to activate; then, start the interaction from the little circle on the source node!" data-effect="solid" data-place="bottom" data-delay-show="1000" >
                        <a style={{marginBottom: "5px"}} className={ "list-group-item " + (this.activeEdge === i ? "active" : "")} 
                        onClick={() => {this.addEdge(i);}} href="#" >
                        <img style={{width:"30px"}} className="pull-left" src={edgeImgs[i]}></img>{' '}
                        {edgeType}
                        </a></div>);
                    })
                    }
                    </div>
                </Panel.Body>
              </Panel>
              </div>
              
        );
      }
    }
}