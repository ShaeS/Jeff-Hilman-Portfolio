import React from 'react';
import Banner from '../components/Banner';
import JeffProfile from '../components/JeffProfile';

const About = () => {
  return (
    
    <div>    
        <Banner title="About Me" />
    
        <div className="about-page">
            <div className="container">
              <div className="row">
                <div className="three columns">
                  <JeffProfile />
                </div>
                <div className="nine columns">
                  <h4>Jeff Hilman, Audio Specialist:</h4>
    
                  <p>As an enthusiastic young professional breaking into Vancouver’s audio scene, I am looking to use my skills and expertise to enhance any and all projects in the world of music composition, sound design, and audio for video games. Currently working at Capcom Game Studio Vancouver responsible for sound design, audio implementation, audio editing, and more.</p>
                </div>
              </div>
    
              <div className="row text-center">
                <div className="twelve columns">
                  <h4>Programs I Use</h4>
                </div>
              </div>
    
              <div className="row program-logos text-center">
    
                <div className="three columns">
                  <img src="./src/assets/protools.jpg" alt="Protools" />
                </div>
    
                <div className="three columns">
                  <img className="shrink-logo" src="./src/assets/ableton.jpg" alt="Ableton" />
                </div>
    
                <div className="three columns">
                  <img src="./src/assets/logicx.jpg" alt="Logic X" />
                </div>
    
                <div className="three columns">
                  <img className="shrink-logo" src="./src/assets/izotope.jpg" alt="Izotope RX" />
                </div>
    
              </div>
    
              <div className="row program-logos text-center">
    
                <div className="three columns">
                  <img src="./src/assets/wwise.jpg" alt="Wwise" />
                </div>
    
                <div className="three columns">
                  <img src="./src/assets/fmod.jpg" alt="FMOD" />
                </div>
    
                <div className="three columns">
                  <img src="./src/assets/unreal.jpg" alt="Unreal Engine 4" />
                </div>
    
                <div className="three columns">
                  <img src="./src/assets/unity.jpg" alt="Unity" />
                </div>
    
              </div>
    
              <div className="row program-logos text-center">
    
                <div className="three columns">
                  <img src="./src/assets/soundly.jpg" alt="Soundly" />
                </div>
    
                <div className="three columns">
                  <img src="./src/assets/melodyne.jpg" alt="Melodyne" />
                </div>
    
                <div className="three columns">
                  <img src="./src/assets/waves.jpg" alt="Waves" />
                </div>
    
                <div className="three columns">
                  <img src="./src/assets/nativeinstruments.jpg" alt="Native Instruments" />
                </div>
    
              </div>
    
            </div>
          </div>

    </div>
  
  );
}

export default About;