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
        <img src="https://cs231n.github.io/assets/classify.png" alt=""/></p>

        <h2 id="toc_2">Supervised classification</h2>

        <p>Supervised classification is based on the idea that a user can select sample pixels in an image that are representative of specific classes and then direct the image processing software to use these training sites as references for the classification of all other pixels in the image. Training sites (also known as testing sets or input classes) are selected based on the knowledge of the user. The user also sets the bounds for how similar other pixels must be to group them together. These bounds are often set based on the spectral characteristics of the training area. The user also designates the number of classes that the image is classified into. Once a statistical characterization has been achieved for each information class, the image is then classified by examining the reflectance for each pixel and making a decision about which of the signatures it resembles most. Supervised classification uses classification algorithms and regression techniques to develop predictive models. The algorithms include linear regression, logistic regression, neural networks, decision tree, support vector machine, random forest, naive Bayes, and k-nearest neighbor.</p>

        <h2 id="toc_3">Unsupervised classification</h2>

        <p>Unsupervised classification is where the outcomes (groupings of pixels with common characteristics) are based on the software analysis of an image without the user providing sample classes. The computer uses techniques to determine which pixels are related and groups them into classes. The user can specify which algorithm the software will use and the desired number of output classes but otherwise does not aid in the classification process. However, the user must have knowledge of the area being classified when the groupings of pixels with common characteristics produced by the computer have to be related to actual features on the ground. Some of the most common algorithms used in unsupervised learning include cluster analysis, anomaly detection, neural networks, and approaches for learning latent variable models.</p>

        <h2 id="toc_4">dataset</h2>

        <p>COCO Sponsored by Microsoft is a large-scale object detection, segmentation, and captioning dataset. It contains images, bounding boxes and labels. There are two versions 2014 and 2017 that use the same images but different train, validation and test splits. COCO defines 91 classes but the data only uses 80 classes and some images don’t have annotations. For the purpose of this project, we picked the 2017 validation dataset which is about 5000 images.
        Through COCO API, we found out that most images have more than one object with annotations for the same or different category. That led us to make use of this property by cropping the objects using the bounding boxes annotation and considering them as independent images in order to overcome the multi classes in the same image problem so we can feed the models with a single class image which makes it easier to classify. As a result, the number of images multiplied more than 20 times as shown in the chart below.</p>

        <p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glk9wuiwjvj30i30o60tg.jpg" alt=""/></p>

        <h2 id="toc_5">Structure for performing Image Classification</h2>

        <ol>
        <li><strong><em>Image Pre-processing</em></strong><em>:</em> The aim of this process is to improve the image data (features) by suppressing unwanted distortions and enhancement of some important image features so that the computer vision models can benefit from this improved data to work on. Steps for image pre-processing includes<strong> </strong>Reading image, Resizing image, and Data Augmentation (Gray scaling of image, Reflection, Gaussian Blurring, Histogram, Equalization, Rotation, and Translation).</li>
        <li><strong><em>Detection of an object</em></strong><em>:</em> Detection refers to the localization of an object which means the segmentation of the image and identifying the position of the object of interest.</li>
        <li><strong><em>Feature extraction and training</em></strong><em>:</em> This is a crucial step wherein statistical or deep learning methods are used to identify the most interesting patterns of the image, features that might be unique to a particular class and that will, later on, help the model to differentiate between different classes. This process where the model learns the features from the dataset is called model training.</li>
        <li><strong><em>Classification of the object</em></strong><em>:</em> This step categorizes detected objects into predefined classes by using a suitable classification technique that compares the image patterns with the target patterns.</li>
        </ol>

        <h2 id="toc_6">Convolutional Neural Network</h2>

        <p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glk9w55a1xj30rs09hju7.jpg" alt=""/></p>

        <p>Convolutional Neural Network (CNN, or ConvNet) are a special kind of multi-layer neural networks, designed to recognize visual patterns directly from pixel images with minimal pre-processing. It is a special architecture of artificial neural networks. Convolutional neural network uses some of its features of visual cortex and have therefore achieved state of the art results in computer vision tasks. Convolutional neural networks are comprised of two very simple elements, namely convolutional layers and pooling layers. Although simple, there are near-infinite ways to arrange these layers for a given computer vision problem. The elements of a convolutional neural network, such as convolutional and pooling layers, are relatively straightforward to understand. The challenging part of using convolutional neural networks in practice is how to design model architectures that best use these simple elements. The reason why convolutional neural network is hugely popular is because of their architecture, the best thing is there is no need of feature extraction. The system learns to do feature extraction and the core concept is, it uses convolution of image and filters to generate invariant features which are passed on to the next layer. The features in next layer are convoluted with different filters to generate more invariant and abstract features and the process continues till it gets final feature/output which is invariant to occlusions. The most commonly used architectures of convolutional neural network are LeNet, AlexNet, ZFNet, GoogLeNet, VGGNet, and ResNet.</p>




        {/* Write your HTML/JSX above */}
        </div>
        <Foot/>
        </div>
      </>
    )
  }
}

export default ImageVideoClassificationPage;
