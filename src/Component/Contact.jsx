import React, { useState } from 'react';


const ContactForm = () => {
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleFocus = (field) => {
    setFocus((prevFocus) => ({ ...prevFocus, [field]: true }));
  };

  const handleBlur = (field, value) => {
    if (value === '') {
      setFocus((prevFocus) => ({ ...prevFocus, [field]: false }));
    }
  };

  return (
    <div className="container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
          Get in touch with us! Whether you have a question, feedback, or need assistance, we're here to help.
           Fill out the form below, and our team will get back to you as soon as possible.
          </p>

          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt"></i> &nbsp;&nbsp;
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <i className="fas fa-envelope"></i> &nbsp;&nbsp;
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <i className="fas fa-phone"></i>&nbsp;&nbsp;
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className={`input-container ${focus.name ? 'focus' : ''}`}>
              <input
                type="text"
                name="name"
                className="input-contact"
                onFocus={() => handleFocus('name')}
                onBlur={(e) => handleBlur('name', e.target.value)}
              />
              <label>Username</label>
              <span>Username</span>
            </div>
            <div className={`input-container ${focus.email ? 'focus' : ''}`}>
              <input
                type="email"
                name="email"
                className="input-contact"
                onFocus={() => handleFocus('email')}
                onBlur={(e) => handleBlur('email', e.target.value)}
              />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className={`input-container ${focus.phone ? 'focus' : ''}`}>
              <input
                type="tel"
                name="phone"
                className="input-contact"
                onFocus={() => handleFocus('phone')}
                onBlur={(e) => handleBlur('phone', e.target.value)}
              />
              <label>Phone</label>
              <span>Phone</span>
            </div>
            <div className={`input-container textarea ${focus.message ? 'focus' : ''}`}>
              <textarea
                name="message"
                className="input-contact"
                onFocus={() => handleFocus('message')}
                onBlur={(e) => handleBlur('message', e.target.value)}
              ></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
