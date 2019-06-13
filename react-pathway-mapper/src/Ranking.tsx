import React from 'react'
import {observer} from "mobx-react";
import {action, computed, observable} from "mobx";
import autobind from "autobind-decorator";
import {ListGroup} from "react-bootstrap";
import pathways from "./pathways.json";
import * as Bootstrap from "react-bootstrap";
interface IRankingProps{
  pathwayHandler: (pathway: string) => void;
  isCBioPortal: boolean;
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
      this.props.pathwayHandler(pathway);
    }


    render(){

        const isCBioPortal = this.props.isCBioPortal;

        return (
          <div>
          {!isCBioPortal ? (
            <Bootstrap.ListGroup>
            {
              Object.keys(pathways).map((pathwayName) => {
                return (<Bootstrap.ListGroupItem active key={pathwayName} onClick={() => {this.onPathwayClick(pathwayName)}}>
                  {pathwayName}
                </Bootstrap.ListGroupItem>);
              })
            }
          </Bootstrap.ListGroup> 
          ) : (
            <Bootstrap.Table striped bordered condensed hover>
                <thead>
                    <tr>
                    <th>#</th>
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
            </Bootstrap.Table>)
          }
          </div>
          /*
          {

          isCBioPortal ? 
          <ListGroup>
            {
              Object.keys(pathways).map((key) => {
                return (<ListGroup.Item action onClick={() => {this.onPathwayClick(key)}}>
                  {key}
                </ListGroup.Item>);
              })
            }
          </ListGroup> 
          
          : 
          
          <Button></Button>
          }*/
        );
    }
}
