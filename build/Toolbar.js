import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default class Toolbar extends React.Component {
    render() {
        return (React.createElement(Col, null,
            React.createElement(Row, null,
                React.createElement(Button, { variant: "outline-primary" }, "Save as PNG")),
            React.createElement("br", null),
            React.createElement(Row, null,
                React.createElement(Button, { variant: "outline-primary" }, "Layout")),
            React.createElement("br", null),
            React.createElement(Row, null,
                React.createElement(Button, { variant: "outline-primary" }, "Info")),
            React.createElement("br", null),
            React.createElement(Row, null,
                React.createElement(Button, { variant: "outline-primary" }, "Open Full-Blown"))));
    }
}
//# sourceMappingURL=Toolbar.js.map