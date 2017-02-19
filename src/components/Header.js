import React, { Component } from 'react';
import NavLink from './NavLink';

class Header extends Component {
  
  onClicked() {
    this.props.handleClick();
  }

  render () {
    return (
      <div>
        <header>
          <NavLink to="/"><img className="header--logo" src="./src/assets/logo.svg" alt="Jeff Hilman Logo" /></NavLink>
          <div onClick={this.onClicked.bind(this)} className={"menu-button " + this.props.menuActive}>
            <span>Menu</span>
            <div className="menu-icon"></div>
          </div>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  handleClick: React.PropTypes.func,
  menuActive: React.PropTypes.string
};

export default Header;