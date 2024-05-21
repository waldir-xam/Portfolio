import { Icon } from "../../../../index";
import { Link } from "react-router-dom";
import fotowaldir from "./../../../../images/fotowaldir.webp";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Hero.scss"

const Hero = () => {
  return (
    <div className="hero-container" id="hero">
      <div className="hero-left">
        <h1>
          Hi! I'm <span className="hashTag">Waldir Apaza </span>
        </h1>
        <p>
          +3 Years of experience{" "}<span className="hashTag">Fullstack Web Developer</span>{" "}
          with a solid background in {" "}<span className="hashTag">{" "}software development and project management</span>
        </p>
        <div className="social-buttons">
          <Link to="mailto:waliuxd@gmail.com" className="social-btn">
            <Icon css="icon" icon={faEnvelope} /> Contactame
          </Link>
          <Link
            to="https://www.linkedin.com/in/waldirxam/"
            className="social-btn"
            target="_blank"
          >
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
