import React from 'react';
import NavLink from './NavLink';

const Banner = (props) => {
  var buttonLink = "";
  var buttonText = "";
  if ( props.button == 'demos' ) {
    buttonLink = "/";
    buttonText = "Demo Reels";
  } else {
    buttonLink = "/contact";
    buttonText = "Contact Me";
  }
  return (
    <div>
      <section className="banner">
            <div className="banner--content">
              <h1>{props.title}</h1>
              <NavLink to={buttonLink} className="primary-button">{buttonText}</NavLink>
            </div>
      </section>
    </div>
  );
}

Banner.propTypes = {
  title: React.PropTypes.string.isRequired,
  button: React.PropTypes.string
};

export default Banner;