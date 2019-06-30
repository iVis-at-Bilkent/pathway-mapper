import React from "react";
import {Panel, Button, Col, Row, ListGroup, ListGroupItem} from "react-bootstrap";
import PathwayActions from "./PathwayActions";
import SVGInline from "react-svg-inline";

// @ts-ignore
import geneImg from "./nodes/gene.svg";
// @ts-ignore
import familyImg from "./nodes/family.svg";
// @ts-ignore
import complexImg from "./nodes/complex.svg";
// @ts-ignore
import compartmentImg from "./nodes/compartment.svg";
// @ts-ignore
import processImg from "./nodes/process.svg";
// @ts-ignore
import acImg from "./edges/activates.png";
// @ts-ignore
import inhImg from "./edges/binds.png";
// @ts-ignore
import indImg from "./edges/induces.png";
// @ts-ignore
import repImg from "./edges/represses.png";
// @ts-ignore
import bindImg from "./edges/binds.png";

import "./supp.css"
import { observable } from "mobx";
import { observer } from "mobx-react";
import autobind from "autobind-decorator";

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
        this.activeEdge = -1;
        this.props.setActiveEdgeHandler(this.setActiveEdge);
    }

    addEdge(edgeIndex: number){
      if(edgeIndex === this.activeEdge){
        this.setActiveEdge(-1);
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
        return(
          <div id="pathway-sidebar" className="sideBarWrapper">
            <Panel className="pnl">
                <Panel.Heading className="pnl-header">
                  Network
                </Panel.Heading>
                <Panel.Body className="pnl-body pathwayPanel">
                    
                    <div className="buttonContainer">
                        <Button onClick={() => {this.props.handleOpen(4)}}>Properties</Button>
                    </div>
                    <div className="buttonContainer"> 
                        <Button>Import</Button>
                    </div>
                    <div className="buttonContainer">
                        <Button>Export</Button>
                    </div>
                </Panel.Body>
              </Panel>

            <Panel className="pnl">
                <Panel.Heading className="pnl-header">
                 Node Palette
                </Panel.Heading>
                <Panel.Body className="pnl-body">
                      
                {
                        nodeTypes.map((nodeType, i) => {
                        return (
                        <div className="ui-cytoscape-nodeadd dragButtonContainer">
                          <div className="ui-cytoscape-nodeadd-nodediv">
                            <SVGInline svg={nodeImgs[i]} onClick={() => {this.props.pathwayActions.addNode(nodeType)}} width="110px" height="28px"/>
                          </div>
                        </div>);
                        })
                      }
                </Panel.Body>
              </Panel>

            <Panel className="pnl edgePanel">
                <Panel.Heading className="pnl-header">
                  Interaction Palette
                </Panel.Heading>
                <Panel.Body className="pnl-body">
                    <ListGroup>
                    {
                    edgeTypes.map((edgeType: string, i: number) => {
                    return (<div>
                        <ListGroupItem style={{marginBottom: 5}} width="30%" active={this.activeEdge === i} 
                        onClick={() => {this.addEdge(i)}} >
                        <img width="20%" src={edgeImgs[i]}></img>{' '}
                        {edgeType}
                        </ListGroupItem></div>);
                    })
                    }
                    </ListGroup>
                </Panel.Body>
              </Panel>
              </div>
        );
    }
}