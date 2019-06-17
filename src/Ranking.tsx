import React from 'react'
import {observer} from "mobx-react";
import {action, computed, observable} from "mobx";
import autobind from "autobind-decorator";
import {ListGroup} from "react-bootstrap";
import pathways from "./pathways.json";
import {Table, DropdownButton,MenuItem} from "react-bootstrap";
import PathwayActions from './PathwayActions.js';
interface IRankingProps{
    pathwayActions: PathwayActions;
    bestPathwaysAlgos: any[][];
}


@observer
export default class Ranking extends React.Component<IRankingProps, {}>{
    @observable
    bestPathways: any[];

    rankingMethod;
    
    constructor(props: IRankingProps){
        super(props);
        this.rankingMethod = 0;
        this.setBestPathwayMethod(0);
    }

    @autobind
    setBestPathwayMethod(i){
        this.bestPathways = this.props.bestPathwaysAlgos[i];
        this.rankingMethod = i;
    }

    onPathwayClick(pathway: string){
      console.log(pathway);
      this.props.pathwayActions.changePathway(pathway);
    }


    render(){


        return (
          <div>
              <DropdownButton
                title='Choose Ranking Method'
                key="0"
                >
                <MenuItem onClick={ () => {this.setBestPathwayMethod(0)}}>Match Amount</MenuItem>
                <MenuItem onClick={ () => {this.setBestPathwayMethod(1)}}>Match Percentage</MenuItem>
            </DropdownButton>
            <br/>
            <br/>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th>Pathway Name</th>
                    <th>{this.rankingMethod === 0 ? "#" : "Perc."} of Genes Matching</th>
                    <th>Genes Matched</th>
                    </tr>
                </thead>
                <tbody>

                {
                  
                    this.bestPathways.map((pathway: any, i: number) => {
                        console.log(pathway);
                        return (
                            <tr onClick={() => {this.onPathwayClick(pathway.pathwayName)}}>
                                <td>{i + 1}</td>
                                <td>{pathway.pathwayName}</td>
                                <td>{pathway.score.toFixed(2) + ((this.rankingMethod === 1) ? "%" : "")}</td>
                                <td>{pathway.genesMatched.map((gene) => gene + " ")}</td>
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
