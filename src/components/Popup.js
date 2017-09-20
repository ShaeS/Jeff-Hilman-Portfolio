import React, { Component } from 'react';

class Popup extends Component {
  
  onClicked() {
    this.props.handleClick();
  }
  
  render() {
  
    return (
      <div className={"projects-popup " + this.props.projectclass}>
        <span onClick={this.onClicked.bind(this)} className="close-popup">
          <svg viewBox="0 0 100 100">
            <circle fill="#64BCDF" cx="50" cy="50" r="50"/>
            <path d="M30,30 L70,70" id="Line" stroke="#fff" strokeWidth="6"></path>
            <path d="M70,30 L30,70" id="Line2" stroke="#fff" strokeWidth="6"></path>
          </svg>
        </span>
        <iframe className="depth-three" src={this.props.projectvideo + "?color=64BCDF&title=0&byline=0&portrait=0"}></iframe>
        <h4>{ this.props.projecttitle }</h4>
        <p dangerouslySetInnerHTML={ {__html: this.props.projectdetails } } />
      </div>
    );
  }
}

Popup.propTypes = {
  handleClick: React.PropTypes.func,
  projectvideo: React.PropTypes.string.isRequired,
  projecttitle: React.PropTypes.string.isRequired,
  projectdetails: React.PropTypes.string.isRequired,
  projectclass: React.PropTypes.string.isRequired
};

export default Popup;