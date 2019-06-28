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
  handleOpen: (modalId: number) => void;
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
          <Image style={{cursor: "pointer"}} data-tip="Save as PNG" data-place="right" data-effect="solid" src={saveImage} onClick={this.props.pathwayActions.saveAsPng}/>

          <br/>
          <Image style={{cursor: "pointer"}} data-tip="Perform layout" data-place="right" data-effect="solid" src={layoutImage} onClick={this.props.pathwayActions.performLayout} />              

          <br/>
          <Image style={{cursor: "pointer"}} data-tip="About" data-place="right" data-effect="solid" src={infoImage} onClick={() => {this.props.handleOpen(3);}}/>

          <br/>
          <Image style={{cursor: "pointer"}} data-tip="Open full-blown mode" data-place="right" data-effect="solid" src={openImage} onClick={() => {{window.open("http://localhost:8080/?pathwayName=" + this.props.selectedPathway +"&"+ studyQuery )}}}/>

    </Col>);

  }
}
