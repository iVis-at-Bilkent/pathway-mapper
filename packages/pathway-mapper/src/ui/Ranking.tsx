import autobind from "autobind-decorator";
import { action, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import React from 'react';
import { Checkbox, DropdownButton, MenuItem } from "react-bootstrap";
import PathwayActions from '../utils/PathwayActions.js';
import { IPathwayMapperTable } from "./react-pathway-mapper";

interface IRankingProps{
    pathwayActions: PathwayActions;
    bestPathwaysAlgos: any[][];
    tableComponent: (data: IPathwayMapperTable[], selectedPathway: string, onPathwaySelect: (pathway: string) => void) => JSX.Element;
    patientView ?: boolean;
}

const TCGA_PANCAN_PATHWAY_NAMES = [
    "Cell Cycle", 
    "HIPPO", 
    "MYC",
    "NOTCH",
    "NRF2",
    "PI3K",
    "RTK-RAS",
    "TGF-Beta",
    "TP53",
    "WNT"
];


@observer
export default class Ranking extends React.Component<IRankingProps, {}>{
   // @observable
    bestPathways: any[];

   // @observable
    shownPathways: any[];

    @observable
    dropDownTitle: string;

    @observable
    selectedPathway: string;
    isPercentageMatch: number;
    isAlterationEnabled: number;

    @observable
    considerOnlyTCGAPanPathways: boolean;

    @observable
    isExpanded: boolean;

    @observable
    rankingCriteria : number = 0;

    readonly COUNT_PERC_EXPLANATION = "Whether we should favor the number of genes of interest matching the ones in a pathway or the percentage of such genes in that pathway. For instance, suppose genes of interest are A, B, and C, and the pathway contains genes B, C, D, and E. When we consider count, the score is 2 (for the two genes that match). However, when we consider percentage the score will be 50% as 2 of the 4 genes in the pathway are among genes of interest.";
    readonly ALTERATION_EXPLANATION = "When this is checked, each matching gene will not directly contribute to the score as 1 unit but with the alteration frequency percentage of that gene. For instance, suppose genes of interest are A, B, and C with alteration frequencies of 0.5, 0.2, and 0.3, respectively, and the pathway contains genes B, C, D, and E. When this is option isn't checked, the score will be 2 for match count and 50% for the match percentage. However, when this option is checked, the scores will be 0.2+0.3=0.5 and (0.2+0.3)/4=12.5% for match count and percentage, respectively.";
    readonly TCGA_PANCAN_EXPLANATION = "The pathways listed above were retrieved from <a href='http://www.pathwaymapper.org' target='_blank'>PathwayMapper</a>. When this option is checked, only the pathways under TCGA > PanCanAtlas will be shown. Uncheck to show all.";

    constructor(props: IRankingProps){
        super(props);
        makeObservable(this);
        
        this.isPercentageMatch = 0;
        this.isAlterationEnabled = 0;
        this.considerOnlyTCGAPanPathways = true;
        this.dropDownTitle = "Match count";
        this.isExpanded = false;
        this.setBestPathwayMethod(0);
        this.selectedPathway = this.shownPathways[0].pathwayName;
    }

    @autobind
    setBestPathwayMethod(i: number){
        this.bestPathways = this.props.bestPathwaysAlgos[i];
        this.filterBestPathwaysByTCGAPanPathways();
    }

    @autobind
    onPathwayClick(pathway: string){
        this.selectedPathway = pathway;
        this.props.pathwayActions.changePathway(this.selectedPathway);
    }

    @autobind
    onApplyClick(){
        // Mapping from dropdown + checkbox selection to pathway method.
        console.log("ranking logic changed "  + 2 * this.isAlterationEnabled + this.isPercentageMatch);
        this.setBestPathwayMethod(2 * this.isAlterationEnabled + this.isPercentageMatch);
        this.rankingCriteria = 2 * this.isAlterationEnabled + this.isPercentageMatch;
        console.log(this.rankingCriteria);
    }

    @action.bound 
    filterBestPathwaysByTCGAPanPathways() {
        this.shownPathways = this.bestPathways.filter((data: any) => {
            if (this.considerOnlyTCGAPanPathways) {
                return TCGA_PANCAN_PATHWAY_NAMES.indexOf(data.pathwayName) > -1;
            }
            return true;
        });
        console.log(this.shownPathways);
        // change selected pathway if we are filtered and doesn't exist
        if (this.considerOnlyTCGAPanPathways 
            && TCGA_PANCAN_PATHWAY_NAMES.indexOf(this.selectedPathway) < 0) {
            this.selectedPathway = this.shownPathways[0].pathwayName;
            this.props.pathwayActions.changePathway(this.selectedPathway);
        }
    }

    @action.bound
    toggleConsiderOnlyTCGAPanPathways() {
        this.considerOnlyTCGAPanPathways = !this.considerOnlyTCGAPanPathways;
        this.filterBestPathwaysByTCGAPanPathways();
    }


    componentDidMount(): void {
        this.props.pathwayActions.changePathway(this.selectedPathway);
    }

    render(){
        const lengthThreshold = 13;
        this.setBestPathwayMethod(this.rankingCriteria);
        console.log("Re ranked pathways are: " + this.bestPathways[0] + this.bestPathways[1]);
         
        return (
          <div id="ranking-bar">

              {/*
            <div className="info-title table-title">
                <b style={{marginLeft: "2px"}}>&nbsp;Pathways</b>
              </div>*/}

            { this.props.tableComponent &&
            this.props.tableComponent(
                this.shownPathways.map((data: any) => ({
                    name: data.pathwayName, score: data.score, genes: data.genesMatched
                })),
                this.selectedPathway,
                this.onPathwayClick)
            }
            {
            <div className="indent">
            <Checkbox checked={this.considerOnlyTCGAPanPathways}
                id="tcgaPathwaysCheckbox" 
                onClick={this.toggleConsiderOnlyTCGAPanPathways}
                style={{fontSize: "13px"}}
            >
                Show TCGA PanCancer Atlas pathways only&nbsp;            
                <span data-tip={this.TCGA_PANCAN_EXPLANATION} 
                    data-border="true" 
                    data-type="light" 
                    data-place="left" 
                    data-effect="solid"
                    data-html="true"
                    data-delay-hide="500" 
                    className="fa fa-question-circle styles-module__infoIcon__zMiog">
                </span>
            </Checkbox>
            </div>
            }
            {(!this.props.patientView &&
            <div className="info-entry">
                {
                <div id="criteria-title" className="info-title">
                    <b style={{display: "inline-block"}}>
                        &nbsp;Ranking options
                    </b>
                </div>
                }
                <div className="indent">
                    <DropdownButton
                        title={this.dropDownTitle}
                        id="0"
                        style={{fontSize: "13px"}}
                        >
                        <MenuItem style={{fontSize: "13px"}} onClick={ () => {this.isPercentageMatch = 0; this.dropDownTitle = "Match count"; this.onApplyClick();} }>Match count</MenuItem>
                        <MenuItem style={{fontSize: "13px"}} onClick={ () => {this.isPercentageMatch = 1; this.dropDownTitle = "Match percentage"; this.onApplyClick();}}>Match percentage</MenuItem>
                    </DropdownButton>  
                    &nbsp; 
                    <div data-tip={this.COUNT_PERC_EXPLANATION} data-border="true" data-type="light" data-place="left" data-effect="solid" className="fa fa-question-circle styles-module__infoIcon__zMiog"></div>

                    <Checkbox id="alterationCheckBox" onClick={() => {this.isAlterationEnabled = (this.isAlterationEnabled === 1) ? 0 : 1; this.onApplyClick();}}
                            style={{fontSize: "13px", marginTop: "18px", bottom: "4px"}}>
                        Consider alteration frequency&nbsp;            
                        <span data-tip={this.ALTERATION_EXPLANATION} data-border="true" data-type="light" data-place="left" data-effect="solid" className="fa fa-question-circle styles-module__infoIcon__zMiog"></span>
                    </Checkbox>
                </div>
            </div>
              )}
          </div>
        
        );
       
    }

    
}
