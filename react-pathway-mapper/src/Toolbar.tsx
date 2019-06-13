import React, { Component } from 'react';
import * as Bootstrap from "react-bootstrap";import autobind from "autobind-decorator";
import EditorActionsManager from "./EditorActionsManager";
import {observer} from "mobx-react";
import {observable} from "mobx";
import PathwayActions from './PathwayActions';

interface IToolbarProps {
  pathwayActions: PathwayActions;

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
              <Bootstrap.Button bsStyle="success" onClick={this.props.pathwayActions.saveAsPng}>Save as PNG</Bootstrap.Button>
              </Bootstrap.Col>
          </Bootstrap.Row>

          <br/>
          <Bootstrap.Row>
              <Bootstrap.Col>
              <Bootstrap.Button bsStyle="success" onClick={this.props.pathwayActions.performLayout}>Layout</Bootstrap.Button>
              </Bootstrap.Col>
          </Bootstrap.Row>

          <br/>
          <Bootstrap.Row>
              <Bootstrap.Col>
              <Bootstrap.Button bsStyle="success">Info</Bootstrap.Button>
              </Bootstrap.Col>
          </Bootstrap.Row>

          <br/>
          <Bootstrap.Row>
              <Bootstrap.Col>
              <Bootstrap.Button bsStyle="success">Open Full-Blown</Bootstrap.Button>
              </Bootstrap.Col>
          </Bootstrap.Row>

          <br/>
          <Bootstrap.Row>
              <Bootstrap.Col>
              <Bootstrap.Button bsStyle="success" onClick={this.props.pathwayActions.loadSampleData}>Load Sample</Bootstrap.Button>
              </Bootstrap.Col>
          </Bootstrap.Row>

    </Bootstrap.Col>);

  }
}
