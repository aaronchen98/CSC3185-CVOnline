import React from 'react';

// import testVideo from '../assets/video/test.mp4';

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      <div class = "body">
        <div class="page">
        <h1>Hello!</h1>
        <p>A paragraph</p>
        {/* <video controls src={testVideo} type="video/mp4" /> */}
        </div>
        </div>
      </>
    )
  }
}

export default HomePage;
