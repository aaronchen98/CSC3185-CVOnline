import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage'
import ImageVideoClassificationPage from './pages/ImageVideoClassificationPage'
import ObjectDetectionPage from './pages/ObjectDetectionPage'
import InstanceSegmentationPage from './pages/InstanceSegmentationPage'
import ImageVideoEnhancementPage from './pages/ImageVideoEnhancementPage'
import GenerativeAdversarialNetworksPage from './pages/GenerativeAdversarialNetworksPage'
import ObjectTrackingPage from './pages/ObjectTrackingPage'
import RetailPage from './pages/RetailPage'
import HealthcarePage from './pages/HealthcarePage'
import ManufacturingPage from './pages/ManufacturingPage'
import AutonomousVehiclesPage from './pages/AutonomousVehiclesPage'
import InsurancePage from './pages/InsurancePage'
import AgriculturePage from './pages/AgriculturePage'
import DefenseAndSecurityPage from './pages/DefenseAndSecurityPage'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
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
    )
  }
}

export default Routes;
