import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Music_Projects_Data from '../data/music-projects';

const Music_Projects = () => {
  let projects = Music_Projects_Data.map((projects) => {
    return (
      <div key={projects.id} className="one-half column projects-columns">
        <h3>{projects.title}</h3>
        <iframe className="depth-three" src={projects.video_src + "?color=64BCDF&title=0&byline=0&portrait=0"}></iframe>
        <p>{projects.description}</p>
        <a className="primary-button pink-gradient">Project Details</a>
      </div>
    );
  });
  
  return (
    
    <div>    
        <Banner title="Music Projects" />
    
        <div className="projects-page">
          <div className="container">
            <div className="row text-center">
              {projects}
            </div>
          </div>
        </div>

    </div>
  
  );
}

export default Music_Projects;