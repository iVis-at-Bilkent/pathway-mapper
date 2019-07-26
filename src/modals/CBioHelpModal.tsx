import React from 'react';
import { EModalType } from '../react-pathway-mapper';
import {Modal} from 'react-bootstrap';
// @ts-ignore
import layoutImage from "../toolbar/layout-cose.svg";
// @ts-ignore
import savePNGImage from "../toolbar/save_png.svg";
// @ts-ignore
import saveSVGImage from "../toolbar/save_svg.svg";
// @ts-ignore
const addImage = require("../toolbar/add.svg");
// @ts-ignore
import openImage from "../toolbar/edit.svg";

interface ICBioHelpModalProps{
    isModalShown: boolean;
    handleClose: (modalId: EModalType) => void;
}

export default class CBioHelpModal extends React.Component<ICBioHelpModalProps>{


    constructor(props: ICBioHelpModalProps){
        super(props);
    }

    render(){


        return(
            <Modal id="cBioHelpModal" show={this.props.isModalShown} onHide={() => {this.props.handleClose(EModalType.CHELP)}}>
                <Modal.Header closeButton>
                    <Modal.Title><h3>Help</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p className="leftText">
                PathwayMapper shows you your genes of interest with the alteration frequencies of the chosen study overlaid on a TCGA pathway. All available TCGA pathways are ranked with the aim to choose the pathway that matches your interest the most. By default we display the pathway with highest ranking with the current options but you may look at your genes of interest in the context of other pathways by choosing from the table.
                <br/>
                <br/>
                To search for a particular pathway of your interest, use the search field on top of the pathway table.
                <br/>
                <br/>
                To switch to another pathway, click on the circular button in associated row of the pathway table.
                <br/>
                <br/>
                To change options for ranking, expand Options and apply your changes.  
                <br/>
                <br/>
                The buttons on top of the pathway are:
                <ul>
                    
                    <div style={{marginTop: "7px"}}><img height="22px" width="22px" src={savePNGImage}/> Save as PNG</div>
                    <div style={{marginTop: "7px"}}><img height="22px" width="22px" src={saveSVGImage}/> Save as SVG</div>
                    <div style={{marginTop: "7px"}}><img height="22px" width="22px" src={addImage}/> Add selected genes to query: You may select additional genes from the pathway by left clicking (Shift + left click to add more genes)</div>
                    <div style={{marginTop: "7px"}}><img height="22px" width="22px" src={openImage}/> Edit pathway: Edit both the topology and the geometry of the current pathway with the full blown PathwayMapper editor</div>
                    <div style={{marginTop: "7px"}}><img height="22px" width="22px" src={layoutImage}/> Perform layout: Reorganize the pathway</div>
                </ul>
                </p>
                </Modal.Body>

            </Modal>

        );
    }

}