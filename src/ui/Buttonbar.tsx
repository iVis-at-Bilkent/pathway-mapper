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

export default class BUttonbar extends React.Component<IButtonbarProps, {}>{


    @observable
    private searchedGene: string;

    constructor(props: IButtonbarProps) {
        super(props);
        this.searchedGene = "";
    }

    render() {

        return (
            <Navbar style={{ backgroundColor: "#eff0f2" }}>
                <Nav style={{marginTop: "8px"}}>
                    <ButtonToolbar className="toolbar pathway-toolbar">
                        <ButtonGroup>
                            { ([newSvg, loadSvg, saveSvg]).map((svg: any) => 
                                (<div className="toolbar-button">
                                    <SVGInline height="22px" width="22px" svg={svg}></SVGInline>
                                </div>)
                                )
                            }
                        </ButtonGroup>

                        <ButtonGroup>
                            { ([deleteSvg, undoSvg, redoSvg]).map((svg: any) => 
                                (<div className="toolbar-button">
                                    <SVGInline height="22px" width="22px" svg={svg}></SVGInline>
                                </div>)
                                )
                            }
                        </ButtonGroup>

                        <ButtonGroup>
                            { ([ahtSvg, ahmSvg, ahbSvg, avlSvg, avcSvg, avrSvg]).map((svg: any) => 
                                (<div className="toolbar-button">
                                    <SVGInline height="22px" width="22px" svg={svg}></SVGInline>
                                </div>)
                                )
                            }

                        </ButtonGroup>

                        <ButtonGroup>
                            { ([gridSvg, guideSvg]).map((svg: any) => 
                                (<div className="toolbar-button">
                                    <SVGInline height="22px" width="22px" svg={svg}></SVGInline>
                                </div>)
                                )
                            }
                        </ButtonGroup>

                        <ButtonGroup>
                            { ([hideSvg, showSvg]).map((svg: any) => 
                                (<div className="toolbar-button">
                                    <SVGInline height="22px" width="22px" svg={svg}></SVGInline>
                                </div>)
                                )
                            }
                        </ButtonGroup>

                        <ButtonGroup>
                            { ([portalSvg, setingsSvg]).map((svg: any) => 
                                (<div className="toolbar-button">
                                    <SVGInline height="22px" width="22px" svg={svg}></SVGInline>
                                </div>)
                                )
                            }
                        </ButtonGroup>

                        <ButtonGroup>
                            { ([layoutSvg, layoutPropSvg]).map((svg: any) => 
                                (<div className="toolbar-button">
                                    <SVGInline height="22px" width="22px" svg={svg}></SVGInline>
                                </div>)
                                )
                            }
                        </ButtonGroup>

                        <ButtonGroup>
                            { ([helpSvg, aboutSvg]).map((svg: any) => 
                                (<div className="toolbar-button">
                                    <SVGInline height="22px" width="22px" svg={svg}></SVGInline>
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