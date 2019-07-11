import React from 'react';
import { EModalType } from '../react-pathway-mapper';
import {Modal, Form, InputGroup, ControlLabel, Col, FormControl, Checkbox} from 'react-bootstrap';

interface ILayoutPropertiesProps{
    isModalShown: boolean;
    handleClose: (modelId: EModalType) => void;
}
export default class LayoutProperties extends React.Component<ILayoutPropertiesProps>{
    constructor(props: ILayoutPropertiesProps){
        super(props);
    }
    
    render(){

        return(

            <Modal
            id="layoutPropertiesDiv"
            show={this.props.isModalShown}
            onHide={() => {this.props.handleClose(EModalType.LAYOUT);}}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                    <h3>Layout Properties</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id="layoutPropsForm" className="leftText">
                    <Form horizontal>
                            
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Node Repulsion:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value="20" />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Ideal Edge Length:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value="50" />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Edge Elasticity:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value="0.45" />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Nesting Factor:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value="0.1" />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Gravity:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value="0.25" />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Gravity Range:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value="3.8" />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Compound Gravity:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value="1" />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Compound Gravity Range:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value="1.5" />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Number of Iterations:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value="2500" />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Tiling Vertical Padding:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value="10" />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Tiling Horizontal Padding:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value="10" />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Tile Disconnected:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <Checkbox></Checkbox>
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Animate:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <Checkbox></Checkbox>
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Incremental:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <Checkbox></Checkbox>
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Incremental Cooling Factor:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value="0.5" />
                            </Col>
                        </InputGroup>
                    </Form>

                </Modal.Body>
            </Modal>
        )
    }
}