import React from "react";
import {
  faBookOpen,
  faCode,
  faDatabase,
  faFileCode,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../../../index.js";
import "./Skills.scss"

const Skills = () => {
  return (
    <div className="skills">
      <div className="title-container">
        <h2>
          <span className="hashTag">#</span>skills
        </h2>
        <div className="space-line"></div>
      </div>
      <div className="sector">
        <div className="skills-left">
          <img src={skillsLeft} alt="skills" />
        </div>
        <div className="skills-right">
          <div className="box-skill">
            <h4>
              <Icon css="icon" icon={faCode} /> Lenguajes
            </h4>
            <ul>
              <li>Javascript</li>
              <li>Pyhton</li>
            </ul>
          </div>
          <div className="box-skill">
            <h4>
              <Icon css="icon" icon={faFileCode} /> Otros
            </h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Vanilla JS</li>
              <li>SCSS</li>
              <li>REST</li>
            </ul>
          </div>
          <div className="box-skill">
            <h4>
              <Icon css="icon" icon={faDatabase} /> Databases
            </h4>
            <ul>
              <li>Mongo</li>
            </ul>
          </div>
          <div className="box-skill">
            <h4>
              <Icon css="icon" icon={faBookOpen} /> Librerias
            </h4>
            <ul>
              <li>React</li>
              <li>Vue</li>
            </ul>
          </div>
          <div className="box-skill">
            <h4>
              <Icon css="icon" icon={faGears} /> Herramientas
            </h4>
            <ul>
              <li>VSCode</li>
              <li>Figma</li>
              <li>FontAwsome</li>
              <li>BootStrap</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
