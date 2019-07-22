import React from 'react';
import {observer} from "mobx-react";
import {action, computed, observable} from "mobx";
import autobind from "autobind-decorator";
import {ListGroup, Panel} from "react-bootstrap";
import pathways from "./pathways.json";
import {Table, DropdownButton,MenuItem, Checkbox, Button, Label} from "react-bootstrap";
import PathwayActions from './PathwayActions.js';
import { string } from 'prop-types';
import 'react-table/react-table.css';
import ReactTable from 'react-table'
interface IRankingProps{
    pathwayActions: PathwayActions;
    bestPathwaysAlgos: any[][];
}


@observer
export default class Ranking extends React.Component<IRankingProps, {}>{
    @observable
    bestPathways: any[];

    @observable
    dropDownTitle: string;

    @observable
    selectedPathway: string;
    isPercentageMatch: number;
    isAlterationEnabled: number;

    @observable
    isExpanded: boolean;

    readonly COUNT_PERC_EXPLANATION = "Whether we should favor the number of genes of interest matching the ones in a pathway or the percentage of such genes in that pathway. For instance, suppose genes of interest are A, B, and C, and the pathway contains genes B, C, D, and E. When we consider count, the score is 2 (for the two genes that match). However, when we consider percentage the score will be 50% as 2 of the 4 genes in the pathway are among genes of interest.";
    readonly ALTERATION_EXPLANATION = "When this is checked, each matching gene will not directly contribute to the score as 1 unit but with the alteration frequency percentage of that gene. For instance, suppose genes of interest are A, B, and C with alteration frequencies of 0.5, 0.2, and 0.3, respectively, and the pathway contains genes B, C, D, and E. When this is option isn't checked, the score will be 2 for match count and %50 for the match percentage. However, when this option is checked, the scores will be 0.2+0.3=0.5 and (0.2+0.3)/4=%12.5 for match count and percentage, respectively.";
    

    constructor(props: IRankingProps){
        super(props);
        this.isPercentageMatch = 0;
        this.isAlterationEnabled = 0;
        this.dropDownTitle = "Match count";
        this.isExpanded = false;
        this.setBestPathwayMethod(0);
        console.log("Pathway Algos");
        console.log(this.props.bestPathwaysAlgos);
    }

    @autobind
    setBestPathwayMethod(i: number){
        this.bestPathways = this.props.bestPathwaysAlgos[i];
        this.selectedPathway = this.bestPathways[0].pathwayName;
        this.props.pathwayActions.changePathway(this.selectedPathway);
    }

    @autobind
    onPathwayClick(pathway: string){
        // console.log(pathway);
        this.selectedPathway = pathway;
        this.props.pathwayActions.changePathway(this.selectedPathway);
    }

    @autobind
    onApplyClick(){
        // Mapping from dropdown + checkbox selection to pathway method.
        this.setBestPathwayMethod(2 * this.isAlterationEnabled + this.isPercentageMatch);
    }


