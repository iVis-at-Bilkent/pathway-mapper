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




    entrezGene(){

        const nodeID = $(this).attr('nodeid');
        const nodeSymbol = this.props.oldName//self.cy.$('#'+nodeID)[0]._private.data['name'];
        //const parent = $(this).parent();
        //parent.empty().append('<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>');

        const formData = new FormData();
        formData.append('query', nodeSymbol);

        const request = new XMLHttpRequest();
        request.onreadystatechange = function ()
        {
            if(request.readyState === XMLHttpRequest.DONE)
            {
            if (request.status === 200)
            {
                const jsonData = JSON.parse(request.responseText);
                console.log("Here json data");
                if (jsonData.count > 0)
                {
                console.log(jsonData.geneInfo[0]);
                //var backboneView = new BackboneView({model: jsonData.geneInfo[0]}).render().html();
                //parent.empty().append(backboneView);
                }
                else
                {
                console.log('There is no extra information for this gene');
                //parent.empty().append('There is no extra information for this gene');
                }
            }
            else
            {
                console.log('Error occured');
                //parent.empty().append('An error occured while retrieving the data');
            }
            }
        };
        request.open("POST", "/getBioGeneData");
        request.send(formData);
    }

    render(){
        this.entrezGene();

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