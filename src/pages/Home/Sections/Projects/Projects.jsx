import React from "react";
import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../../../barrell";
import projects from "../../../../Content/projects.json";
import "./Projects.scss";

const Proyects = () => {
  return (
    <div className="projects" id="projects">
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
                  Preview <Icon css="icon" icon={faExternalLink} />
                </Link>
                <Link onClick={() => window.open(project.githubLink, "_blank")}>
                  Code <Icon css="icon" icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
