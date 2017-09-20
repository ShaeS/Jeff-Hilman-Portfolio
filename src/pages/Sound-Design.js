import React, { Component } from 'react';
import Banner from '../components/Banner';
import Popup from '../components/Popup';
import Sound_Design_Data from '../data/sound-design';

class Sound_Design extends Component {
  
    constructor(props) {
    super(props);
    this.state = { 
      'popupClass': '',
      'currentPopup': ''
    };
  }
    
  handleClick(project) {
    if (this.state.popupClass == 'show') {
      this.setState({ 
        'popupClass': '',
        'currentPopup': ''
      })
    } else {
      this.setState({ 
        'popupClass': 'show',
        'currentPopup': project
      });
    }
  }
  
  render() {
    
    let projects = Sound_Design_Data.map((projects) => {
      return (
        <div key={projects.id} className="one-half column projects-columns">
          <h3>{projects.title}</h3>
          <iframe className="depth-three" src={projects.video_src + "?color=64BCDF&title=0&byline=0&portrait=0"}></iframe>
          <p>{projects.description}</p>
          <a onClick={this.handleClick.bind(this, projects.id)} className="project-button primary-button pink-gradient">Project Details</a>
          <Popup projectclass={this.state.currentPopup == projects.id ? this.state.popupClass : "" } projectvideo={projects.video_src} projecttitle={projects.title} projectdetails={projects.longdescription} handleClick={this.handleClick.bind(this)} />
        </div>
      );
    });

    return (

      <div>
      <div onClick={this.handleClick.bind(this)} className={"darken-background " + this.state.popupClass }></div>
          <Banner title="Sound Design" />

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
}

export default Sound_Design;