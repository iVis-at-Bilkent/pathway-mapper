import React from 'react';
import {Modal, Form, FormGroup, Col, Row, FormControl, ControlLabel, Checkbox, Button, InputGroup} from 'react-bootstrap';
import { EModalType } from '../react-pathway-mapper';
interface IGridSettingsProps{
    isModalShown: boolean;
    handleClose: Function;
}

export default class GridSettings extends React.Component<IGridSettingsProps, {}>{
    render(){


        return(
            <Modal dialogClassName="gridModal" show={this.props.isModalShown} onHide={() => {this.props.handleClose(EModalType.GRID);}}>
                <Modal.Header closeButton>
                    <Modal.Title>Grid Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form horizontal>
                    <InputGroup>
                        <Col sm={8}>
                            <ControlLabel>Enable Grids:</ControlLabel>
                        </Col>

                        <Col sm={4}>
                            <Checkbox></Checkbox>
                        </Col>
                    </InputGroup>
                    <InputGroup>
                        <Col sm={8}>
                            <ControlLabel>Enable Guidelines</ControlLabel>
                        </Col>

                        <Col sm={4}>
                            <Checkbox></Checkbox>
                        </Col>
                    </InputGroup>
                    <InputGroup>
                        <Col sm={8}>
                            <ControlLabel>Grid Size:</ControlLabel>
                        </Col>

                        <Col sm={4}>
                            <FormControl type="text" value="20" />
                        </Col>
                    </InputGroup>
                    <InputGroup>
                        <Col sm={8}>
                            <ControlLabel>Grid Color:</ControlLabel>
                        </Col>

                        <Col sm={4}>
                            <input id="guidelineColor" type="color" className="form-control" value="#4286f4"/>
                        </Col>
                    </InputGroup>
                </Form>
                </Modal.Body>
            </Modal>
        );


    }    
}