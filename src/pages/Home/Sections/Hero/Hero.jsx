import React from "react";
import { Icon } from "../../../../index";
import fotowaldir from "../../../../../public/images/fotowaldir.jpg";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1>
          Hi! I'm <span className="hashTag">Waldir Apaza </span>
        </h1>
        <p>
          +3 años de experiencia.
          <span className="hashTag">Desarrollador Web Full Stack</span>
          con una sólida formación en{" "}
          <span className="hashTag">
            desarrollo de software y gestión de proyectos.
          </span>
        </p>
        <div className="social-buttons">
          <Link to="mailto:waliuxd@gmail.com" className="social-btn">
            <Icon css="icon" icon={faEnvelope} /> Contactame
          </Link>
          <Link to="https://www.linkedin.com/in/waldirxam/" className="social-btn" target="_blank">
            <Icon css="icon" icon={faLinkedin} /> LinkedIn
          </Link>

        </div>
      </div>
      <div className="hero-right">
        <img src={fotowaldir} alt="profile pic" />
        <div className="status">Disponible para trabajar</div>
      </div>
    </div>
  );
};

export default Hero;
