import React from "react";
import { Nav, Navbar, NavItem, FormControl, Glyphicon, InputGroup, ButtonGroup, ButtonToolbar, Button } from "react-bootstrap";
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

interface IGridGuidelineState{
    isGridEnabled: boolean;
    isGuideEnabled : boolean;
}

@observer
export default class Buttonbar extends React.Component<IButtonbarProps, {}>{


    @observable
    private searchedGene: string;

    @observable
    private gridGuide: IGridGuidelineState;

    constructor(props: IButtonbarProps) {
        super(props);
        this.searchedGene = "";
        this.gridGuide = {isGridEnabled: false, isGuideEnabled: false};
    }

    setGridGuide(isToggleGrid: boolean){

        if(isToggleGrid){
            this.gridGuide.isGridEnabled = !this.gridGuide.isGridEnabled;
            this.gridGuide.isGuideEnabled = false;
            this.props.pathwayActions.toggleGrid(this.gridGuide.isGridEnabled);
        } else {
            this.gridGuide.isGuideEnabled = !this.gridGuide.isGuideEnabled;
            this.gridGuide.isGridEnabled = false;
            this.props.pathwayActions.toggleGuide(this.gridGuide.isGuideEnabled);
        }
    }
    render() {
        
        const fileFunctions: ISVGFunction[] = [
            {svg: newSvg, function: this.props.pathwayActions.newPathway, tooltip: "New Pathway"},
            {svg: loadSvg, function: this.props.pathwayActions.upload, tooltip: "Load Pathway" },
            {svg: saveSvg, function: this.props.pathwayActions.newPathway, tooltip: "Save Pathway"}];
        
        const modFunctions: ISVGFunction[] = [
            {svg: deleteSvg, function: this.props.pathwayActions.deleteSelected, tooltip: "Delete Selected"},
            {svg: undoSvg, function: () => {this.props.pathwayActions.undo();}, tooltip: "Undo"},
            {svg: redoSvg, function: () => {this.props.pathwayActions.redo();}, tooltip: "Redo"}];
        
        const alignFunctions: ISVGFunction[] = [
            {svg: ahtSvg, function: () => {this.props.pathwayActions.align("hTop");}, tooltip: "Align Horizontal Top"},
            {svg: ahmSvg, function: () => {this.props.pathwayActions.align("hMid");}, tooltip: "Align Horizontal Middle"},
            {svg: ahbSvg, function: () => {this.props.pathwayActions.align("hBot");}, tooltip: "Align Horizontal Bottom"},
            {svg: avlSvg, function: () => {this.props.pathwayActions.align("vLeft");}, tooltip: "Align Vertical Left"},
            {svg: avcSvg, function: () => {this.props.pathwayActions.align("vCen");}, tooltip: "Align Vertical Center"},
            {svg: avrSvg, function: () => {this.props.pathwayActions.align("vRight");}, tooltip: "Align Vertical Right"}];
            
        const utilFunctions: ISVGFunction[] = [
            {isFocused: this.gridGuide.isGridEnabled, svg: gridSvg, function: () => {this.setGridGuide(true);}, tooltip: "Enable Grid: Show and snap to grid"},
            {isFocused: this.gridGuide.isGuideEnabled, svg: guideSvg, function: () => {this.setGridGuide(false);}, tooltip: "Enable Guidelines: Enable and snap to alignment guidelines"}];

        const visibilityFunctions: ISVGFunction[] = [
            {svg: hideSvg, function: () => {this.props.pathwayActions.hideSelected();}, tooltip: "Hide Selected"},
            {svg: showSvg, function: () => {this.props.pathwayActions.showAll();}, tooltip: "Show All"}];

        const layoutFunctions: ISVGFunction[] = [
            {svg: layoutSvg, function: () => {this.props.pathwayActions.performLayout();}, tooltip: "Perform Layout"},
            {svg: layoutPropSvg, function: () => {this.props.pathwayActions.performLayout();}, tooltip: "Layout Properties"}];

        const portalFunctions: ISVGFunction[] = [
            {svg: portalSvg, function: () => {this.props.handleOpen(EModalType.STUDY);}, tooltip: "Fetch Genomic Data From cBioPortal"},
            {svg: setingsSvg, function: () => {this.props.handleOpen(EModalType.PROFILES);}, tooltip: "Genomic Data Visibility Settings"}];

        const infoFunctions: ISVGFunction[] = [
            {svg: helpSvg, function: () => {this.props.handleOpen(EModalType.ABOUT);}, tooltip: "Quick Help"},
            {svg: aboutSvg, function: () => {this.props.handleOpen(EModalType.ABOUT);}, tooltip: "About"}];
        
        const allFunctions = [fileFunctions, modFunctions, alignFunctions, utilFunctions, visibilityFunctions, portalFunctions, layoutFunctions, infoFunctions];

        
        return (
            <Navbar style={{backgroundColor: "#eff0f2" }}>
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
                <Nav pullRight style={{marginTop: "8px"}}>
                    <InputGroup >
                        <FormControl type="text"
                            onChange={(e: any) => { this.searchedGene = e.target.value;}}
                            placeholder="Search Gene"
                            onKeyPress={(e: any) => { if (e.key !== "Enter") return; this.props.pathwayActions.searchGene(this.searchedGene) }} />
                        <InputGroup.Addon>
                            <Glyphicon onClick={() => { this.props.pathwayActions.searchGene(this.searchedGene) }} glyph="search" />
                        </InputGroup.Addon>
                    </InputGroup>
                </Nav>
            </Navbar>
        )
    }

}