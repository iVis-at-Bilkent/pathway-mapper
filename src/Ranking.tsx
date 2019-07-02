import React from 'react';
import {observer} from "mobx-react";
import {action, computed, observable} from "mobx";
import autobind from "autobind-decorator";
import {ListGroup} from "react-bootstrap";
import pathways from "./pathways.json";
import {Table, DropdownButton,MenuItem, Checkbox, Button, Label} from "react-bootstrap";
import PathwayActions from './PathwayActions.js';
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
                <b>Pathway name: </b>
                <div className="indent">
                {this.selectedPathway}
                <br/>
                <br/>
                </div>
            </div>

            <div className="info-entry">
                <b>Studies to show: </b>
                <div className="indent">
                {this.props.profileLabels.length === 0 ? "None" : this.props.profileLabels}
                <br/>
                <br/>
                </div>
            </div>

            <div className="info-entry">

                <b>Ranking criteria: </b>
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
            <b>Pathway Rankings: </b>
            <Table id="ranking-table" striped bordered condensed hover>
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
                        return (
                            <tr onClick={() => {this.onPathwayClick(pathway.pathwayName)}} style={{cursor: "pointer"}}>
                                <td>{i + 1}</td>
                                <td>{pathway.pathwayName}</td>
                                <td>{pathway.score.toFixed(2)}</td>
                                <td>{pathway.genesMatched.map((gene: string) => gene + " ")}</td>
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
