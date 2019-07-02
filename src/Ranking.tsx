import React from 'react';
import {observer} from "mobx-react";
import {action, computed, observable} from "mobx";
import autobind from "autobind-decorator";
import {ListGroup} from "react-bootstrap";
import pathways from "./pathways.json";
import {Table, DropdownButton,MenuItem, Checkbox, Button, Label} from "react-bootstrap";
import PathwayActions from './PathwayActions.js';
import { string } from 'prop-types';
interface IRankingProps{
    pathwayActions: PathwayActions;
    bestPathwaysAlgos: any[][];
    profileLabels: (string | JSX.Element)[][];
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
    

    constructor(props: IRankingProps){
        super(props);
        this.isPercentageMatch = 0;
        this.isAlterationEnabled = 0;
        this.dropDownTitle = "Match count";
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


        return (
          <div id="ranking-bar">
            <div className="info-entry">
                <div className="info-title">
                    <b style={{marginLeft: "2px"}}>Pathway name</b>
                </div>
                <div className="indent">
                {this.selectedPathway}
                <br/>
                <br/>
                </div>
            </div>

            <div className="info-entry">
                <div className="info-title">
                    <b style={{marginLeft: "2px"}}>Studies to show</b>
                </div>
                    <div className="indent">
                        {this.props.profileLabels.length === 0 ? "None" : this.props.profileLabels}
                    <br/>
                <br/>
                </div>
            </div>

            <div className="info-entry">

                <div className="info-title">
                    <b style={{marginLeft: "2px"}}>Ranking criteria</b>
                </div>
                <div className="indent" >
                    <DropdownButton
                        title={this.dropDownTitle}
                        id="0"
                        >
                        <MenuItem onClick={ () => {this.isPercentageMatch = 0; this.dropDownTitle = "Match count";} }>Match count</MenuItem>
                        <MenuItem onClick={ () => {this.isPercentageMatch = 1; this.dropDownTitle = "Match percentage";}}>Match percentage</MenuItem>
                    </DropdownButton>   
                    <Checkbox onClick={() => {this.isAlterationEnabled = (this.isAlterationEnabled === 1) ? 0 : 1;} }>
                    Consider gene alteration frequency
                    </Checkbox>
                    <Button onClick={this.onApplyClick}>Apply</Button>
                </div>
            </div>
            <br/>
            <div className="info-title">
                <b style={{marginLeft: "2px"}}>Studies to show</b>
            </div>
            <Table id="ranking-table" striped bordered condensed hover style={{width: "75%"}}>
                <thead>
                    <tr>
                    <td><i>Rank</i></td>
                    <td><i>Pathway name</i></td>
                    <td><i>Score</i></td>
                    <td><i>Genes matched</i></td>
                    </tr>
                </thead>
                <tbody>
                {
                    this.bestPathways.map((pathway: any, i: number) => {
                        const pwName = pathway.pathwayName as string;
                        const isPwNameShort = pwName.length <= 8;

                        const geneStr = pathway.genesMatched.join(" ") as string;
                        const isGeneStrShort = geneStr.length <= 8;
                        return (
                            <tr onClick={() => {this.onPathwayClick(pwName)}} style={{cursor: "pointer"}}>
                                <td>{i + 1}</td>
                                <td id={"_" + pwName} data-tip={pwName} data-place="top" data-effect="solid">
                                    {(isPwNameShort ? pwName : pwName.substring(0, 9) + "...")}
                                </td>
                                <td>{pathway.score.toFixed(2)}</td>
                                <td data-tip={geneStr} data-multiline="true" data-place="right" data-effect="solid">
                                    {isGeneStrShort ? geneStr : geneStr.substring(0, 9) + "..."}
                                </td>
                            </tr>
                        );
                    })
                }
                    
                </tbody>
            </Table>
          </div>
        );
    }
}
