import React from 'react';
import ParticlesBg from 'particles-bg';
import Foot from '../Foot';
import Navabar from '../Navabar';
class InstanceSegmentationPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      
      <div class = "body">
      <ParticlesBg type="square" bg={true} />
        <Navabar/>
        <div class="page">
        {/* Write your HTML/JSX below */}
        <h1>Example Title</h1>
        <p>Example text</p>
        {/* Write your HTML/JSX above */}
        </div>
        <Foot/>
        </div>
      </>
    )
  }
}

export default InstanceSegmentationPage;
