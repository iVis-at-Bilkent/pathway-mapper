import React from 'react';
import {observer} from "mobx-react";
import {action, computed, observable} from "mobx";
import autobind from "autobind-decorator";
import {ListGroup} from "react-bootstrap";
import pathways from "./pathways.json";
import {Table, DropdownButton,MenuItem, Checkbox, Button} from "react-bootstrap";
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
        this.dropDownTitle = "Match Amount";
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
        this.setBestPathwayMethod(2 * this.isAlterationEnabled + this.isPercentageMatch);
    }


    render(){


        return (
          <div>
            <div style={{marginBottom: "10px"}} >
                <b>Pathway name: </b>
                <div style={{marginLeft: "20px", marginTop: "6px"}}>
                {this.selectedPathway}
                <br/>
                <br/>
                </div>
            </div>

            <div style={{marginBottom: "10px"}} >
                <b>Studies to show: </b>
                <div style={{marginLeft: "20px", marginTop: "6px"}}>
                {this.props.profileLabels}
                <br/>
                <br/>
                </div>
            </div>

            <div style={{marginBottom: "10px"}} >

                <b>Ranking criteria: </b>
                <div style={{marginLeft: "20px", marginTop: "6px"}}>
                    <DropdownButton
                        title={this.dropDownTitle}
                        id="0"
                        >
                        <MenuItem onClick={ () => {this.isPercentageMatch = 0; this.dropDownTitle = "Match Amount";} }>Match Amount</MenuItem>
                        <MenuItem onClick={ () => {this.isPercentageMatch = 1; this.dropDownTitle = "Match Percentage";}}>Match Percentage</MenuItem>
                    </DropdownButton>   
                    <Checkbox onClick={() => {this.isAlterationEnabled = (this.isAlterationEnabled === 1) ? 0 : 1;} }>
                    Consider alteration data
                    </Checkbox>
                    <Button onClick={this.onApplyClick}>Apply</Button>
                </div>
            </div>
            <br/>
            <b>Pathway Rankings: </b>
            <Table striped bordered condensed hover style={{marginLeft: "20px", marginTop: "6px", marginRight: "6px"}}>
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th>Pathway name</th>
                    <th>Score</th>
                    <th>Genes matched</th>
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
