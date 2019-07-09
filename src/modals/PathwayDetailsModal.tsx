import React from 'react';
import {Modal, Form, FormGroup, FormControl, Col, Button} from 'react-bootstrap';
import { observer } from 'mobx-react';
import PathwayActions from '../PathwayActions';
import { IPathwayInfo } from '../FileOperationsManager';
import { EModalType } from '../react-pathway-mapper';

interface IPathwayDetailsModalProps{
    isModalShown: boolean;
    handleClose: Function;
    pathwayActions: PathwayActions;
}

@observer
export default class PathwayDetailsModal extends React.Component<IPathwayDetailsModalProps, {}>{

    pathwayInfo: IPathwayInfo;

    constructor(props: IPathwayDetailsModalProps){
        super(props);
    }

    render(){

        this.pathwayInfo = this.props.pathwayActions.getPathwayInfo;

        return(

            <Modal show={this.props.isModalShown} onHide={() => {this.props.handleClose(4)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Pathway Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col sm={4}>
                        File Name:
                        </Col>
                        <Col sm={8}>
                        <FormControl type="text" onChange={(e: any) => {this.pathwayInfo.fileName = e.target.value;}}value={this.pathwayInfo.fileName}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col sm={4}>
                        Pathway Title:
                        </Col>
                        <Col sm={8}>
                        <FormControl type="text" onChange={(e: any) => {this.pathwayInfo.pathwayTitle = e.target.value;}}value={this.pathwayInfo.pathwayTitle}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col sm={4}>
                        Pathway Description:
                        </Col>
                        <Col sm={8}>
                        <FormControl type="text" onChange={(e: any) => {this.pathwayInfo.pathwayDetails = e.target.value;}}value={this.pathwayInfo.pathwayDetails}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={1} sm={10}>
                        <Button onClick={() => {this.props.pathwayActions.setPathwayInfo(this.pathwayInfo); this.props.handleClose(EModalType.PW_DETAILS);}}>Save</Button>
                        </Col>
                    </FormGroup>
                </Form>
                </Modal.Body>
            </Modal>

        )

    }
}