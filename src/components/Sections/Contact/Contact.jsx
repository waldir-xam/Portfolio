import React from "react";
import { ContactForm } from "../../../index";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="title-container">
        <h2>
          <span className="hashTag">#</span>contact
        </h2>
        <div className="space-line"></div>
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-left-content">
            <p>
              I am interested in opportunities, and collaborate on projects, if
              you have any request or question, do not hesitate to contact me.
            </p>
          </div>
        </div>
        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
