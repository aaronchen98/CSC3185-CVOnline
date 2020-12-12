import React from 'react';
import vehicle1 from './img/vehicle1.png';
import ParticlesBg from 'particles-bg';
import Foot from '../Foot';
import Navabar from '../Navabar';

class AutonomousVehiclesPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    const vehicleVideo = "https://www.youtube.com/watch?v=7Xyd9SKM8ws";
    return (
      <>
      <div class = "body">
      <ParticlesBg type="fountain" bg={true} />
      <Navabar/>
      
        <div class="page">
        {/* Write your HTML/JSX below */}
        <h1>Autonomous vehicles</h1>
        <div align="center"><video controls src={vehicleVideo} type="video/mp4" /></div><br/> 
        <p>Have you ever wondered how self-driving cars can “see”? The field of computer vision plays a central role in the domain of autonomous vehicles, since it allows them to perceive and understand the environment around them in order to operate correctly.</p>
        <p>One of the most exciting challenges in computer vision is object detection in images and videos. This involves locating a varying number of objects and the ability to classify them, in order to distinguish if an object is a traffic light, a car, or a person, as in the video below.</p>
        <div align="center"><img src={vehicle1}></img></div>
        <div align="center" ><i><font color="grey">Object detection for self-driving cars</font></i></div><br/> 
        <p>This kind of technology, combined with the analysis of data from other sources, such as sensors and/or radars, is what allows a car to “see”.</p>
        {/* Write your HTML/JSX above */}
        </div>
        <Foot/>
        </div>
      </>
    )
  }
}

export default AutonomousVehiclesPage;
