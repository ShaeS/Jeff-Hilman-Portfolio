import React, {Component} from 'react';
import Banner from '../components/Banner';
import Social from '../components/Social';

class Contact extends Component {
  
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
    
      <div>    
          <Banner title="Contact" button="demos" />

          <div className="contact-page">
            <div className="container">
              <div className="row">
                <div className="one-half column">
                  <h5>Get in Touch!</h5>
                  <p>Thank you for visiting my site! Feel free to contact me using the form, or email me directly if you have have any questions or work inquiries.</p>
                  <p><a href="mailto:jhilman@live.ca">jhilman@live.ca</a></p>
                  <Social />
                </div>
                <div className="one-half column">
                  <form action="https://formspree.io/jhilman@live.ca" method="POST">
                      <label htmlFor="name">Name:</label>
                    <input id="name" type="text" name="name" />
                      <label htmlFor="email">Email:</label>
                    <input id="email" type="email" name="email" />
                      <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message"></textarea>
                    <input className="primary-button pink-gradient" type="submit" value="Send" />
                  </form>
                </div>
              </div>
            </div>
          </div>

      </div>

    );
  }
}

export default Contact;