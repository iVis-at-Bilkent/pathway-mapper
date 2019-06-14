import React from 'react'
import {observer} from "mobx-react";
import {action, computed, observable} from "mobx";
import autobind from "autobind-decorator";
import {ListGroup} from "react-bootstrap";
import pathways from "./pathways.json";
import * as Bootstrap from "react-bootstrap";
import PathwayActions from './PathwayActions.js';
interface IRankingProps{
    pathwayActions: PathwayActions;
}


@observer
export default class Ranking extends React.Component<IRankingProps, {}>{
    @observable hello:number = 0;
    constructor(props: IRankingProps){
        super(props);
    }

    @computed get getHello(){
        return this.hello;
    }

    @autobind
    @action clickHandler(){
        this.hello++;
    }

    onPathwayClick(pathway: string){
      console.log(pathway);
      this.props.pathwayActions.changePathway(pathway);
    }


    render(){


        return (
          <div>
            <Bootstrap.Table striped bordered condensed hover>
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th>Pathway Name</th>
                    <th># of Genes Matching</th>
                    </tr>
                </thead>
                <tbody>

                {
                  /*
                    this.props.bestPathways.map((pathway, i) => {
                        return (
                            <tr onClick={() => {this.onPathwayClick(pathway.pathwayName)}}>
                                <td>{i + 1}</td>
                                <td>{pathway.pathwayName}</td>
                                <td>{pathway.score}</td>
                            </tr>
                        );
                    })*/
                }
                    
                </tbody>
            </Bootstrap.Table>
          </div>
        );
    }
}
