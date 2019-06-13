// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
import React from 'react';
import Toolbar from "./Toolbar";
import CytoscapeArea from "./CytoscapeArea";
import Ranking from "./Ranking";
import EditorActionsManager from "./EditorActionsManager";
import autobind from "autobind-decorator";
import {observable} from "mobx";
import {observer} from "mobx-react";
import FileOperationsManager from './FileOperationsManager';
import * as Bootstrap from "react-bootstrap"; 
import {Navbar, Nav, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';
import pathways from "./pathways.json";
import Menubar from './Menubar';
import {Modal, Button} from 'react-bootstrap'
import PathwayActions from './PathwayActions';

interface IPathwayMapperProps{
  isCBioPortal: boolean;
}

@observer
export default class PathwayMapper extends React.Component<IPathwayMapperProps, {}> {

  @observable
  selectedPathway: string;
  fileManager: FileOperationsManager;
  editor: EditorActionsManager;
  pathwayActions: PathwayActions;

  @observable
  isModalShown: boolean;

  constructor(props: IPathwayMapperProps){
    super(props);
    this.selectedPathway = "Creighton-PI3K-pathway";
    this.pathwayActions = new PathwayActions(this.pathwayHandler);
    this.isModalShown = false;
  }

  render() {
  const isCBioPortal = this.props.isCBioPortal; 

  return (
      <div>
          <Bootstrap.Row>
            { !isCBioPortal && (<Menubar pathwayActions={this.pathwayActions} openCBioModal={this.handleOpen}/>)}
          </Bootstrap.Row>

          <Bootstrap.Row>
              {
              ( isCBioPortal &&
              <Bootstrap.Col xs={2}>
                  <Toolbar pathwayActions={this.pathwayActions}/>
              </Bootstrap.Col>)
              }

            <Bootstrap.Col xs={isCBioPortal ? 7 : 12}>
                <CytoscapeArea isCbioPortal={this.props.isCBioPortal} isCollaborative={false} editorHandler={this.editorHandler} selectedPathway={this.selectedPathway}/>
            </Bootstrap.Col>

            { isCBioPortal &&
            <Bootstrap.Col xs={2}>
                <Ranking pathwayActions={this.pathwayActions}/>
            </Bootstrap.Col>
            }
          </Bootstrap.Row>

          <Modal show={this.isModalShown} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
      </div>
  );
  }

  @autobind
  handleClose(){
    this.isModalShown = false;
  }

  @autobind
  handleOpen(){
    this.isModalShown = true;
  }

  @autobind
  editorHandler(editor, fileManager){
    this.editor = editor;
    this.fileManager = fileManager;
    this.pathwayActions.editorHandler(editor, fileManager);
  }

  @autobind
  pathwayHandler(pathway: string){
      this.selectedPathway = pathway;
  }
}