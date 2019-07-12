import React from 'react';
import { EModalType } from '../react-pathway-mapper';
import {Modal, Form, InputGroup, ControlLabel, Col, FormControl, Checkbox, Button} from 'react-bootstrap';
import EditorActionsManager from '../EditorActionsManager';
import _ from 'lodash';
import PathwayActions from '../PathwayActions';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

interface ILayoutPropertiesProps{
    isModalShown: boolean;
    handleClose: (modelId: EModalType) => void;
    pathwayActions: PathwayActions;
}

export interface ILayoutProperties{
    name: string;
    animationDuration: number;
    animationEasing: string;
    nodeRepulsion: number;
    idealEdgeLength: number;
    edgeElasticity: number;
    nestingFactor: number;
    gravity: number;
    numIter: number;
    gravityRangeCompound: number;
    gravityCompound: number;
    gravityRange: number;
    tilingPaddingVertical: number;
    tilingPaddingHorizontal: number;
    initialEnergyOnIncremental: number;
    tile: boolean;
    animate: boolean;
    randomize: boolean;
}

@observer
export default class LayoutProperties extends React.Component<ILayoutPropertiesProps>{
    
    @observable
    layoutProperties: ILayoutProperties;
    
    
    constructor(props: ILayoutPropertiesProps){
        super(props);
        this.layoutProperties = _.clone(EditorActionsManager.defaultLayoutProperties);

        console.log(this.layoutProperties);
    }
    

    updateLayoutProperties(property: string, val: boolean | number){
        this.layoutProperties[property] = val;
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
                                <FormControl type="text" value={this.layoutProperties.nodeRepulsion + ""} onChange={(e: any) => {this.layoutProperties.nodeRepulsion = Number(e.target.value);}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Ideal Edge Length:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={this.layoutProperties.idealEdgeLength + ""} onChange={(e: any) => {this.layoutProperties.idealEdgeLength = Number(e.target.value);}}/>
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Edge Elasticity:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={this.layoutProperties.edgeElasticity + ""} onChange={(e: any) => {this.layoutProperties.edgeElasticity = e.target.value;}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Nesting Factor:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={this.layoutProperties.nestingFactor + ""} onChange={(e: any) => {this.layoutProperties.nestingFactor = e.target.value;}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Gravity:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={this.layoutProperties.gravity + ""} onChange={(e: any) => {this.layoutProperties.gravity = e.target.value;}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Gravity Range:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={this.layoutProperties.gravityRange + ""} onChange={(e: any) => {this.layoutProperties.gravityRange = e.target.value;}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Compound Gravity:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={this.layoutProperties.gravityCompound + ""} onChange={(e: any) => {this.layoutProperties.gravityCompound = e.target.value;}}/>
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Compound Gravity Range:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={this.layoutProperties.gravityRangeCompound + ""} onChange={(e: any) => {this.layoutProperties.gravityRangeCompound = e.target.value;}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Number of Iterations:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={this.layoutProperties.numIter + ""} onChange={(e: any) => {this.layoutProperties.numIter = e.target.value;}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Tiling Vertical Padding:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={this.layoutProperties.tilingPaddingVertical + ""} onChange={(e: any) => {this.layoutProperties.tilingPaddingVertical = e.target.value;}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Tiling Horizontal Padding:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={this.layoutProperties.tilingPaddingHorizontal + ""} onChange={(e: any) => {this.layoutProperties.tilingPaddingHorizontal = e.target.value;}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Tile Disconnected:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <Checkbox checked={this.layoutProperties.tile} onChange={(e: any) => {this.layoutProperties.tile = !this.layoutProperties.tile;}}></Checkbox>
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel >Animate:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <Checkbox checked={this.layoutProperties.animate} onChange={(e: any) => {this.layoutProperties.animate = !this.layoutProperties.animate;}}></Checkbox>
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel >Incremental:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <Checkbox checked={!this.layoutProperties.randomize} onChange={(e: any) => {this.layoutProperties.randomize = !this.layoutProperties.randomize;}}></Checkbox>
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Incremental Cooling Factor:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={this.layoutProperties.initialEnergyOnIncremental + ""} onChange={(e:any) => {this.layoutProperties.initialEnergyOnIncremental = e.target.value;}} />
                            </Col>
                        </InputGroup>
                    </Form>

                </Modal.Body>


                <Modal.Footer>
                    <Button onClick={() => {this.props.pathwayActions.setLayoutProperties(this.layoutProperties); this.props.handleClose(EModalType.LAYOUT);}}>
                        Save
                    </Button>

                    <Button onClick={() => {this.layoutProperties = _.clone(EditorActionsManager.defaultLayoutProperties); this.props.pathwayActions.setLayoutProperties(this.layoutProperties)}}>
                        Default
                    </Button>

                </Modal.Footer>
            </Modal>
        );
    }
}