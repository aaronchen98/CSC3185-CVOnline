import React from 'react';
import ParticlesBg from 'particles-bg';
import Foot from '../component/Foot';
import Navabar from '../component/Navabar';
class DefenseAndSecurityPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      
      <div class = "body">
      <ParticlesBg type="fountain" bg={true} />
        <Navabar/>
        <div class="page">
        {/* Write your HTML/JSX below */}
        <h1>Defense and Security</h1>
        <p>Similar to the case of retailers, companies with high security requirements, such as banks or casinos, can benefit from computer vision applications that allow them to <b>identify customers</b> based on analyzing images from security cameras.</p>
        <p>On another level, computer vision is a powerful ally in terms of <b>homeland security tasks</b>. It can be used to improve cargo inspection at ports or for surveillance of sensitive places such as embassies, power plants, hospitals, railroads, and stadiums. The main idea in this context is that computer vision not only analyzes and classifies images, but can also build detailed and meaningful descriptions of a scene, providing, in real time, key elements for decision-makers.</p>
        <p>In general, computer vision is used extensively in <b>defense tasks</b> such as reconnaissance of enemy terrain, automatic identification of enemies in images, automating vehicle and machine movements, and search and rescue.</p>
        {/* Write your HTML/JSX above */}
        </div>
        <Foot/>
        </div>
      </>
    )
  }
}

export default DefenseAndSecurityPage;
