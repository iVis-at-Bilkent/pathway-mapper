import React, { Component } from 'react';
import {Row, Col, Image} from "react-bootstrap";
import autobind from "autobind-decorator";
import EditorActionsManager from "./EditorActionsManager";
import {observer} from "mobx-react";
import {observable} from "mobx";
import PathwayActions from './PathwayActions';
// @ts-ignore
import layoutImage from "./icons/baseline_refresh_black_36dp.png";
// @ts-ignore
import saveImage from "./icons/baseline_save_black_36dp.png";
// @ts-ignore
import infoImage from "./icons/baseline_info_black_36dp.png";
// @ts-ignore
import openImage from "./icons/baseline_open_in_new_black_36dp.png";
import { IProfileMetaData } from './react-pathway-mapper';
interface IToolbarProps {
  pathwayActions: PathwayActions;
  selectedPathway: string;
  profiles: IProfileMetaData[];
  genes: any[];
}

@observer
export default class Toolbar extends React.Component<IToolbarProps, {}>{

    @observable
    private editor: EditorActionsManager;
    constructor(props: IToolbarProps){
      super(props);
    }

    
    render(){


      let studyQuery = "q=";

      this.props.profiles.forEach((profile: IProfileMetaData, i: number) => {
        studyQuery += profile.studyId + "," + profile.profileId;
        studyQuery += ((i !== (this.props.profiles.length - 1)) ? "&q=" : ""); 
      });
      
      studyQuery += "&g=";

      this.props.genes.forEach((gene: any, i: number) => {
        console.log("Genes inside Toolbar render");
        console.log(gene);
        studyQuery += gene.hugoGeneSymbol;
        studyQuery += ((i !== (this.props.genes.length - 1)) ? "&g=" : ""); 
      });


      return (
      <Col>
          <Row>
              <Col>
                <Image src={saveImage} onClick={this.props.pathwayActions.saveAsPng}/>
              </Col>
          </Row>

          <br/>
          <Row>
              <Col>
              <Image src={layoutImage} onClick={this.props.pathwayActions.performLayout} />              
              </Col>
          </Row>

          <br/>
          <Row>
              <Col>
              <Image src={infoImage}/>
              </Col>
          </Row>

          <br/>
          <Row>
              <Col>
              <Image src={openImage} onClick={() => {window.open("http://localhost:8080/?pathwayName=" + this.props.selectedPathway +"&"+ studyQuery )}}/>
              </Col>
          </Row>

    </Col>);

  }
}
