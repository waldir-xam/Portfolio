import React, { useState } from "react";
import { Icon, Switch } from "../../../../index";
import { Link } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./MenuButton.scss";

const MenuButton = ({ openMenu, closeMenu, isOpen }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

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
    <>
      <div className={`overlay ${open ? "open" : ""}`} onClick={toggleMenu} />
      <div className={`menu ${open ? "open" : ""}`}>
        <ul>
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
          {/*           <li>
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
          <li>
            <Switch />
          </li>
        </ul>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className={`menu-toggle__icon ${open ? "open" : ""}`} />
      </button>
    </>
  );
};

export default MenuButton;
