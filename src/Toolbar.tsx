import React, { Component } from 'react';
import * as Bootstrap from "react-bootstrap";import autobind from "autobind-decorator";
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
interface IToolbarProps {
  pathwayActions: PathwayActions;
  selectedPathway: string;
  studyQuery: string;
}

@observer
export default class Toolbar extends React.Component<IToolbarProps, {}>{

    @observable
    private editor: EditorActionsManager;
    constructor(props: IToolbarProps){
      super(props);
    }

    
    render(){
      return (
      <Bootstrap.Col>
          <Bootstrap.Row>
              <Bootstrap.Col>
              <Bootstrap.Image src={saveImage} onClick={this.props.pathwayActions.saveAsPng}/>
              </Bootstrap.Col>
          </Bootstrap.Row>

          <br/>
          <Bootstrap.Row>
              <Bootstrap.Col>
              <Bootstrap.Image src={layoutImage} onClick={this.props.pathwayActions.performLayout} />              
              </Bootstrap.Col>
          </Bootstrap.Row>

          <br/>
          <Bootstrap.Row>
              <Bootstrap.Col>
              <Bootstrap.Image src={infoImage}/>
              </Bootstrap.Col>
          </Bootstrap.Row>

          <br/>
          <Bootstrap.Row>
              <Bootstrap.Col>
              <Bootstrap.Image src={openImage} onClick={() => {window.open("http://localhost:8080/?pathwayName=" + this.props.selectedPathway +"&studies="+this.props.studyQuery )}}/>
              </Bootstrap.Col>
          </Bootstrap.Row>

    </Bootstrap.Col>);

  }
}
