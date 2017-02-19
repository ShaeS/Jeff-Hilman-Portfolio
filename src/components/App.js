import React, { Component } from 'react';
import NavLink from './NavLink';
import Footer from './Footer';
import Social from './Social';
import Header from './Header';
import Popup from './Popup';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      'navClass': ''
    };
  }
    
  handleClick() {
    if (this.state.navClass == 'active') {
      this.setState({ 'navClass': '' })
    } else {
      this.setState({ 'navClass': 'active' })
    }
  }
  
  removeNavClass() {
    if (this.state.navClass == 'active') {
      this.setState({ 'navClass': '' });
    }
  }
  
  render() {
    return (
      <div>
        <nav className="side-nav">
          <ul>
            <li onClick={ this.handleClick.bind(this) }><NavLink to="/">Home</NavLink></li>
            <li onClick={ this.handleClick.bind(this) }><NavLink to="/sound-design">Sound Design</NavLink></li>
            <li onClick={ this.handleClick.bind(this) }><NavLink to="/video-game-projects">Video Game Sound</NavLink></li>
            <li onClick={ this.handleClick.bind(this) }><NavLink to="/film-projects">Film & Post Production</NavLink></li>
            <li onClick={ this.handleClick.bind(this) }><NavLink to="/music-projects">Music Projects</NavLink></li>
            <li onClick={ this.handleClick.bind(this) }><NavLink to="/about">About Me</NavLink></li>
            <li onClick={ this.handleClick.bind(this) }><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="social-links">
            <Social />
          </div>
        </nav>
      <main onClick={ this.removeNavClass.bind(this) } className={this.state.navClass}>
      <Header menuActive={this.state.navClass} handleClick={ this.handleClick.bind(this) } />
      {this.props.children}
      <Footer />
      </main>
      </div>
    );
  }
}

export default App;