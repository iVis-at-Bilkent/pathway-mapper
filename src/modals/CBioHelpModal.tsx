import React from 'react';
import { EModalType } from '../ui/react-pathway-mapper';
import {Modal} from 'react-bootstrap';
import {shapeToSvg} from 'oncoprintjs';
import $ from 'jquery';
// @ts-ignore
import layoutImage from "../images/toolbar/layout-cose.svg";
// @ts-ignore
import savePNGImage from "../images/toolbar/save_png.svg";
// @ts-ignore
import saveSVGImage from "../images/toolbar/save_svg.svg";
// @ts-ignore
const addSelImage = require("../images/toolbar/add-selected.svg");
// @ts-ignore
const addAllImage = require("../images/toolbar/add-all.svg");
// @ts-ignore
import openImage from "../images/toolbar/edit.svg";
// @ts-ignore
import patientImage from "../images/toolbar/PatientViewHelp.png";


interface ICBioHelpModalProps{
    isModalShown: boolean;
    handleClose: (modalId: EModalType) => void;
    patientView ?: boolean;
}

// https://github.com/cBioPortal/cbioportal-frontend/blob/29a93c5e992ca1affd3d027355015164ae3602bd/src/shared/lib/Colors.ts
const CNA_COLOR_AMP = '#ff0000';
const CNA_COLOR_GAIN = '#ffb6c1';
const CNA_COLOR_HETLOSS = '#8fd8d8';
const CNA_COLOR_HOMDEL = '#0000ff';
const DEFAULT_GREY = '#bebebe';
const MRNA_COLOR_HIGH = '#ff9999';
const MRNA_COLOR_LOW = '#6699cc';
const MUT_COLOR_MISSENSE = '#008000';
const MUT_COLOR_MISSENSE_PASSENGER = '#53D400';
const MUT_COLOR_INFRAME = '#993404';
const MUT_COLOR_INFRAME_PASSENGER = '#a68028';
const MUT_COLOR_TRUNC = '#000000';
const MUT_COLOR_TRUNC_PASSENGER = '#708090';
const MUT_COLOR_FUSION = '#8B00C9';
const MUT_COLOR_PROMOTER = '#00B7CE';
const MUT_COLOR_OTHER = '#cf58bc';
const MUT_COLOR_GERMLINE = '#FFFFFF';
const PROT_COLOR_HIGH = '#ff3df8';
const PROT_COLOR_LOW = '#00E1FF';

// always used shape
const defaultShape = {
    type: 'rectangle',
    fill: DEFAULT_GREY,
    x: 0,
    y: 0,
    width: 6,
    height: 20,
    stroke: 'rgba(0,0,0,0)',
    'stroke-width': 0
};

const labels = [
    'Amplification',
    'Deep Deletion',
    'Fusion',
    'Germline Mutation',
    'Missense Mutation (putative driver)',
    'Missense Mutation (unknown significance)',
    'Other Mutation',
    'Promoter Mutation',
    'Truncating Mutation (putative driver)',
    'Truncating Mutation (unknown significance)',
    'Inframe Mutation (putative driver)',
    'Inframe Mutation (unknown significance)'
];

// conditional shapes
var shapeBank = [
    {
        type: 'rectangle',
        fill: CNA_COLOR_AMP,
        x: 0,
        y: 0,
        width: 6,
        height: 20
    },
    {
        type: 'rectangle',
        fill: CNA_COLOR_HOMDEL,
        x: 0,
        y: 0,
        width: 6,
        height: 20
    },
    {
        type: 'rectangle',
        fill: MUT_COLOR_FUSION,
        x: 0,
        y: 4,
        width: 6,
        height: 12
    },
    {
        type: 'rectangle',
        fill: MUT_COLOR_GERMLINE,
        x: 0,
        y: 8.75,
        width: 6,
        height: 1.6
    },
    {
        type: 'rectangle',
        fill: MUT_COLOR_MISSENSE,
        x: 0,
        y: 6.66,
        width: 6,
        height: 6.66
    },
    {
        type: 'rectangle',
        fill: MUT_COLOR_MISSENSE_PASSENGER,
        x: 0,
        y: 6.66,
        width: 6,
        height: 6.66
    },
    {
        type: 'rectangle',
        fill: MUT_COLOR_OTHER,
        x: 0,
        y: 6.66,
        width: 6,
        height: 6.66
    },
    {
        type: 'rectangle',
        fill: MUT_COLOR_PROMOTER,
        x: 0,
        y: 6.66,
        width: 6,
        height: 6.66
    },
    {
        type: 'rectangle',
        fill: MUT_COLOR_TRUNC,
        x: 0,
        y: 6.66,
        width: 6,
        height: 6.66
    },
    {
        type: 'rectangle',
        fill: MUT_COLOR_TRUNC_PASSENGER,
        x: 0,
        y: 6.66,
        width: 6,
        height: 6.66
    },
    {
        type: 'rectangle',
        fill: MUT_COLOR_INFRAME,
        x: 0,
        y: 6.66,
        width: 6,
        height: 6.66
    },
    {
        type: 'rectangle',
        fill: MUT_COLOR_INFRAME_PASSENGER,
        x: 0,
        y: 6.66,
        width: 6,
        height: 6.66
    },
];

export default class CBioHelpModal extends React.Component<ICBioHelpModalProps>{


