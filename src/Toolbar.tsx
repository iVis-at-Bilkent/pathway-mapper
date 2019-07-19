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
import savePNGImage from "./toolbar/save_png.svg";
// @ts-ignore
import saveSVGImage from "./toolbar/save_svg.svg";
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
    selectedGenes: string[];

    @observable
    private editor: EditorActionsManager;
    constructor(props: IToolbarProps){
      super(props);
      this.selectedGenes = [];
    }

    
    render(){


      const studyQuery = "q=" + JSON.stringify(this.props.alterationData);
      return (
      <div id="toolbar">
          {this.selectedGenes.join(" ")}
          <img height="22px" width="22px" style={{cursor: "pointer"}} data-border="true" data-type="light" data-tip="Save as PNG" data-place="right" data-effect="solid" src={savePNGImage} onClick={() => {this.props.pathwayActions.saveAs("PNG");}}/>

          <br/>
          <img height="22px" width="22px" style={{cursor: "pointer"}} data-border="true" data-type="light" data-tip="Save as SVG" data-place="right" data-effect="solid" src={saveSVGImage} onClick={() => {this.props.pathwayActions.saveAs("SVG");}}/>

          <br/>
          <img height="22px" width="22px" style={{cursor: "pointer"}} data-border="true" data-type="light" data-tip="Perform layout" data-place="right" data-effect="solid" src={layoutImage} onClick={this.props.pathwayActions.performLayout} />              

          <br/>
          <img height="22px" width="22px" style={{cursor: "pointer"}} data-border="true" data-type="light" data-tip="Edit pathway" data-place="right" data-effect="solid" src={openImage} onClick={() => {{window.open("http://react-pathway-mapper.herokuapp.com/?pathwayName=" + this.props.selectedPathway +"&"+ studyQuery )}}}/>
          
          <br/>
          <img height="22px" width="22px" style={{cursor: "pointer"}} data-border="true" data-type="light" data-tip="Add selected genes to query" data-place="right" data-effect="solid" src={openImage} onClick={() => {this.selectedGenes = this.props.pathwayActions.getSelectedNodes().map((node: any) => node.data().name)}}/>
    </div>);

  }
}
