import { configure } from 'mobx';
configure({ isolateGlobalState: true });

import React, { Component } from 'react';
import Toolbar from "./Toolbar";
import CytoscapeArea from "./CytoscapeArea";
import Ranking from "./Ranking";
import EditorActionsManager from "./EditorActionsManager";
import autobind from "autobind-decorator";
import {observable, computed} from "mobx";
import {observer} from "mobx-react";
import FileOperationsManager from './FileOperationsManager';
import {Row, Col, Grid, Label} from "react-bootstrap"; 
import pathways from "./pathways.json";
import Menubar from './Menubar';
import PathwayActions from './PathwayActions';
import CBioPortalAccessor from './CBioPortalAccessor';
import SaveLoadUtility from './SaveLoadUtility';
import "./pmv1.css";
import "./pmv2.css";
import "cytoscape-panzoom/cytoscape.js-panzoom.css";
import "cytoscape-navigator/cytoscape.js-navigator.css";
import 'react-toastify/dist/ReactToastify.css';
import './qtip.css';
import Loader from 'react-loader-spinner';
import Sidebar from './Sidebar';
import StudyModal from './modals/StudyModal';
import Buttonbar from "./ui/Buttonbar";
import ProfilesModal from './modals/ProfilesModal';

import {toast, ToastContainer} from 'react-toastify';
import AboutModal from './modals/AboutModal';
import ReactTooltip from 'react-tooltip';
import PathwayDetailsModal from './modals/PathwayDetailsModal';
import ViewOperationsManager from './ViewOperationsManager';
import GridSettings from './modals/GridSettings';
import GridOptionsManager from './GridOptionsManager';
import QuickHelpModal from './modals/QuickHelpModal';
import LayoutProperties from './modals/LayoutProperties';
import ConfirmationModal from './modals/ConfirmationModal';
const maxHeapFn = require('@datastructures-js/max-heap');
let maxHeap = maxHeapFn();


interface IPathwayMapperProps{
  isCBioPortal: boolean;
  isCollaborative: boolean;
  genes: any[];
  cBioAlterationData?: ICBioData[];
  pathwayName? : string;
  alterationData?: IAlterationData;
  queryParameter?: any;
  oncoPrintTab?: string;
  setTableData?: Function;
  changePathwayHandler?: Function;
  addGenomicDataHandler?: (addGenomicData: (alterationData: ICBioData[]) => void) => void;
  tableComponent?: any;
}

export interface ICBioData{
  altered: number;
  gene: string;
  percentAltered: string​;
  sequenced: number;
}
export enum EModalType{
  STUDY,
  CONFIRMATION,
  PROFILES,
  ABOUT,
  PW_DETAILS,
  GRID,
  HELP,
  LAYOUT
}

export interface IPathwayData{
  title: string;
  description: string;
  nodes: any[];
  edges: any[];
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

export interface IPathwayMapperTable{
  name: string;
  score: string;
  genes: string;
}

@observer
export default class PathwayMapper extends React.Component<IPathwayMapperProps, {}> {
  static readonly CBIO_PROFILE_NAME = "cBioPortal_data";

  readonly NUMBER_OF_PATHWAYS_TO_SHOW = 10;
  
  @observable
  selectedPathway: string;

  fileManager: FileOperationsManager;

  @observable
  editor: EditorActionsManager;

  pathwayActions: PathwayActions;

  @observable
  isModalShown: boolean[];

  portalAcessor: CBioPortalAccessor;

  @observable
  alterationData: IAlterationData;

  pathwayGeneMap: {[key: string]: {[key: string]: string}} = {};
  bestPathwaysAlgos: any[][] = [];

  @observable
  oldName = "";
  
  @observable
  profiles: IProfileMetaData[] = [];

  setActiveEdge: (edgeId: number) => void;
  viewOperationsManager: ViewOperationsManager;
  gridOptionsManager: GridOptionsManager;



