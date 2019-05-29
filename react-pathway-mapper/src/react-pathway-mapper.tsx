// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
import React, { Component } from 'react';
import './App.css';
import Toolbar from "./Toolbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PathwayMapper from "./PathwayMapper";
import Ranking from "./Ranking";
import Container from "react-bootstrap/Container";

export default class App extends Component {
  render() {
    return (
        <Container>
          <Row>
            <Toolbar/>
            <Col>
              <Row>
                <PathwayMapper isCbioPortal={true} isCollaborative={false}/>
              </Row>
            </Col>

            <Col>
              <Row>
                <Ranking/>
              </Row>
            </Col>
          </Row>
        </Container>
    );
  }
}
