import React from 'react';
import ParticlesBg from 'particles-bg';
// import testVideo from '../assets/video/test.mp4';
import Foot from './component/Foot';
import Navabar from './component/Navabar';
class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      
      <div class="body">
      <Navabar/>
      <ParticlesBg type="polygon" bg={true} />
        <div class="page">
        <h1>Hello!</h1>
        <p>A paragraph</p>
        {/* <video controls src={testVideo} type="video/mp4" /> */}
        </div>
        <Foot/>
        </div>
      </>
    )
  }
}

export default HomePage;
