import React from 'react';
import '../css/pages.css';
class ObjectTrackingPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
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

export default ObjectTrackingPage;
