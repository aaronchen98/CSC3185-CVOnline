import React from 'react';
import ParticlesBg from 'particles-bg';
import Foot from '../component/Foot';
import Navabar from '../component/Navabar';
class GenerativeAdversarialNetworksPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      
      <div class = "body">
      <ParticlesBg type="square" bg={true} />
        <Navabar/>
        <div class="page">
        {/* Write your HTML/JSX below */}

        <h1 id="toc_0">Generative Adversarial Network</h1>

        <p>A generative adversarial network (GAN) is a class of machine learning frameworks designed by Ian Goodfellow and his colleagues in 2014. Two neural networks contest with each other in a game (in the form of a zero-sum game, where one agent&#39;s gain is another agent&#39;s loss).</p>

        <p>Given a training set, this technique learns to generate new data with the same statistics as the training set. For example, a GAN trained on photographs can generate new photographs that look at least superficially authentic to human observers, having many realistic characteristics. Though originally proposed as a form of generative model for unsupervised learning, GANs have also proven useful for semi-supervised learning, fully supervised learning, and reinforcement learning.</p>

        <p>The core idea of a GAN is based on the &quot;indirect&quot; training through the discriminator, which itself is also being updated dynamically.[5] This basically means that the generator is not trained to minimize the distance to a specific image, but rather to fool the discriminator. This enables the model to learn in an unsupervised manner.</p>

        <h2 id="toc_1">How GANs Work</h2>

        <center><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glmjwgcf0sj31320ebabf.jpg" alt=""/></p></center>

        <p>One neural network, called the <em>generator</em>, generates new data instances, while the other, the <em>discriminator</em>, evaluates them for authenticity; i.e. the discriminator decides whether each instance of data that it reviews belongs to the actual training dataset or not.</p>

        <p>Let’s say we’re trying to do something more banal than mimic the Mona Lisa. We’re going to generate hand-written numerals like those found in the MNIST dataset, which is taken from the real world. The goal of the discriminator, when shown an instance from the true MNIST dataset, is to recognize those that are authentic.</p>

        <p>Meanwhile, the generator is creating new, synthetic images that it passes to the discriminator. It does so in the hopes that they, too, will be deemed authentic, even though they are fake. The goal of the generator is to generate passable hand-written digits: to lie without being caught. The goal of the discriminator is to identify images coming from the generator as fake.</p>

        <p>Here are the steps a GAN takes:</p>

        <ul>
        <li>The generator takes in random numbers and returns an image.</li>
        <li>This generated image is fed into the discriminator alongside a stream of images taken from the actual, ground-truth dataset.</li>
        <li>The discriminator takes in both real and fake images and returns probabilities, a number between 0 and 1, with 1 representing a prediction of authenticity and 0 representing fake.</li>
        </ul>

        <p>So you have a double feedback loop:</p>

        <ul>
        <li>The discriminator is in a feedback loop with the ground truth of the images, which we know.</li>
        <li>The generator is in a feedback loop with the discriminator.</li>
        </ul>

        <center><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glmjy47bgcj31640iutee.jpg" alt=""/></p></center>

        <br/>
        <h2 id="toc_2">A Interesting Demo</h2>
        <a href="http://127.0.0.1:8000">Demo</a>

        {/* Write your HTML/JSX above */}
        </div>
        <Foot/>
        </div>
      </>
    )
  }
}

export default GenerativeAdversarialNetworksPage;
