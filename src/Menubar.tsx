import React from 'react';
import {Navbar, Nav, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';
import pathways from "./pathways.json";
import PathwayActions from './PathwayActions.js';

interface IMenubarProps{
    pathwayActions: PathwayActions;
    handleOpen: (modalId: number) => void;
}

export default class Menubar extends React.Component<IMenubarProps, {}>{
    constructor(props: IMenubarProps){
        super(props);
    }
    render(){

        const nodeTypes = ["Gene", "Family", "Complex", "Compartment", "Process"];
        const edgeTypes = ["Activates", "Inhibits", "Induces", "Represses", "Binds"];

        return(
            <Navbar width={innerWidth * 0.9 + "px"}>
              <Nav>
                <NavDropdown eventKey={1} title="Network" id="basic-nav-network">
                  <MenuItem eventKey={1.1} onClick={this.props.pathwayActions.newPathway}>New</MenuItem>
                  <NavDropdown eventKey={1} title="TCGA" id="basic-nav-TCGA">
                    {
                      Object.keys(pathways).map((pathwayName) => {
                          return (
                          <MenuItem onClick={() => {this.props.pathwayActions.pathwayHandler(pathwayName)}}>
                            {pathwayName}
                          </MenuItem>);
                      })
                    }
                  </NavDropdown>

                  <NavDropdown eventKey={1} title="Export as" id="basic-nav-export">
                    <MenuItem eventKey={1.1}>JPEG</MenuItem>
                    <MenuItem eventKey={1.1} onClick={this.props.pathwayActions.saveAsPng}>PNG</MenuItem>
                    <MenuItem eventKey={1.1}>SVG</MenuItem>
                    <MenuItem eventKey={1.1}>SIFNG</MenuItem>
                  </NavDropdown>
                </NavDropdown>

                <NavDropdown eventKey={2} title="Edit" id="basic-nav-edit">
                  <NavDropdown eventKey={2.1} title="Add Node">
                      {
                        nodeTypes.map((nodeType) => {
                        return (<MenuItem onClick={() => {this.props.pathwayActions.addNode(nodeType)}}>
                        {nodeType}
                      </MenuItem>)} )
                      }
                  </NavDropdown>
                  <NavDropdown eventKey={2.1} title="Add Edge">
                      {
                        edgeTypes.map((nodeType, i) => {
                        return (<MenuItem 
                          onClick={
                          () => {
                            this.props.pathwayActions.addEdge(i);
                          }}>
                        {nodeType}
                      </MenuItem>)} )
                      }
                  </NavDropdown>
                </NavDropdown>
                <NavDropdown eventKey={3} title="View" id="basic-nav-view">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={4} title="Highlight" id="basic-nav-highlight">
                  <MenuItem eventKey={4.1} onClick={this.props.pathwayActions.removeAllHighlight}>Remove All Highlights</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={5} title="Alteration %" id="basic-nav-alteration">
                  <MenuItem eventKey={5.1} onClick={this.props.pathwayActions.loadSampleData}>Load Sample Data</MenuItem>
                  <MenuItem eventKey={5.1} onClick={ () => {this.props.handleOpen(0)}}>Load cBioPortal Data</MenuItem>
                  <MenuItem eventKey={5.1} onClick={ () => {this.props.handleOpen(2)}}>View Settings...</MenuItem>
                  <MenuItem eventKey={5.1} onClick={this.props.pathwayActions.removeAllData}>Remove All Data</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={6} title="Layout" id="basic-nav-layout">
                  <MenuItem eventKey={6.1} onClick={this.props.pathwayActions.performLayout}>Perform Layout</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={7} title="Help" id="basic-nav-help">
                  <MenuItem eventKey={7.1} onClick={ () => {this.props.handleOpen(3);}}>About</MenuItem>
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