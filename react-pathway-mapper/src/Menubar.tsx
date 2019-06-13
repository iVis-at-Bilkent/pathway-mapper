import React from 'react';
import {Navbar, Nav, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';
import pathways from "./pathways.json";
import PathwayActions from './PathwayActions.js';

interface IMenubarProps{
    pathwayActions: PathwayActions;
}

export default class Menubar extends React.Component<IMenubarProps, {}>{
    constructor(props: IMenubarProps){
        super(props);
    }
    render(){

        return(
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">PathwayMapper</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                <NavDropdown eventKey={1} title="Network" id="basic-nav-network">
                  <MenuItem eventKey={1.1}>New</MenuItem>
                  <NavDropdown eventKey={1} title="TCGA" id="basic-nav-network">
                    {
                      Object.keys(pathways).map((pathwayName) => {
                          return (
                          <MenuItem onClick={() => {this.props.pathwayActions.pathwayHandler(pathwayName)}}>
                            {pathwayName}
                          </MenuItem>);
                      })
                    }
                  </NavDropdown>

                </NavDropdown>

                <NavDropdown eventKey={2} title="Edit" id="basic-nav-edit">
                  <MenuItem eventKey={2.1}>Action</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={3} title="View" id="basic-nav-view">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={4} title="Highlight" id="basic-nav-highlight">
                  <MenuItem eventKey={4.1}>Action</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={5} title="Alteration %" id="basic-nav-alteration">
                  <MenuItem eventKey={5.1} onClick={this.props.pathwayActions.loadSampleData}>Load Sample Data</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={6} title="Layout" id="basic-nav-layout">
                  <MenuItem eventKey={6.1} onClick={this.props.pathwayActions.performLayout}>Perform Layout</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={7} title="Help" id="basic-nav-help">
                  <MenuItem eventKey={7.1}>Action</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar>
        )


    }
}