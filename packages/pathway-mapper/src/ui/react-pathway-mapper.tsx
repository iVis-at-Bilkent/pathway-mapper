import autobind from "autobind-decorator";
import { action, computed, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import { getPlainObjectKeys } from "mobx/dist/internal";
import { IGeneticAlterationRuleSetParams } from 'oncoprintjs';
import React from 'react';
import { Col, Row } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ReactTooltip from 'react-tooltip';
import "../css/pmv1.css";
import "../css/pmv2.css";
import '../css/qtip.css';
import "../css/supp.css";
import pathways from "../data/pathways.json";
import EditorActionsManager from "../managers/EditorActionsManager";
import FileOperationsManager from '../managers/FileOperationsManager';
import GridOptionsManager from '../managers/GridOptionsManager';
import ViewOperationsManager from '../managers/ViewOperationsManager';
import AboutModal from '../modals/AboutModal';
import CBioHelpModal from '../modals/CBioHelpModal';
import ConfirmationModal from '../modals/ConfirmationModal';
import GridSettings from '../modals/GridSettings';
import LayoutProperties from '../modals/LayoutProperties';
import PathwayDetailsModal from '../modals/PathwayDetailsModal';
import ProfilesColorSchemeModal from "../modals/ProfilesColorSchemeModal";
import ProfilesModal from '../modals/ProfilesModal';
import QuickHelpModal from '../modals/QuickHelpModal';
import StudyModal from '../modals/StudyModal';
import Ranking from "../ui/Ranking";
import Toolbar from "../ui/Toolbar";
import CBioPortalAccessor from '../utils/CBioPortalAccessor';
import PathwayActions from '../utils/PathwayActions';
import SaveLoadUtility from '../utils/SaveLoadUtility';
import Buttonbar from "./Buttonbar";
import CytoscapeArea from "./CytoscapeArea";
import Menubar from './Menubar';
import Sidebar from './Sidebar';

const maxHeapFn = require('@datastructures-js/max-heap');
let maxHeap = maxHeapFn();

interface IPathwayMapperProps{
  isCBioPortal: boolean;
  genes: any[];
  isCollaborative?: boolean;
  cBioAlterationData?: ICBioData[];
  sampleIconData?: ISampleIconData,
  pathwayName? : string;
  alterationData?: IAlterationData;
  onAddGenes?: (selectedGenes: string[]) => void;
  changePathwayHandler?: (pathwayGenes: string[]) => void;
  addGenomicDataHandler?: (addGenomicData: (alterationData: ICBioData[]) => void) => void;
  tableComponent?: (data: IPathwayMapperTable[], selectedPathway: string, onPathwaySelect: (pathway: string) => void) => JSX.Element;
  validGenes?: any;
  toast: any;
  showMessage: (message: string) => void;
  //PatientView variable
  patientView ?: boolean;
  groupComparisonView ?: boolean;
  activeGroups ?: any[];
  messageBanner? : () => JSX.Element;
}

export interface ICBioData{
  altered: number;
  gene: string;
  percentAltered: string​;
  sequenced: number;
  geneticTrackData?: any[]; // TODO GeneticTrackDatum[]: this is currently a private type within cbioportal repo
  geneticTrackRuleSetParams?: IGeneticAlterationRuleSetParams;
  groupsSet?: { [id: string]: CountSummary & { alteredPercentage: number } };
}

interface CountSummary  {
  'alteredCount': number;
  'name': string;
  'profiledCount': number;
};

export interface ISampleIconData {
  sampleIndex: { [s: string]: number },
  sampleColors: { [s: string]: string }
}

/**
 * Maps integer values to color code strings
 */
export interface IColorValueMap {
  [value: string]: string
}

export enum EModalType{
  STUDY,
  CONFIRMATION,
  PROFILES,
  ABOUT,
  PW_DETAILS,
  GRID,
  HELP,
  LAYOUT,
  CHELP,
  PROFILES_COLOR_SCHEME
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

export interface groupComparisonData{
   [key:string]: {[key:string]: number };
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
  score: number;
  genes: string[];
}

@observer
export class PathwayMapper extends React.Component<IPathwayMapperProps, {}> {
  static readonly CBIO_PROFILE_NAME = "cBioPortal_data";


  readonly MAX_ALLOWED_PROFILES_ENABLED = 6;
  
  @observable
  selectedPathway: string;

  fileManager: FileOperationsManager;

  @observable
  editor: EditorActionsManager;

  pathwayActions: PathwayActions;

  @observable
  isModalShown: boolean[];

  @observable
  colorValueMap: IColorValueMap;

  portalAccessor: CBioPortalAccessor;

  @observable
  alterationData: IAlterationData;

  @observable
  patientData: any [][] = [];

  @observable
  groupComparisonData: groupComparisonData ={} ;

  @observable
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
    makeObservable(this);
    
    this.fileManager = new FileOperationsManager();
    this.pathwayActions = new PathwayActions(this.pathwayHandler, this.profiles, this.fileManager, 
                                             this.handleOpen, this.props.isCBioPortal, this.props.isCollaborative);
    this.selectedPathway = "";
    if(this.props.pathwayName){
      this.pathwayActions.changePathway(this.props.pathwayName);
    }
    this.isModalShown = [false, false, false, false, false, false, false, false, false, false];
    // TODO: Change below
    this.alterationData = {}; //{"study1_gistic" : {"CDK4": 11, "MDM2": 19, "TP53": 29}, "study2_gistic" : {"MDM2": 99, "TP53": 98}, "study3_mutations": {"MDM2": 1, "TP53": 2}};
    this.extractAllGenes();

    this.colorValueMap = {
      '-100' : "#0000ff",
      '0'    : "#ffffff",
      '100'  : "#ff0000"
    }

    if(this.props.isCBioPortal){
      //this.overlayPortalData();
      
      // If cBioPortal mode is 'on' it is very likely to have cBioALterationData
      // but to be on the safe side below assertion is made.
      if(this.props.cBioAlterationData ){
        if( this.props.patientView === true){
          //PatientView PathwayMapper has a different functionality
          //Alteration types are overlayed instead of alterationpercentage
          this.calculatePatientData(this.props.cBioAlterationData);
          this.addSampleIconData(this.props.sampleIconData);
        }
        else if( this.props.groupComparisonView === true){
          this.calculateGroupComparisonData();
        }
        else{
          this.calculateAlterationData(this.props.cBioAlterationData);

        }
      }

      if(this.props.addGenomicDataHandler){
        this.props.addGenomicDataHandler(this.addGenomicData);
      }

      this.profiles.push({profileId: PathwayMapper.CBIO_PROFILE_NAME, enabled: true});
      this.getBestPathway(0);
      this.getBestPathway(1);
      this.getBestPathway(2);
      this.getBestPathway(3);
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

  }

  @action.bound
  setColorMapping(colorValueMap: IColorValueMap) {
    this.colorValueMap = colorValueMap;
    this.editor.updateGenomicDataColorScheme(this.colorValueMap);
  }

  @action
  setSelectedPathway(pathway: string) {
    this.selectedPathway = pathway;
  }

  @action
  setEditor(editor: EditorActionsManager) {
    this.editor = editor;
  }

  @action
  addProfile(profile: IProfileMetaData) {
    this.profiles.push(profile);
  }

  @action
  toggleProfileEnabled(index: number) {
    this.profiles[index].enabled = !this.profiles[index].enabled;
  }

  calculateAlterationData(cBioAlterationData: ICBioData[]){
    // Transform cBioDataAlteration into AlterationData
      this.alterationData[PathwayMapper.CBIO_PROFILE_NAME] = {};
      cBioAlterationData.forEach((geneAltData: ICBioData) => {
      const perc = (geneAltData.altered / geneAltData.sequenced) * 100;
      
      // NaN value is replaced with -101 since NaN value leads to some runtime exceptions (such as with toFixed() function),
      // hence it is represented as -101. It will be recognized in the genomic data svg creation to show N/P instead of
      // a percentage. -101 is chosen because this percentage is impossible to get.
      this.alterationData[PathwayMapper.CBIO_PROFILE_NAME][geneAltData.gene] = ((Object.is(perc, NaN) ? -101 : perc));
     

    });
  }
  
  calculateGroupComparisonData(){
    this.alterationData[PathwayMapper.CBIO_PROFILE_NAME] = {};
    
   /* const allTypes = cBioAlterationData.map(x => x.gene); 
    //const allTypes = cBioAlterationData.map(x => x.percentAltered);
    const uniqueTypes = allTypes.filter((x, i, a) => a.indexOf(x) == i)
    //This is a flag for GenomicDataOverlayManager showPatientData*/
    //this.groupComparisonData["groupComparisonView"] =  ;

   /* uniqueTypes.forEach(x => {
      this.patientData[x]= {};
    });

    cBioAlterationData.forEach((geneAltData: ICBioData) => {
      const perc = (geneAltData.altered / geneAltData.sequenced) * 100;

      this.alterationData[PathwayMapper.CBIO_PROFILE_NAME][geneAltData.gene] = ((Object.is(perc, NaN) ? -101 : perc));

      this.patientData[geneAltData.gene][geneAltData.percentAltered] = ((Object.is(perc, NaN) ? -101 : perc));
      this.patientData[geneAltData.gene]["geneticTrackData"] = geneAltData.geneticTrackData;
      this.patientData[geneAltData.gene]["geneticTrackRuleSetParams"] = geneAltData.geneticTrackRuleSetParams;
    });*/
    let i : number = 0;
    let j : number = 0;                                                         //groupsSet[this.store.activeGroups?.result[0].nameWithOrdinal
    for( i = 0; i < this.props.genes.length; i++){
      this.groupComparisonData[this.props.genes[i].hugoGeneSymbol] = {};
         for( j = 0; j < this.props.activeGroups.length; j++){
         this.groupComparisonData[this.props.genes[i].hugoGeneSymbol][
          this.props.activeGroups[j].nameWithOrdinal] = this.props.genes[i].groupsSet[
            this.props.activeGroups[j].nameWithOrdinal].alteredPercentage;
          }
    }
  }

  calculatePatientData(cBioAlterationData: ICBioData[]){
    // Transform cBioDataAlteration into Patient Data every alteration is accepted 100% altered

    this.alterationData[PathwayMapper.CBIO_PROFILE_NAME] = {};
    
    const allTypes = cBioAlterationData.map(x => x.gene); 
    //const allTypes = cBioAlterationData.map(x => x.percentAltered);
    const uniqueTypes = allTypes.filter((x, i, a) => a.indexOf(x) == i)
    //This is a flag for GenomicDataOverlayManager showPatientData
    this.patientData["PatientView"] = 1;

    uniqueTypes.forEach(x => {
      this.patientData[x]= {};
    });

    cBioAlterationData.forEach((geneAltData: ICBioData) => {
      const perc = (geneAltData.altered / geneAltData.sequenced) * 100;

      this.alterationData[PathwayMapper.CBIO_PROFILE_NAME][geneAltData.gene] = ((Object.is(perc, NaN) ? -101 : perc));

      this.patientData[geneAltData.gene][geneAltData.percentAltered] = ((Object.is(perc, NaN) ? -101 : perc));
      this.patientData[geneAltData.gene]["geneticTrackData"] = geneAltData.geneticTrackData;
      this.patientData[geneAltData.gene]["geneticTrackRuleSetParams"] = geneAltData.geneticTrackRuleSetParams;
    });

  }

  addSampleIconData(sampleIconData: any) {
    if (sampleIconData) {
      this.patientData["sampleColors"] = sampleIconData.sampleColors;
      this.patientData["sampleIndex"] = sampleIconData.sampleIndex;
    }
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

    const matchedGenesMap: any = {};
    const bestPathways: any[] = [];
    for(const pathwayName in this.pathwayGeneMap){
        if(this.pathwayGeneMap.hasOwnProperty(pathwayName)){
          
          const genesMatching = [];
            // Calculate sum of all alterations
            let sumOfAlterations = 0;
            let geneIndex = 0;
            for(const gene of this.props.genes){
              
                if(this.pathwayGeneMap[pathwayName].hasOwnProperty(gene.hugoGeneSymbol) 
                    && this.pathwayGeneMap[pathwayName][gene.hugoGeneSymbol] === "GENE"){
                  genesMatching.push(gene.hugoGeneSymbol);
                  sumOfAlterations += (this.props.groupComparisonView === true ?  
                    this.props.genes[geneIndex].groupsSet[this.props.genes[geneIndex].enrichedGroup].alteredPercentage : alterationPerGene[gene.hugoGeneSymbol] ) ;
                }
                geneIndex++;
            }
            matchedGenesMap[pathwayName] = genesMatching;
            let geneCount = 0;
            // Count number of genes *not processess* in a pathway
            for(const geneType of Object.values(this.pathwayGeneMap[pathwayName])){
              if(geneType === "GENE"){
                geneCount++;
              }
            }

            if(rankingMode === 0){
              maxHeap.insert( genesMatching.length, {pathwayName: pathwayName});
            } else if(rankingMode === 1){
              maxHeap.insert( genesMatching.length / geneCount * 100, {pathwayName: pathwayName}); 
            } else if(rankingMode === 2){
              maxHeap.insert( sumOfAlterations, {pathwayName: pathwayName}); 
            } else if(rankingMode === 3){
              maxHeap.insert( genesMatching.length * sumOfAlterations / geneCount, {pathwayName: pathwayName});
            }

        }
    }
    while(maxHeap.size() > 0){
        const top = maxHeap.extractMax();
        const pathwayName = top.getValue().pathwayName;
        bestPathways.push({score: top.getKey(), genesMatched: matchedGenesMap[pathwayName], pathwayName: pathwayName});
    }
    if(this.bestPathwaysAlgos.length === 0) // First pathway of the first method is shown as the default pathway.
      this.setSelectedPathway(bestPathways[0].pathwayName);
    this.bestPathwaysAlgos.push(bestPathways);
    console.log(bestPathways);
  }
  
  // This method extracts all genes of a pathway and adds it to the pathwayGeneMap
  // so that it can be used by percentage calculation and genomic data 
  // Note: Pathway title
  @autobind
  includePathway(pathwayData?: IPathwayData, pathwayName?: string){
    const genes = pathwayData.nodes;
    const geneHash: any = {};
    
    for(const gene of genes){

      if(gene.data.type === "GENE"){
        geneHash[gene.data.name] = gene.data.type;
      }
    }

    this.pathwayGeneMap[pathwayData.title] = geneHash;

  }

  extractAllGenes(){
      for(const pathwayName in pathways){
          if(pathways.hasOwnProperty(pathwayName)){

              const pathwayData: IPathwayData = SaveLoadUtility.parseGraph(pathways[pathwayName], true);
              this.includePathway(pathwayData);
          }
      }
     
    }


  loadRedirectedPortalData(){

    if(!this.props.alterationData){ // If size 0 that means it is not redirected.
      return;
    }
    
    const redirectedProfiles = Object.keys(this.props.alterationData).map((data: string) : IProfileMetaData => ({profileId: data, enabled: true}));
    redirectedProfiles.forEach((redirectedProfile) => {
      this.addProfile(redirectedProfile);
    });
    this.editor.addPortalGenomicData(this.props.alterationData, this.editor.getEmptyGroupID());
  }

  exists(profileId: string){

    let exists = false;
    this.profiles.forEach((profile: IProfileMetaData) => {
      if(profile.profileId === profileId){
        exists = true;
      }
    });

    return exists;
  }

  @autobind
  loadFromCBio(dataTypes: {[dataType: string]: IDataTypeMetaData}, studyData: any[]){
      if(!this.pathwayActions.doesCyHaveElements()){
        toast.warn('Your pathway is empty!');
        return;
      }

      for (const metadata of Object.values(dataTypes))
      {
        if(!metadata.checked) {
          continue;
        } 
        if(this.exists(metadata.profile)){
          toast.warn(metadata.profile + " already exists.");
          continue;
        }

        const studyId = studyData[0];
        const profileId = metadata.profile;

        const enableNewProfile = this.profiles.length < this.MAX_ALLOWED_PROFILES_ENABLED;

        const newProfile = {
          studyId: studyId,
          profileId: profileId,
          enabled: enableNewProfile
        }

        this.addProfile(newProfile);

        const genes = this.editor.cy.nodes()
                                        .filter(node => node.data("type") === "GENE")
                                        .map(node => node.data("name"));

        
        this.portalAccessor.getProfileData({
          caseSetId: studyId,
          geneticProfileId: profileId,
          genes: genes
        },
        (data: any) => {
          this.editor.addPortalGenomicData(data, this.editor.getEmptyGroupID());
          let visibilityObject = {};
          visibilityObject[newProfile.profileId] = newProfile.enabled;
          this.editor.updateGenomicDataVisibility(visibilityObject);
        });
        
      }
  }

  @autobind
  setActiveEdgeHandler(setActiveEdge: (edgeId: number) => void){
    this.setActiveEdge = setActiveEdge;
  }

  @autobind
  colorSchemeChangeCallback(colorScheme: IColorValueMap) {
    this.colorValueMap = colorScheme;
  }

  @autobind
  addGenomicData(cBioAlterationData: ICBioData[]){

    this.calculateAlterationData(cBioAlterationData);
    this.editor.removeGenomicData();
    this.editor.addPortalGenomicData(this.alterationData, this.editor.getEmptyGroupID());
  }

  @autobind
  emphasizeQueryGenes() {
    this.pathwayActions.emphasizeQueryGenes(this.props.genes.map((gene: any) => gene.hugoGeneSymbol));
  }

  render() {
  const isCBioPortal = this.props.isCBioPortal;     

  const cytoComp = <CytoscapeArea profiles={this.profiles} isCbioPortal={this.props.isCBioPortal} isCollaborative={this.props.isCollaborative} 
  setActiveEdge={this.setActiveEdge} editorHandler={this.editorHandler} 
  selectedPathway={this.selectedPathway} pathwayHandler={this.pathwayHandler} 
  handleOpen={this.handleOpen}
  onPathwayChangeCompleted={this.emphasizeQueryGenes}
  genomicDataOverlayColorScheme={this.colorValueMap}
  colorSchemeChangeCallback={this.colorSchemeChangeCallback}/>;

  return (

    <div className="pathwayMapper">
      <div style={isCBioPortal ? {width: window.innerWidth * 0.99} : {}} className={isCBioPortal ? "cBioMode container" : "customMargins"}>
          {!isCBioPortal && 
            <React.Fragment>
              <div>
                <Menubar pathwayActions={this.pathwayActions} handleOpen={this.handleOpen} setActiveEdge={this.setActiveEdge}/>
              </div>    
              <div>
                <Buttonbar pathwayActions={this.pathwayActions} handleOpen={this.handleOpen}/> 
              </div>
            </React.Fragment>
          }
          { isCBioPortal &&
          <Row style={{marginBottom: "6px"}}>
            <Col xs={2} style={{paddingRight: '0px', marginBottom: '5px'}}>
              <Toolbar
                pathwayActions={this.pathwayActions}
                selectedPathway={this.selectedPathway}
                alterationData={this.alterationData}
                genes={this.props.genes}
                handleOpen={this.handleOpen}
                validGenes={this.props.validGenes}
                showMessage={this.props.showMessage}
                pathwayGenes={Object.keys(this.pathwayGeneMap[this.selectedPathway])}
                onAddGenes={this.props.onAddGenes}
                patientView = {this.props.patientView}
              />
            </Col>
            {this.props.messageBanner ?
            <Col xs={4} style={{maxHeight: '32px', paddingRight: '0px'}}>{this.props.messageBanner()}</Col>
            :
            <Col xs={4} style={{maxHeight: '32px', paddingRight: '0px'}}></Col>
            }
            <Col xs={3} style={{paddingLeft: "0px", marginTop: "12px", textAlign: "right", paddingRight: "25px"}}>
              {this.selectedPathway}
            </Col>
          </Row>
          }
          
          <div className={isCBioPortal ? "row" : "mainContentWrapper"}>
            {
            (!isCBioPortal && 
            <div>
              <Sidebar pathwayActions={this.pathwayActions} setActiveEdgeHandler={this.setActiveEdgeHandler} handleOpen={this.handleOpen}/>
            </div>)
            }

            { isCBioPortal ?
              (<Col xs={9}>
                  {cytoComp}
                  <div style={{paddingRight: "9px", textAlign: "right", fontSize: "13px"}}>Powered by <a href="https://github.com/iVis-at-Bilkent/pathway-mapper" target="_blank">PathwayMapper</a></div>
              </Col>)
              : (cytoComp)
            }
            {
            (isCBioPortal &&
            <Col xs={3} style={{paddingLeft: "0px"}}>
              <Ranking pathwayActions={this.pathwayActions} bestPathwaysAlgos={this.bestPathwaysAlgos} tableComponent={this.props.tableComponent} patientView={this.props.patientView}/>
            </Col>)
            }
          </div>

          {/* isCBioPortal &&
          <Row>
            <Col xs={9} style={{paddingRight: "22px", textAlign: "right", fontSize: "13px"}}>Powered by <a href="https://github.com/iVis-at-Bilkent/pathway-mapper" target="_blank">PathwayMapper</a></Col>
          </Row>*/
          }

            { (<div id="invisibles">

          {
          (<div id="pm-modals">
            <ProfilesModal profiles={this.profiles} 
                            editor={this.editor} 
                            show={this.isModalShown[EModalType.PROFILES]} 
                            handleClose={this.handleClose} 
                            handleProfileLabelClicked={this.toggleProfileEnabled}
                            enabledProfileCountLimit={this.MAX_ALLOWED_PROFILES_ENABLED}/>
                            
            <PathwayDetailsModal show={this.isModalShown[EModalType.PW_DETAILS]} handleClose={this.handleClose} pathwayActions={this.pathwayActions}/>
            <GridSettings show={this.isModalShown[EModalType.GRID]} handleClose={this.handleClose} pathwayActions={this.pathwayActions}/>
            <QuickHelpModal show={this.isModalShown[EModalType.HELP]} handleClose={this.handleClose}/>
            <LayoutProperties show={this.isModalShown[EModalType.LAYOUT]} handleClose={this.handleClose} pathwayActions={this.pathwayActions}/>
            <ConfirmationModal show={this.isModalShown[EModalType.CONFIRMATION]} handleClose={this.handleClose} />
            <CBioHelpModal show={this.isModalShown[EModalType.CHELP]} handleClose={this.handleClose} patientView ={this.props.patientView}/>
            <AboutModal show={this.isModalShown[EModalType.ABOUT]} handleClose={this.handleClose}/>
            <ProfilesColorSchemeModal show={this.isModalShown[EModalType.PROFILES_COLOR_SCHEME]} handleClose={this.handleClose} colorValueMapping={this.colorValueMap} handleColorMappingChange={this.setColorMapping}/>
          </div>)
          }
          { !this.props.isCBioPortal &&
            <React.Fragment>
              <StudyModal show={this.isModalShown[EModalType.STUDY]} loadFromCBio={this.loadFromCBio} handleClose={this.handleClose}/>
              <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            </React.Fragment>
          }
          <ReactTooltip clickable={true} className={isCBioPortal ? "" : "pmTip"} style={{maxWidth: "350px", zIndex: 9999999}}/>

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
      </div>
    </div>
  );
  }

  componentDidMount(){
    if(!this.props.isCBioPortal){
      $(".container").css('width', "auto");
      $(".container").css('paddingLeft', 0);
      $(".container").css('marginLeft', 5);
    } else {
      this.pathwayActions.emphasizeQueryGenes(this.props.genes.map((gene: any) => gene.hugoGeneSymbol));
    }
  }

  componentDidUpdate(){
    if(this.props.isCBioPortal){
      this.pathwayActions.emphasizeQueryGenes(this.props.genes.map((gene: any) => gene.hugoGeneSymbol));
    }
  }

  @action.bound
  handleOpen(modalId: EModalType){
    this.isModalShown[modalId] = true;
  }


  @action.bound
  handleClose(modalId: EModalType){
      this.isModalShown[modalId] = false;
  }

  @autobind
  editorHandler(editor, eh, undoRedoManager){

    this.setEditor(editor);
    this.gridOptionsManager = new GridOptionsManager(this.editor.cy);
    this.viewOperationsManager = new ViewOperationsManager(this.editor, this.editor.cy);
    this.pathwayActions.editorHandler(editor, eh, undoRedoManager, this.viewOperationsManager, this.gridOptionsManager);
    
    if(this.props.isCBioPortal){
      if(this.props.patientView){
        this.editor.addPortalGenomicData(this.patientData, this.editor.getEmptyGroupID());
      }
      else if( this.props.groupComparisonView === true){
        this.editor.addPortalGenomicData(this.groupComparisonData, this.editor.getEmptyGroupID(), this.props.activeGroups);
      }
      else{
      this.editor.addPortalGenomicData(this.alterationData, this.editor.getEmptyGroupID());
      }
    } else {
      this.portalAccessor = new CBioPortalAccessor();
      this.loadRedirectedPortalData();
    }

  }

  @autobind
  pathwayHandler(pathway: string){
      this.setSelectedPathway(pathway);
      if(this.pathwayGeneMap[pathway] && this.props.changePathwayHandler)
        this.props.changePathwayHandler(
          Object.keys(this.pathwayGeneMap[pathway])
          .filter(gene => (!this.alterationData[PathwayMapper.CBIO_PROFILE_NAME].hasOwnProperty(gene)))
        );
  }
}

export default PathwayMapper;