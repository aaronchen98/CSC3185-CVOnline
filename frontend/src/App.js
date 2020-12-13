import React from 'react';
import axios from 'axios';
import { BackTop } from 'antd';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'
import ImageVideoClassificationPage from './pages/topics/ImageVideoClassificationPage'
import ObjectDetectionPage from './pages/topics/ObjectDetectionPage'
import InstanceSegmentationPage from './pages/topics/InstanceSegmentationPage'
import ImageVideoEnhancementPage from './pages/topics/ImageVideoEnhancementPage'
import GenerativeAdversarialNetworksPage from './pages/topics/GenerativeAdversarialNetworksPage'
import ObjectTrackingPage from './pages/topics/ObjectTrackingPage'
import RetailPage from './pages/applications/RetailPage'
import HealthcarePage from './pages/applications/HealthcarePage'
import ManufacturingPage from './pages/applications/ManufacturingPage'
import AutonomousVehiclesPage from './pages/applications/AutonomousVehiclesPage'
import InsurancePage from './pages/applications/InsurancePage'
import AgriculturePage from './pages/applications/AgriculturePage'
import DefenseAndSecurityPage from './pages/applications/DefenseAndSecurityPage'
import Enter from './pages/Enter';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
const server = 'http://127.0.0.1:8000';

class App extends React.Component {
  
  render() {
    
    return (
      <> 
      {/* <Navabar/> */}
      <BackTop />
      <Router>
        <Switch>
          <Route path="/" exact component={Enter}/>
          <Route exact path='/homepage' component={HomePage} />
          <Route exact path='/topics/image-video-classification' component={ImageVideoClassificationPage} />
          <Route exact path='/topics/object-detection' component={ObjectDetectionPage} />
          <Route exact path='/topics/instance-segmentation' component={InstanceSegmentationPage} />
          <Route exact path='/topics/image-video-enhancement' component={ImageVideoEnhancementPage} />
          <Route exact path='/topics/generative-adversarial-networks' component={GenerativeAdversarialNetworksPage} />
          <Route exact path='/topics/object-tracking' component={ObjectTrackingPage} />
          <Route exact path='/applications/retail' component={RetailPage} />
          <Route exact path='/applications/healthcare' component={HealthcarePage} />
          <Route exact path='/applications/manufacturing' component={ManufacturingPage} />
          <Route exact path='/applications/autonomous-vehicles' component={AutonomousVehiclesPage} />
          <Route exact path='/applications/insurance' component={InsurancePage} />
          <Route exact path='/applications/agriculture' component={AgriculturePage} />
          <Route exact path='/applications/defense-and-security' component={DefenseAndSecurityPage} />
          <Route
            render={function () {
              return <h1>Not Found</h1>;
            }}
          />
        </Switch>
        </Router>
        {/* <Foot/> */}
          
      </>
    )
  }
}

export default App;
