import React from 'react';
import Banner from '../components/Banner';

const NotFound = () => (
  <div>
  
    <Banner title="404 Not Found" button="home" />
  
    <div className="not-found">
        <div className="container">
          <div className="row">
            <div className="twelve columns text-center">
              <h3>You have escaped the natural order of things. Leave now, before you get caught.</h3>
            </div>
          </div>
        </div>
      </div>
  
  </div>
);

export default NotFound;