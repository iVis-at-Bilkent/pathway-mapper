import React from "react";
import { Nav, Navbar, NavItem, FormControl, Glyphicon, InputGroup, ButtonGroup, ButtonToolbar, Button, FormGroup } from "react-bootstrap";
import PathwayActions from "../PathwayActions";
import { observable } from "mobx";
// @ts-ignore
import loadSvg from '../toolbar/load.svg';
// @ts-ignore
import aboutSvg from '../toolbar/about.svg';
// @ts-ignore
import newSvg from '../toolbar/new.svg';
// @ts-ignore
import saveSvg from '../toolbar/save.svg';
// @ts-ignore
import deleteSvg from '../toolbar/delete-simple.svg';
// @ts-ignore
import undoSvg from '../toolbar/undo.svg';
// @ts-ignore
import redoSvg from '../toolbar/redo.svg';
// @ts-ignore
import ahtSvg from '../toolbar/align/align-horizontal-top.svg';
// @ts-ignore
import ahmSvg from '../toolbar/align/align-horizontal-middle.svg';
// @ts-ignore
import ahbSvg from '../toolbar/align/align-horizontal-bottom.svg';
// @ts-ignore
import avlSvg from '../toolbar/align/align-vertical-left.svg';
// @ts-ignore
import avcSvg from '../toolbar/align/align-vertical-center.svg';
// @ts-ignore
import avrSvg from '../toolbar/align/align-vertical-right.svg';
// @ts-ignore
import gridSvg from '../toolbar/grid.svg';
// @ts-ignore
import guideSvg from '../toolbar/guidelines.svg';
// @ts-ignore
import hideSvg from '../toolbar/hide-selected.svg';
// @ts-ignore
import showSvg from '../toolbar/show-all.svg';
// @ts-ignore
import portalSvg from '../toolbar/portal.svg';
// @ts-ignore
import setingsSvg from '../toolbar/settings.svg';
// @ts-ignore
import layoutSvg from '../toolbar/layout-cose.svg';
// @ts-ignore
import layoutPropSvg from '../toolbar/layout-properties.svg';
// @ts-ignore
import helpSvg from '../toolbar/quick-help.svg';
import { EModalType } from "../react-pathway-mapper";
import { observer } from "mobx-react";
import { EGridType } from "../modals/GridSettings";


interface IButtonbarProps {
    pathwayActions: PathwayActions;
    handleOpen: (modelId: EModalType) => void;
}

interface ISVGFunction{
    svg: any;
    function: () => void;
    tooltip: string;    
    isFocused?: boolean;
}


@observer
export default class Buttonbar extends React.Component<IButtonbarProps, {}>{


    @observable
    private searchedGene: string;


    constructor(props: IButtonbarProps) {
        super(props);
        this.searchedGene = "";
        this.props.pathwayActions.enabledType = EGridType.NONE;
    }

