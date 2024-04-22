import React from "react";
import fotowaldir from "../../img/fotowaldir.jpg";
import { Link } from "react-router-dom";
import {
  faAngleDoubleDown,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { About, Icon, Projects } from "../../index";
import "../Home/Home.scss";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Experience from "./Sections/Experience/Experience";

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="home-container">
      <div className="home-second-container">
        <div className="home-content">
          <div className="hero-container">
            <div className="hero-left">
              <h1>
                Hi! I'm <span className="hashTag">Waldir Apaza </span>
              </h1>
              <p>
                +3 años de experiencia.
                <span className="hashTag">Desarrollador Web Full Stack</span>
                con una sólida formación en
                <span className="hashTag">
                  desarrollo de software y gestión de proyectos.
                </span>
              </p>
              <div className="social-buttons">
                <button
                  className="social-btn"
                  onClick={() => scrollToSection("")}
                >
                  <Icon css="icon" icon={faEnvelope} /> Contactame
                </button>
                <button
                  className="social-btn"
                  onClick={() => scrollToSection("")}
                >
                  <Icon css="icon" icon={faLinkedin} /> LinkedIn
                </button>
              </div>
            </div>
            <div className="hero-right">
              <img src={fotowaldir} alt="profile pic" />
              <div className="status">Disponible para trabajar</div>
            </div>
          </div>
          <div>
            <section id="experience">
              <Experience />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="about">
              <About />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
