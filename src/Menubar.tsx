import React from 'react';
import {Navbar, Nav, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';
import pathways from "./pathways.json";
import PathwayActions from './PathwayActions.js';
import autobind from 'autobind-decorator';
import SaveLoadUtility from './SaveLoadUtility';
import { EModalType } from './react-pathway-mapper';

interface IMenubarProps{
    pathwayActions: PathwayActions;
    handleOpen: (modalId: EModalType) => void;
    setActiveEdge: Function;
}


export default class Menubar extends React.Component<IMenubarProps, {}>{


    constructor(props: IMenubarProps){
        super(props);
  }

    render(){
        const nodeTypes = ["Gene", "Family", "Complex", "Compartment", "Process"];
        const edgeTypes = ["Activates", "Inhibits", "Induces", "Represses", "Binds"];

        const pathwayDropdownData: {[pwHead: string]: string[]} = {};
        for(const pwName of Object.keys(pathways)){
          // If a pathway name ain't include 'pathway' word then it is under pancanatlas.
          const isPancanatlas = !pwName.includes('pathway');
          const dashPos = pwName.indexOf('-');
          const pwHead = (isPancanatlas) ? 'PanCanAtlas' : pwName.substring(0, dashPos);
          if(pwHead in pathwayDropdownData){
            pathwayDropdownData[pwHead].push(pwName);
          } else {
            pathwayDropdownData[pwHead] = [pwName];
          }
        }

        return(
            <Navbar width={innerWidth * 0.9 + "px"}>


              
              <Nav>
                <NavDropdown eventKey={1} title="Network" id="basic-nav-network">
                  <MenuItem eventKey={1.1} onClick={this.props.pathwayActions.newPathway}>New</MenuItem>
                  <MenuItem eventKey={1.1} onClick={() => {this.props.handleOpen(EModalType.PW_DETAILS)}}>Properties...</MenuItem>
                  <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.upload();}}>Import</MenuItem>
                  <NavDropdown className="dropdown-submenu" eventKey={1} title="TCGA" id="basic-nav-TCGA">
                    {
                      Object.keys(pathwayDropdownData).map((pwHead) => {
                          return (
                            <NavDropdown id={pwHead + "_dropdown"} className="dropdown-submenu" eventKey={1} title={pwHead}>
                              
                              {
                                pathwayDropdownData[pwHead].map((pwName) => 
                                <MenuItem onClick={() => {

                                  // Below code is necessary because user might click a pathway and make merge on it,
                                  // and then s/he might want to open this pathway again. Since selectedPathway will be same
                                  // componentWillUpdate won't be called in CytoscapeArea thereby preventing loading fresh version of 
                                  // this pathway. Below code makes sure that selectedPathway is nulled. 
                                  // this.props.pathwayActions.pathwayHandler("SElam");
                                  // Above code does not do what is intended.
                                  // Refresh pathwayGeneMap entry of this pathway.
                                  // this.props.pathwayActions.includePathway(SaveLoadUtility.parseGraph(pathways[pwName], true));
                                  this.props.pathwayActions.changePathway(pwName);
                                }
                                }>
                                  {pwName.split('-').join(" ")}
                                </MenuItem>
                                )
                              }
                              
                            </NavDropdown>);
                      })
                    }
                  </NavDropdown>
                  <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.merge()}}>Merge With...</MenuItem>
                  <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.export(false);}}>Export</MenuItem>
                  <NavDropdown className="dropdown-submenu" eventKey={1} title="Export as" id="basic-nav-export">
                    <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.saveAs("JPEG")}}>JPEG</MenuItem>
                    <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.saveAs("PNG")}}>PNG</MenuItem>
                    <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.saveAs("SVG")}}>SVG</MenuItem>
                    <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.export(true);}}>SIFNX</MenuItem>
                  </NavDropdown>
                </NavDropdown>

                <NavDropdown eventKey={2} title="Edit" id="basic-nav-edit">
                  <NavDropdown id="add-node-submenu" className="dropdown-submenu" eventKey={2.1} title="Add Node">
                      {
                        nodeTypes.map((nodeType) => {
                        return (<MenuItem onClick={() => {this.props.pathwayActions.addNode(nodeType);}}>
                        {nodeType}
                      </MenuItem>)} )
                      }
                  </NavDropdown>
                  <NavDropdown id="add-edge-submenu" className="dropdown-submenu" eventKey={2.1} title="Add Edge">
                      {
                        edgeTypes.map((nodeType, i) => {
                        return (<MenuItem 
                          onClick={
                          () => {
                            this.props.pathwayActions.addEdge(i);
                            this.props.setActiveEdge(i);
                          }}>
                        {nodeType}
                      </MenuItem>)} )
                      }
                  </NavDropdown>
                  <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.deleteSelected();}}>Delete Selected</MenuItem>
                  <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.resizeToContent();}}>Resize Nodes to Content</MenuItem>
                  <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.undo();}}>Undo</MenuItem>
                  <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.redo();}}>Redo</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={3} title="View" id="basic-nav-view">
                  <NavDropdown id="align-view-submenu" className="dropdown-submenu" eventKey={2.1} title="Align Selected">
                    <NavDropdown id="align-vertical-submenu" className="dropdown-submenu" eventKey={2.1} title="Vertical">
                      <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.align("vLeft");}}>Left</MenuItem>
                      <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.align("vCen");}}>Center</MenuItem>
                      <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.align("vRight");}}>Right</MenuItem>
                    </NavDropdown>
                    <NavDropdown id="align-horizontal-submenu" className="dropdown-submenu" eventKey={2.1} title="Horizontal">
                      <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.align("hTop");}}>Top</MenuItem>
                      <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.align("hMid");}}>Middle</MenuItem>
                      <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.align("hBot");}}>Bottom</MenuItem>
                    </NavDropdown>
                  </NavDropdown>
                  <MenuItem eventKey={1.1} onClick={() => {this.props.handleOpen(EModalType.GRID);}}>Grid...</MenuItem>
                  <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.hideSelected();}}>Hide Selected Nodes</MenuItem>
                  <MenuItem eventKey={1.1} onClick={() => {this.props.pathwayActions.showAll();}}>Show All Nodes</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={4} title="Highlight" id="basic-nav-highlight">
                  <MenuItem eventKey={4.1} onClick={this.props.pathwayActions.highlightSelected}>Highlight Selected</MenuItem>
                  <MenuItem eventKey={4.1} onClick={this.props.pathwayActions.highlightNeighbours}>Highlight Neighbors Of Selected</MenuItem>
                  <MenuItem eventKey={4.1} onClick={this.props.pathwayActions.validateGenes}>Identify Invalid Genes</MenuItem>
                  <MenuItem eventKey={4.1} onClick={this.props.pathwayActions.removeAllHighlight}>Remove All Highlights</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={5} title="Alteration %" id="basic-nav-alteration">
                  <MenuItem eventKey={5.1} onClick={() => {this.props.pathwayActions.uploadOverlay()}}>Load From File...</MenuItem>
                  <MenuItem eventKey={5.1} onClick={this.props.pathwayActions.loadSampleData}>Load Sample Data</MenuItem>
                  <MenuItem eventKey={5.1} onClick={ () => {this.props.handleOpen(EModalType.STUDY)}}>Load cBioPortal Data...</MenuItem>
                  <MenuItem eventKey={5.1} onClick={ () => {this.props.handleOpen(EModalType.PROFILES)}}>View Settings...</MenuItem>
                  <MenuItem eventKey={5.1} onClick={this.props.pathwayActions.removeAllData}>Remove All Data</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={6} title="Layout" id="basic-nav-layout">
                  <MenuItem eventKey={6.1} onClick={this.props.pathwayActions.performLayout}>Perform Layout</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={7} title="Help" id="basic-nav-help">
                  <MenuItem eventKey={7.1} onClick={ () => {this.props.handleOpen(EModalType.HELP);}}>Quick Help</MenuItem>
                  <MenuItem eventKey={7.1} onClick={ () => {this.props.handleOpen(EModalType.ABOUT);}}>About</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <Navbar.Brand>
                  <a href="#">PathwayMapper</a>
                </Navbar.Brand>
              </Nav>
            </Navbar>
        )
    }
}