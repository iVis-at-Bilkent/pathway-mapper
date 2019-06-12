// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
import React from 'react';
import Toolbar from "./Toolbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CytoscapeArea from "./CytoscapeArea";
import Ranking from "./Ranking";
import Container from "react-bootstrap/Container";
import EditorActionsManager from "./EditorActionsManager";
import autobind from "autobind-decorator";
import {observable} from "mobx";
import {observer} from "mobx-react";
import FileOperationsManager from './FileOperationsManager';

@observer
export default class App extends React.Component {


  @observable
  selectedPathway: string;
  fileManager: FileOperationsManager;
  editor: EditorActionsManager;

  constructor(props){
    super(props);
    this.selectedPathway = "Creighton-PI3K-pathway";
  }

  render() {
    return (
        <div>
          <Row>
            <Col xs={1}>
                <Toolbar loadSampleData={this.loadSampleData} performLayout={this.performLayout} saveAsPng={this.saveAsPng}/>
            </Col>

            <Col xs={7}>
                <CytoscapeArea isCbioPortal={true} isCollaborative={false} editorHandler={this.editorHandler} selectedPathway={this.selectedPathway}/>
            </Col>

            <Col>
                <Ranking pathwayHandler={this.pathwayHandler}/>
            </Col>

          </Row>
        </div>
    );
  }

  @autobind
  pathwayHandler(pathway: string){
    this.selectedPathway = pathway;
  }

  @autobind
  saveAsPng(){
    this.fileManager.saveAsPNG();
  }


  @autobind
  editorHandler(editor, fileManager){
    this.editor = editor;
    this.fileManager = fileManager;
  }


  @autobind
  loadSampleData(){
    const data = "gene\tlung\tovarian\tx\ty\n" +
      "PTEN\t-7\t-20\t10\t20\n" +
      "NF1\t-12\t-4\t30\t20\n" +
      "PIK3CA\t18\t40\t-50\t20\n" +
      "KRAS\t11\t-5\t0\t20\n" +
      "BRAF\t0\t-2\t0\t20\n" +
      "AKT1\t3\t30\t-10\t20\n" +
      "AKT2\t6\t-3\t20\t20\n" +
      "AKT3\t6\t-3\t20\t20\n" +
      "\n";
    this.editor.addGenomicData(data);
  }

  @autobind
  performLayout() {
    this.editor.performLayout();
  }
}
