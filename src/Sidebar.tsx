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
                        <Button>Details</Button>
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
                    edgeTypes.map((nodeType: string, i: number) => {
                    return (<div>
                        <ListGroupItem style={{marginBottom: 5}} width="30%" active={true} onClick={() => {this.props.pathwayActions.addEdge(i)}} >
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