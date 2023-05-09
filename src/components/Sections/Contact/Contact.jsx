import React, { useState } from "react";
import { Icon } from "../../../index";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleCaptchaVerify = () => {
    setIsCaptchaVerified(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isCaptchaVerified) {
      const formData = new FormData(event.target);
      fetch("/enviar.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Agregue aquí cualquier código que necesite después de enviar el formulario
        })
        .catch((error) => console.error(error));
    } else {
      alert("Por favor, verifique el captcha");
    }

    function onChange(value) {
      console.log("Captcha value:", value);
    }
  };

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
          <form className="contact-right-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder="Write a message"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <ReCAPTCHA
              sitekey="6LeR2_UlAAAAADA3dSqKT5OYd9rU88tkdqsxPhuC"
              onChange={handleCaptchaVerify}
            />

            <button type="submit" className="input-send">
              Send <Icon css="icon" icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
