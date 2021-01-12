import React from 'react';
import {Modal, Form, FormGroup, Col, Row, FormControl, ControlLabel, Checkbox, Button, InputGroup} from 'react-bootstrap';
import { EModalType } from '../ui/react-pathway-mapper';
import EditorActionsManager from '../managers/EditorActionsManager';
import GridOptionsManager from '../managers/GridOptionsManager';
import PathwayActions from '../utils/PathwayActions';
import { observer } from 'mobx-react';
import { makeObservable, observable } from 'mobx';
interface IGridSettingsProps{
    isModalShown: boolean;
    handleClose: Function;
    pathwayActions: PathwayActions;
}

export enum EGridType{
    GRID,
    GUIDE,
    NONE
}

@observer
export default class GridSettings extends React.Component<IGridSettingsProps, {}>{



    @observable
    private gridSize: number;
    
    @observable
    private guideColor: string;

    private defaultSettings = GridOptionsManager.defaultGridGuideOptions;

    @observable
    private enabledType: EGridType;
    constructor(props: IGridSettingsProps){
        super(props);
        makeObservable(this);
        
        this.gridSize = this.defaultSettings.gridSpacing;
        this.guideColor = this.defaultSettings.guidelinesStyle.strokeStyle;
    }

    setEnabledType(newType: EGridType){
        if(newType === this.enabledType){
            this.enabledType = EGridType.NONE;
            return;
        }

        this.enabledType = newType;
    }

    render(){

        return(
            <Modal dialogClassName="gridModal" show={this.props.isModalShown} onShow={() => {this.enabledType = this.props.pathwayActions.enabledType;}}
                onHide={() => {
                    this.props.handleClose(EModalType.GRID);
                }}>
                <Modal.Header closeButton>
                    <Modal.Title><h4>Grid Settings</h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form id="gripOptionsForm" className="leftText">
                    <InputGroup>
                        <Col sm={8}>
                            <ControlLabel>Enable Grids:</ControlLabel>
                        </Col>

                        <Col sm={4}>
                            <Checkbox checked={this.enabledType === EGridType.GRID} 
                            onChange={() => {this.setEnabledType(EGridType.GRID);}}></Checkbox>
                        </Col>
                    </InputGroup>
                    <InputGroup>
                        <Col sm={8}>
                            <ControlLabel>Enable Guidelines</ControlLabel>
                        </Col>

                        <Col sm={4}>
                            <Checkbox checked={this.enabledType === EGridType.GUIDE} 
                            onChange={() => {this.setEnabledType(EGridType.GUIDE);}}></Checkbox>
                        </Col>
                    </InputGroup>
                    <InputGroup>
                        <Col sm={8}>
                            <ControlLabel>Grid Size:</ControlLabel>
                        </Col>

                        <Col sm={4}>
                            <FormControl type="text" value={this.gridSize} onChange={(e: any) => {this.gridSize = e.target.value;}}/>
                        </Col>
                    </InputGroup>
                    <InputGroup>
                        <Col sm={8}>
                            <ControlLabel>Guideline Color:</ControlLabel>
                        </Col>

                        <Col sm={4}>
                            <input id="guidelineColor" type="color" className="form-control" value={this.guideColor} 
                            onChange={(e: any) => {this.guideColor = e.target.value;}}/>
                        </Col>
                    </InputGroup>
                </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={() => {
                        this.props.pathwayActions.enabledType = this.enabledType;
                        this.props.pathwayActions.adjustGridSettings(this.gridSize, this.guideColor);
                        if(this.props.pathwayActions.enabledType === EGridType.GRID){
                            this.props.pathwayActions.toggleGrid(true);
                        }
                        else if(this.props.pathwayActions.enabledType === EGridType.GUIDE){
                            this.props.pathwayActions.toggleGuide(true);
                        } else {
                            this.props.pathwayActions.toggleGrid(false); // This will disable both.
                        }
                        this.props.handleClose(EModalType.GRID);
                        }}>
                    Save
                    </Button>
                </Modal.Footer>
            </Modal>
        );


    }    
}