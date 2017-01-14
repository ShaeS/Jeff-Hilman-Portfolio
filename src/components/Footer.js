import React from 'react';
import Social from './Social';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
         <div className="row">
           <div className="seven columns">
             <p>Lorem ipsum malesuada luctus Nam Morbi nec ac className ex neque, Cras ultrices. Id tempus iaculis nec metus, felis in.</p>
           </div>
           <div className="three columns">
             <a className="primary-button">Contact Me</a>
           </div>
           <div className="two columns">
            <Social />
           </div>
         </div>
        </div>
      </footer>

      <div className="low-footer">
        <p>Jeff Hilman &copy; 2016. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;