    constructor(props: ICBioHelpModalProps){
        super(props);
        console.log("CBioModal", this.props.patientView)
    }

    generateOncoprintLegend() {
        const svgNameSpace = 'http://www.w3.org/2000/svg'
        const svgElement = document.createElementNS(svgNameSpace, 'svg')

        const legendEleWidth = 280
    
        const cellWidth = 6
        const cellHeight = 23
        const cellVerticalPadding = 15
        const cellMarginRight = cellWidth + 3

        shapeBank.forEach((shape, index) => {
            const offsetX = (index % 3) * (legendEleWidth)
            const textOffsetX = offsetX + cellMarginRight
            const offsetY = Math.floor(index / 3) * (cellHeight + cellVerticalPadding)
            const textOffsetY = offsetY + 15
            const g = document.createElementNS(svgNameSpace, 'g')
            if (!shape["stroke"]) {
                shape["stroke"] = 'rgba(0,0,0,0)';
                shape["stroke-width"] = 0;
            }
            g.appendChild(shapeToSvg(defaultShape, offsetX, offsetY))
            g.appendChild(shapeToSvg(shape, offsetX, offsetY))
            
            const text = document.createElementNS(svgNameSpace, 'text');
            text.setAttributeNS(null, 'x', textOffsetX.toString());
            text.setAttributeNS(null, 'y', textOffsetY.toString());
            text.setAttributeNS(null, 'font-size', '12');
            text.setAttributeNS(null, 'font-family', 'Arial');
            var textNode = document.createTextNode(labels[index]);
            text.appendChild(textNode)

            g.appendChild(text);
            svgElement.appendChild(g)
        });

        svgElement.setAttribute(
            'width', '840')
        svgElement.setAttribute(
            'height','175')
        svgElement.style.paddingTop = '20px'
        // This is important you need to include this to succesfully render in cytoscape.js!
        svgElement.setAttribute('xmlns', svgNameSpace)
    
        return svgElement
    }

    render(){

        const legendPadding = '45px';

        return( 
            <Modal bsSize="lg" id="cBioHelpModal" className="pathwayMapper" show={this.props.isModalShown} onHide={() => {this.props.handleClose(EModalType.CHELP)}}>
                <Modal.Header closeButton>
                    <Modal.Title>PathwayMapper cBioPortal Edition 2.0</Modal.Title>
                </Modal.Header>
                {(!this.props.patientView &&
                <Modal.Body> 
                <p className="leftText">
                    PathwayMapper shows you your genes of interest with the alteration frequencies of selected genetic profiles of the chosen study overlaid on a TCGA pathway using a white to red color scale (the more frequently altered a gene is, the more red it's shown). All available TCGA pathways are ranked with the aim to choose the pathway that matches your interest the most. By default we display the pathway with highest ranking with the default ranking options but you may look at your genes of interest in the context of other pathways as well by choosing from the pathway table.                
                    <br/>
                    <br/>
                    Refer to the documentation <a href="https://github.com/iVis-at-Bilkent/pathway-mapper" target="_blank">here</a> for the notation used.
                    <br/>
                    <br/>
                    To search for a particular pathway of your interest, use the search field on top of the pathway table. To switch to another pathway, click on the button in the associated row of the pathway table. Ranking criteria might be changed by changing the options at the bottom of the table.  
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
                                <td><img height="22px" width="22px" src={addSelImage}/></td> <td>Add selected genes to query: You may select additional genes from the pathway by left clicking (Shift + left click to add more genes)</td>
                            </tr>
                            <tr>
                                <td><img height="22px" width="22px" src={addAllImage}/></td> <td>Add all valid genes to query: All valid gene symbols will be added to the query; others will be ignored</td>
                            </tr>
                            <tr>
                                <td><img height="22px" width="22px" src={openImage}/></td> <td>Edit pathway: Edit both the topology and the geometry of the current pathway with the full blown PathwayMapper editor</td>
                            </tr>
                        </table>
                    </ul>
                </p>
                </Modal.Body> )
    },
       {(this.props.patientView &&
       <Modal.Body> 
       <p className="leftText">
       PathwayMapper shows you your genes of interest with the mutation types, copy number alterations and fusions of selected genetic profiles of the chosen study overlaid on a TCGA pathway using the OncoPrint color scheme. All available TCGA pathways are ranked with the aim to choose the pathway that matches your interest the most. By default we display the pathway with the highest number of genes of interest matching the ones in a pathway but you may look at your genes of interest in the context of other pathways as well by choosing from the pathway table.                
           <br/>
           <br/>
           Refer to the documentation <a href="https://github.com/iVis-at-Bilkent/pathway-mapper" target="_blank">here</a> for the notation used.
           <br/>
           <br/>
           Genetic alteration legend:
           <br/>
           <div className="container" style={{paddingLeft: legendPadding, width: 'fit-content'}} dangerouslySetInnerHTML={{__html: this.generateOncoprintLegend().outerHTML}}>
           </div>
           <p style={{paddingLeft: legendPadding}}>Putative driver and unknown significance annotations are based on data from OncoKB and CancerHotspots.org.</p>
           <br/>
           To search for a particular pathway of your interest, use the search field on top of the pathway table. To switch to another pathway, click on the button in the associated row of the pathway table.
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
               </table>
           </ul>
       </p>
       </Modal.Body>
       )}
            </Modal>

        );
    }

}
