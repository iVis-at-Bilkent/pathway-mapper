import React from 'react'
import {observer} from "mobx-react";
import {action, computed, observable} from "mobx";
import Button from "react-bootstrap/Button";
import autobind from "autobind-decorator";

@observer
export default class Ranking extends React.Component{
    @observable hello:number = 0;
    constructor(props:any){
        super(props);
    }

    @computed get getHello(){
        return this.hello;
    }

    @autobind
    @action clickHandler(){
        this.hello++;
    }

    render(){
        return (
            <Button variant="primary" onClick={this.clickHandler}>{this.getHello}</Button>
        );
    }
}