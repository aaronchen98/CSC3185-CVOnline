import React from 'react';
import '../css/pages.css';
import ParticlesBg from 'particles-bg';
class ObjectDetectionPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      <ParticlesBg type="square" bg={true} />
      <div class = "body">
        <div class="page">
        {/* Write your HTML/JSX below */}
        <h1>Example Title</h1>
        <p>Example text</p>
        {/* Write your HTML/JSX above */}
        </div>
        </div>
      </>
    )
  }
}

export default ObjectDetectionPage;
