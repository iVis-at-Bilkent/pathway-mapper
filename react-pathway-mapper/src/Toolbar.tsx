import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default class Toolbar extends React.Component{
    render(){
        return (
                <Col>
                    <Row>
                    <Button variant="outline-primary">Save as PNG</Button>
                    </Row>

                    <br/>
                    <Row>
                    <Button variant="outline-primary">Layout</Button>
                    </Row>

                    <br/>
                    <Row>
                    <Button variant="outline-primary">Info</Button>
                    </Row>

                    <br/>
                    <Row>
                    <Button variant="outline-primary">Open Full-Blown</Button>
                    </Row>
                </Col>);

    }
}