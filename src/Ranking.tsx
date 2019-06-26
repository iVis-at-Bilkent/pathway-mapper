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
}


@observer
export default class Ranking extends React.Component<IRankingProps, {}>{
    @observable
    bestPathways: any[];

    @observable
    dropDownTitle: string;

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
        this.props.pathwayActions.changePathway(this.bestPathways[0].pathwayName);
    }

    @autobind
    onPathwayClick(pathway: string){
        // console.log(pathway);
        this.props.pathwayActions.changePathway(pathway);
    }

    @autobind
    onApplyClick(){
        this.setBestPathwayMethod(2 * this.isAlterationEnabled + this.isPercentageMatch);
    }


    render(){


        return (
          <div>
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
            <br/>
            <br/>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th>Pathway Name</th>
                    <th>Score</th>
                    <th>Genes Matched</th>
                    </tr>
                </thead>
                <tbody>

                {
                  
                    this.bestPathways.map((pathway: any, i: number) => {
                        return (
                            <tr onClick={() => {this.onPathwayClick(pathway.pathwayName)}}>
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
