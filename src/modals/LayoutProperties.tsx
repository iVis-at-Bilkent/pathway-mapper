import React from 'react';
import { EModalType } from '../ui/react-pathway-mapper';
import {Modal, Form, InputGroup, ControlLabel, Col, FormControl, Checkbox, Button} from 'react-bootstrap';
import EditorActionsManager from '../managers/EditorActionsManager';
import _ from 'lodash';
import PathwayActions from '../utils/PathwayActions';
import { observable, makeObservable } from 'mobx';
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
    
    static layoutProperties: ILayoutProperties;
    
    constructor(props: ILayoutPropertiesProps){
        super(props);
        LayoutProperties.layoutProperties = _.clone(EditorActionsManager.defaultLayoutProperties);
    }
    

    updateLayoutProperties(property: string, val: boolean | number){
        LayoutProperties.layoutProperties[property] = val;
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
                    <Form >
                            
                        <InputGroup>
                            <Col className="control-label" sm={4}>
                                Node Repulsion:
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={LayoutProperties.layoutProperties.nodeRepulsion + ""} 
                                onChange={(e: any) => {LayoutProperties.layoutProperties.nodeRepulsion = Number(e.target.value);}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Ideal Edge Length:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={LayoutProperties.layoutProperties.idealEdgeLength + ""} 
                                onChange={(e: any) => {LayoutProperties.layoutProperties.idealEdgeLength = Number(e.target.value);}}/>
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Edge Elasticity:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={LayoutProperties.layoutProperties.edgeElasticity + ""} 
                                onChange={(e: any) => {LayoutProperties.layoutProperties.edgeElasticity = e.target.value;}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Nesting Factor:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={LayoutProperties.layoutProperties.nestingFactor + ""} 
                                onChange={(e: any) => {LayoutProperties.layoutProperties.nestingFactor = e.target.value;}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Gravity:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={LayoutProperties.layoutProperties.gravity + ""} 
                                onChange={(e: any) => {LayoutProperties.layoutProperties.gravity = e.target.value;}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Gravity Range:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={LayoutProperties.layoutProperties.gravityRange + ""} 
                                onChange={(e: any) => {LayoutProperties.layoutProperties.gravityRange = e.target.value;}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Compound Gravity:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={LayoutProperties.layoutProperties.gravityCompound + ""} onChange={(e: any) => {LayoutProperties.layoutProperties.gravityCompound = e.target.value;}}/>
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Compound Gravity Range:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={LayoutProperties.layoutProperties.gravityRangeCompound + ""} onChange={(e: any) => {LayoutProperties.layoutProperties.gravityRangeCompound = e.target.value;}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Number of Iterations:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={LayoutProperties.layoutProperties.numIter + ""} onChange={(e: any) => {LayoutProperties.layoutProperties.numIter = e.target.value;}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Tiling Vertical Padding:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={LayoutProperties.layoutProperties.tilingPaddingVertical + ""} onChange={(e: any) => {LayoutProperties.layoutProperties.tilingPaddingVertical = e.target.value;}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Tiling Horizontal Padding:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={LayoutProperties.layoutProperties.tilingPaddingHorizontal + ""} onChange={(e: any) => {LayoutProperties.layoutProperties.tilingPaddingHorizontal = e.target.value;}} />
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Tile Disconnected:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <Checkbox className="layProps" checked={LayoutProperties.layoutProperties.tile} onChange={(e: any) => {LayoutProperties.layoutProperties.tile = !LayoutProperties.layoutProperties.tile;}}></Checkbox>
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col className="control-label" sm={4}>
                                Animate:
                            </Col>

                            <Col sm={8}>
                                <Checkbox className="layProps" checked={LayoutProperties.layoutProperties.animate} onChange={(e: any) => {LayoutProperties.layoutProperties.animate = !LayoutProperties.layoutProperties.animate;}}></Checkbox>
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel >Incremental:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <Checkbox className="layProps" checked={!LayoutProperties.layoutProperties.randomize} onChange={(e: any) => {LayoutProperties.layoutProperties.randomize = !LayoutProperties.layoutProperties.randomize;}}></Checkbox>
                            </Col>
                        </InputGroup>
                        <InputGroup>
                            <Col sm={4}>
                                <ControlLabel>Incremental Cooling Factor:</ControlLabel>
                            </Col>

                            <Col sm={8}>
                                <FormControl type="text" value={LayoutProperties.layoutProperties.initialEnergyOnIncremental + ""} onChange={(e:any) => {LayoutProperties.layoutProperties.initialEnergyOnIncremental = e.target.value;}} />
                            </Col>
                        </InputGroup>
                    </Form>

                </Modal.Body>


                <Modal.Footer>
                    <Button onClick={() => {this.props.pathwayActions.setLayoutProperties(LayoutProperties.layoutProperties); this.props.handleClose(EModalType.LAYOUT);}}>
                        Save
                    </Button>

                    <Button onClick={() => {LayoutProperties.layoutProperties = _.clone(EditorActionsManager.defaultLayoutProperties); this.props.pathwayActions.setLayoutProperties(LayoutProperties.layoutProperties)}}>
                        Default
                    </Button>

                </Modal.Footer>
            </Modal>
        );
    }
}