// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
import React from 'react';
import Toolbar from "./Toolbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PathwayMapper from "./PathwayMapper";
import Ranking from "./Ranking";
import Container from "react-bootstrap/Container";

export default class App extends React.Component {
  render() {
    return (
        <Container>
          <Row>
            <Col>
                <Toolbar/>
            </Col>

            <Col xs={6}>
                <PathwayMapper isCbioPortal={true} isCollaborative={false}/>
            </Col>

            <Col>
                <Ranking/>
            </Col>

          </Row>
        </Container>
    );
  }
}