    render(){
        const lengthThreshold = 13;

        const columns = [{
        Header: 'Pathway name',
        accessor: 'pathwayName',
        Cell: props => {

            const pwName = props.value as string;
            const isPwNameShort = pwName.length < lengthThreshold;
            return <div id={"_" + pwName} data-border="true" data-type="light" data-tip={pwName}>
                {(isPwNameShort ? pwName : pwName.substring(0, lengthThreshold) + "...")}
                </div>;
        }
        }, {
        Header: 'Score',
        accessor: 'score',
        Cell: props =>  <span className='number'>{props.value}</span>
        }, {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Genes matched',
        accessor: "genesMatched",
        Cell: props => {


            console.log(props);

            const geneStr = this.calculateGeneStr(props.value, lengthThreshold);

            return (<div data-border="true" data-type="light" data-tip={props.value.join(" ")} data-multiline="true" data-place="right" data-effect="solid">
                {geneStr}
            </div>);

        }
        }];
         
        return (
          <div id="ranking-bar">
            <div className="info-title table-title">
                <b style={{marginLeft: "2px"}}>&nbsp;Pathways</b>
            </div>
            
            <Table id="ranking-table" striped bordered condensed hover>
                <thead>
                    <tr>
                    <td><i>#</i></td>
                    <td><i>Pathway name</i></td>
                    <td><i>Score</i></td>
                    <td><i>Genes matched</i></td>
                    </tr>
                </thead>
                <tbody>
                {
                    this.bestPathways.map((pathway: any, i: number) => {
                        const pwName = pathway.pathwayName as string;
                        const lengthThreshold = 13;
                        const isPwNameShort = pwName.length < lengthThreshold;

                        const geneStr = this.calculateGeneStr(pathway.genesMatched, lengthThreshold);
                        return (
                            <tr key={"ranked_" + i} onClick={() => {this.onPathwayClick(pwName);}} style={{cursor: "pointer"}}>
                                <td>{i + 1}</td>
                                <td id={"_" + pwName} data-border="true" data-type="light" data-tip={pwName} data-place="top" data-effect="solid">
                                    {(isPwNameShort ? pwName : pwName.substring(0, lengthThreshold) + "...")}
                                </td>
                                <td className="score">{pathway.score.toFixed(2)}</td>
                                <td data-border="true" data-type="light" data-tip={pathway.genesMatched.join(" ")} data-multiline="true" data-place="right" data-effect="solid">
                                    {geneStr}
                                </td>
                            </tr>
                        );
                    })
                }
                    
                </tbody>
            </Table>

            <div className="info-entry">

                <div id="criteria-title" className="info-title" onClick={() => {this.isExpanded = !this.isExpanded;}}>
                    <b style={{display: "inline-block"}}>
                        &nbsp;Options
                    </b>
                    <div style={{float: "right"}} className={"fa fa-chevron-" + ((this.isExpanded) ? "up" : "down")}>&nbsp;</div>
                </div>
                <div>
                    <Panel expanded={this.isExpanded}>
                        <Panel.Collapse>
                            <Panel.Body>
                                <DropdownButton
                                    title={this.dropDownTitle}
                                    id="0"
                                    >
                                    <MenuItem onClick={ () => {this.isPercentageMatch = 0; this.dropDownTitle = "Match count"; this.onApplyClick();} }>Match count</MenuItem>
                                    
                                    <MenuItem onClick={ () => {this.isPercentageMatch = 1; this.dropDownTitle = "Match percentage"; this.onApplyClick();}}>Match percentage</MenuItem>
                                </DropdownButton>  
                                &nbsp; 
                                <div data-tip={this.COUNT_PERC_EXPLANATION} data-border="true" data-type="light" data-place="left" data-effect="solid" className="fa fa-question-circle styles-module__infoIcon__zMiog"></div>

                                <Checkbox onClick={() => {this.isAlterationEnabled = (this.isAlterationEnabled === 1) ? 0 : 1; this.onApplyClick();}  }>
                                    Consider gene alteration frequency&nbsp;                  
                                    <div data-tip={this.ALTERATION_EXPLANATION} data-border="true" data-type="light" data-place="left" data-effect="solid" className="fa fa-question-circle styles-module__infoIcon__zMiog"></div>
                                </Checkbox>
                        </Panel.Body>
                        </Panel.Collapse>
                    </Panel>
                </div>
            </div>
            <br/>
          </div>
        );
    }

    private calculateGeneStr(genesMatched: string[], lengthThreshold: number){
        let runningLength = 0;
        let geneStr = "";
        for(const geneName of genesMatched){
            runningLength += geneName.length;
            if(runningLength < lengthThreshold){
                geneStr += geneName + " ";
                runningLength++; //Whitespace is added
            } else{
                return geneStr + "...";
            }
        }
        return geneStr;
    }
}
