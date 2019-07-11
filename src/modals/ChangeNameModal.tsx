import React from "react";
import PathwayActions from "../PathwayActions";
import {Modal, FormControl, ControlLabel, Button} from "react-bootstrap";
import { observable } from "mobx";
import autobind from "autobind-decorator";
import { EModalType } from "../react-pathway-mapper";
interface IChangeNameModalProps {
    pathwayActions: PathwayActions;
    isModalShown: boolean;
    handleClose: Function;
    oldName: string;
}
export default class ChangeNameModal extends React.Component<IChangeNameModalProps, {}>{


    @observable
    newName = "";

    constructor(props: IChangeNameModalProps){
        super(props);
    }


    render(){


        return(


            <Modal show={this.props.isModalShown} onHide={() => {this.props.handleClose(EModalType.CHANGE_NAME)}}>
                <Modal.Header closeButton>
                    <Modal.Title><h3>Change Node Name</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <ControlLabel>You are changing the name of {this.props.oldName}</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter New Name"
                    bsSize="small"
                    onChange={this.handleChange}
                />
                </Modal.Body>


                <Modal.Footer>
                    <Button bsStyle="success" 
                            onClick={() => {this.props.pathwayActions.changeNodeName(this.props.oldName, this.newName); this.props.handleClose(1);}}>
                        Change</Button>
                </Modal.Footer>
            </Modal>

        )
    }
    
    @autobind
    handleChange(e) {
        this.newName =  e.target.value;
    }

}