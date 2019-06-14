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
import {Modal, DropdownButton, Checkbox} from 'react-bootstrap'
import PathwayActions from './PathwayActions';
import CBioPortalAccessor from './CBioPortalAccessor';

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
  portalAcessor: CBioPortalAccessor;

  constructor(props: IPathwayMapperProps){
    super(props);
    this.selectedPathway = "Creighton-PI3K-pathway";
    this.pathwayActions = new PathwayActions(this.pathwayHandler);
    this.isModalShown = false;
  }

  fetchStudy(){
    this.portalAcessor.fetchCancerStudies((cancerStudies) => {
        console.log(cancerStudies);
    });
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

            <Bootstrap.Col xs={isCBioPortal ? 6 : 12}>
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
              

            <DropdownButton title="SElam">
              <MenuItem eventKey="1">Action</MenuItem>
            </DropdownButton>
            
            <Checkbox>
              Checkbox
            </Checkbox>


            </Modal.Body>
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
    this.portalAcessor = new CBioPortalAccessor(this.editor);
    this.fetchStudy();
  }

  @autobind
  pathwayHandler(pathway: string){
      this.selectedPathway = pathway;
  }
}