// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
import React from 'react';
import Toolbar from "./Toolbar";
import CytoscapeArea from "./CytoscapeArea";
import Ranking from "./Ranking";
import EditorActionsManager from "./EditorActionsManager";
import autobind from "autobind-decorator";
import {observable, computed} from "mobx";
import {observer} from "mobx-react";
import FileOperationsManager from './FileOperationsManager';
import * as Bootstrap from "react-bootstrap"; 
import {Navbar, Nav, NavDropdown, MenuItem, NavItem, Button, Label} from 'react-bootstrap';
import pathways from "./pathways.json";
import Menubar from './Menubar';
import {Modal, DropdownButton, Checkbox, Panel} from 'react-bootstrap';
import PathwayActions from './PathwayActions';
import CBioPortalAccessor from './CBioPortalAccessor';
import SaveLoadUtility from './SaveLoadUtility';
import "./base.css";
import "cytoscape-panzoom/cytoscape.js-panzoom.css";
import "cytoscape-navigator/cytoscape.js-navigator.css";
import Loader from 'react-loader-spinner';
import Sidebar from './Sidebar';
import StudyModal from './modals/StudyModal';
import ChangeNameModal from './modals/ChangeNameModal';

const maxHeapFn = require('@datastructures-js/max-heap');
let maxHeap = maxHeapFn();


interface IPathwayMapperProps{
  isCBioPortal: boolean;
  genes: any[];
  store: any;
  pathwayName? : string;
  alterationData?: IAlterationData;
}


export interface IAlterationData{
  [key: string]: {[key: string]: number};
}

export interface IProfileMetaData{
  profileId: string;
  studyId?: string;
  enabled: boolean;
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

  fileManager: FileOperationsManager;
  editor: EditorActionsManager;
  pathwayActions: PathwayActions;

  @observable
  isModalShown: boolean[];

  @observable
  itemArray: any[];
  portalAcessor: CBioPortalAccessor;

  @observable
  alterationData: IAlterationData;

  pathwayGeneMap: {[key: string]: {[key: string]: string}} = {};
  bestPathwaysAlgos: any[][] = [];

  @observable
  oldName = "";
  
  @observable
  profiles: IProfileMetaData[] = [];


