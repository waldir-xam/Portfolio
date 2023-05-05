import React from "react";
import { Icon } from "../../../index";
import { Link } from "react-router-dom";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./Hobbies.scss";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <div className="title-container">
        <h2>
          <span className="hashTag">#</span>Hobbies
        </h2>
        <div className="space-line"></div>
      </div>
      <div className="hobbies-container">
        <div className="hobbies-content">
          Aside from coding, these are the things I that enjoy to do for fun!
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
