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

/*   const handleResumeClick = (e) => {
    e.preventDefault();
    const fileUrl = "/files/CV-WALDIR-BN-ESP.pdf"; // Reemplaza con la URL de tu archivo
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "CV-WALDIR-ESP.pdf"; // Nombre de archivo que se descargará
    link.click();
  }; */
  const languageLinks = [
    { text: 'EN', link: '/home-eng', onClick: () => scrollToSection('') },
    { text: 'ES', link: '/home-esp', onClick: () => scrollToSection('acerca-de'), isHidden: true },
  ];
  

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
        <li>
          <Link to="/" onClick={() => scrollToSection("contact")}>
            <span className="hashTag">#</span>contact
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => scrollToSection("contact")}>
            <span className="hashTag">#</span>es
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
