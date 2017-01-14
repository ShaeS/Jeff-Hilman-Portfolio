import React from 'react';

const Header = () => {
  return (
    <div>
      <header>
        <img className="header--logo" src="./src/assets/logo.svg" alt="Jeff Hilman Logo" />
        <div className="menu-button">
          <span>Menu</span>
          <div className="menu-icon"></div>
        </div>
      </header>
    </div>
  );
}

export default Header;