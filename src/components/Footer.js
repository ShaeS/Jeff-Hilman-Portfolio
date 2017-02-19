import React from 'react';
import Social from './Social';
import NavLink from './NavLink';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
         <div className="row">
           <div className="seven columns sm-twelve">
             <p>If you like what you see please take a minute to send me an email. I would love to work with you on your next project!</p>
           </div>
           <div className="three columns sm-six sm-text-center sm-gutter-remove xxs-twelve">
             <NavLink to="/contact" className="primary-button">Contact Me</NavLink>
           </div>
           <div className="two columns sm-six sm-text-center xxs-twelve">
            <Social />
           </div>
         </div>
        </div>
      </footer>

      <div className="low-footer">
        <p>Jeff Hilman &copy; 2017. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;