import React, { Component } from 'react';
import logo from './logo.svg';
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
      <div className="App">

          <Container>
              <Row>
                  <Toolbar/>
                  <Col>
                      <Row>
                          <PathwayMapper/>
                      </Row>
                  </Col>

                  <Col>
                      <Row>
                          <Ranking/>
                      </Row>
                  </Col>
              </Row>
          </Container>
      </div>
    );
  }
}