    setEnabledType(newType: EGridType){
        if(newType === this.props.pathwayActions.enabledType){
            this.props.pathwayActions.enabledType = EGridType.NONE;
        } else {
            this.props.pathwayActions.enabledType = newType;
        }

        // Enabled type calculated

        if(this.props.pathwayActions.enabledType === EGridType.GRID){
            this.props.pathwayActions.toggleGrid(true);
        }
        else if(this.props.pathwayActions.enabledType === EGridType.GUIDE){
            this.props.pathwayActions.toggleGuide(true);
        } else {
            this.props.pathwayActions.toggleGrid(false); // This will disable both.
        }
    }
    render() {
        
        const fileFunctions: ISVGFunction[] = [
            {svg: newSvg, function: this.props.pathwayActions.newPathway, tooltip: "New Pathway"},
            {svg: loadSvg, function: this.props.pathwayActions.upload, tooltip: "Load Pathway" },
            {svg: saveSvg, function: () => {this.props.pathwayActions.export(false)}, tooltip: "Save Pathway"}];
        
        const modFunctions: ISVGFunction[] = [
            {svg: deleteSvg, function: this.props.pathwayActions.deleteSelected, tooltip: "Delete Selected"}];

        if(!this.props.pathwayActions.isCollaborative){
            modFunctions.push({svg: undoSvg, function: () => {this.props.pathwayActions.undo();}, tooltip: "Undo"},
                              {svg: redoSvg, function: () => {this.props.pathwayActions.redo();}, tooltip: "Redo"});
        }
        const alignFunctions: ISVGFunction[] = [
            {svg: ahtSvg, function: () => {this.props.pathwayActions.align("hTop");}, tooltip: "Align Horizontal Top"},
            {svg: ahmSvg, function: () => {this.props.pathwayActions.align("hMid");}, tooltip: "Align Horizontal Middle"},
            {svg: ahbSvg, function: () => {this.props.pathwayActions.align("hBot");}, tooltip: "Align Horizontal Bottom"},
            {svg: avlSvg, function: () => {this.props.pathwayActions.align("vLeft");}, tooltip: "Align Vertical Left"},
            {svg: avcSvg, function: () => {this.props.pathwayActions.align("vCen");}, tooltip: "Align Vertical Center"},
            {svg: avrSvg, function: () => {this.props.pathwayActions.align("vRight");}, tooltip: "Align Vertical Right"}];
            
        const utilFunctions: ISVGFunction[] = [
            {isFocused: this.props.pathwayActions.enabledType === EGridType.GRID, svg: gridSvg, function: () => {this.setEnabledType(EGridType.GRID);}, tooltip: "Enable Grid: Show and snap to grid"},
            {isFocused: this.props.pathwayActions.enabledType === EGridType.GUIDE, svg: guideSvg, function: () => {this.setEnabledType(EGridType.GUIDE);}, tooltip: "Enable Guidelines: Enable and snap to alignment guidelines"}];

        const visibilityFunctions: ISVGFunction[] = [
            {svg: hideSvg, function: () => {this.props.pathwayActions.hideSelected();}, tooltip: "Hide Selected"},
            {svg: showSvg, function: () => {this.props.pathwayActions.showAll();}, tooltip: "Show All"}];

        const layoutFunctions: ISVGFunction[] = [
            {svg: layoutSvg, function: () => {this.props.pathwayActions.performLayout();}, tooltip: "Perform Layout"},
            {svg: layoutPropSvg, function: () => {this.props.handleOpen(EModalType.LAYOUT);}, tooltip: "Layout Properties"}];

        const portalFunctions: ISVGFunction[] = [
            {svg: portalSvg, function: () => {this.props.handleOpen(EModalType.STUDY);}, tooltip: "Fetch Genomic Data From cBioPortal"},
            {svg: setingsSvg, function: () => {this.props.handleOpen(EModalType.PROFILES);}, tooltip: "Genomic Data Visibility Settings"}];

        const infoFunctions: ISVGFunction[] = [
            {svg: helpSvg, function: () => {this.props.handleOpen(EModalType.HELP);}, tooltip: "Quick Help"},
            {svg: aboutSvg, function: () => {this.props.handleOpen(EModalType.ABOUT);}, tooltip: "About"}];
        
        const allFunctions = [fileFunctions, modFunctions, alignFunctions, utilFunctions, visibilityFunctions, portalFunctions, layoutFunctions, infoFunctions];

        
        return (
            <Navbar style={{backgroundColor: "#eff0f2" }} className="pathway-toolbar">
                <Nav style={{marginTop: "8px"}}>
                    <ButtonToolbar className="toolbar pathway-toolbar">
                        {   allFunctions.map((functions) =>
                        <ButtonGroup>
                            { functions.map((svg: ISVGFunction) => 
                                (<div className={"toolbar-button" + ((svg.isFocused ? " toolbar-button-focused" : ""))}>
                                    <img height="22px" width="22px" src={svg.svg} data-tip={svg.tooltip} data-place="bottom" data-effect="solid" onClick={svg.function}></img>
                                </div>)
                                )
                            }
                        </ButtonGroup>)
                        }
                    </ButtonToolbar>
                </Nav>
                <Nav pullRight style={{marginTop: "8px"}} className="toolbar">
                    <ButtonGroup id="searchGeneToolbar">
                        <FormGroup>
                            <FormGroup className="has-feedback">
                            <FormControl id="searchGene" type="text"
                                onChange={(e: any) => { this.searchedGene = e.target.value;}}
                                placeholder="Search Genes..."
                                onKeyPress={(e: any) => { if (e.key !== "Enter") return; this.props.pathwayActions.searchGene(this.searchedGene) }} />
                            <Glyphicon className="form-control-feedback" onClick={() => { this.props.pathwayActions.searchGene(this.searchedGene) }} glyph="search" />
                            </FormGroup>
                        </FormGroup>
                    </ButtonGroup>
                </Nav>
            </Navbar>
        )
    }

}