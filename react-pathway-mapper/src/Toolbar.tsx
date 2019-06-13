import React, { Component } from 'react';
import * as Bootstrap from "react-bootstrap";import autobind from "autobind-decorator";
import EditorActionsManager from "./EditorActionsManager";
import {observer} from "mobx-react";
import {observable} from "mobx";

interface IToolbarProps {
  loadSampleData: () => void;
  performLayout: () => void;
  saveAsPng: () => void;

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
              <Bootstrap.Button bsStyle="success" onClick={this.props.saveAsPng}>Save as PNG</Bootstrap.Button>
              </Bootstrap.Col>
          </Bootstrap.Row>

          <br/>
          <Bootstrap.Row>
              <Bootstrap.Col>
              <Bootstrap.Button bsStyle="success" onClick={this.props.performLayout}>Layout</Bootstrap.Button>
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
              <Bootstrap.Button bsStyle="success" onClick={this.props.loadSampleData}>Load Sample</Bootstrap.Button>
              </Bootstrap.Col>
          </Bootstrap.Row>

    </Bootstrap.Col>);

  }
}
