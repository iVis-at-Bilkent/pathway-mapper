import React from "react";
import {Panel, Button, Col, Row, ListGroup, ListGroupItem} from "react-bootstrap";
import PathwayActions from "./PathwayActions";

// @ts-ignore
import geneImg from "./nodes/Gene.png";
// @ts-ignore
import familyImg from "./nodes/Family.png";
// @ts-ignore
import complexImg from "./nodes/Complex.png";
// @ts-ignore
import compartmentImg from "./nodes/Compartment.png";
// @ts-ignore
import processImg from "./nodes/Process.png";
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

interface ISideBarProps{
    pathwayActions: PathwayActions;
}

export default class Sidebar extends React.Component<ISideBarProps, {}>{

    constructor(props: ISideBarProps){
        super(props);
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
                        <Button  onClick={() => {this.props.pathwayActions.changeNodeName("PTEN", "ZIYA")}}>Details</Button>
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
                        return (<div className="dragButtonContainer ui-cytoscape-nodeadd-nodediv">
                            <img width="110px" onClick={() => {this.props.pathwayActions.addNode(nodeType)}} src={nodeImgs[i]}>
                            </img></div>);
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
                    edgeTypes.map((nodeType: string, i: number) => {
                    return (<div>
                        <ListGroupItem style={{marginBottom: 5}} width="30%" onClick={() => {this.props.pathwayActions.addEdge(i)}} >
                        <img width="20%" src={edgeImgs[i]}></img>{' '}
                        {nodeType}
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