import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Video_Game_Projects_Data from '../data/video-game-projects';

const Video_Game_Projects = () => {
  let projects = Video_Game_Projects_Data.map((projects) => {
    return (
      <div key={projects.id} className="one-half column video-game-columns">
        <h3>{projects.title}</h3>
        <iframe className="depth-three" src={projects.video_src + "?color=64BCDF&title=0&byline=0&portrait=0"}></iframe>
        <p>{projects.description}</p>
        <a className="primary-button pink-gradient">Project Details</a>
      </div>
    );
  });
  
  return (
    
    <div>    
        <Banner title="Video Game Projects" />
    
        <div className="video-game-page">
          <div className="container">
            <div className="row text-center">
              {projects}
            </div>
          </div>
        </div>

    </div>
  
  );
}

export default Video_Game_Projects;