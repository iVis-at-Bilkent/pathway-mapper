import React from 'react';
import { EModalType } from '../ui/react-pathway-mapper';
import {Modal} from 'react-bootstrap';
interface IQuickHelpModalProps{
    isModalShown: boolean;
    handleClose: (modalId: EModalType) => void;
}

export default class QuickHelpModal extends React.Component<IQuickHelpModalProps>{

    constructor(props: IQuickHelpModalProps){
        super(props);
    }

    render(){


        return(
            <Modal id="quickHelpModal" show={this.props.isModalShown} onHide={() => {this.props.handleClose(EModalType.HELP)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Quick Help</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <ul className="leftText">
                    <li><strong>To add a node:</strong> Drag and drop from node palette</li>
                    <li><strong>To add an interaction:</strong> Click on interaction type; then click on small circle on source node and release on target node</li>
                    <li><strong>To add a node into a container (family, complex, compartment or process):</strong> Drag the node into its container node or select nodes to be contained and right click on container node and choose "Add Selected Into This"</li>
                    <li><strong>To delete nodes/interactions:</strong> Select and perform Edit &gt; Delete Selected</li>
                    <li><strong>To overlay experiment data:</strong> Select Alteration % &gt; Load From cBioPortal...</li>
                </ul>
                </Modal.Body>

            </Modal>

        );
    }


}