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
import { IProfileMetaData, IAlterationData } from './react-pathway-mapper';
interface IToolbarProps {
  pathwayActions: PathwayActions;
  selectedPathway: string;
  alterationData: IAlterationData;
}

@observer
export default class Toolbar extends React.Component<IToolbarProps, {}>{

    @observable
    private editor: EditorActionsManager;
    constructor(props: IToolbarProps){
      super(props);
    }

    
    render(){


      let studyQuery = "q=" + JSON.stringify(this.props.alterationData);


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
              <Image src={openImage} onClick={() => {{window.open("http://localhost:8080/?pathwayName=" + this.props.selectedPathway +"&"+ studyQuery )}}}/>
              </Col> 
          </Row>

    </Col>);

  }
}
