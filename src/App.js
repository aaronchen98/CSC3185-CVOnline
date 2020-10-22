import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon
} from "mdbreact";
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

class App extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
        <MDBNavbar color='indigo' dark expand='md' fixed='top' scrolling>
          <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
            <strong className='align-middle'>CV Online</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={this.toggleCollapse('mainNavbarCollapse')}
          />
          <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink
                  exact
                  to='/'
                  onClick={this.closeCollapse('mainNavbarCollapse')}
                >
                  <strong>Overview</strong>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2"><strong>Topics</strong></span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="#!">Image/Video Classification</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Object Detection</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Instance Segmentation</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Image/Video Enhancement</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Generative Adversarial Networks</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Object tracking</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2"><strong>Applications</strong></span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="#!">Retail</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Healthcare</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Manufacturing</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Autonomous vehicles</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Insurance</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Agriculture</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Defense and Security</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        {collapseID && overlay}
        <main style={{ marginTop: '4rem' }}>
          <Routes />
        </main>
        <MDBFooter color='indigo'>
            <p className='footer-copyright mb-0 py-3 text-center'>
              &copy; {new Date().getFullYear()} Copyright:
              <a href='https://www.MDBootstrap.com'> MDBootstrap.com </a>
            </p>
          </MDBFooter>
      </Router>
    );
  }
}

export default App;
