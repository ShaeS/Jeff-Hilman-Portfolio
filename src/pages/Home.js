import React from 'react';
import {Scroll, Link, Element} from 'react-scroll';
import NavLink from '../components/NavLink';
import Demos from '../data/demos';

const Home = () => {
  let demos = Demos.map((demo) => {
    return (
    <Element name={demo.id} key={demo.id} className={demo.class}>
      <div className="container">
        <div className="row">
         
          <div className="one-half column demo-info xs-text-center">
            <h3>{demo.title}</h3>
            <div className="padding-left">
              <p>{demo.description}</p>
              <NavLink to={demo.button_target} className="primary-button pink-gradient">{demo.button}</NavLink>
            </div>
          </div>
          
          <div className="one-half column demo-video">
            <iframe className="depth-three" src={demo.video_src}></iframe>
          </div>
          
        </div>
      </div>
    </Element>
    );
  });
  
  return (
<div>
    <section className="hero">
      <div className="hero--content">
        <h1>My name is Jeff Hilman. Audio Engineer for games, music and film.</h1>
        <Link to="demo-1" smooth={true} duration={500} className="primary-button pink-gradient">Demo Reels</Link>
      </div>
    </section>
    

    
    {demos}
    </div>
  );
}

export default Home;