import React from 'react';
import Demos from '../data/demos';
import Header from '../components/Header';

const Home = () => {
  let demos = Demos.map((demo) => {
    return (
    <section key={demo.id} className={demo.class}>
      <div className="container">
        <div className="row">
         
          <div className="one-half column demo-info">
            <h3>{demo.title}</h3>
            <div className="padding-left">
              <p>{demo.description}</p>
              <a className="primary-button pink-gradient">{demo.button}</a>
            </div>
          </div>
          
          <div className="one-half column demo-video">
            <iframe className="depth-three" src={demo.video_src}></iframe>
          </div>
          
        </div>
      </div>
    </section>
    );
  });
  
  return (
<div>
    <section className="hero">
      <div className="hero--content">
        <h1>I am Jeff Hilman. Sound engineer for games, music and film.</h1>
        <a className="primary-button pink-gradient">Demo Reels</a>
      </div>
    </section>
    

    
    {demos}
    </div>
  );
}

export default Home;