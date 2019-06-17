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
import SaveLoadUtility from './SaveLoadUtility';
import "./base.css"
import "cytoscape-panzoom/cytoscape.js-panzoom.css"
import "cytoscape-navigator/cytoscape.js-navigator.css"

const maxHeapFn = require('@datastructures-js/max-heap');
const maxHeap: any = maxHeapFn();

interface IPathwayMapperProps{
  isCBioPortal: boolean;
  genes: any[];
  store: any;
}

@observer
export default class PathwayMapper extends React.Component<IPathwayMapperProps, {}> {
  readonly NUMBER_OF_PATHWAYS_TO_SHOW = 10;
  
  @observable
  selectedPathway: string;

  @observable
  selectedStudyData: any[];
  fileManager: FileOperationsManager;
  editor: EditorActionsManager;
  pathwayActions: PathwayActions;

  @observable
  isModalShown: boolean;

  @observable
  itemArray: any[];
  portalAcessor: CBioPortalAccessor;

  pathwayGeneMap: any = {};
  bestPathwaysAlgos: any[][] = [];

  constructor(props: IPathwayMapperProps){
    super(props);
    this.selectedPathway = "Creighton-PI3K-pathway";
    this.pathwayActions = new PathwayActions(this.pathwayHandler);
    this.isModalShown = false;
    this.selectedStudyData = [];
    if(this.props.isCBioPortal){
      this.extractAllGenes();
      this.getBestPathway(false);
      this.getBestPathway(true);
    }
  }

  overlayPortalData(){
    if(this.props.store === undefined){
      return;
    }
    const mutationData: any = {};
    const mutations = this.props.store.mutations.result;
    const profileCounts = this.props.store.molecularProfileIdToProfiledSampleCount.result;
    if(mutations !== undefined){
        mutations.forEach((mutation) => {
            if(mutationData[mutation.molecularProfileId] === undefined){
                mutationData[mutation.molecularProfileId] = {};
            }
            const mutationAmount = mutationData[mutation.molecularProfileId][mutation.gene.hugoGeneSymbol];
            if( mutationAmount === undefined){
                mutationData[mutation.molecularProfileId][mutation.gene.hugoGeneSymbol] = 0;
            } 
            mutationData[mutation.molecularProfileId][mutation.gene.hugoGeneSymbol]++;
        });
    } else {
        console.log("Mutation undefined");
    }

    for(const profileName in mutationData){
        if(mutationData.hasOwnProperty(profileName))
        for(const gene in mutationData[profileName]){
          if(mutationData[profileName].hasOwnProperty(gene))
            mutationData[profileName][gene] /= profileCounts[profileName] / 100;
        }
    }

    console.log(mutationData);

    this.editor.addPortalGenomicData(mutationData, this.editor.getEmptyGroupID());
  }

  getBestPathway(isPercentage) {
    const matchedGenesMap: any = {};
    const bestPathways: any[] = [];
    for(const pathwayName in this.pathwayGeneMap){
        if(this.pathwayGeneMap.hasOwnProperty(pathwayName)){
            const genesMatching = [];
            for(const gene of this.props.genes){
                if(this.pathwayGeneMap[pathwayName].hasOwnProperty(gene.hugoGeneSymbol) ) genesMatching.push(gene.hugoGeneSymbol);
            }
            matchedGenesMap[pathwayName] = genesMatching;

            let geneCount = 0;
            // Count number of genes *not processess* in a pathway
            for(const geneType of Object.values(this.pathwayGeneMap[pathwayName])){
              if(geneType === "GENE"){
                geneCount++;
              }
              console.log(geneType);
            }

            if(!isPercentage){
              maxHeap.insert(genesMatching.length, {pathwayName: pathwayName});
            } else {
              maxHeap.insert(genesMatching.length / geneCount * 100, {pathwayName: pathwayName});
            }
        }
    }
    console.log("Best Pathways");
    for(let i = 0; i < this.NUMBER_OF_PATHWAYS_TO_SHOW; i++){
        const top = maxHeap.extractMax();
        const pathwayName = top.getValue().pathwayName;
        bestPathways.push({score: top.getKey(), genesMatched: matchedGenesMap[pathwayName], pathwayName: pathwayName});
    }
    if(this.bestPathwaysAlgos.length == 0) // First pathway of the first method is shown as the default pathway.
      this.selectedPathway = bestPathways[0].pathwayName;
    this.bestPathwaysAlgos.push(bestPathways);
    console.log("Genes");
    console.log(this.props.genes);
    console.log("Score Map");
    console.log(matchedGenesMap);
  }

  extractAllGenes(){

      for(const pathwayName in pathways){
          if(pathways.hasOwnProperty(pathwayName)){

              const pathwayData = SaveLoadUtility.parseGraph(pathways[pathwayName], true);
              const genes = pathwayData.nodes;

              const geneHash: any = {};

              for(const gene of genes){

                  geneHash[gene.data.name] = gene.data.type;

              }

              this.pathwayGeneMap[pathwayName] = geneHash;
          }
      }
      console.log("Pathway & Gene Map");
      console.log(this.pathwayGeneMap);
    }

  fetchStudy(){ 
    this.itemArray = [];

    
    this.portalAcessor.fetchCancerStudies((cancerStudies: any) => {
      for(const study in cancerStudies){

        if(!cancerStudies.hasOwnProperty(study)){
          continue;
        }
        const item = <MenuItem eventKey="1" onClick={() => {this.selectedStudyData = cancerStudies[study]}}>{cancerStudies[study][0]}</MenuItem>;
  
        this.itemArray.push(item);
      }
    });
    console.log(this.itemArray);
  }

  render() {
  const isCBioPortal = this.props.isCBioPortal; 

  return (
      <div>
          <br/>
          <Bootstrap.Row>
            { !isCBioPortal && (<Menubar pathwayActions={this.pathwayActions} openCBioModal={this.handleOpen}/>)}
          </Bootstrap.Row>

          <Bootstrap.Row>
              {
              ( isCBioPortal &&
              <Bootstrap.Col xs={1}>
                  <Toolbar pathwayActions={this.pathwayActions}/>
              </Bootstrap.Col>)
              }

            <Bootstrap.Col xs={isCBioPortal ? 7 : 12}>
                <CytoscapeArea isCbioPortal={this.props.isCBioPortal} isCollaborative={false} editorHandler={this.editorHandler} selectedPathway={this.selectedPathway}/>
            </Bootstrap.Col>

            { isCBioPortal &&
            <Bootstrap.Col xs={3}>
                <Ranking pathwayActions={this.pathwayActions} bestPathwaysAlgos={this.bestPathwaysAlgos}/>
            </Bootstrap.Col>
            }
          </Bootstrap.Row>

          <Modal show={this.isModalShown} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              

            <DropdownButton title={this.selectedStudyData[1] || ""}>
              {this.itemArray}
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
  editorHandler(editor, fileManager, eh){
    this.editor = editor;
    this.fileManager = fileManager;
    this.pathwayActions.editorHandler(editor, fileManager, eh);
    this.portalAcessor = new CBioPortalAccessor(this.editor);
    if(this.props.isCBioPortal){
      this.overlayPortalData();
    } else {
      // this.fetchStudy();
    }
  }

  @autobind
  pathwayHandler(pathway: string){
      this.selectedPathway = pathway;
  }
}