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
interface IPathwayMapperProps{
  isCBioPortal: boolean;
}

@observer
export default class PathwayMapper extends React.Component<IPathwayMapperProps, {}> {

  @observable
  selectedPathway: string;
  fileManager: FileOperationsManager;
  editor: EditorActionsManager;

  constructor(props: IPathwayMapperProps){
    super(props);
    this.selectedPathway = "Creighton-PI3K-pathway";
  }

  render() {
    return (
        <div>
            <Bootstrap.Row>
              <Bootstrap.Col xs={2}>
                  <Toolbar loadSampleData={this.loadSampleData} performLayout={this.performLayout} saveAsPng={this.saveAsPng}/>
              </Bootstrap.Col>

              <Bootstrap.Col xs={6}>
                  <CytoscapeArea isCbioPortal={this.props.isCBioPortal} isCollaborative={false} editorHandler={this.editorHandler} selectedPathway={this.selectedPathway}/>
              </Bootstrap.Col>

              <Bootstrap.Col xs={2}>
                  <Ranking isCBioPortal={this.props.isCBioPortal} pathwayHandler={this.pathwayHandler}/>
              </Bootstrap.Col>

            </Bootstrap.Row>
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
