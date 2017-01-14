import React from 'react';

const Banner = (props) => {
  return (
    <div>
      <section className="banner">
            <div className="banner--content">
              <h1>{props.title}</h1>
              <a className="primary-button">Contact Me</a>
            </div>
      </section>
    </div>
  );
}

Banner.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Banner;