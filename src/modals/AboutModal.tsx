import React from 'react';
import {Modal} from 'react-bootstrap';

// @ts-ignore
import iVisImg from "../about/i-vis.png";
// @ts-ignore
import mskccImg from "../about/mskcc.png";
interface IAboutModalProps{
    isModalShown: boolean;
    isCBioPortal: boolean;
    handleClose: Function;

}

export default class AboutModal extends React.Component<IAboutModalProps, {}> {

    constructor(props: IAboutModalProps){
        super(props);
    }


    render(){


        return(
            
            <Modal
          show={this.props.isModalShown}
          onHide={() => {this.props.handleClose(3)}}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              About
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h3 id="about-model-header">PathwayMapper {this.props.isCBioPortal ? "for cBioPortal" : "2.0"}</h3>

              <div className="aboutImageContent">
                <img src={iVisImg} alt="" height="25px"/>
              </div>
              <div className="aboutImageContent">
                <img src={mskccImg} alt="" height="30px"/>
              </div>
              <div className="adressText">
                <p>i-Vis information Visualization Lab</p>
                <p>Bilkent University, Ankara, Turkey</p>
              </div>
              <div className="adressText">
                <p>Memorial Sloan-Kettering Cancer Center</p>
                <p>New York, USA</p>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <a href="https://github.com/iVis-at-Bilkent/pathway-mapper">https://github.com/iVis-at-Bilkent/pathway-mapper</a>
          </Modal.Footer>
        </Modal>

        )


    }

}