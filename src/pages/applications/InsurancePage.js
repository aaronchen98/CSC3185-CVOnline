import React from 'react';
import '../css/pages.css';
import ParticlesBg from 'particles-bg';
class InsurancePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      <ParticlesBg type="circle" bg={true} />
       <div class = "body">
        <div class="page">
        {/* Write your HTML/JSX below */}
        <h1>Insurance</h1>
        <p>The use of computer vision in insurance has had great impact, particularly in claims processing.</p>
        <p>A computer vision application can guide clients through the process of <b>visually documenting a claim</b>. In real time, it can analyze images and send them to the appropriate agents. At the same time, it can estimate and adjust repair costs, determine if the insurance covers them and even check for possible fraud. All this minimizes the length of the claims cycle, resulting in a better client experience.</p>
        <p>From a preventive point of view, computer vision is of immense help in <b>avoiding accidents</b>; there are applications for preventing collisions, integrated into industrial machinery, cars, and drones. This is a new era of risk management that will most likely change the insurance field.</p>
        {/* Write your HTML/JSX above */}
        </div>
        </div>
      </>

    )
  }
}

export default InsurancePage;
