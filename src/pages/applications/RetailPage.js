import React from 'react';
import ParticlesBg from 'particles-bg';
import retail1 from './img/retail1.png';
import retail2 from './img/retail2.png';
import Foot from '../Foot';
import Navabar from '../Navabar';
class RetailPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    const retailVideo = 'https://www.youtube.com/watch?v=jiaNA1hln5I&feature=emb_logo';
    return (
        <>
        <div class = "body">
          <Navabar/>
        <ParticlesBg type="fountain" bg={true} />
        
        <div class="page">
        <h1>Retail</h1>
        <div class="introduction">The use of computer vision in the retail sector has been one of the most important technological trends in recent years. Below, you’ll be introduced to some very common use cases. </div>
        
        <h2>Behavioral tracking</h2>
        <p>Brick and mortar retailers use computer vision algorithms in combination with store cameras to understand who their customers are and how they behave.</p>
        <p>Algorithms are able to recognize faces and <b>determine human characteristics</b>, such as gender or age range. What’s more, retailers can use computer vision techniques to <b>track customers’ movements</b> through stores, analyze navigational routes, detect walking patterns, and measure storefront attention times, as showed in this demo:</p>
        <div align="center"><video controls src={retailVideo} type="video/mp4" /></div><br/> 
        <p>Computer vision technology is able to analyze behavior patterns in the store and on this basis create heat-maps of stores. Thus, the analysis of customer behavior makes it possible to determine issues such as the best store layout to maximize profits, better product layout, which products should be added or what additional promotions should be considered. </p>
        <p>In addition, computer vision is also an excellent tool for developing <b>anti-theft mechanisms</b>. Among other things, face recognition algorithms can be trained to spot known shoplifters or to detect when someone is hiding an item in their backpack.</p>
       
        <h2>Inventory management</h2>
        <p>When it comes to inventory management, there are two main computer vision applications.</p>
        <p>Through security camera image analysis, a computer vision algorithm can generate a <b>very accurate estimate of the items available in the store</b>. This is extremely valuable information for store managers, who can immediately become aware of an unusual increase in demand and react early and efficiently.</p>
        <div align="center"><img src={retail1}></img> 
        <div class="description">Another fairly common application is <b>analyzing the use of shelf space to identify suboptimal configurations</b>. In addition to discovering lost space, an algorithm of this nature can suggest better item placement.</div></div>      
       
        <h2>Vending store </h2>
        <p>Computer vision technology can be treated as a detection tool. The Amazon Go concept store in Seattle tracks shoppers using CV, with sensors on the shelves detecting when they pick up an item. It then registers all the items in the shopper’s shopping basket with the Go mobile app, and does away with the checkout process altogether – the shopper simply leaves the shop, with the Go app taking the money automatically from the shopper’s nominated credit card. The receipt is sent straight to the app.</p>
        <div align="center"><img src={retail2}></img></div>
        </div>
        <Foot/>
        </div>
        
        </>
    )
  }
}

export default RetailPage;
