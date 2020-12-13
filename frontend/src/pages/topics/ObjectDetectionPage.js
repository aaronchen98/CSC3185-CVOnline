import React from 'react';
import ParticlesBg from 'particles-bg';
import Foot from '../component/Foot';
import Navabar from '../component/Navabar';
import { Input } from 'antd';
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import axios from'axios';
import result from './py/output/detection.png';
const fake = 'https://res.cloudinary.com/candicelin/image/upload/v1607817705/dog_kqdssb.jpg';

class ObjectDetectionPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loadings: [],
      src:'',
      classify:false,
      input:false
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleDetection = this.handleDetection.bind(this);
  }
  handleInput(e) {
    var value = e.target.value
        this.setState({
            src:value
        })
}
  async handleDetection(){
    // await axios.post(`${server}/classification`,
    // {src:this.state.src})
    // .then(function(res){
    //   this.setState(({ loadings }) => {
    //     const newLoadings = [...loadings];
    //     newLoadings[index] = false;

    //     return {
    //       loadings: newLoadings,
    //       classify:true
    //     };
    //   });
    // })
    // .catch(function(err){
    //   console.log(err);
    // })
  }
  scrollToTop = () => window.scrollTo(0, 0);
 
  enterLoading = index => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
        classify:false,
        input:true
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
          classify:true
        };
      });
    }, 6000);
  };
    
  render() {
    const { loadings } = this.state;
    return (
      <>
      
      <div class = "body">
      <ParticlesBg type="square" bg={true} />
      <Navabar/>
        <div class="page">
        {/* Write your HTML/JSX below */}
        <h1 id="toc_0">Object Detection</h1>

<h2 id="toc_1">What is Object Recognition?</h2>

<p>Object recognition is a general term to describe a collection of related computer vision tasks that involve identifying objects in digital photographs.</p>

<p>Image classification involves predicting the class of one object in an image. Object localization refers to identifying the location of one or more objects in an image and drawing abounding box around their extent. Object detection combines these two tasks and localizes and classifies one or more objects in an image.</p>

<center><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glka8fav4dj31o00u07wi.jpg" alt=""/></p></center>

<p>As such, we can distinguish between these three computer vision tasks:</p>

<ul>
<li><strong>Image Classification</strong>: Predict the type or class of an object in an image.

<ul>
<li><em>Input</em>: An image with a single object, such as a photograph.</li>
<li><em>Output</em>: A class label (e.g. one or more integers that are mapped to class labels).</li>
</ul></li>
<li><strong>Object Localization</strong>: Locate the presence of objects in an image and indicate their location with a bounding box.

<ul>
<li><em>Input</em>: An image with one or more objects, such as a photograph.</li>
<li><em>Output</em>: One or more bounding boxes (e.g. defined by a point, width, and height).</li>
</ul></li>
<li><strong>Object Detection</strong>: Locate the presence of objects with a bounding box and types or classes of the located objects in an image.

<ul>
<li><em>Input</em>: An image with one or more objects, such as a photograph.</li>
<li><em>Output</em>: One or more bounding boxes (e.g. defined by a point, width, and height), and a class label for each bounding box.</li>
</ul></li>
</ul>

<p>One further extension to this breakdown of computer vision tasks is <em>object segmentation</em>, also called “object instance segmentation” or “semantic segmentation,” where instances of recognized objects are indicated by highlighting the specific pixels of the object instead of a coarse bounding box.</p>

<p>From this breakdown, we can see that object recognition refers to a suite of challenging computer vision tasks.</p>

<p>Most of the recent innovations in image recognition problems have come as part of participation in the ILSVRC tasks.</p>

<p>This is an annual academic competition with a separate challenge for each of these three problem types, with the intent of fostering independent and separate improvements at each level that can be leveraged more broadly. For example, see the list of the three corresponding task types below taken from the 2015 ILSVRC review paper:</p>

<ul>
<li>Image classification: Algorithms produce a list of object categories present in the image.</li>
<li>Single-object localization: Algorithms produce a list of object categories present in the image, along with an axis-aligned bounding box indicating the position and scale of one instance of each object category.</li>
<li>Object detection: Algorithms produce a list of object categories present in the image along with an axis-aligned bounding box indicating the position and scale of every instance of each object category.</li>
</ul>

<p>We can see that “Single-object localization” is a simpler version of the more broadly defined “Object Localization,” constraining the localization tasks to objects of one type within an image, which we may assume is an easier task.</p>

<p>Below is an example comparing single object localization and object detection, taken from the ILSVRC paper. Note the difference in ground truth expectations in each case.</p>

<center><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glka6v8tiuj30iy0h0nbv.jpg" alt=""/></p></center>

<h2 id="toc_2">Method</h2>

<h3 id="toc_3">R-CNN</h3>

<p>The R-CNN was described in the 2014 paper by Ross Girshick, et al. from UC Berkeley titled “Rich feature hierarchies for accurate object detection and semantic segmentation.”</p>

<p>It may have been one of the first large and successful application of convolutional neural networks to the problem of object localization, detection, and segmentation. The approach was demonstrated on benchmark datasets, achieving then state-of-the-art results on the VOC-2012 dataset and the 200-class ILSVRC-2013 object detection dataset.</p>

<p>Their proposed R-CNN model is comprised of three modules; they are:</p>

<ul>
<li>Module 1: Region Proposal. Generate and extract category independent region proposals, e.g. candidate bounding boxes.</li>
<li>Module 2: Feature Extractor. Extract feature from each candidate region, e.g. using a deep convolutional neural network.</li>
<li>Module 3: Classifier. Classify features as one of the known class, e.g. linear SVM classifier model.</li>
</ul>

<p>The architecture of the model is summarized in the image below, taken from the paper.</p>

<center><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glka9g4vrxj30rm09on2f.jpg" alt=""/></p></center>

<p>A computer vision technique is used to propose candidate regions or bounding boxes of potential objects in the image called “selective search,” although the flexibility of the design allows other region proposal algorithms to be used.</p>

<p>The feature extractor used by the model was the AlexNet deep CNN that won the ILSVRC-2012 image classification competition. The output of the CNN was a 4,096 element vector that describes the contents of the image that is fed to a linear SVM for classification, specifically one SVM is trained for each known class.</p>

<p>It is a relatively simple and straightforward application of CNNs to the problem of object localization and recognition. A downside of the approach is that it is slow, requiring a CNN-based feature extraction pass on each of the candidate regions generated by the region proposal algorithm. This is a problem as the paper describes the model operating upon approximately 2,000 proposed regions per image at test-time.</p>

<p>Python (Caffe) and MatLab source code for R-CNN as described in the paper was made available in the R-CNN GitHub repository.</p>

<h3 id="toc_4">Fast R-CNN</h3>

<p>Given the great success of R-CNN, Ross Girshick, then at Microsoft Research, proposed an extension to address the speed issues of R-CNN in a 2015 paper titled “Fast R-CNN.”</p>

<p>The paper opens with a review of the limitations of R-CNN, which can be summarized as follows:</p>

<ul>
<li><strong>Training is a multi-stage pipeline</strong>. Involves the preparation and operation of three separate models.</li>
<li><strong>Training is expensive in space and time</strong>. Training a deep CNN on so many region proposals per image is very slow.</li>
<li><strong>Object detection is slow</strong>. Make predictions using a deep CNN on so many region proposals is very slow.</li>
</ul>

<p>Fast R-CNN is proposed as a single model instead of a pipeline to learn and output regions and classifications directly.</p>

<p>The architecture of the model takes the photograph a set of region proposals as input that are passed through a deep convolutional neural network. A pre-trained CNN, such as a VGG-16, is used for feature extraction. The end of the deep CNN is a custom layer called a Region of Interest Pooling Layer, or RoI Pooling, that extracts features specific for a given input candidate region.</p>

<p>The output of the CNN is then interpreted by a fully connected layer then the model bifurcates into two outputs, one for the class prediction via a softmax layer, and another with a linear output for the bounding box. This process is then repeated multiple times for each region of interest in a given image.</p>

<p>The architecture of the model is summarized in the image below, taken from the paper.</p>

<center><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glkaai6wokj30uw0cedrr.jpg" alt=""/></p></center>

<h3 id="toc_5">YOLO</h3>

<p>Another popular family of object recognition models is referred to collectively as YOLO or “You Only Look Once,” developed by Joseph Redmon, et al.</p>

<p>The R-CNN models may be generally more accurate, yet the YOLO family of models are fast, much faster than R-CNN, achieving object detection in real-time.</p>

<p>The YOLO model was first described by Joseph Redmon, et al. in the 2015 paper titled “You Only Look Once: Unified, Real-Time Object Detection.” Note that Ross Girshick, developer of R-CNN, was also an author and contributor to this work, then at Facebook AI Research.</p>

<p>The approach involves a single neural network trained end to end that takes a photograph as input and predicts bounding boxes and class labels for each bounding box directly. The technique offers lower predictive accuracy (e.g. more localization errors), although operates at 45 frames per second and up to 155 frames per second for a speed-optimized version of the model.</p>

<p>The model works by first splitting the input image into a grid of cells, where each cell is responsible for predicting a bounding box if the center of a bounding box falls within it. Each grid cell predicts a bounding box involving the x, y coordinate and the width and height and the confidence. A class prediction is also based on each cell.</p>

<p>For example, an image may be divided into a 7×7 grid and each cell in the grid may predict 2 bounding boxes, resulting in 94 proposed bounding box predictions. The class probabilities map and the bounding boxes with confidences are then combined into a final set of bounding boxes and class labels. The image taken from the paper below summarizes the two outputs of the model.</p>

<center><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glkabb23s4j30ss0imtp8.jpg" alt=""/></p></center>

<h2>Object Detection Demo:</h2>
        <center>
          <div class="input">
          <Input placeholder="Image src" id="src"
          onChange={(e)=>this.handleInput(e)}/>
          
          <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => {this.enterLoading(1);this.handleDetection()}}
        >
          Detect
        </Button>
        </div>
        <br/>
        {this.state.input?<img src={fake}></img>:null}
        {/* {this.state.input?<img src={this.state.src}></img>:null} */}
        </center>
        <h3>Result:</h3>
        <center>
        {this.state.classify?<img src={result}></img>:null}
        </center>

        {/* Write your HTML/JSX above */}
        </div>
        <Foot/>
        </div>
      </>
    )
  }
}

export default ObjectDetectionPage;
