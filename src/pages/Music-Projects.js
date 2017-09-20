import React, { Component } from 'react';
import Banner from '../components/Banner';
import Popup from '../components/Popup';

class Music_Projects extends Component {
  
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
      })
    } else {
      this.setState({ 
        'popupClass': 'show',
      });
    }
  }
  
  render() {
    
    const projectDescription = 'A playlist of songs recorded, produced, mixed, and mastered during my time at Nimbus School of Recording & Media. For a detailed description, click "see more"';
    
    const projectVideo = "https://player.vimeo.com/video/203756331";
    
    return (
    
    <div>  
      <div onClick={this.handleClick.bind(this)} className={"darken-background " + this.state.popupClass }></div>
        <Banner title="Music Projects" />
    
        <div className="projects-page">
          <div className="container">
            <div className="row text-center">
              <div className="twelve columns">
                <p>A playlist of songs recorded, produced, mixed, and mastered during my time at Nimbus School of Recording & Media with my band, Aivia.</p>
              </div>
            </div>
            <div className="row text-center">
              <div className="twelve columns">
                <iframe className="music-iframe" width="100%" height="470" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/74395913&amp;color=64BCDF&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
              </div>
            </div>
          </div>
        </div>

    </div>
  
  );
  }
}

//                <a onClick={this.handleClick.bind(this)} className="music-button primary-button pink-gradient">Project Details</a>
//                <Popup projectclass={ this.state.popupClass } projectvideo={ projectVideo } projectdetails={ projectDescription } />

export default Music_Projects;