  constructor(props: IPathwayMapperProps){
    super(props);
    this.fileManager = new FileOperationsManager();
    this.pathwayActions = new PathwayActions(this.pathwayHandler, this.profiles, this.fileManager, 
                                             this.handleOpen, this.props.isCBioPortal, this.props.isCollaborative);
    this.selectedPathway = "";
    if(this.props.pathwayName){
      this.pathwayActions.changePathway(this.props.pathwayName);
    }
    this.isModalShown = [false, false, false, false, false, false, false];
    // TODO: Change below
    this.alterationData = {}; //{"study1_gistic" : {"CDK4": 11, "MDM2": 19, "TP53": 29}, "study2_gistic" : {"MDM2": 99, "TP53": 98}, "study3_mutations": {"MDM2": 1, "TP53": 2}};
    this.extractAllGenes();
    if(this.props.isCBioPortal){
      //this.overlayPortalData();
      
      // If cBioPortal mode is 'on' it is very likely to have cBioALterationData
      // but to be on the safe side below assertion is made.
      if(this.props.cBioAlterationData){
        this.calculateAlterationData(this.props.cBioAlterationData);
      }

      if(this.props.addGenomicDataHandler){
        this.props.addGenomicDataHandler(this.addGenomicData);
      }


      this.profiles.push({profileId: PathwayMapper.CBIO_PROFILE_NAME, enabled: true});
      this.getBestPathway(0);
      this.getBestPathway(1);
      this.getBestPathway(2);
      this.getBestPathway(3);
      if(this.props.setTableData)
        this.props.setTableData(this.bestPathwaysAlgos, this.pathwayGeneMap);
    }
    /*
    const profile1 = {profileId: "study1_gistic", studyId: "study1", enabled: true};
    const profile2 = {profileId: "study2_gistic", studyId: "study2", enabled: true};
    const profile3 = {profileId: "study3_mutations", studyId: "study3", enabled: true};
    const profile4 = {profileId: "study3_mutations", studyId: "study3", enabled: true};
    const profile5 = {profileId: "study3_mutations", studyId: "study3", enabled: true};
    const profile6 = {profileId: "study3_mutations", studyId: "study3", enabled: true};
    this.profiles.push(profile1, profile2, profile3, profile4, profile5, profile6);
    */
    console.log("Profiles");
    console.log(this.profiles);
  }