  constructor(props: IPathwayMapperProps){
    super(props);
    this.selectedPathway = this.props.pathwayName || "ACC-2016-TP53-RB-pathway";
    this.pathwayActions = new PathwayActions(this.pathwayHandler);
    this.isModalShown = [false, false];
    // TODO: Change below
    this.alterationData = {}; //{"study1_gistic" : {"CDK4": 11, "MDM2": 19, "TP53": 29}, "study2_gistic" : {"MDM2": 99, "TP53": 98}, "study3_mutations": {"MDM2": 1, "TP53": 2}};
    this.extractAllGenes();
    if(this.props.isCBioPortal){
      this.overlayPortalData();
      this.getBestPathway(0);
      this.getBestPathway(1);
      this.getBestPathway(2);
      this.getBestPathway(3);
    }
    /*
    const profile1 = {profileId: "study1_gistic", studyId: "study1", enabled: true};
    const profile2 = {profileId: "study2_gistic", studyId: "study2", enabled: true};
    const profile3 = {profileId: "study3_mutations", studyId: "study3", enabled: true};
    this.profiles.push(profile1, profile2, profile3);*/
    
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
                this.profiles.push({profileId: mutation.molecularProfileId, studyId: mutation.studyId, enabled: true});
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

    console.log("Genomic data0");
    console.log(this.alterationData);
    const profileCounts = this.props.store.molecularProfileIdToProfiledSampleCount.result;

    for(const genomicData of this.props.store.molecularData.result){
      const dataType = CBioPortalAccessor.getDataType(genomicData.molecularProfileId);
      if(dataType === "") continue;

      if(this.alterationData[genomicData.molecularProfileId] === undefined){
          this.alterationData[genomicData.molecularProfileId] = {};
          this.profiles.push({profileId: genomicData.molecularProfileId, studyId: genomicData.studyId, enabled: true});
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


  loadRedirectedPortalData(){
    if(!this.props.alterationData){ // If size 0 that means it is not redirected.
      return;
    }
    const redirectedProfiles = Object.keys(this.props.alterationData).map((data: string) : IProfileMetaData => {return {profileId: data, enabled: true}});
    redirectedProfiles.forEach((redirectedProfile) => {
      this.profiles.push(redirectedProfile);
    });
    console.log("Here");
    console.log(this.props.alterationData);
    this.editor.addPortalGenomicData(this.props.alterationData, this.editor.getEmptyGroupID());
  }

  @computed get profileEnabledMap(){
    const profileEnabledMap = {};
    this.profiles.forEach((profile: IProfileMetaData) => {profileEnabledMap[profile.profileId] = profile.enabled});
    console.log(profileEnabledMap);
    return profileEnabledMap;
  }

  @autobind
  loadFromCBio(dataTypes: {[dataType: string]: IDataTypeMetaData}, selectedStudyData: any[]){
      for (const dataType of Object.keys(dataTypes))
      {
          if(!dataTypes[dataType].checked) continue;


          this.profiles.push({studyId: selectedStudyData[0], profileId: dataTypes[dataType].profile, enabled: true});

          this.portalAcessor.getProfileData({
              caseSetId: selectedStudyData[0],
              geneticProfileId: dataTypes[dataType].profile,
              genes: Object.keys(this.pathwayGeneMap[this.selectedPathway])
          },
          (data: any) =>{ console.log(data); this.editor.addPortalGenomicData(data, this.editor.getEmptyGroupID()); });
      }
  }
  render() {
  const isCBioPortal = this.props.isCBioPortal; 
  const profileLabels = this.profiles.map((profile: IProfileMetaData, i: number) => 
  [<Label onClick={() => {
    this.profiles[i].enabled = !this.profiles[i].enabled;
    this.editor.updateGenomicDataVisibility(this.profileEnabledMap);
    }}
    onMouseEnter={() => {document.body.style.cursor = "pointer";}}
    onMouseLeave={() => {document.body.style.cursor = "default";}}
    bsStyle={this.profiles[i].enabled ? "primary" : "default"}>{profile.profileId}</Label>, " "]);

  return (


      <div>
          <br/>
          <Bootstrap.Row>
            { !isCBioPortal && (<Menubar pathwayActions={this.pathwayActions} openCBioModal={this.handleOpen}/>)}
          </Bootstrap.Row>

          <Bootstrap.Row>
            {
            ( isCBioPortal &&
            <Bootstrap.Col xs={2}>
                <Toolbar pathwayActions={this.pathwayActions} selectedPathway={this.selectedPathway} alterationData={this.alterationData}/>
            </Bootstrap.Col>)
            }
            {
            (!isCBioPortal && 
            <Bootstrap.Col xs={2}>
              <Sidebar pathwayActions={this.pathwayActions}/>
            </Bootstrap.Col>)
          

            }
            <Bootstrap.Col xs={isCBioPortal ? 7 : 10}>
                <CytoscapeArea isCbioPortal={this.props.isCBioPortal} isCollaborative={false} 
                openChangeNameModal={this.openChangeNameModal} editorHandler={this.editorHandler} selectedPathway={this.selectedPathway}/>
            </Bootstrap.Col>

            { 
            ( !isCBioPortal &&
            <Bootstrap.Row>
              {profileLabels}
            </Bootstrap.Row>)
            }

            { isCBioPortal &&
            <Bootstrap.Col xs={4}>
                <Bootstrap.Row>
                {profileLabels}
                </Bootstrap.Row>
                <br/>
                <Bootstrap.Row>
                  <Ranking pathwayActions={this.pathwayActions} bestPathwaysAlgos={this.bestPathwaysAlgos}/>
                </Bootstrap.Row>
            </Bootstrap.Col>
            }
          </Bootstrap.Row>

          <StudyModal isModalShown={this.isModalShown[0]} loadFromCBio={this.loadFromCBio} handleClose={this.handleClose}/>
          <ChangeNameModal pathwayActions={this.pathwayActions} isModalShown={this.isModalShown[1]} handleClose={this.handleClose} oldName={this.oldName}/>
      </div>
  );
  }

  @autobind
  openChangeNameModal(oldName: string){
    this.isModalShown[1] = true;
    this.oldName = oldName;
  }

  @autobind
  handleOpen(){
    this.isModalShown[0] = true;
  }


  @autobind
  handleClose(modalId: number){
      this.isModalShown[modalId] = false;
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
      this.loadRedirectedPortalData();

    }
  }

  @autobind
  pathwayHandler(pathway: string){
      this.selectedPathway = pathway;
  }

  
}