import React, {Component} from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Social from '../components/Social';
import {Form, Field} from 'simple-react-form'
import {TextField, TextareaField, EmailField} from 'simple-react-form-bootstrap/lib/fields/string'

class Contact extends Component {
  
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  sendForm() {
    let name = this.state.name;
    let email = this.state.email;
    let message = this.state.message;
    
    $.ajax({
      type: "GET",
      url: "src/data/mailer.php",
      data: {
        name: name,
        email: email,
        message: message
      },
      success: function(data) {
         console.log(data);
      },
      error: function(data) {
        console.log(data);
      }
    });
    

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
                  <p>Thank you for visiting my site! Feel free to contact me using the form, or email me directly if you have have any questions or potential work.</p>
                  <p><a href="mailto:jhilman@live.ca">jhilman@live.ca</a></p>
                  <Social />
                </div>
                <div className="one-half column">
                  <Form action="" method="GET" onSubmit={ this.sendForm.bind(this) } state={ this.state } onChange={ changes => this.setState(changes) }>
                    <Field fieldName='name' label='Name' type={TextField}/>
                    <Field fieldName='email' label='Email' type={EmailField}/>
                    <Field fieldName='message' label='Message' type={TextareaField}/>
                    <button className="primary-button pink-gradient">Submit</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>

      </div>

    );
  }
}

export default Contact;