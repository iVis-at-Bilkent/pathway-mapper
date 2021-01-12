import React, { Component } from 'react';
import {Row, Col, Image} from "react-bootstrap";
import autobind from "autobind-decorator";
import EditorActionsManager from "../managers/EditorActionsManager";
import {observer} from "mobx-react";
import {makeObservable, observable} from "mobx";
import PathwayActions from '../utils/PathwayActions';
// @ts-ignore
import layoutImage from "../images/toolbar/layout-cose.svg";
// @ts-ignore
import savePNGImage from "../images/toolbar/save_png.svg";
// @ts-ignore
import saveSVGImage from "../images/toolbar/save_svg.svg";
// @ts-ignore
const addSelImage = require("../images/toolbar/add-selected.svg");
// @ts-ignore
const addAllImage = require("../images/toolbar/add-all.svg");
// @ts-ignore
const aboutImage = require("../images/toolbar/about.svg");
// @ts-ignore
import openImage from "../images/toolbar/edit.svg";

import { IProfileMetaData, IAlterationData, EModalType } from '../ui/react-pathway-mapper';

interface IToolbarProps {
  pathwayActions: PathwayActions;
  selectedPathway: string;
  alterationData: IAlterationData;
  handleOpen: (modalId: number) => void;
  genes: any[];
  validGenes: any;
  showMessage: (message: string) => void;
  pathwayGenes: string[];
  onAddGenes: (selectedGenes: string[]) => void;
  patientView ?: boolean;
}

@observer
export default class Toolbar extends React.Component<IToolbarProps, {}>{


    @observable
    selectedGenes: string[];

    @observable
    private editor: EditorActionsManager;
    constructor(props: IToolbarProps){
      super(props);
      makeObservable(this);

      this.selectedGenes = [];
    }

    
    render(){


      const studyQuery = "q=" + JSON.stringify(this.props.alterationData) + "&g=" + this.props.genes.map(gene => gene.hugoGeneSymbol).join("+");
      return (
      <div id="toolbar" style={{marginLeft: '0px'}}>
          <img height="22px" width="22px" data-border="true" data-type="light" data-tip="Save as PNG" data-place="right" data-effect="solid" src={savePNGImage} onClick={() => {this.props.pathwayActions.saveAs("PNG");}}/>

          <img height="22px" width="22px" data-border="true" data-type="light" data-tip="Save as SVG" data-place="right" data-effect="solid" src={saveSVGImage} onClick={() => {this.props.pathwayActions.saveAs("SVG");}}/>

          <img height="22px" width="22px" data-border="true" data-type="light" data-tip="Perform layout" data-place="right" data-effect="solid" src={layoutImage} onClick={this.props.pathwayActions.performLayout} />              
          {(!this.props.patientView && [
          <img height="22px" width="22px" data-border="true" data-type="light" data-tip="Add selected genes to query" data-place="right" data-effect="solid" src={addSelImage} onClick={() => {
            this.selectedGenes = this.props.pathwayActions.getSelectedNodes()
                                                          .filter((node: any) => node.data().type === "GENE")
                                                          .map((node: any) => node.data().name as string);
	    const noneGeneList = this.props.pathwayActions.getSelectedNodes()
                                                          .filter((node: any) => node.data().type !== "GENE")
                                                          .map((node: any) => node.data().name as string);
            const invalidGenes: string[] = [];
	    let message = "";
            if(noneGeneList.length > 0){
                message += "Selection contains nodes that are not genes: " + noneGeneList.join(', ') + ". ";
            }

            this.selectedGenes.forEach((gene: string) => {
              if(!this.props.validGenes.hasOwnProperty(gene)){
                invalidGenes.push(gene);
              }
            });

            if(invalidGenes.length === 0){

              if(this.selectedGenes.length > 0 && noneGeneList.length === 0){
                this.props.onAddGenes(this.selectedGenes);
              }
            } else {
	      message += "Following gene symbols are invalid or already in gene list: " + invalidGenes.join(", ") + ".";
            }

	    if(message.length > 0) {
	       this.props.showMessage(message);
	    }
            }}/>
            ,
        
          <img height="22px" width="22px" data-border="true" data-type="light" data-tip="Add all valid genes to query" data-place="right" data-effect="solid" src={addAllImage} onClick={() => {

            this.selectedGenes = this.props.pathwayGenes.filter((gene: string) => {
              return this.props.validGenes.hasOwnProperty(gene);
            });
            
            if(this.selectedGenes.length > 0){
              this.props.onAddGenes(this.selectedGenes);
            }
          }}/>,
      

          <img height="22px" width="22px" data-border="true" data-type="light" data-tip="Edit pathway" data-place="right" data-effect="solid" src={openImage} onClick={() => {{window.open("http://pathwaymapper.org/?pathwayName=" + this.props.selectedPathway +"&"+ studyQuery )}}}/>
          ])}
          <img height="22px" width="22px" data-border="true" data-type="light" data-tip="Help" data-place="right" data-effect="solid" src={aboutImage} onClick={() => {console.log("Here");this.props.handleOpen(EModalType.CHELP); }}/>
          
    </div>);
  }
}
