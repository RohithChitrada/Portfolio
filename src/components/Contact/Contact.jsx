import React from "react";
import "./Contact.css";

const Contact = ({ isDarkTheme }) => {

  return (
    <div id="contact" className={`contact-container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="content-wrapper">
        <h1 className="contact-h1">Contact</h1>
        <div>
          <p className="description-contact">
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>
        <div className="contact-section">
          <div className="form-container">
            <form>
              <div className="form-group">
                <label htmlFor="name" className='label'>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="input-field"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className='label'>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input-field"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className='label'>
                  Message
                </label>
                <textarea
                  id="message"
                  className="textarea-field"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="form-footer">
                <div className="email-link">
                  <a href="mailto:rohitchitrada@gmail.com">Send me email directly</a>
                </div>
                <button className="submit-button">
                  <a href="mailto:rohitchitrada@gmail.com">Submit</a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