  calculateAlterationData(cBioAlterationData: ICBioData[]){
    // Transform cBioDataAlteration into AlterationData
    this.alterationData[PathwayMapper.CBIO_PROFILE_NAME] = {};
    cBioAlterationData.forEach((geneAltData: ICBioData) => {
      this.alterationData[PathwayMapper.CBIO_PROFILE_NAME][geneAltData.gene] = (geneAltData.altered / geneAltData.sequenced) * 100;
    });
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
                if(this.pathwayGeneMap[pathwayName].hasOwnProperty(gene.hugoGeneSymbol) 
                    && this.pathwayGeneMap[pathwayName][gene.hugoGeneSymbol] === "GENE"){
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
    while(maxHeap.size() > 0){
        const top = maxHeap.extractMax();
        const pathwayName = top.getValue().pathwayName;
        bestPathways.push({score: top.getKey(), genesMatched: matchedGenesMap[pathwayName], pathwayName: pathwayName});
    }
    if(this.bestPathwaysAlgos.length === 0) // First pathway of the first method is shown as the default pathway.
    this.selectedPathway = bestPathways[0].pathwayName;
    this.bestPathwaysAlgos.push(bestPathways);
  }
  
  // This method extracts all genes of a pathway and adds it to the pathwayGeneMap
  // so that it can be used by percentage calculation and genomic data 
  // Note: Pathway title
  @autobind
  includePathway(pathwayData?: IPathwayData, pathwayName?: string){
    const genes = pathwayData.nodes;
    const geneHash: any = {};

    for(const gene of genes){

      if(gene.data.type === "GENE")
        geneHash[gene.data.name] = gene.data.type;
    }

    this.pathwayGeneMap[pathwayData.title] = geneHash;

    console.log(this.pathwayGeneMap);
  }

  extractAllGenes(){

      for(const pathwayName in pathways){
          if(pathways.hasOwnProperty(pathwayName)){

              const pathwayData: IPathwayData = SaveLoadUtility.parseGraph(pathways[pathwayName], true);
              this.includePathway(pathwayData);
          }
      }
      console.log("Pathway & Gene Map");
      console.log(this.pathwayGeneMap);
    }


  loadRedirectedPortalData(){
    if(!this.props.alterationData){ // If size 0 that means it is not redirected.
      return;
    }
    
    const redirectedProfiles = Object.keys(this.props.alterationData).map((data: string) : IProfileMetaData => ({profileId: data, enabled: true}));
    redirectedProfiles.forEach((redirectedProfile) => {
      this.profiles.push(redirectedProfile);
    });
    console.log("Here");
    console.log(this.props.alterationData);
    this.editor.addPortalGenomicData(this.props.alterationData, this.editor.getEmptyGroupID());
  }

  @computed get profileEnabledMap(){
    const profileEnabledMap = {};
    this.profiles.forEach((profile: IProfileMetaData) => {profileEnabledMap[profile.profileId] = profile.enabled;});
    console.log(profileEnabledMap);
    return profileEnabledMap;
  }

  doesProfileExist(profileId: string){

    let exists = false;
    this.profiles.forEach((profile: IProfileMetaData) => {
      if(profile.profileId === profileId){
        exists = true;
      }
    });

    return exists;
  }

  @autobind
  loadFromCBio(dataTypes: {[dataType: string]: IDataTypeMetaData}, selectedStudyData: any[]){
      if(!this.pathwayActions.doesCyHaveElements()){
        toast.warn("Your pathway is empty");
        return;
      }

      for (const dataType of Object.keys(dataTypes))
      {
        if(!dataTypes[dataType].checked) continue;
        if(this.doesProfileExist(dataTypes[dataType].profile)){
          toast.warn(dataTypes[dataType].profile + " already exists");
          continue;
        }


        this.profiles.push({studyId: selectedStudyData[0], profileId: dataTypes[dataType].profile, enabled: true});
        console.log("this.pathwayGeneMap");
        console.log(this.pathwayGeneMap);
        this.portalAcessor.getProfileData({
            caseSetId: selectedStudyData[0],
            geneticProfileId: dataTypes[dataType].profile,
            genes: this.editor.cy.json().elements.nodes.filter((node) => (node.data.type === "GENE")).map((node) => (node.data.name))
        },
                                          (data: any) =>{
          this.editor.addPortalGenomicData(data, this.editor.getEmptyGroupID());
        });
      }
  }

  @autobind
  setActiveEdgeHandler(setActiveEdge: (edgeId: number) => void){
    this.setActiveEdge = setActiveEdge;
  }


  @autobind
  addGenomicData(cBioAlterationData: ICBioData[]){
    this.calculateAlterationData(cBioAlterationData);
    this.editor.removeGenomicData();
    this.editor.addPortalGenomicData(this.alterationData, this.editor.getEmptyGroupID());
  }

  render() {
  const isCBioPortal = this.props.isCBioPortal;     

  return (

      <Grid style={{width: window.innerWidth * 0.99}} className={isCBioPortal ? "cBioMode" : ""}>
          {!isCBioPortal && 
          [<Row>
              <Menubar pathwayActions={this.pathwayActions} handleOpen={this.handleOpen} setActiveEdge={this.setActiveEdge}/>
          </Row>
          ,
          <Row>
            <Buttonbar pathwayActions={this.pathwayActions} handleOpen={this.handleOpen}/> 
          </Row>]
          }
          { isCBioPortal &&
          <Row>
            <Col xs={2} style={{}}>
              <Toolbar pathwayActions={this.pathwayActions} selectedPathway={this.selectedPathway} alterationData={this.alterationData}
                genes={this.props.genes} handleOpen={this.handleOpen} queryParameter={this.props.queryParameter} oncoPrintTab={this.props.oncoPrintTab}/>
            </Col>
            <Col xs={7} style={{paddingLeft: "0px", marginTop: "15px", textAlign: "right", paddingRight: "35px"}}>
              <div>{this.selectedPathway}</div>
            </Col>
          </Row>
          }
          
          <Row>
            {
            (!isCBioPortal && 
            <Col xs={1} style={{paddingLeft: "0px"}}>
              <Sidebar pathwayActions={this.pathwayActions} setActiveEdgeHandler={this.setActiveEdgeHandler} handleOpen={this.handleOpen}/>
            </Col>)
            }
            <Col xs={isCBioPortal ? 9 : 11} style={{paddingLeft: "0px"}}>
                <CytoscapeArea profiles={this.profiles} isCbioPortal={this.props.isCBioPortal} isCollaborative={this.props.isCollaborative}
                setActiveEdge={this.setActiveEdge} editorHandler={this.editorHandler} 
                selectedPathway={this.selectedPathway} pathwayHandler={this.pathwayHandler} 
                handleOpen={this.handleOpen}/>
            </Col>
            {
            (isCBioPortal && this.props.tableComponent && 
            <Col xs={3} style={{paddingLeft: "0px"}}>
              <Ranking pathwayActions={this.pathwayActions} bestPathwaysAlgos={this.bestPathwaysAlgos} tableComponent={this.props.tableComponent}/>
            </Col>)
            }
          </Row>

          { isCBioPortal &&
          <Row>
            <Col xs={9} style={{paddingLeft: "0px", textAlign: "right"}}>Powered by <a href="https://github.com/iVis-at-Bilkent/pathway-mapper" target="_blank">PathwayMapper</a></Col>
          </Row>
          }
            { (<div id="invisibles">

          {
          (!this.props.isCBioPortal && <div id="pm-modals">
            <StudyModal isModalShown={this.isModalShown[EModalType.STUDY]} loadFromCBio={this.loadFromCBio} handleClose={this.handleClose}/>
            <ProfilesModal profiles={this.profiles} editor={this.editor} isModalShown={this.isModalShown[EModalType.PROFILES]} handleClose={this.handleClose} />
            <PathwayDetailsModal isModalShown={this.isModalShown[EModalType.PW_DETAILS]} handleClose={this.handleClose} pathwayActions={this.pathwayActions}/>
            <GridSettings isModalShown={this.isModalShown[EModalType.GRID]} handleClose={this.handleClose} pathwayActions={this.pathwayActions}/>
            <QuickHelpModal isModalShown={this.isModalShown[EModalType.HELP]} handleClose={this.handleClose}/>
            <LayoutProperties isModalShown={this.isModalShown[EModalType.LAYOUT]} handleClose={this.handleClose} pathwayActions={this.pathwayActions}/>
            <ConfirmationModal isModalShown={this.isModalShown[EModalType.CONFIRMATION]} handleClose={this.handleClose} />
            <AboutModal isModalShown={this.isModalShown[EModalType.ABOUT]} handleClose={this.handleClose}/>
          </div>)
          }
          <ToastContainer className={"pm-toast-container"}/>
          <ReactTooltip className={isCBioPortal ? "" : "pmTip"} style={{maxWidth: "350px", zIndex: 9999999}}/>

          <input id="myInput"
            type="file"
            ref={(ref) => {this.pathwayActions.setUploaders(ref, false);}}
            style={{display: 'none'}}
            onChange={(e) => {this.pathwayActions.onChangeFile(e, false);}}
          />
          <input id="myInput2"
            type="file"
            ref={(ref) => {this.pathwayActions.setUploaders(ref, true);}}
            style={{display: 'none'}}
            onChange={(e) => {this.pathwayActions.onChangeFile(e, true);}}
          />
          <input id="myInput3"
            type="file"
            ref={(ref) => {this.pathwayActions.setOverlayUploader(ref);}}
            style={{display: 'none'}}
            onChange={(e) => {this.pathwayActions.overlayFromText(e.target.files[0]);}}
          />
          </div>)
            }
      </Grid>
  );
  }

  componentDidMount(){
    if(!this.props.isCBioPortal)
    $(".container").css('width', innerWidth * 0.9);

    this.pathwayActions.emphasiseQueryGenes(this.props.genes.map((gene: any) => gene.hugoGeneSymbol));
  }

  componentDidUpdate(){
    this.pathwayActions.emphasiseQueryGenes(this.props.genes.map((gene: any) => gene.hugoGeneSymbol));
  }

  @autobind
  handleOpen(modalId: EModalType){
    this.isModalShown[modalId] = true;
  }


  @autobind
  handleClose(modalId: EModalType){
      this.isModalShown[modalId] = false;
  }

  @autobind
  editorHandler(editor, eh, undoRedoManager){
    this.editor = editor;

    this.gridOptionsManager = new GridOptionsManager(this.editor.cy);
    this.viewOperationsManager = new ViewOperationsManager(this.editor, this.editor.cy);
    this.pathwayActions.editorHandler(editor, eh, undoRedoManager, this.viewOperationsManager, this.gridOptionsManager);
    
    if(this.props.isCBioPortal){
      this.editor.addPortalGenomicData(this.alterationData, this.editor.getEmptyGroupID());
    } else {
      this.portalAcessor = new CBioPortalAccessor();
      this.loadRedirectedPortalData();
    }

  }



  @autobind
  pathwayHandler(pathway: string){
      this.selectedPathway = pathway;
      if(this.pathwayActions[pathway] && this.props.changePathwayHandler)
        this.props.changePathwayHandler(Object.keys(this.pathwayGeneMap[pathway]));
  }

  
}