import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-line"></div>
      <div className="footer-main">
        <div className="footer-left">
          <h5 className="footer-title">
            <i class="fa-solid fa-code"></i> Waldir
          </h5>
          <p>Diseñador web y desarrollador front-end con sede en Perú</p>
        </div>
        <div className="footer-right">
          <h5>Media</h5>
          <span className="footer-social-icons">
            <i class="fa-brands fa-github">
              <a href="https://google.com" target="_blank" rel="noreferrer">
              </a>
            </i>
            <i class="fa-brands fa-discord"></i>
            <i class="fa-brands fa-linkedin"></i>
          </span>
        </div>
      </div>
      <p className="footer-derechos">Copyright 2022 . Hecho por Waldir</p>
    </div>
  );
};

export default Footer;
