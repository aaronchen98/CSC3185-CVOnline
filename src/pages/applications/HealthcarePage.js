import React from 'react';
import health1 from './img/health1.png';
import ParticlesBg from 'particles-bg';
import Foot from '../component/Foot';
import Navabar from '../component/Navabar';
class HealthcarePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      
      <div class = "body">
      <ParticlesBg type="fountain" bg={true} />
        <Navabar/>
        <div class="page">
        {/* Write your HTML/JSX below */}
        <h1>Healthcare</h1>
        <h2>Medical image analysis</h2>
        <p>In the healthcare domain, the number of existing computer vision applications is impressive.</p>
        <p>Undoubtedly, <b>medical image</b> analysis is the best known example, since it helps to significantly improve the medical diagnostic process. Images from MRIs, CT scans, and X-rays are analyzed to find anomalies such as tumors or search for signs of neurological illnesses.</p>
        <p>In many cases, it’s all about image analysis techniques, which extract features from images in order to train a classifier to be able to detect anomalies. However, there are specific applications where finer processing is required. For example, in the analysis of images from colonoscopies, it is necessary to segment the images to look for polyps and prevent colorectal cancer.</p>
        <div align="center"><img src={health1}></img>
        <div class="description">Volume segmentation of a 3D-rendered CT scan of the thorax</div> </div>
        <p>The image above is a result of image segmentation used to visualize thoracic elements. The system segments and colors each important part: the pulmonary arteries (blue), the pulmonary veins (red), the mediastinum (yellow), and the diaphragm (violet).</p>
        <p>A large amount of applications of this type are currently in use, as varied as techniques that estimate the amount of blood lost due to postpartum hemorrhages; quantify coronary artery calcium; and evaluate blood flow in the human body without an MRI.</p>
        
        <h2>Medical Imaging</h2>
        <p>For the last decades, computer-supported medical imaging application has been a trustworthy help for physicians. It doesn’t only create and analyze images, but also becomes an assistant and helps doctors with their interpretation. The application is used to read and convert 2D scan images into interactive 3D models that enable medical professionals to gain a detailed understanding of a patient’s health condition.</p>
        
        <h2>Disease Diagnostics</h2>
        <p>Scientists are applying deep learning and natural language programming (NLP) systems to gather patient information, analyze patient’s responses, and narrow down the diagnosis in a pre-appointment interview. The system sends these findings to the doctor before the patient comes in for the visit.</p>
        <p>Ellie, a computer vision program designed by scientists at the Institute of Creative Technologies at the University of Southern California, was built to do this. Ellie asks the patient a series of questions and, using the built-in webcam and sensor, scans the patient’s face to assess their facial and body movements to formulate probable diagnoses.</p>
        <p>By comparing verbal cues as well as subtle facial and body movements with a dataset of thousands of control, Ellie can detect patients with mental health problems including depression and anxiety. While this program does not replace a human doctor, it provides subtle information that doctors may not easily elicit, improving the diagnosis of certain diseases.</p>
        <p>Babylon Health, a British tech startup, is also developing NLP and deep learning systems that use speech and language processing to extract symptoms and physical findings that are integral to formulating a diagnosis. These data are forwarded to a doctor to analyze before evaluating a patient.</p>
        <p>These algorithms not only use these patient data to make diagnoses, but they also provide personalized health information and education in greater detail than a doctor ever could.</p>
        {/* Write your HTML/JSX above */}
        </div>
        <Foot/>
        </div>
      </>
    )
  }
}

export default HealthcarePage;
