import React from "react";
import { Link } from "react-router-dom";
import { Switch } from "../../../../index";

import "./Menu.scss";

const Menu = ({}) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    const fileUrl = "/public/files/CV-WALDIR-BN-ESP.pdf"; // Reemplaza con la URL de tu archivo
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "CV-WALDIR-ESP.pdf"; // Nombre de archivo que se descargará
    link.click();
  };

  return (
    <nav className="menu-header">
      <ul>
        <li>
          <Switch />
        </li>
        <li>
          <Link to="/" onClick={() => scrollToSection("about")}>
            <span className="hashTag">#</span>about
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => scrollToSection("projects")}>
            <span className="hashTag">#</span>projects
          </Link>
        </li>
{/*         <li>
          <Link to="/" onClick={() => scrollToSection("hobbies")}>
            <span className="hashTag">#</span>hobbies
          </Link>
        </li> */}
        <li>
          <Link to="/" onClick={() => scrollToSection("contact")}>
            <span className="hashTag">#</span>contact
          </Link>
        </li>
        <Link to="/" className="resume" onClick={handleResumeClick}>
          <span className="hashTag">#</span>resume
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
