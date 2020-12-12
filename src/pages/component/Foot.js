import React from 'react';
import {
  MDBFooter
} from "mdbreact";

class Foot extends React.Component {
  
  render() {
    
    return (
      <> 
        <div>
          <MDBFooter color='indigo'>
              <p className='footer-copyright mb-0 py-3 text-center'>
                &copy; {new Date().getFullYear()} Copyright:
                <a href='https://www.MDBootstrap.com'> MDBootstrap.com </a>
              </p>
            </MDBFooter>
        </div>
          
      </>
    )
  }
}

export default Foot;
