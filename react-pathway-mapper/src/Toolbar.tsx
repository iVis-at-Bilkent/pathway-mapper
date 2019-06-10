import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import autobind from "autobind-decorator";
import EditorActionsManager from "./EditorActionsManager";
import {observer} from "mobx-react";
import {observable} from "mobx";

interface IToolbarProps {
  loadSampleData: () => void;
  performLayout: () => void;

}

@observer
export default class Toolbar extends React.Component<IToolbarProps, {}>{

    @observable
    private editor: EditorActionsManager;
    constructor(props){
      super(props);
    }
    render(){
        return (
              <Col>
                  <Row>
                  <Button variant="outline-primary">Save as PNG</Button>
                  </Row>

                  <br/>
                  <Row>
                  <Button variant="outline-primary" onClick={this.props.performLayout}>Layout</Button>
                  </Row>

                  <br/>
                  <Row>
                  <Button variant="outline-primary">Info</Button>
                  </Row>

                  <br/>
                  <Row>
                  <Button variant="outline-primary">Open Full-Blown</Button>
                  </Row>

                  <br/>
                  <Row>
                  <Button variant="outline-primary" onClick={this.props.loadSampleData}>Load Sample</Button>
                  </Row>
              </Col>);

    }
}
