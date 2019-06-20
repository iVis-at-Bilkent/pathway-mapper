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
import {Navbar, Nav, NavDropdown, MenuItem, NavItem, Button, Label} from 'react-bootstrap';
import pathways from "./pathways.json";
import Menubar from './Menubar';
import {Modal, DropdownButton, Checkbox} from 'react-bootstrap';
import PathwayActions from './PathwayActions';
import CBioPortalAccessor from './CBioPortalAccessor';
import SaveLoadUtility from './SaveLoadUtility';
import "./base.css";
import "cytoscape-panzoom/cytoscape.js-panzoom.css";
import "cytoscape-navigator/cytoscape.js-navigator.css";
import Loader from 'react-loader-spinner';

const maxHeapFn = require('@datastructures-js/max-heap');
let maxHeap: any;

interface IPathwayMapperProps{
  isCBioPortal: boolean;
  genes: any[];
  store: any;
  pathwayName? : string;
  profiles?: IProfileMetaData[];
}
export interface IProfileMetaData{
  profileId: string;
  studyId: string;
}

export interface IDataTypeMetaData{
  enabled: boolean;
  checked: boolean;
  profile: string;
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
  dataTypes: {[dataType: string]: IDataTypeMetaData} = {};
  @observable
  itemArray: any[];
  cancerStudies: any[];
  portalAcessor: CBioPortalAccessor;

  alterationData: {[key: string]: {[key: string]: number}} = {};//{"study1_gistic" : {"MDM2": 99, "TP53": 98}, "study2_mutations": {"MDM2": 1, "TP53": 2}};

  pathwayGeneMap: {[key: string]: {[key: string]: string}} = {};
  bestPathwaysAlgos: any[][] = [];

  @observable
  studyQuery = "";
  
  @observable
  profiles: IProfileMetaData[] = [];


  constructor(props: IPathwayMapperProps){
    super(props);
    this.selectedPathway = this.props.pathwayName || "Creighton-PI3K-pathway";
    this.pathwayActions = new PathwayActions(this.pathwayHandler);
    this.isModalShown = false;
    this.selectedStudyData = [];
    this.extractAllGenes();
    if(this.props.isCBioPortal){
      this.overlayPortalData();
      // this.mutationData = {"study1" : {"MDM2": 10, "TP53": 20}, "study2" : {"TP53": 10}};
      this.getBestPathway(0);
      this.getBestPathway(1);
      this.getBestPathway(2);
      this.getBestPathway(3);
    }
    /*
    const profile1 = {profileId: "study1_gistic", studyId: "study1"};
    const profile2 = {profileId: "study2_gistic", studyId: "study2"};
    this.profiles.push(profile1, profile2);
    */
    console.log("Profiles");
    console.log(this.profiles);
  }



