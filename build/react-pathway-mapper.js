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
        return (React.createElement(Container, null,
            React.createElement(Row, null,
                React.createElement(Toolbar, null),
                React.createElement(Col, null,
                    React.createElement(Row, null,
                        React.createElement(PathwayMapper, { isCbioPortal: true, isCollaborative: false }))),
                React.createElement(Col, null,
                    React.createElement(Row, null,
                        React.createElement(Ranking, null))))));
    }
}
//# sourceMappingURL=react-pathway-mapper.js.map