import React from 'react';
import ParticlesBg from 'particles-bg';
import Foot from '../component/Foot';
import Navabar from '../component/Navabar';
import { Input } from 'antd';
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import axios from'axios';
import result from './py/output/segmentation.png';
const fake = 'https://res.cloudinary.com/candicelin/image/upload/v1607797724/timg-2_puhqmo.jpg';

class InstanceSegmentationPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loadings: [],
      src:'',
      classify:false,
      input:false
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSegmentation = this.handleSegmentation.bind(this);
  }
  handleInput(e) {
    var value = e.target.value
        this.setState({
            src:value
        })
}
  async handleSegmentation(){
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
        <h1 id="toc_0">Instance Segmentation</h1>

<h2 id="toc_1">Introduction</h2>

<center><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glkaevsm9xj30rq0bkjza.jpg" alt=""/></p></center>

<p>Instance segmentation is popular image processing task, to understand this technique we must first understand it’s subtasks.</p>

<p><strong><em>Classification</em></strong> is categorization process, where each instance, in our case object in image is being labeled with information what it is and score describing weight of prediction in percentage.</p>

<p><strong><em>Object Detection </em></strong>extends classification for multiple objects in one image as well as their detection, it is usually described in results as bounding boxes.</p>

<p><strong><em>Semantic Segmentation</em></strong> in nutshell makes prediction for each pixel of image to decide which class, in result we can obtain layers of each present class in image, for example as if you wanted extract human from image in photoshop.</p>

<p>Finally <strong><em>Instance Segmentation </em></strong>consist of all previously mentioned tasks with modification for semantic segmentation to apply locally for each object found by object detection and each individual instance of class.</p>

<center><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glkada5aw2j30ro0ksdsm.jpg" alt=""/></p></center>

<h2 id="toc_2">Examples</h2>

<p>Instance segmentation results:<br/>
<center><img src="https://tryolabs.com/blog/images/blog/post-images/computer-vision-guide/instance-segmentation-beatles.aef0d5b6.png" alt="" /></center></p>

<p>You can see in the image above how the instance segmentation algorithm finds masks for the four Beatles and some cars (although the result is incomplete, especially where it comes to Lennon).</p>

<p>Such results would be very expensive if the tasks were carried out manually, but the technology makes it easy to achieve them. In France, the law prohibits exposing children in the media without the explicit consent of their parents. Using instance segmentation techniques, it’s possible to blur out young children’s faces on television or in film, when they are interviewed or captured outdoors, as may be the case during student strikes.</p>

<p>Brain Tumor MRI and corresponding mask:<br/>
<center><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glk7b81arcj312w0nc13b.jpg" alt="Brain Tumor MRI and corresponding mask"/></center></p>

<h2 id="toc_3">Methods</h2>

<h3 id="toc_4">Mask Faster R-CNN</h3>

<p>In this article we will focus only on archetype of <a href="https://arxiv.org/abs/1506.01497">Faster R-CNN</a> version, which had many predecessors, for history fans or those interseted more in R-CNN achitecture <a href="https://towardsdatascience.com/instance-segmentation-using-mask-r-cnn-7f77bdd46abd">this article</a> is recommended. Now we will generally describe parts of this architecture.</p>

<p><strong>Backbone </strong>is CNN which transforms input image into features, which are further used by other components. It usually uses well known CNN architectures such as ResNet, VGG, ConvNet, etc.. Nowadays ResNet is one of the most popular especially with <a href="https://arxiv.org/pdf/1612.03144.pdf">Feature Pyramid Network modification</a>.</p>

<p><strong>RPN</strong>, Region Proposal Network is trained to detect objects on features obtained from backbone, objects are detected in rectangular areas, which can be modified to be found in various sizes and side size ratios (1:2, 1:1, 2:1). Outputs are anchors described by starting coordinates and sizes.</p>

<p><strong>ROI Pooling</strong>, because Regions of Interest from features and anchors have various sizes and shapes, it would be necessary to train following Neural Network parts for each configuration, which is time and space consuming. For this case there is workaround by ROI Pooling and Align, which transform shape and size of region by pooling and bilinear interpolation method to be uniform for all.</p>

<p><strong>Classifier</strong> takes ROI Pooling output features as input and labels instance of object with evaluating score of prediction.</p>

<p><a href="https://arxiv.org/pdf/1703.06870.pdf"><strong>Mask R-CNN</strong></a> is extension of Faster R-CNN, which works as branch parallel with classifier and takes the same inputs and uses them to predict masks of objects.</p>

<p>In summary outputs of this network are bounding boxes, classes, scores and masks of predicted objects.</p>

<center><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glkae840jdj30kx0fxq5f.jpg" alt=""/></p></center>

<h2>Instance Segmentation Demo:</h2>
        <center>
          <div class="input">
          <Input placeholder="Image src" id="src"
          onChange={(e)=>this.handleInput(e)}/>
          
          <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => {this.enterLoading(1);this.handleSegmentation()}}
        >
          Segmentate
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

export default InstanceSegmentationPage;