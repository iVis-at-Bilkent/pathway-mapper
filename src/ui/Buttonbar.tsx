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


import SVGInline from "react-svg-inline";
interface IButtonbarProps {
    pathwayActions: PathwayActions;
    handleOpen: (modelId: number) => void;
}

interface ISVGFunction{
    svg: any;
    function: Function;    
}

export default class BUttonbar extends React.Component<IButtonbarProps, {}>{


    @observable
    private searchedGene: string;

    constructor(props: IButtonbarProps) {
        super(props);
        this.searchedGene = "";
    }

    render() {
        
        const fileFunctions: ISVGFunction[] = [
            {svg: newSvg, function: this.props.pathwayActions.newPathway},
            {svg: loadSvg, function: this.props.pathwayActions.newPathway},
            {svg: saveSvg, function: this.props.pathwayActions.newPathway}];
        
        const modFunctions: ISVGFunction[] = [
            {svg: deleteSvg, function: this.props.pathwayActions.deleteSelected},
            {svg: undoSvg, function: () => {this.props.pathwayActions.newPathway();}},
            {svg: redoSvg, function: () => {this.props.pathwayActions.newPathway();}}];
        
        const alignFunctions: ISVGFunction[] = [
            {svg: ahtSvg, function: () => {this.props.pathwayActions.newPathway();}},
            {svg: ahmSvg, function: () => {this.props.pathwayActions.newPathway();}},
            {svg: ahbSvg, function: () => {this.props.pathwayActions.newPathway();}},
            {svg: avlSvg, function: () => {this.props.pathwayActions.newPathway();}},
            {svg: avcSvg, function: () => {this.props.pathwayActions.newPathway();}},
            {svg: avrSvg, function: () => {this.props.pathwayActions.newPathway();}}];
            
        const utilFunctions: ISVGFunction[] = [
            {svg: gridSvg, function: this.props.pathwayActions.deleteSelected},
            {svg: guideSvg, function: () => {this.props.pathwayActions.newPathway();}}];

        const visibilityFunctions: ISVGFunction[] = [
            {svg: hideSvg, function: () => {this.props.pathwayActions.hideSelected();}},
            {svg: showSvg, function: () => {this.props.pathwayActions.showAll();}}];

        const layoutFunctions: ISVGFunction[] = [
            {svg: layoutSvg, function: () => {this.props.pathwayActions.performLayout();}},
            {svg: layoutPropSvg, function: () => {this.props.pathwayActions.performLayout();}}];

        const portalFunctions: ISVGFunction[] = [
            {svg: portalSvg, function: () => {this.props.handleOpen(0);}},
            {svg: setingsSvg, function: () => {this.props.handleOpen(2);}}];

        const infoFunctions: ISVGFunction[] = [
            {svg: helpSvg, function: () => {this.props.handleOpen(3);}},
            {svg: aboutSvg, function: () => {this.props.handleOpen(3);}}];
        
        return (
            <Navbar style={{backgroundColor: "#eff0f2" }}>
                <Nav style={{marginTop: "8px"}}>
                    <ButtonToolbar className="toolbar pathway-toolbar">
                        <ButtonGroup>
                            { fileFunctions.map((svg: ISVGFunction) => 
                                (<div className="toolbar-button">
                                    <SVGInline height="22px" width="22px" svg={svg.svg} onClick={svg.function}></SVGInline>
                                </div>)
                                )
                            }
                        </ButtonGroup>

                        <ButtonGroup>
                            { modFunctions.map((svg: ISVGFunction) => 
                                (<div className="toolbar-button">
                                    <SVGInline height="22px" width="22px" svg={svg.svg} onClick={svg.function}></SVGInline>
                                </div>)
                                )
                            }
                        </ButtonGroup>

                        <ButtonGroup>
                            { alignFunctions.map((svg: ISVGFunction) => 
                                (<div className="toolbar-button">
                                    <SVGInline height="22px" width="22px" svg={svg.svg} onClick={svg.function}></SVGInline>
                                </div>)
                                )
                            }

                        </ButtonGroup>

                        <ButtonGroup>
                            { utilFunctions.map((svg: ISVGFunction) => 
                                (<div className="toolbar-button">
                                    <SVGInline height="22px" width="22px" svg={svg.svg} onClick={svg.function}></SVGInline>
                                </div>)
                                )
                            }
                        </ButtonGroup>

                        <ButtonGroup>
                            { visibilityFunctions.map((svg: ISVGFunction) => 
                                (<div className="toolbar-button">
                                    <SVGInline height="22px" width="22px" svg={svg.svg} onClick={svg.function}></SVGInline>
                                </div>)
                                )
                            }
                        </ButtonGroup>

                        <ButtonGroup>
                            { portalFunctions.map((svg: ISVGFunction) => 
                                (<div className="toolbar-button">
                                    <SVGInline height="22px" width="22px" svg={svg.svg} onClick={svg.function}></SVGInline>
                                </div>)
                                )
                            }
                        </ButtonGroup>

                        <ButtonGroup>
                            { layoutFunctions.map((svg: ISVGFunction) => 
                                (<div className="toolbar-button">
                                    <SVGInline height="22px" width="22px" svg={svg.svg} onClick={svg.function}></SVGInline>
                                </div>)
                                )
                            }
                        </ButtonGroup>

                        <ButtonGroup>
                            { infoFunctions.map((svg: any) => 
                                (<div className="toolbar-button">
                                    <SVGInline height="22px" width="22px" svg={svg.svg} onClick={svg.function}></SVGInline>
                                </div>)
                                )
                            }
                        </ButtonGroup>
                    </ButtonToolbar>
                </Nav>
                <Nav pullRight style={{marginTop: "8px"}}>
                    <InputGroup >
                        <FormControl type="text"
                            onChange={(e: any) => { this.searchedGene = e.target.value; }}
                            placeHolder="Search Gene"
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