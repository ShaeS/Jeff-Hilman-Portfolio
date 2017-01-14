import React, { Component } from 'react';
import NavLink from './NavLink';
import Footer from './Footer';
import Social from './Social';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="side-nav">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/video-game-projects">Video Game Projects</NavLink></li>
            <li><NavLink to="/teachers">Film Projects</NavLink></li>
            <li><NavLink to="/courses">Music Projects</NavLink></li>
            <li><NavLink to="/courses">About Me</NavLink></li>
            <li><NavLink to="/courses">Contact</NavLink></li>
          </ul>
          <div className="social-links">
            <Social />
          </div>
        </nav>
      <main>
      <Header />
        { this.props.children }
      <Footer />
      </main>
      </div>
    );
  }
}

export default App;