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
let maxHeap: any;

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

  mutationData: any = {};

  pathwayGeneMap: any = {};
  bestPathwaysAlgos: any[][] = [];

  constructor(props: IPathwayMapperProps){
    super(props);
    this.selectedPathway = "Creighton-PI3K-pathway";
    this.pathwayActions = new PathwayActions(this.pathwayHandler);
    this.isModalShown = false;
    this.selectedStudyData = [];
    if(this.props.isCBioPortal){
      this.overlayPortalData();
      // this.mutationData = {"study1" : {"MDM2": 10, "TP53": 20}, "study2" : {"TP53": 10}};
      this.extractAllGenes();
      this.getBestPathway(0);
      this.getBestPathway(1);
      this.getBestPathway(2);
      this.getBestPathway(3);
    }
  }



  getGeneStudyMap(studyGeneMap: any){
    const genomicDataMap: any = {};
    for (const cancerStudy of Object.keys(studyGeneMap)) {

      const cancerData = studyGeneMap[cancerStudy]

      for (const geneSymbol of Object.keys(cancerData)) {
        if (genomicDataMap[geneSymbol] === undefined) genomicDataMap[geneSymbol] = {}

        genomicDataMap[geneSymbol][cancerStudy] = studyGeneMap[cancerStudy][geneSymbol].toFixed(2)
      }
    }
    return genomicDataMap;
  }

  getAlterationAveragePerGene(genomicDataMap: any){

    const geneAlterationMap: any = {};
    for(const gene of Object.keys(genomicDataMap)){
      let sum = 0, count = 0;

      for(const alteration of Object.values(genomicDataMap[gene])){
        sum += parseFloat(alteration as string);
        count++;
      }
      console.log("Sum/COunt");
      console.log(sum, count);
      if(count === 0){
        geneAlterationMap[gene] = 0;
      } else {
        geneAlterationMap[gene] = sum / count;
      }
    }

    return geneAlterationMap;
  }

  overlayPortalData(){
    if(this.props.store === undefined){
      return;
    }
    const mutations = this.props.store.mutations.result;
    const profileCounts = this.props.store.molecularProfileIdToProfiledSampleCount.result;
    if(mutations !== undefined){
        mutations.forEach((mutation) => {
            if(this.mutationData[mutation.molecularProfileId] === undefined){
                this.mutationData[mutation.molecularProfileId] = {};
            }
            const mutationAmount = this.mutationData[mutation.molecularProfileId][mutation.gene.hugoGeneSymbol];
            if( mutationAmount === undefined){
                this.mutationData[mutation.molecularProfileId][mutation.gene.hugoGeneSymbol] = 0;
            } 
            this.mutationData[mutation.molecularProfileId][mutation.gene.hugoGeneSymbol]++;
        });
    } else {
        console.log("Mutation undefined");
    }

    for(const profileName of Object.keys(this.mutationData)){
        for(const gene of Object.keys(this.mutationData[profileName])){
            this.mutationData[profileName][gene] /= profileCounts[profileName] / 100;
        }
    }

    console.log(this.mutationData);
  }

  /**
   * 
   * @param rankingMode: number => 0 = Count, 1 = Percentage, 2 = Count with Alteration, 3 = Percentage with Alteration
   * 
   */
  getBestPathway(rankingMode: number) {
    
    const genomicDataMap = this.getGeneStudyMap(this.mutationData);
    const alterationPerGene = this.getAlterationAveragePerGene(genomicDataMap);
    maxHeap =  maxHeapFn();
    console.log("GenomicDAtaMAp");
    console.log(genomicDataMap);

    console.log("Alteration per Gene");
    console.log(alterationPerGene);

    
    const matchedGenesMap: any = {};
    const bestPathways: any[] = [];
    for(const pathwayName in this.pathwayGeneMap){
        if(this.pathwayGeneMap.hasOwnProperty(pathwayName)){
            const genesMatching = [];
            // Calculate sum of all alterations
            let sumOfAlterations = 0;
            for(const gene of this.props.genes){
                if(this.pathwayGeneMap[pathwayName].hasOwnProperty(gene.hugoGeneSymbol)){
                  genesMatching.push(gene.hugoGeneSymbol);
                  sumOfAlterations += alterationPerGene[gene.hugoGeneSymbol];
                }
            }
            matchedGenesMap[pathwayName] = genesMatching;

            let geneCount = 0;
            // Count number of genes *not processess* in a pathway
            for(const geneType of Object.values(this.pathwayGeneMap[pathwayName])){
              if(geneType === "GENE"){
                geneCount++;
              }
              //console.log(geneType);
            }



            if(rankingMode === 0){
              maxHeap.insert(genesMatching.length, {pathwayName: pathwayName});
            } else if(rankingMode === 1){
              maxHeap.insert(genesMatching.length / geneCount * 100, {pathwayName: pathwayName}); 
            } else if(rankingMode === 2){
              maxHeap.insert(sumOfAlterations, {pathwayName: pathwayName}); 
            } else if(rankingMode === 3){
              maxHeap.insert(genesMatching.length * sumOfAlterations / geneCount, {pathwayName: pathwayName});
            }
        }
    }
    console.log("Best Pathways");
    for(let i = 0; i < this.NUMBER_OF_PATHWAYS_TO_SHOW; i++){
        const top = maxHeap.extractMax();
        const pathwayName = top.getValue().pathwayName;
        bestPathways.push({score: top.getKey(), genesMatched: matchedGenesMap[pathwayName], pathwayName: pathwayName});
    }
    if(this.bestPathwaysAlgos.length === 0) // First pathway of the first method is shown as the default pathway.
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
      // this.overlayPortalData(); 
      this.editor.addPortalGenomicData(this.mutationData, this.editor.getEmptyGroupID());
    } else {
      // this.fetchStudy();
    }
  }

  @autobind
  pathwayHandler(pathway: string){
      this.selectedPathway = pathway;
  }
}