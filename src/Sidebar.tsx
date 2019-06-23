import React from "react";
import {Panel, Button, Col, Row} from "react-bootstrap";
export default class Sidebar extends React.Component{

    constructor(props){
        super(props);
    }

    render(){


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
                    
                    <Row>
                        <Button>Gene</Button>
                    </Row>
                    <br/>
                    <Row>
                        <Button>Family</Button>
                    </Row>
                    <br/>
                    <Row>
                        <Button>Complex</Button>
                    </Row>
                    <br/>
                    <Row>
                        <Button>Compartment</Button>
                    </Row>
                    <br/>
                    <Row>
                        <Button>Process</Button>
                    </Row>
                </Panel.Body>
              </Panel>

            <Panel bsStyle="primary">
                <Panel.Heading>
                  <Panel.Title componentClass="h3" style={{textAlign: "center"}}>Interaction Palette </Panel.Title>
                </Panel.Heading>
                <Panel.Body style={{textAlign: "center"}}>
                    
                    <Row>
                        <Button>Activates</Button>
                    </Row>
                    <br/>
                    <Row>
                        <Button>Inhibits</Button>
                    </Row>
                    <br/>
                    <Row>
                        <Button>Induces</Button>
                    </Row>
                    <br/>
                    <Row>
                        <Button>Represses</Button>
                    </Row>
                    <br/>
                    <Row>
                        <Button>Binds</Button>
                    </Row>
                </Panel.Body>
              </Panel>




              </div>


        );

    }

}