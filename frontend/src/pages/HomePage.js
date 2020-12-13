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
        <h1>Computer Vision</h1>
        <p>Computer vision is a field of artificial intelligence that trains computers to interpret and understand the visual world. Using digital images from cameras and videos and deep learning models, machines can accurately identify and classify objects — and then react to what they “see.”</p>
        <center><video controls src={homeVideo} type="video/mp4" /></center>
        <p>The fantasy that a machine is capable of simulating the human visual system is old. We’ve come a long way since the first university papers appeared back in the 1960s, as evidenced by the advent of modern systems trivially integrated into mobile applications.</p>

        <p>Today, computer vision is one of the hottest subfields of artificial intelligence and machine learning, given its wide variety of applications and tremendous potential. Its goal: to replicate the powerful capacities of human vision.</p>

        <center><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gll81epppkg30dw07tqv6.gif" alt=""/></p></center>

        <p>But, what exactly is computer vision? How is it currently applied in different industries? What are some well-known business use cases? What tasks are typical to computer vision?</p>

        <p>In this guide, you’ll learn about the basic concept of computer vision and how it’s used in the real world. It’s a simple examination of a complex problem for anybody who has ever heard of computer vision but isn’t quite sure what it’s all about and how it’s applied.</p>

        <h2 id="toc_1">Topics</h2>

        <div width="100%" overflow="visible">
        <table border="1" cellpadding="10" align="center" >
        <tr>
            <td align="center"><a href="/topics/image-video-classification">Image Classification</a></td>
            <td align="center"><a href="/topics/object-detection">Object Detection</a></td>
            <td align="center"><a href="/topics/instance-segmentation">Instance Segmentation</a></td>
            <td align="center"><a href="/topics/image-enhancement">Image Enhancement</a></td>
            <td align="center"><a href="/topics/generative-adversarial-networks">GAN</a></td>        
        </tr>
        </table>
        </div>


        <h2 id="toc_2">Applications</h2>

        <table border="1" cellpadding="10"  align="center">
            <tr>
                <td align="center"><a href="/applications/retail">Retail</a> </td>
                <td align="center"><a href="/applications/healthcare">Healthcare</a> </td>
                <td align="center"><a href="/applications/manufacturing">Manufacturing</a> </td>
                <td align="center"><a href="/applications/autonomous-vehicles">Autonomous Vehicles</a> </td>
                <td align="center"><a href="/applications/insurance">Insurance</a> </td>        
                <td align="center"><a href="/applications/agriculture">Agriculture</a> </td>        
                <td align="center"><a href="/applications/defense-and-security">Defense and Security</a> </td>        
            </tr>
        </table>
        </div>
        <Foot/>
        </div>
      </>
    )
  }
}

export default HomePage;