  getGeneStudyMap(studyGeneMap: any){
    
    const genomicDataMap: any = {};
    for (const cancerStudy of Object.keys(studyGeneMap)) {

      const cancerData = studyGeneMap[cancerStudy];

      for (const geneSymbol of Object.keys(cancerData)) {
        if (genomicDataMap[geneSymbol] === undefined) genomicDataMap[geneSymbol] = {};

        genomicDataMap[geneSymbol][cancerStudy] = studyGeneMap[cancerStudy][geneSymbol].toFixed(2);
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
      if(count === 0){
        geneAlterationMap[gene] = 0;
      } else {
        geneAlterationMap[gene] = sum / count;
      }
    }

    return geneAlterationMap;
  }

  handleMutations(){

    const mutations = this.props.store.mutations.result;
    if(mutations !== undefined){
        mutations.forEach((mutation) => {
            if(this.alterationData[mutation.molecularProfileId] === undefined){
                this.alterationData[mutation.molecularProfileId] = {};
                this.profiles.push({profileId: mutation.molecularProfileId, studyId: mutation.studyId});
            }
            const mutationAmount = this.alterationData[mutation.molecularProfileId][mutation.gene.hugoGeneSymbol];
            if( mutationAmount === undefined){
                this.alterationData[mutation.molecularProfileId][mutation.gene.hugoGeneSymbol] = 0;
            } 
            this.alterationData[mutation.molecularProfileId][mutation.gene.hugoGeneSymbol]++;
        });
    } else {
        console.log("Mutation undefined!");
    }

    console.log(this.alterationData);
  }
  overlayPortalData(){
    if(this.props.store === undefined || this.props.store.molecularData.result === undefined){
      return;
    }
    this.handleMutations();

    console.log("Alteration data0");
    console.log(this.alterationData);
    const profileCounts = this.props.store.molecularProfileIdToProfiledSampleCount.result;

    for(const genomicData of this.props.store.molecularData.result){
      const dataType = CBioPortalAccessor.getDataType(genomicData.molecularProfileId);
      if(dataType === "") continue;

      if(this.alterationData[genomicData.molecularProfileId] === undefined){
          this.alterationData[genomicData.molecularProfileId] = {};
          this.profiles.push({profileId: genomicData.molecularProfileId, studyId: genomicData.studyId});
      }
      const mutationAmount = this.alterationData[genomicData.molecularProfileId][genomicData.gene.hugoGeneSymbol];
      if( mutationAmount === undefined){
          this.alterationData[genomicData.molecularProfileId][genomicData.gene.hugoGeneSymbol] = 0;
          console.log("Inside mutationAmount");
      } 

      // ATTENTION: May cause unexpected behaviour
      if(genomicData.value === 0) continue;

      // Mutation already handled
      if ( (dataType === CBioPortalAccessor.CNA) 
        && ( genomicData.value === CBioPortalAccessor.CNA_GAIN 
        || genomicData.value === CBioPortalAccessor.CNA_DELETION )  )
          this.alterationData[genomicData.molecularProfileId][genomicData.gene.hugoGeneSymbol]++;
      else if ((dataType === CBioPortalAccessor.GENE_EXPRESSION) 
        && genomicData.value >= CBioPortalAccessor.Z_SCORE_UPPER_THRESHOLD 
        || genomicData.value <= CBioPortalAccessor.Z_SCORE_LOWER_THRESHOLD)
          this.alterationData[genomicData.molecularProfileId][genomicData.gene.hugoGeneSymbol]++;
      
    }
    console.log("Alteration data1");
    console.log(this.alterationData);
    for(const profileName of Object.keys(this.alterationData)){
      for(const gene of Object.keys(this.alterationData[profileName])){
          if(profileCounts !== undefined){
            
            this.alterationData[profileName][gene] /= profileCounts[profileName] / 100;
          }
      }
    } 
    console.log("Alteration data2");
    console.log(this.alterationData);

    console.log("Profiles");
    console.log(this.profiles);
  }


  /**
   * 
   * @param rankingMode: number => 0 = Count, 1 = Percentage, 2 = Count with Alteration, 3 = Percentage with Alteration
   * 
   */
  getBestPathway(rankingMode: number) {
    
    const genomicDataMap = this.getGeneStudyMap(this.alterationData);
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


    this.portalAcessor.getDataTypes().forEach((dataType) => {
      this.dataTypes[dataType] = {enabled: false, checked: false, profile: undefined};
    });
  
    this.portalAcessor.fetchCancerStudies((cancerStudies: any) => {
      this.cancerStudies = cancerStudies;
      for(const study in cancerStudies){

        if(!cancerStudies.hasOwnProperty(study)){
          continue;
        }
        const item = <MenuItem key={study} onClick={() => {this.selectedStudyData = cancerStudies[study]; this.preparePortalAccess(cancerStudies[study][0]);}}>
        {cancerStudies[study][0]}
        </MenuItem>;
  
        this.itemArray.push(item);
      }
    });
    console.log(this.itemArray);
  }

  disableAllDataTypes(){
    for(const dataType of Object.keys(this.dataTypes)){
      this.dataTypes[dataType].enabled = false;
      this.dataTypes[dataType].checked = false;
      this.dataTypes[dataType].profile = undefined;
    }
  }

  loadRedirectedPortalData(profiles: IProfileMetaData[]){
    if(!profiles){ // If undefined that means it is not redirected.
      return;
    }

    profiles.forEach((profile) => {
      this.portalAcessor.getProfileData({
        caseSetId: profile.studyId,
        geneticProfileId: profile.profileId,
        genes: Object.values(this.props.genes).map((gene) => gene.hugoGeneSymbol)
      },
                                        (data: any) =>{ 
        
        console.log("From loadRedirectedPortalData"); 
        console.log(profile);
        console.log(this.props.genes);
        console.log(data); 
        this.profiles.push(profile);
        this.editor.addPortalGenomicData(data, this.editor.getEmptyGroupID()); 
      });
    });
  }

  preparePortalAccess(studyId: string){
    this.portalAcessor.getSupportedGeneticProfiles(studyId, (data) => {
      this.disableAllDataTypes();
      // Iterate through profiles
      for(const profile of Object.keys(data)){
        const type = CBioPortalAccessor.getDataType(profile);
        if(type !== ""){
          this.dataTypes[type].enabled = true;
          this.dataTypes[type].profile = profile;
        }
      }
    });
  }

  @autobind
  handleCheckboxClick(dataType){
    this.dataTypes[dataType].checked = !this.dataTypes[dataType].checked;
    console.log(this.dataTypes[dataType].checked);
  }

  

  @autobind
  loadFromCBio(){
    for (const dataType of Object.keys(this.dataTypes))
    {
        if(!this.dataTypes[dataType].checked) continue;

        console.log("Inside load cBio:", this.dataTypes[dataType].checked);
        console.log(this.selectedStudyData);

        this.profiles.push({studyId: this.selectedStudyData[0], profileId: this.dataTypes[dataType].profile});

        this.portalAcessor.getProfileData({
            caseSetId: this.selectedStudyData[0],
            geneticProfileId: this.dataTypes[dataType].profile,
            genes: Object.keys(this.pathwayGeneMap[this.selectedPathway])
        },
        (data: any) =>{ console.log(data); this.editor.addPortalGenomicData(data, this.editor.getEmptyGroupID()); });
    }
  }

  render() {
  const isCBioPortal = this.props.isCBioPortal; 
  
  return (
      <div>
          <Loader 
            type="Puff"
            color="#00BFFF"
            height="100"	
            width="100"
          />  
          <br/>
          <Bootstrap.Row>
            { !isCBioPortal && (<Menubar pathwayActions={this.pathwayActions} openCBioModal={this.handleOpen}/>)}
          </Bootstrap.Row>

          <Bootstrap.Row>
              {
              ( isCBioPortal &&
              <Bootstrap.Col xs={1}>
                  <Toolbar pathwayActions={this.pathwayActions} selectedPathway={this.selectedPathway} profiles={this.profiles} genes={this.props.genes}/>
              </Bootstrap.Col>)
              }

            <Bootstrap.Col xs={isCBioPortal ? 7 : 12}>
                <CytoscapeArea isCbioPortal={this.props.isCBioPortal} isCollaborative={false} editorHandler={this.editorHandler} selectedPathway={this.selectedPathway}/>
            </Bootstrap.Col>

            { 
            ( !isCBioPortal &&
            <Bootstrap.Row>
              {this.profiles.map((profile: IProfileMetaData) => [<Label bsStyle="primary">{profile.profileId}</Label>, " "])}
            </Bootstrap.Row>)
            }

            { isCBioPortal &&
            <Bootstrap.Col xs={4}>
                <Bootstrap.Row>
                {this.profiles.map((profile: IProfileMetaData) => [<Label bsStyle="primary">{profile.profileId}</Label>, " "])}
                </Bootstrap.Row>
                <br/>
                <Bootstrap.Row>
                  <Ranking pathwayActions={this.pathwayActions} bestPathwaysAlgos={this.bestPathwaysAlgos}/>
                </Bootstrap.Row>
            </Bootstrap.Col>
            }
          </Bootstrap.Row>

          <Modal show={this.isModalShown} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Load from cBioPortal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              

            <DropdownButton id="dropdown-study" title={this.selectedStudyData[1] || "Choose study"}>
              {this.itemArray}
            </DropdownButton>
            
            { Object.keys(this.dataTypes).map((dataType: string) => {
                return <Checkbox key={dataType} disabled={!this.dataTypes[dataType].enabled} 
                          onClick={() => {this.handleCheckboxClick(dataType);}} checked={this.dataTypes[dataType].checked}> 
                          {dataType}
                        </Checkbox>;
              })
            }

            <Button bsClass="success" onClick={this.loadFromCBio}>Load</Button>

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
    if(this.props.isCBioPortal){
      this.editor.addPortalGenomicData(this.alterationData, this.editor.getEmptyGroupID());
    } else {
      this.portalAcessor = new CBioPortalAccessor(this.editor);
      this.loadRedirectedPortalData(this.props.profiles);
      this.fetchStudy();
    }
  }

  @autobind
  pathwayHandler(pathway: string){
      this.selectedPathway = pathway;
  }

  
}