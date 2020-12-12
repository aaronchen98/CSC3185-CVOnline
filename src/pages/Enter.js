import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import { Redirect } from 'react-router-dom';
import MouseParticles from 'react-mouse-particles';
import './css/index.css';
class Enter extends Component {
  constructor(props){
    super(props);
    this.state={
        page : false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
        page : true
    })
  }

  render () {
    if (this.state.page) return(<Redirect path to="/homepage"/>)
        return (
            <>
            <ParticlesBg type="circle" num={50} bg={true} position="center"/>
            
            <div class="intro-container">
        
            <h1>AN INTRODUCTORY GUIDE TO <br/>COMPUTER VISION</h1>

            <div class="button shift-camera-button"
                onClick={this.handleClick}>
                <div class="border">
                    <div class="left-plane"></div>
                    <div class="right-plane"></div>
                </div>	
                <div class="text">Enter</div>
                </div>
            </div>
        </>
        )
    }
}
export default Enter;