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

export default class App extends React.Component {

  private editor: EditorActionsManager;

  constructor(props){
    super(props);

  }

  render() {
    return (
        <Container>
          <Row>
            <Col>
                <Toolbar loadSampleData={this.loadSampleData} performLayout={this.performLayout}/>
            </Col>

            <Col xs={10}>
                <CytoscapeArea isCbioPortal={true} isCollaborative={false} editorHandler={this.editorHandler}/>
            </Col>

            <Col>
                <Ranking/>
            </Col>

          </Row>
        </Container>
    );
  }

  @autobind
  editorHandler(editor){
    this.editor = editor;
    console.log("Editor came: ");
    console.log(editor);
    console.log("Editor");
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
