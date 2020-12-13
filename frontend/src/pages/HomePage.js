import React from 'react';
import ParticlesBg from 'particles-bg';
// import testVideo from '../assets/video/test.mp4';
import Foot from './component/Foot';
import Navabar from './component/Navabar';
const homeVideo = 'https://res.cloudinary.com/candicelin/video/upload/v1607826430/videoplayback_on3hth.mp4'
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
        <center><video controls src={homeVideo} type="video/mp4" /></center>
        </div>
        <Foot/>
        </div>
      </>
    )
  }
}

export default HomePage;
