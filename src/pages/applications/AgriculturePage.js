import React from 'react';
import agriculture1 from './img/agriculture1.png';
import Foot from '../component/Foot';
import Navabar from '../component/Navabar';
import ParticlesBg from 'particles-bg';
class AgriculturePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      <div class = "body">
      <ParticlesBg type="fountain" bg={true} />
        <Navabar/>
        <div class="page">
        {/* Write your HTML/JSX below */}
        <h1>Agriculture</h1>
        <p>Agriculture is a major industry where computer vision is having a tremendous impact, especially in the area of precision agriculture.</p>
        <div align="center"><img src={agriculture1}></img></div>
        <p>In <b>grain production</b>, a global economic activity, a series of valuable applications have been developed. Grain production faces certain recurring issues, which historically have been monitored by humans. However, computer vision algorithms can now detect, or in some cases can reasonably predict, diseases or pest and insect infestations. Early diagnosis allows farmers to take appropriate measures quickly, reducing losses and ensuring production quality.</p>
        <p>Another permanent challenge is <b>weed control</b>, considering that weeds have become resistant to herbicides over time and represent significant losses for farmers. There are robots with integrated computer vision technology that monitor an entire farm and spray herbicides precisely. This saves huge volumes of pesticides, which is an incredible benefit for the planet and in terms of production costs.</p>
        <p><b>Soil quality</b> is likewise a major factor in agriculture. There are applications that can recognize, from images taken with mobile phones, potential defects and nutritional deficiencies in soils. After analyzing the images sent, these applications suggest soil restoration techniques and possible solutions to the problems detected.</p>
        <p>Computer vision can be further used in sorting. There are algorithms for sorting fruits, vegetables, and even flowers, by identifying their main properties (e.g. size, quality, weight, color, texture). These algorithms are additionally capable of spotting defects and estimating which items will last longer and which should be sent to local markets. This leads to the maximization of the shelf life of the items and reduces time-to-market.</p>
        
        {/* Write your HTML/JSX above */}
        </div>
        <Foot/>
        </div>
      </>
    )
  }
}

export default AgriculturePage;
