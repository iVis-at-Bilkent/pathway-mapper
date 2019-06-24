import React from "react";
import {Panel, Button, Col, Row} from "react-bootstrap";
import PathwayActions from "./PathwayActions";

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
        return(
            <div>
            <Panel bsStyle="primary">
                <Panel.Heading>
                  <Panel.Title componentClass="h3" style={{textAlign: "center"}}>Network</Panel.Title>
                </Panel.Heading>
                <Panel.Body style={{textAlign: "center"}}>
                    
                    <Row>
                        <Button>Details...</Button>
                    </Row>
                    <br/>
                    <Row>
                        <Button>Import</Button>
                    </Row>
                    <br/>
                    <Row>
                        <Button>Export</Button>
                    </Row>
                </Panel.Body>
              </Panel>

            <Panel bsStyle="primary">
                <Panel.Heading>
                  <Panel.Title componentClass="h3" style={{textAlign: "center"}}>Node Palette</Panel.Title>
                </Panel.Heading>
                <Panel.Body style={{textAlign: "center"}}>
                      {
                        nodeTypes.map((nodeType) => {
                        return (
                            <Row>
                            <Button onClick={() => {this.props.pathwayActions.addNode(nodeType)}}>
                                {nodeType}
                            </Button>
                            </Row> );
                        })
                      }
                </Panel.Body>
              </Panel>

            <Panel bsStyle="primary">
                <Panel.Heading>
                  <Panel.Title componentClass="h3" style={{textAlign: "center"}}>Interaction Palette </Panel.Title>
                </Panel.Heading>
                <Panel.Body style={{textAlign: "center"}}>
                    {
                    edgeTypes.map((nodeType: string, i: number) => {
                    return (
                        <Row>
                        <Button onClick={() => {this.props.pathwayActions.addEdge(i)}}>
                            {nodeType}
                        </Button>
                        </Row> );
                    })
                    }
                </Panel.Body>
              </Panel>
              </div>


        );

    }

}