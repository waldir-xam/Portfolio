import React from "react";
import "../Footer/Footer.scss";
import { Link } from "react-router-dom";
import { Icon } from "../../Icons";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-line"></div>
      <div className="footer-main">
        <div className="footer-left">
          <h5 className="footer-title">
            <Icon css="icon" icon={faCode} /> WalDev
          </h5>
          <p>Diseñador web y desarrollador front-end con sede en Perú</p>
        </div>
        <div className="footer-right">
          <h5>Media</h5>
          <span className="footer-social-icons">
            <Link
              onClick={() =>
                window.open("https://github.com/waldir-xam", "_blank")
              }
            >
              <Icon css="icon" icon={faGithub} />
            </Link>

            <Link
              onClick={() =>
                window.open(
                  "http://www.discordapp.com/users/597457139736510505",
                  "_blank"
                )
              }
            >
              <Icon css="icon" icon={faDiscord} />
            </Link>

            <Link
              onClick={() =>
                window.open("https://www.linkedin.com/in/waldirxam/", "_blank")
              }
            >
              <Icon css="icon" icon={faLinkedin} />
            </Link>
          </span>
        </div>
      </div>
      <span className="footer-derechos">Copyright 2023 . Hecho por Waldir</span>
    </div>
  );
};

export default Footer;
