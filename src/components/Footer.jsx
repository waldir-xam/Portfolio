import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-line"></div>
      <div className="footer-main">
        <div className="footer-left">
          <h5 className="footer-title">
            <i class="fa-solid fa-code"></i> WalDev
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
              <i class="fa-brands fa-github"></i>
            </Link>

            <Link
              onClick={() =>
                window.open(
                  "http://www.discordapp.com/users/597457139736510505",
                  "_blank"
                )
              }
            >
              <i class="fa-brands fa-discord"></i>
            </Link>

            <Link
              onClick={() =>
                window.open("https://www.linkedin.com/in/waldirxam/", "_blank")
              }
            >
              <i class="fa-brands fa-linkedin"></i>
            </Link>
          </span>
        </div>
      </div>
      <span className="footer-derechos">Copyright 2022 . Hecho por Waldir</span>
    </div>
  );
};

export default Footer;
