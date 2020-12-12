import React from 'react';
import manufacturing1 from './img/manufacturing1.png';
import ParticlesBg from 'particles-bg';
import Foot from '../Foot';
import Navabar from '../Navabar';
class ManufacturingPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      
      <div class = "body">
      <ParticlesBg type="fountain" bg={true} />
        <Navabar/>
        <div class="page">
        {/* Write your HTML/JSX below */}
        <h1>Manufacturing</h1>

        <h2>predictive maintenance</h2>
        <p>Major problems that can occur on a manufacturing line are the breaking of machines or the production of defective components. These result in delays and significant losses in profits.</p>
        <p>Computer vision algorithms prove to be a great means of <b>predictive maintenance</b>. By analyzing visual information (e.g. from cameras attached to robots), algorithms can identify potential trouble before it occurs. The fact that a system can anticipate that a packaging or car assembly robot will fail is a huge contribution.</p>
        
        <h2>defect reduction</h2>
        <p>The same idea applies to <b>defect reduction</b>, where the system can spot defects in components throughout the entire production line. This allows manufacturers to take actions in real time and decide what should be done to resolve the issue. Perhaps the defect is not so serious and the process can continue, but the product is flagged in some way or redirected through a specific production path. Sometimes, however, it may be necessary to stop the production line. Of further interest is that the system can be trained, for each use case, to classify the defects by types and degrees of severity.</p>
        
        <h2>Packaging Inspection</h2>
        <div align="center"><img src={manufacturing1}></img></div><br/>        
        <p>It is critical for pharmaceutical companies to count tablets or capsules before placing them into containers.  To solve this problem, Pharma Packaging Systems, who are based in England, has developed a solution that can be deployed to existing production lines or even ran as a standalone unit.</p>
        <p>A key feature of the solution involves using computer vision to check for broken or partially formed tablets.  As tablets make their way through the production line, pictures are taken and transferred to a dedicated PC that then processes the images using software which then runs further analysis to check if the tablets are the right color, length, width, and whole.</p>
        <p>The PC based Vision Inspection system is also implemented to a PC that performs the counting function and if a tablet is deemed as defective, this information is logged which then sends a signal to the counting functioning, and by the time the bottle of containers reaches the end of production line, containers that have defective tablets are then rejected, thereby removing the possibility of shipping defective medical tablets.</p>
      
        <h2>Reading barcodes</h2>
        <p>Reading, identifying and processing hundreds and thousands of barcodes per day is no easy task and something that humans simply cannot do at scale.</p>
        <p>For example, cell phones and mobile devices require smaller and smaller printed circuit boards (or PCBs).  As manufacturers are pressured to produce higher volumes of PCBs for the ever-growing tech market, they are looking towards a process known as “panelization”.  In this process, a number of identical circuit boards are printed onto a large panel, each circuit is then separated by the machine for final testing, in order to inspect these boards, however, a machine vision-based solution called PanelScan was developed to read the barcodes – which are the unique identifiers of each circuit that is present on the PCN panel.</p>
        
        {/* Write your HTML/JSX above */}
        </div>
        <Foot/>
        </div>
      </>
    )
  }
}

export default ManufacturingPage;
