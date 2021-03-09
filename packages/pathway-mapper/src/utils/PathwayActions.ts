import autobind from "autobind-decorator";
import { action, computed, makeObservable, observable } from "mobx";
import EditorActionsManager from "../managers/EditorActionsManager";
import FileOperationsManager, {
  IPathwayInfo
} from "../managers/FileOperationsManager";
import GridOptionsManager from "../managers/GridOptionsManager";
import ViewOperationsManager from "../managers/ViewOperationsManager";
import ConfirmationModal from "../modals/ConfirmationModal";
import { EGridType } from "../modals/GridSettings";
import { ILayoutProperties } from "../modals/LayoutProperties";
import {
  EModalType, IPathwayData, IProfileMetaData
} from "../ui/react-pathway-mapper";
import SaveLoadUtility from "./SaveLoadUtility";

export default class PathwayActions {
  @observable
  selectedPathway: string;
  fileManager: FileOperationsManager;
  editor: EditorActionsManager;
  undoRedoManager: any;
  pathwayHandler: (pathwayName: string) => void;
  handleOpen: (modalId: EModalType) => void;
  eh: any;
  profiles: IProfileMetaData[];
  gridOptionsManager: GridOptionsManager;

  uploader: any;
  merger: any;
  isCBioPortal: boolean;
  isCollaborative: boolean;
  viewOperationsManager: ViewOperationsManager;
  overlayUploader: any;

  @observable
  enabledType: EGridType;

  constructor(
    pathwayHandler: (pathwayName: string) => void,
    profiles: IProfileMetaData[],
    fileManager: FileOperationsManager,
    handleOpen: (modalId: EModalType) => void,
    isCBioPortal: boolean,
    isCollaborative: boolean
  ) {
    makeObservable(this);
    this.pathwayHandler = pathwayHandler;
    this.profiles = profiles;
    this.fileManager = fileManager;
    this.handleOpen = handleOpen;
    this.isCBioPortal = isCBioPortal;
    this.isCollaborative = isCollaborative;
    this.enabledType = EGridType.NONE;
  }

  @action.bound
  addProfile(profile: IProfileMetaData) {
    this.profiles.push(profile);
  }

  @action.bound
  clearProfiles() {
    this.profiles.length = 0;
  }

  emphasizeQueryGenes(queryGenes: string[]) {
    if (this.editor)
      this.editor.cy.nodes().forEach((node: any) => {
        const nodeName = node.data().name;
        const nodeType = node.data().type;
        if (queryGenes.includes(nodeName) && nodeType === "GENE") {
          node.style({ "border-width": "4px", "font-weight": "bold" });
        }
      });
  }

  getSelectedNodes() {
    return this.editor.cy.nodes(":selected");
  }

  setLayoutProperties(layoutProperties: ILayoutProperties) {
    this.editor.saveLayoutProperties(layoutProperties);
  }

  doesCyHaveElements() {
    return this.editor.cy.elements().length > 0;
  }

  @autobind
  toggleGrid(isEnabled: boolean) {
    this.gridOptionsManager.setSnapToGuidelines(false);
    this.gridOptionsManager.setShowGrid(isEnabled);
  }

  @autobind
  toggleGuide(isEnabled: boolean) {
    this.gridOptionsManager.setSnapToGuidelines(isEnabled);
    this.gridOptionsManager.setShowGrid(false);
  }

  adjustGridSettings(gridSize: number, color: string) {
    this.gridOptionsManager.currentProperties.gridSpacing = gridSize;
    this.gridOptionsManager.currentProperties.guidelinesStyle.strokeStyle = color;
    this.gridOptionsManager.currentProperties.guidelinesStyle.horizontalDistColor = color;
    this.gridOptionsManager.currentProperties.guidelinesStyle.verticalDistColor = color;
  }

  @autobind
  resizeToContent() {
    this.editor.resizeNodesToContent(this.editor.cy.nodes());
  }

  @autobind
  align(param: string) {
    this.viewOperationsManager.handleNodeAlignment(param);
  }

  @autobind
  onChangeFile(e: any, isMerge: boolean) {
    const file = e.target.files[0] as File;
    this.processFile(file, isMerge);
  }

  uploadOverlay() {
    this.overlayUploader.click();
  }

