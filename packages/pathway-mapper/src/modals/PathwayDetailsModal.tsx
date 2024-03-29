import { observer } from 'mobx-react';
import React from 'react';
import { Button, Col, ControlLabel, Form, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { IPathwayInfo } from '../managers/FileOperationsManager';
import { EModalType } from '../ui/react-pathway-mapper';
import PathwayActions from '../utils/PathwayActions';

interface IPathwayDetailsModalProps{
    show: boolean;
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

            <Modal id="pathwayDetailsDiv" show={this.props.show} onHide={() => {this.props.handleClose(4)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Pathway Properties</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form id="pathwayDetailsForm">

                    <InputGroup>
                        <Col style={{textAlign: "left"}} sm={4}>
                        <ControlLabel>Pathway Title:</ControlLabel>
                        </Col>
                        <Col sm={8}>
                        <FormControl type="text" onChange={(e: any) => {this.pathwayInfo.pathwayTitle = e.target.value;}}value={this.pathwayInfo.pathwayTitle}/>
                        </Col>
                    </InputGroup>

                    <InputGroup>
                        <Col style={{textAlign: "left"}} sm={4}>
                        <ControlLabel>Pathway Description:</ControlLabel>
                        </Col>
                        <Col sm={8}>
                        <textarea className="form-control" rows={3} onChange={(e: any) => {this.pathwayInfo.pathwayDetails = e.target.value;}} value={this.pathwayInfo.pathwayDetails}>
                            </textarea>
                        </Col>
                    </InputGroup>

                </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={() => {this.props.pathwayActions.setPathwayInfo(this.pathwayInfo); this.props.handleClose(EModalType.PW_DETAILS);}}>Save</Button>
                </Modal.Footer>
            </Modal>

        )

    }
}