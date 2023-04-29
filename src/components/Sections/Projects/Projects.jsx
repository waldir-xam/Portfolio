import React, { useState, useEffect } from "react";
import proyectOne from "../../../img/proy1.png";
import proyectTwo from "../../../img/proy2.png";
import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faCodeCommit,
  faExternalLink,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../../index";
import "./Projects.scss";
import projects from "../../../Content/projects.json";

const Proyects = () => {
  return (
    <div className="projects">
      <div className="proyectsHead">
        <div className="title-container">
          <h2>
            <span className="hashTag">#</span>projects
          </h2>
          <div className="space-line"></div>
        </div>
      </div>
      {/* pro 2 */}
      <div className="proyect-list">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <img src={project.image} alt={project.title} />
            <div className="content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ul>
                {project.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <div className="links">
                <Link
                  onClick={() => window.open(project.websiteLink, "_blank")}
                >
                  <Icon css="icon" icon={faExternalLink} />
                </Link>
                <Link onClick={() => window.open(project.githubLink, "_blank")}>
                  <Icon css="icon" icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* pro 2 */}
      {/*       <div className="proyect-list">
        <div className="proyect-box">
          <img src={proyectOne} />
          <div className="proyect-tools">React,CSS MUI</div>
          <div className="proyect-specs">
            <div className="proyect-title">GitHub Searcher</div>
            <div className="proyect-container">
              <div className="proyect-description">
                Buscador de usuarios de github, da info,detalles y repos del
                usuario buscado
              </div>
              <div className="proyect-box-btns">
                <Link
                  onClick={() =>
                    window.open("https://github.com/waldir-xam", "_blank")
                  }
                  className="proyect-btn-live"
                >
                  Live <Icon css="icon" icon={faCodeCommit} />
                </Link>
                <Link
                  onClick={() =>
                    window.open("https://github.com/waldir-xam", "_blank")
                  }
                  className="proyect-btn-repo"
                >
                  Repo <Icon css="icon" icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="proyect-box">
          <img src={proyectTwo} />
          <div className="proyect-tools">React,CSS, Tailwind</div>
          <div className="proyect-specs">
            <div className="proyect-title">Portfolio</div>
            <div className="proyect-container">
              <div className="proyect-description">
                Portfolio con info acerca de mi, proyectos y contacto
              </div>
              <div className="proyect-box-btns">
                <Link
                  onClick={() =>
                    window.open("https://github.com/waldir-xam", "_blank")
                  }
                  className="proyect-btn-live"
                >
                  Live <Icon css="icon" icon={faCodeCommit} />
                </Link>
                <Link
                  onClick={() =>
                    window.open("https://github.com/waldir-xam", "_blank")
                  }
                  className="proyect-btn-repo"
                >
                  Repo <Icon css="icon" icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="proyect-box">
          <img src={proyectOne} />
          <div className="proyect-tools">React,CSS, Tailwind</div>
          <div className="proyect-specs">
            <div className="proyect-title">Rick & Morti API</div>
            <div className="proyect-container">
              <div className="proyect-description">
                App usando la API fake de Rick & Morty
              </div>
              <div className="proyect-box-btns">
                <Link
                  onClick={() =>
                    window.open("https://github.com/waldir-xam", "_blank")
                  }
                  className="proyect-btn-live"
                >
                  Live <Icon css="icon" icon={faCodeCommit} />
                </Link>
                <Link
                  onClick={() =>
                    window.open("https://github.com/waldir-xam", "_blank")
                  }
                  className="proyect-btn-repo"
                >
                  Repo <Icon css="icon" icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="proyect-box">
          <img src={proyectOne} />
          <div className="proyect-tools">React,CSS, Tailwind</div>
          <div className="proyect-specs">
            <div className="proyect-title">Another Proyect</div>
            <div className="proyect-container">
              <div className="proyect-description">Proyecto in progress</div>
              <div className="proyect-box-btns">
                <Link
                  onClick={() =>
                    window.open("https://github.com/waldir-xam", "_blank")
                  }
                  className="proyect-btn-live"
                >
                  Live <Icon css="icon" icon={faCodeCommit} />
                </Link>
                <Link
                  onClick={() =>
                    window.open("https://github.com/waldir-xam", "_blank")
                  }
                  className="proyect-btn-repo"
                >
                  Repo <Icon css="icon" icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Proyects;