  overlayFromText(file: File) {
    // Create a new FormData object.
    const formData = new FormData();
    formData.append("graphFile", file);
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (
        request.readyState === XMLHttpRequest.DONE &&
        request.status === 200
      ) {
        const linesOfData = request.responseText.split("\n");
        if (linesOfData.length > 0) {
          const profileIdsFromFile = linesOfData[0].split("\t").slice(1);
          profileIdsFromFile.forEach(id =>
            this.addProfile({ profileId: id, enabled: true })
          );
        } else {
          console.log("Error: No valid data");
        }
        this.editor.addGenomicData(request.responseText);
      }
    };
    request.open("POST", "/loadGraph");
    request.send(formData);
  }

  @autobind
  upload() {
    if (this.editor.cy.elements().length > 0) {
      this.handleOpen(EModalType.CONFIRMATION);
      ConfirmationModal.pendingFunction = () => {
        this.uploader.click();
      };
    } else {
      this.uploader.click();
    }
  }

  @autobind
  merge() {
    this.merger.click();
  }

  setOverlayUploader(inputRef: any) {
    this.overlayUploader = inputRef;
  }

  @autobind
  setUploaders(inputRef: any, isMerge: boolean) {
    if (isMerge) this.merger = inputRef;
    else this.uploader = inputRef;
  }

  @computed
  get getPathwayInfo() {
    return this.fileManager.getPathwayInfo;
  }

  @autobind
  setPathwayInfo(other: IPathwayInfo) {
    this.fileManager.setPathwayInfo(other);
  }

  @autobind
  undo() {
    this.undoRedoManager.undo();
  }

  @autobind
  redo() {
    this.undoRedoManager.redo();
  }

  @autobind
  export(isSIFNX: boolean) {
    //this.editor.cy.remove('.eh-handle');
    this.eh.hide();
    this.fileManager.saveGraph(isSIFNX, this.editor);
  }

  @autobind
  resetUndoStack() {
    this.undoRedoManager.reset();
  }

  @autobind
  newPathway() {
    const commitNewPathway = () => {
      this.editor.removeAllElements();
      this.fileManager.setPathwayInfo({
        pathwayTitle: "New Pathway",
        pathwayDetails: ""
      });
      //this.removeAllData()
      this.resetUndoStack();
      this.pathwayHandler("Dummy");
    };

    if (this.editor.cy.elements().length > 0) {
      this.handleOpen(EModalType.CONFIRMATION);
      ConfirmationModal.pendingFunction = commitNewPathway;
    } else {
      commitNewPathway();
    }
  }

  @autobind
  changePathway(pathwayName: string) {
    this.pathwayHandler(pathwayName);

    if (!this.isCBioPortal) {
      this.fileManager.setPathwayInfo({
        pathwayTitle: pathwayName,
        pathwayDetails: "",
      });
      // At the beginning changePathway is called editor is not ready hence removeData shall not be called
      if (this.editor) {
        //this.removeAllData()
        this.resetUndoStack();
      }
    }
  }

  @autobind
  highlightNeighbours() {
    this.editor.highlightNeighbors();
  }

  @autobind
  highlightSelected() {
    this.editor.highlightSelected();
  }

  @autobind
  validateGenes() {
    this.editor.validateGenes();
  }

  @autobind
  showAll() {
    this.editor.showAllNodes();
  }

  @autobind
  hideSelected() {
    this.editor.hideSelectedNodes();
  }

  @autobind
  deleteSelected() {
    const selectedEles = this.editor.cy.elements(":selected");
    this.editor.removeElement(selectedEles);
  }

  @autobind
  addEdge(edgeTypeIndex: number) {
    // @ts-ignore
    window.edgeAddingMode = edgeTypeIndex + 1;
    if (edgeTypeIndex === -1) {
      this.eh.disable();
      this.eh.hide();
      return;
    } else {
      // @ts-ignore
      this.eh.enable();
    }
  }

  @autobind
  changeNodeName(oldName: string, newName: string) {
    const cyNode = this.editor.cy.$('[name="' + oldName + '"]')[0];
    this.editor.changeName(cyNode, newName);
  }

  @autobind
  addNode(nodeType) {
    const nodeData = {
      type: nodeType.toUpperCase(),
      name: "New " + nodeType,
      w: "150",
      h: "52"
    };
    const extent = this.editor.cy.extent();
    const posData = {
      x: (extent.x1 + extent.x2) / 2,
      y: (extent.y1 + extent.y2) / 2
    };

    this.editor.addNode(nodeData, posData);
    this.pathwayHandler("Additional Pathway");
  }

  @autobind
  searchGene(geneName: string) {
    const selector = "node[name @*= '" + geneName + "']";
    const nodesContainingSearchedGene = this.editor.cy.filter(selector);
    let nodesToSelect = this.editor.cy.collection();
    nodesContainingSearchedGene.forEach(function(ele, index) {
      if (
        !ele.hasClass("highlightedNode") &&
        !ele.hasClass("invalidGeneHighlight")
      )
        nodesToSelect = nodesToSelect.union(ele);
    });
    this.editor.highlightBySearch(nodesToSelect);
  }

  @autobind
  removeAllData() {
    this.editor.removeGenomicData();
    this.clearProfiles();
  }

  @autobind
  removeAllHighlight() {
    this.editor.removeAllHighlight();
  }

  @autobind
  processFile(file: File, isMerge: boolean) {
    // Create a new FormData object.
    const formData = new FormData();
    formData.append("graphFile", file);
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          const pathwayData: IPathwayData = SaveLoadUtility.parseGraph(
            request.responseText,
            false
          );

          if (isMerge) {
            this.editor.mergeGraph(pathwayData.nodes, pathwayData.edges);
            const graphJSON = this.editor.cy.json();

            //TODO change file name maybe, probabyly  not necessary ?
            // Pathway nodes and edges are now combination of both previous and new pathway.
            pathwayData.nodes = graphJSON.elements.nodes; //this.editor.cy.nodes().map((node) => ({data: node.data()}));
            pathwayData.edges = graphJSON.elements.edges; //this.editor.cy.edges().map((edge) => ({data: edge.data()}));
            pathwayData.title = "Additional Pathway";
          } else {
            this.editor.loadFile(pathwayData.nodes, pathwayData.edges);
            this.fileManager.setPathwayInfo({
              pathwayTitle: pathwayData.title,
              pathwayDetails: pathwayData.description
            });
          }

          this.pathwayHandler(pathwayData.title + "_imported");
          this.resetUndoStack();
        } else {
          console.error(
            "Error processing file: " +
              request.readyState +
              request.responseText
          );
        }
      }
    };
    request.open("POST", "/loadGraph");
    request.send(formData);
  }

  @autobind
  saveAs(type: string) {
    if (type === "SVG") {
      this.fileManager.saveAsSVG(this.editor);
    } else if (type === "PNG") {
      this.fileManager.saveAsPNG(this.editor.cy);
    } else if (type === "JPEG") {
      this.fileManager.saveAsJPEG(this.editor.cy);
    }
  }

  @autobind
  editorHandler(
    editor,
    eh,
    undoRedoManager,
    viewOperationsManager: ViewOperationsManager,
    gridOptionsManager: GridOptionsManager
  ) {
    this.editor = editor;
    this.eh = eh;
    this.undoRedoManager = undoRedoManager;
    this.viewOperationsManager = viewOperationsManager;
    this.gridOptionsManager = gridOptionsManager;
  }

  @autobind
  loadSampleData() {
    const data =
      "gene\tlung\tovarian\tbreast\ty\n" +
      "PTEN\t-7\t-20\t10\t20\n" +
      "NF1\t-12\t-4\t30\t20\n" +
      "PIK3CA\t18\t40\t-50\t20\n" +
      "KRAS\t11\t-5\t0\t20\n" +
      "ZIYA\t0\t-2\t0\t20\n" +
      "AKT1\t3\t30\t-10\t20\n" +
      "AKT2\t6\t-3\t20\t20\n" +
      "AKT3\t6\t-3\t20\t20\n" +
      "\n";
    this.editor.addGenomicData(data);

    this.addProfile({ profileId: "lung", enabled: true });
    this.addProfile({ profileId: "ovarian", enabled: true });
    this.addProfile({ profileId: "breast", enabled: true });
  }

  @autobind
  performLayout() {
    this.editor.performLayout();
  }
}
