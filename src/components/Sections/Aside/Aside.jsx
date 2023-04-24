import React from "react";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Icon } from "../../../index";
import "./Aside.scss"

const Aside = () => {
  return (
    <div className="hero-aside">
      <div className="aside-line"></div>
      <span>
        <Link
          onClick={() => window.open("https://github.com/waldir-xam", "_blank")}
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
  );
};

export default Aside;
