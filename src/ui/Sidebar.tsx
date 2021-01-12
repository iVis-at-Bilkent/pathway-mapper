import React from "react";
import {Panel, Button, Col, Row, ListGroup, ListGroupItem} from "react-bootstrap";
import PathwayActions from "../utils/PathwayActions";

// @ts-ignore
import geneImg from "../images/nodes/gene.svg";
// @ts-ignore
import familyImg from "../images/nodes/family.svg";
// @ts-ignore
import complexImg from "../images/nodes/complex.svg";
// @ts-ignore
import compartmentImg from "../images/nodes/compartment.svg";
// @ts-ignore
import processImg from "../images/nodes/process.svg";
// @ts-ignore
import acImg from "../images/edges/activates.svg";
// @ts-ignore
import inhImg from "../images/edges/inhibits.svg";
// @ts-ignore
import indImg from "../images/edges/induces.svg";
// @ts-ignore
import repImg from "../images/edges/represses.svg";
// @ts-ignore
import bindImg from "../images/edges/binds.svg";

import "../css/supp.css"
import { makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import autobind from "autobind-decorator";
import { EModalType } from "./react-pathway-mapper";

interface ISideBarProps{
  pathwayActions: PathwayActions;
  setActiveEdgeHandler: Function;
  handleOpen: Function;
}

@observer
export default class Sidebar extends React.Component<ISideBarProps, {}>{

    @observable
    activeEdge: number;

    constructor(props: ISideBarProps){
        super(props);
        makeObservable(this);
        
        this.activeEdge = -1;
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

    @autobind
    setActiveEdge(edgeIndex: number){
      this.activeEdge = edgeIndex;
    }

    render(){

        const nodeTypes = ["Gene", "Family", "Complex", "Compartment", "Process"];
        const edgeTypes = ["Activates", "Inhibits", "Induces", "Represses", "Binds"];

        const nodeImgs = [geneImg, familyImg, complexImg, compartmentImg, processImg];
        const edgeImgs = [acImg, inhImg, indImg, repImg, bindImg];

        const nodeIds = ["simpleNodeDiv", "familyNodeDiv", "complexNodeDiv", "compartmentNodeDiv", "processNodeDiv"];

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
                        <div id={id} data-tip="Click on this and drag to the location on drawing canvas and release!" data-effect="solid" data-place="bottom" data-delay-show="1000" className="dragButtonContainer">
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
                    return (<div data-tip="Click to activate; then, start the interaction from the little circle on the source node!" data-effect="solid" data-place="bottom" data-delay-show="1000" >
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