import React from "react";
import fotowaldir from "../../img/fotowaldir.jpg";
import { Link } from "react-router-dom";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import {
  About,
  Aside,
  Contact,
  Hobbies,
  Icon,
  Projects,
  Skills,
} from "../../index";
import Typewritter from "typewriter-effect";
import "../Home/Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-second-container">
        <div className="home-content">
          {/* HERO */}
          <div className="hero">
            {/* HERO 2 */}
            <div className="hero-left">
              <h1>
                Hi! I'm <span className="hashTag">Waldir Apaza </span>
                {/*     <span className="hashTag"> desarrollador front-end</span> */}
                <br />
                <Typewritter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Frontend Dev")
                      .pauseFor(750)
                      .deleteAll(50)
                      .typeString("Freelancer")
                      .pauseFor(750)
                      .deleteAll(50)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>

              <p>Developing stuffs where tech meet craetivity.</p>
              <button className="call2action" href="#contact">
                Contact me! <Icon css="icon" icon={faAngleDoubleDown} />
              </button>
            </div>
            <div className="hero-right">
              <img src={fotowaldir} alt="profile pic" />
              {/*           <span className="status">
            <div className="square-status"></div>
            Actualmente trabajando como<span> Freelance</span>
          </span> */}
            </div>
          </div>
          {/* FRASE*/}
          <div className="hero-phrase">
            <span className="com1">"</span>
            <h6>If you can imagine it, you can program it.</h6>
            <span className="com2">"</span>
          </div>
          <div>
            <section id="about">
              <About />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="hobbies">
              <Hobbies />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
