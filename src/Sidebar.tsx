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
interface ISideBarProps{
    pathwayActions: PathwayActions;
}

const panelStyle = {width: window.innerWidth * 0.1};

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
            <div>
            <Panel bsStyle="primary" style={panelStyle}>
                <Panel.Heading>
                  <Panel.Title componentClass="h3" style={{textAlign: "center"}}>Network</Panel.Title>
                </Panel.Heading>
                <Panel.Body style={{textAlign: "center"}}>
                    
                    <Row style={{marginBottom: 5}}>
                        <Button onClick={() => {this.props.pathwayActions.changeNodeName("PTEN", "ZIYA")}}>Details</Button>
                    </Row>
                    <Row style={{marginBottom: 5}}>
                        <Button>Import</Button>
                    </Row>
                    <Row>
                        <Button>Export</Button>
                    </Row>
                </Panel.Body>
              </Panel>

            <Panel bsStyle="primary" style={panelStyle}>
                <Panel.Heading>
                  <Panel.Title componentClass="h3" style={{textAlign: "center"}}>Node Palette</Panel.Title>
                </Panel.Heading>
                <Panel.Body style={{textAlign: "center"}}>
                    
                      {
                        nodeTypes.map((nodeType, i) => {
                        return (<div>
                            <Row style={{marginBottom: 5}}>
                            <img width="60%" onClick={() => {this.props.pathwayActions.addNode(nodeType)}} src={nodeImgs[i]}>
                            </img>
                            </Row></div>);
                        })
                      }
                </Panel.Body>
              </Panel>

            <Panel bsStyle="primary" style={panelStyle}>
                <Panel.Heading>
                  <Panel.Title componentClass="h3" style={{textAlign: "center"}}>Interaction Palette </Panel.Title>
                </Panel.Heading>
                <Panel.Body style={{textAlign: "center"}}>
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