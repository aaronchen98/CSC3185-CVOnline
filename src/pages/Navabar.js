import React, { Component } from 'react';
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
    MDBNavLink
  } from "mdbreact";
class Navabar extends Component {
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
  render () {
    const overlay = (
        <div
          id='sidenav-overlay'
          style={{ backgroundColor: 'transparent' }}
          onClick={this.toggleCollapse('mainNavbarCollapse')}
        />
      );
  
      const { collapseID } = this.state;
    return (
      
        <div>
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
                    to='/homepage'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Home</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="mr-2"><strong>Topics</strong></span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu >
                      <MDBDropdownItem onClick={()=>{this.setState({enter:true})}} href="/topics/image-video-classification">Image/Video Classification</MDBDropdownItem>
                      <MDBDropdownItem href="/topics/object-detection">Object Detection</MDBDropdownItem>
                      <MDBDropdownItem href="/topics/instance-segmentation">Instance Segmentation</MDBDropdownItem>
                      <MDBDropdownItem href="/topics/image-video-enhancement">Image/Video Enhancement</MDBDropdownItem>
                      <MDBDropdownItem href="/topics/generative-adversarial-networks">Generative Adversarial Networks</MDBDropdownItem>
                      <MDBDropdownItem href="/topics/object-tracking">Object Tracking</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="mr-2"><strong>Applications</strong></span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="/applications/retail">Retail</MDBDropdownItem>
                      <MDBDropdownItem href="/applications/healthcare">Healthcare</MDBDropdownItem>
                      <MDBDropdownItem href="/applications/manufacturing">Manufacturing</MDBDropdownItem>
                      <MDBDropdownItem href="/applications/autonomous-vehicles">Autonomous Vehicles</MDBDropdownItem>
                      <MDBDropdownItem href="/applications/insurance">Insurance</MDBDropdownItem>
                      <MDBDropdownItem href="/applications/agriculture">Agriculture</MDBDropdownItem>
                      <MDBDropdownItem href="/applications/defense-and-security">Defense and Security</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {collapseID && overlay}
          </div>
         
      )
  }
}
export default Navabar;