import React from 'react'
import {observer} from "mobx-react";
import {action, computed, observable} from "mobx";
import Button from "react-bootstrap/Button";
import autobind from "autobind-decorator";
import {ListGroup} from "react-bootstrap";
import pathways from "./pathways.json";
import Col from "react-bootstrap/Col";
import ScrollArea from "react-scrollbar";

interface IRankingProps{
  pathwayHandler: (pathway: string) => void;
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
        return (
          <ListGroup>
            {
              Object.keys(pathways).map((key) => {
                return (<ListGroup.Item action onClick={() => {this.onPathwayClick(key)}}>
                  {key}
                </ListGroup.Item>);
              })
            }

          </ListGroup>
        );
    }
}
