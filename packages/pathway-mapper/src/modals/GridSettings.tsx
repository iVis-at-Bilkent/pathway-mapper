import { makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Button, Checkbox, Col, ControlLabel, Form, FormControl, Row, Modal } from 'react-bootstrap';
import GridOptionsManager from '../managers/GridOptionsManager';
import { EModalType } from '../ui/react-pathway-mapper';
import PathwayActions from '../utils/PathwayActions';
interface IGridSettingsProps{
    show: boolean;
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
            <Modal dialogClassName="gridModal" show={this.props.show} onShow={() => {this.enabledType = this.props.pathwayActions.enabledType;}}
                onHide={() => {
                    this.props.handleClose(EModalType.GRID);
                }}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Grid Settings
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form id="gripOptionsForm" className="leftText">
                    <Row>
                        <Col sm={8}>
                            <ControlLabel>Enable Grids:</ControlLabel>
                        </Col>

                        <Col sm={4}>
                            <Checkbox checked={this.enabledType === EGridType.GRID} 
                            onChange={() => {this.setEnabledType(EGridType.GRID);}}></Checkbox>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <ControlLabel>Enable Guidelines:</ControlLabel>
                        </Col>

                        <Col sm={4}>
                            <Checkbox checked={this.enabledType === EGridType.GUIDE} 
                            onChange={() => {this.setEnabledType(EGridType.GUIDE);}}></Checkbox>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <ControlLabel>Grid Size:</ControlLabel>
                        </Col>

                        <Col sm={4}>
                            <FormControl type="text" value={this.gridSize} onChange={(e: any) => {this.gridSize = e.target.value;}}/>
                        </Col>
                    </Row>
                    <Row style={{marginTop: "10px"}}>
                        <Col sm={8}>
                            <ControlLabel>Guideline Color:</ControlLabel>
                        </Col>

                        <Col sm={4}>
                            <input id="guidelineColor" type="color" className="form-control" value={this.guideColor} 
                            onChange={(e: any) => {this.guideColor = e.target.value;}}/>
                        </Col>
                    </Row>
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