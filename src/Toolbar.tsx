import React, { Component } from 'react';
import {Row, Col, Image} from "react-bootstrap";
import autobind from "autobind-decorator";
import EditorActionsManager from "./EditorActionsManager";
import {observer} from "mobx-react";
import {observable} from "mobx";
import PathwayActions from './PathwayActions';
// @ts-ignore
import layoutImage from "./toolbar/layout-cose.svg";
// @ts-ignore
import saveImage from "./toolbar/save_png.svg";
// @ts-ignore
const infoImage = require("./toolbar/about.svg");
// @ts-ignore
import openImage from "./toolbar/edit.svg";

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


      const studyQuery = "q=" + JSON.stringify(this.props.alterationData);

      return (
      <div id="toolbar">
          <img height="22px" width="22px" style={{cursor: "pointer"}} data-border="true" data-type="light" data-tip="Save as PNG" data-place="right" data-effect="solid" src={saveImage} onClick={() => {this.props.pathwayActions.saveAs("PNG");}}/>

          <br/>
          <img height="22px" width="22px" style={{cursor: "pointer"}} data-border="true" data-type="light" data-tip="Perform layout" data-place="right" data-effect="solid" src={layoutImage} onClick={this.props.pathwayActions.performLayout} />              

          <br/>
          <img height="22px" width="22px" style={{cursor: "pointer"}} data-border="true" data-type="light" data-tip="Edit pathway" data-place="right" data-effect="solid" src={openImage} onClick={() => {{window.open("http://react-pathway-mapper.herokuapp.com/?pathwayName=" + this.props.selectedPathway +"&"+ studyQuery )}}}/>
          
          <br/>
          <img height="22px" width="22px" style={{cursor: "pointer"}} data-border="true" data-type="light" data-tip="About" data-place="right" data-effect="solid" src={infoImage} onClick={() => {this.props.handleOpen(3);}}/>
         
    </div>);

  }
}
