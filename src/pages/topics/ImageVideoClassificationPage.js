import React from 'react';
import ParticlesBg from 'particles-bg';
import Foot from '../Foot';
import Navabar from '../Navabar';
class ImageVideoClassificationPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      
      <div class = "body">
      <ParticlesBg type="square" bg={true} />
        <Navabar/>
        <div class="page">
        {/* Write your HTML/JSX below */}

        <h1 id="toc_0">Image Classification</h1>

        <h2 id="toc_1">Introduction</h2>

        <p><strong>Motivation</strong>. In this section we will introduce the Image Classification problem, which is the task of assigning an input image one label from a fixed set of categories. This is one of the core problems in Computer Vision that, despite its simplicity, has a large variety of practical applications. Moreover, as we will see later in the course, many other seemingly distinct Computer Vision tasks (such as object detection, segmentation) can be reduced to image classification.</p>

        <p><strong>Example</strong>. For example, in the image below an image classification model takes a single image and assigns probabilities to 4 labels, cat, dog, hat, mug. As shown in the image, keep in mind that to a computer an image is represented as one large 3-dimensional array of numbers. In this example, the cat image is 248 pixels wide, 400 pixels tall, and has three color channels Red,Green,Blue (or RGB for short). Therefore, the image consists of 248 x 400 x 3 numbers, or a total of 297,600 numbers. Each number is an integer that ranges from 0 (black) to 255 (white). Our task is to turn this quarter of a million numbers into a single label, such as “cat”.</p>

        <p>The task in Image Classification is to predict a single label (or a distribution over labels as shown here to indicate our confidence) for a given image. Images are 3-dimensional arrays of integers from 0 to 255, of size Width x Height x 3. The 3 represents the three color channels Red, Green, Blue.
        <div align="center">
        <img src="https://cs231n.github.io/assets/classify.png" alt="" /> 
        </div>
        </p>

        <h2 id="toc_2">Methods</h2>



        {/* Write your HTML/JSX above */}
        </div>
        <Foot/>
        </div>
      </>
    )
  }
}

export default ImageVideoClassificationPage;
