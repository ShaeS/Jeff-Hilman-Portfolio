import React, { Component } from 'react';
import Header from '../components/Header';
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
    
    const projectDescription = "Spicy jalapeno bacon ipsum dolor amet ham rump sirloin burgdoggen. Picanha sausage tenderloin, hamburger beef venison kielbasa beef ribs shoulder turducken pork belly ball tip boudin alcatra shank. Fatback turkey tail flank shank, short loin brisket ham leberkas capicola sirloin shoulder ground round. Jerky sirloin ham burgdoggen boudin shoulder jowl pancetta drumstick cupim biltong pork belly short ribs. Drumstick tenderloin tail short loin, hamburger ribeye meatloaf. Pork chop turducken pork ham hock.";
    
    const projectVideo = "https://player.vimeo.com/video/203756331";
    
    return (
    
    <div>  
      <div onClick={this.handleClick.bind(this)} className={"darken-background " + this.state.popupClass }></div>
        <Banner title="Music Projects" />
    
        <div className="projects-page">
          <div className="container">
            <div className="row text-center">
              <div className="twelve columns">
                <p>Spicy jalapeno bacon ipsum dolor amet ham rump sirloin burgdoggen. Picanha sausage tenderloin, hamburger beef venison kielbasa beef ribs shoulder turducken pork belly ball tip boudin alcatra shank. Fatback turkey tail flank shank, short loin brisket ham leberkas capicola sirloin shoulder ground round. Jerky sirloin ham burgdoggen boudin shoulder jowl pancetta drumstick cupim biltong pork belly short ribs. Drumstick tenderloin tail short loin, hamburger ribeye meatloaf. Pork chop turducken pork ham hock.</p>
                <a onClick={this.handleClick.bind(this)} className="music-button primary-button pink-gradient">Project Details</a>
                <Popup projectclass={ this.state.popupClass } projectvideo={ projectVideo } projectdetails={ projectDescription } />
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

export default Music_Projects;