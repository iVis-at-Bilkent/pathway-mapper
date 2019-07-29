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
                    PathwayMapper shows you your genes of interest with the alteration frequencies of the chosen study overlaid on a TCGA pathway. All available TCGA pathways are ranked with the aim to choose the pathway that matches your interest the most. By default we display the pathway with highest ranking with the default ranking options but you may look at your genes of interest in the context of other pathways as well by choosing from the pathway table.                <br/>
                    <br/>
                    To search for a particular pathway of your interest, use the search field on top of the pathway table.
                    <br/>
                    <br/>
                    To switch to another pathway, click on the button in associated row of the pathway table.
                    <br/>
                    <br/>
                    Ranking criteria might be changed by changing the options at the bottom of the table.  
                    <br/>
                    <br/>
                    The buttons on top of the pathway are:
                    <ul>

                        <table cellPadding={5}>

                            <tr>
                                <td><img height="22px" width="22px" src={savePNGImage}/></td> <td>Save as PNG</td>
                            </tr>
                            <tr>
                                <td><img height="22px" width="22px" src={saveSVGImage}/></td> <td>Save as SVG</td>
                            </tr>
                            <tr>
                                <td><img height="22px" width="22px" src={layoutImage}/></td> <td>Perform layout: Layout is recalculated taking current node positions into account</td>
                            </tr>
                            <tr>
                                <td><img height="22px" width="22px" src={addImage}/></td> <td>Add selected genes to query: You may select additional genes from the pathway by left clicking (Shift + left click to add more genes)</td>
                            </tr>
                            <tr>
                                <td><img height="22px" width="22px" src={openImage}/></td> <td>Edit pathway: Edit both the topology and the geometry of the current pathway with the full blown PathwayMapper editor</td>
                            </tr>
                        </table>
                    </ul>
                </p>
                </Modal.Body>

            </Modal>

        );
    }

}