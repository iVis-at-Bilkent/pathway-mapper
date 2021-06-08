import React from 'react';
import { Modal } from 'react-bootstrap';
import { EModalType } from '../ui/react-pathway-mapper';
interface IAboutModalProps{
    show: boolean;
    handleClose: Function;
}

export default class AboutModal extends React.Component<IAboutModalProps, {}> {

    constructor(props: IAboutModalProps){
        super(props);
    }

    render(){


        return(
            
          <Modal
          show={this.props.show}
          onHide={() => {this.props.handleClose(EModalType.ABOUT)}}
          >
            <Modal.Header closeButton>
              <Modal.Title>About</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3 id="about-model-header">PathwayMapper 2.1</h3>
                <div className="aboutImageContent">
                  <img src={require("../images/about/i-vis.png")} alt="" height="25px"/>
                </div>
                <div className="aboutImageContent">
                  <img src={require("../images/about/mskcc.png")} alt="" height="34px"/>
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
