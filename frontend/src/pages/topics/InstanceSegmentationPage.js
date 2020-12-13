import React from 'react';
import ParticlesBg from 'particles-bg';
import Foot from '../component/Foot';
import Navabar from '../component/Navabar';
import {Upload, message  } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import axios from'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
const { Dragger } = Upload;
class InstanceSegmentationPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      classify:false,
      pic:['',''],
    };
  }
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    
    const _this = this;
    const  props = {
      name: 'file',
      action: 'http://localhost:8080/upload/segmentation',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'done') {
          _this.setState({classify:false})
          
        }
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          console.log(info)
          _this.setState({pic:['data:image/png;base64,' + info.file.response.in,'data:image/png;base64,' + info.file.response.out],classify:true})
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
      progress: {
        strokeColor: {
          '0%': '#108ee9',
          '100%': '#87d068',
        },
        strokeWidth: 3,
        status:"active",
        percent:"99"
        // format: percent => `${parseFloat(percent.toFixed(2))}%`,
      },
    };
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
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </Dragger>
        <br/>
        <center>
        {this.state.classify?<img src={this.state.pic[0]}></img>:null}
        </center>
        {this.state.classify?<h3>Result:</h3>:null}
        <center>
          {this.state.classify?<img src={this.state.pic[1]}></img>:null}
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
