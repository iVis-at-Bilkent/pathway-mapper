import autobind from 'autobind-decorator';
import { observable } from 'mobx';
import EditorActionsManager from './EditorActionsManager';
import FileOperationsManager from './FileOperationsManager';
import $ from 'jquery';
import { IProfileMetaData } from './react-pathway-mapper';
export default class PathwayActions {
  @observable
  selectedPathway: string;
  fileManager: FileOperationsManager;
  editor: EditorActionsManager;
  pathwayHandler: (pathwayName: string) => void;
  eh: any;

  profiles: IProfileMetaData[];

  constructor(pathwayHandler: (pathwayName: string) => void, profiles: IProfileMetaData[]) {
    this.pathwayHandler = pathwayHandler;
    this.profiles = profiles;
  }

  @autobind
  changePathway(pathwayName: string) {
    this.pathwayHandler(pathwayName);
  }

  @autobind
  newPathway() {
    this.fileManager.createNewPathway();
  }
  

  @autobind
  addEdge(edgeTypeIndex: number){
    // @ts-ignore
    window.edgeAddingMode = edgeTypeIndex + 1;
        // @ts-ignore
    this.eh.disableDrawMode();
    this.eh.enableDrawMode();
  }

  @autobind
  changeNodeName(oldName: string, newName: string){
    const cyNode = this.editor.cy.$('[name="' + oldName + '"]')[0];
    console.log(this.editor.cy.$('[name="' + oldName + '"]'));
    this.editor.changeName(cyNode, newName);
  }


  @autobind
  addNode(nodeType) {
    const nodeData = {
      type: nodeType.toUpperCase(),
      name: 'New ' + nodeType,
      w: '150',
      h: '52'
    };
    const extent = this.editor.cy.extent();
    const posData = {
      x: (extent.x1 + extent.x2)  / 2,
      y: (extent.y1 + extent.y2) / 2
    };

    console.log("this.editor.cy.extent()");
    console.log();

    this.editor.addNode(nodeData, posData);
  }

  @autobind
  searchGene(geneName: string){
    const selector = "node[name @*= '" + geneName + "']";
    const nodesContainingSearchedGene  = this.editor.cy.filter(selector);
    let nodesToSelect = this.editor.cy.collection();
    nodesContainingSearchedGene.forEach(function(ele, index){
        if (!ele.hasClass('highlightedNode') &&  !ele.hasClass('invalidGeneHighlight'))
            nodesToSelect = nodesToSelect.union(ele);
    });
    this.editor.highlightBySearch(nodesToSelect);
  }

  @autobind
  removeAllData(){
    this.editor.removeGenomicData();
    this.profiles.length = 0;
  }

  @autobind
  removeAllHighlight(){
    this.editor.removeAllHighlight();
  }

  @autobind
  saveAsPng() {
    this.fileManager.saveAsPNG();
  }

  @autobind
  editorHandler(editor, fileManager, eh) {
    this.editor = editor;
    this.fileManager = fileManager;
    this.eh = eh;
  }

  @autobind
  loadSampleData() {
    const data =
      'gene\tlung\tovarian\tx\ty\n' +
      'PTEN\t-7\t-20\t10\t20\n' +
      'NF1\t-12\t-4\t30\t20\n' +
      'PIK3CA\t18\t40\t-50\t20\n' +
      'KRAS\t11\t-5\t0\t20\n' +
      'ZIYA\t0\t-2\t0\t20\n' +
      'AKT1\t3\t30\t-10\t20\n' +
      'AKT2\t6\t-3\t20\t20\n' +
      'AKT3\t6\t-3\t20\t20\n' +
      '\n';
    this.editor.addGenomicData(data);
  }

  @autobind
  performLayout() {
    this.editor.performLayout();
  }
}
