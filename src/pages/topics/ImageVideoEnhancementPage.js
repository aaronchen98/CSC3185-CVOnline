import React from 'react';
import ParticlesBg from 'particles-bg';
class ImageVideoEnhancementPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      <ParticlesBg type="square" bg={true} />
      <div class = "body">
        <div class="page">
        {/* Write your HTML/JSX below */}
        <h1 id="toc_0">Image Restoration</h1>
        <h2 id="toc_1">Introduction</h2>

        <div align="center">
          <img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gk6hhf7dxtj319d0g7dt9.jpg" width="50%" alt="" />
        <small><center>Example 1: Image Inpainting</center></small>
        </div>

        <p>Image restoration deems to reconstruct or recover a original image from degraded image by utilizing a priori knowledge of the degradation phenomenon which is also called as ill-posed inverse problem. In image restoration problem or ill-posed inverse problem, the information loss due to image acquisition and transmission is restored based on some constraints which are suitable for natural images and medical images.</p>

        <p>Image restoration is the operation of taking a corrupt/noisy image and estimating the clean, original image. Corruption may come in many forms such as motion blur, noise and camera mis-focus.[1] Image restoration is performed by reversing the process that blurred the image and such is performed by imaging a point source and use the point source image, which is called the Point Spread Function (PSF) to restore the image information lost to the blurring process.</p>

        <p>Image restoration is different from image enhancement in that the latter is designed to emphasize features of the image that make the image more pleasing to the observer, but not necessarily to produce realistic data from a scientific point of view. Image enhancement techniques (like contrast stretching or de-blurring by a nearest neighbor procedure) provided by imaging packages use no a priori model of the process that created the image.</p>

        <p>With image enhancement noise can effectively be removed by sacrificing some resolution, but this is not acceptable in many applications. In a fluorescence microscope, resolution in the z-direction is bad as it is. More advanced image processing techniques must be applied to recover the object.</p>

        <p>We will show you some interesting examples of image restoration.</p>

        <div align="center">
        <iframe width="641" height="361" src="https://www.youtube.com/embed/8DPHSwpDNVc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <small><center>Example 2: Image Super-Resolution</center></small>
        </div>

        <h2 id="toc_2">Degradations</h2>

        <p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glkamdje9pj30hk0dc40f.jpg" alt=""/></p>

        <h2 id="toc_3">Examples</h2>

        <p><strong>Old Photo Restoration</strong></p>

        <p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glkasdmyc2j30j4066af0.jpg" alt=""/></p>

        {/* Write your HTML/JSX above */}
        </div>
        </div>
      </>
    )
  }
}

export default ImageVideoEnhancementPage;
