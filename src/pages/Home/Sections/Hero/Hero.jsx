import { Icon } from "@/barrell";
import { Link } from "react-router-dom";
import fotowaldir from "@/images/fotowaldir.webp";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Hero.scss";

import { useTranslation, Trans } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-container" id="hero">
      <div className="hero-left">
        <h1>
          <Trans i18nKey="hero.greeting">
            Hi! I'm <span className="hashTag">Waldir Apaza</span>
          </Trans>
        </h1>
        <p>
          <Trans i18nKey="hero.description">
            +3 Years of experience{" "}
            <span className="hashTag">Fullstack Web Developer</span> with a
            solid background in{" "}
            <span className="hashTag">software development</span>
          </Trans>
        </p>
        <div className="social-buttons">
          <Link to="mailto:waliuxd@gmail.com">
            <button className="social-btn">
              <Icon css="icon" icon={faEnvelope} /> {t("hero.contactButton")}
            </button>
          </Link>
          <Link
            to="https://www.linkedin.com/in/waldirxam/"
            className="social-btn"
            target="_blank"
          >
            <Icon css="icon" icon={faLinkedin} /> {t("hero.linkedInButton")}
          </Link>
        </div>
      </div>
      <div className="hero-right">
        <img src={fotowaldir} alt="profile pic" />
        <div className="status">{t("hero.status")}</div>
      </div>
    </div>
  );
};

export default Hero;
