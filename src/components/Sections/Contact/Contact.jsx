import React from "react";
import { Icon } from "../../../index";
import { Link } from "react-router-dom";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="#contact">
      <div className="title-container">
        <h2>
          <span className="hashTag">#</span>contacto
        </h2>
        <div className="space-line"></div>
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-left-content">
            <p>
              Estoy interesado en oportunidades, y colaborar en proyetos, si
              tienes alguna solicitud o pregunta, no dudes en ponerse en
              contacto conmigo.
            </p>
            {/*             <div className="contact-mini-box">
              <h6>Tambien puedes escribirme un mensaje aqui:</h6>
              <ul>
                <li>
                  <Link
                    onClick={() =>
                      window.open("https://github.com/waldir-xam", "_blank")
                    }
                  >
                    <Icon css="icon" icon={faGithub} /> waldir-xam
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() =>
                      window.open(
                        "http://www.discordapp.com/users/597457139736510505",
                        "_blank"
                      )
                    }
                  >
                    <Icon css="icon" icon={faDiscord} /> ratatrampa#7994
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/waldirxam/",
                        "_blank"
                      )
                    }
                  >
                    <Icon css="icon" icon={faLinkedin} /> waldirxam
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="contact-right">
          <form className="contact-right-form">
            <input type="text" placeholder="Name" id="name" />
            <input type="text" placeholder="Email" id="email" />
            <input type="text" placeholder="Subject" id="subject" />
            <textarea type="text" placeholder="Write a message" id="message" />
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
