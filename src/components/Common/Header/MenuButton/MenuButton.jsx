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

  return (
    <>
      <div className={`overlay ${open ? "open" : ""}`} onClick={toggleMenu} />
      <div className={`menu ${open ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              <span className="hashTag">#</span>about
            </Link>
          </li>
          <li>
            <Link to="/proyectos" onClick={closeMenu}>
              <span className="hashTag">#</span>projects
            </Link>
          </li>
          <li>
            <Link to="/sobre-mi" onClick={closeMenu}>
              <span className="hashTag">#</span>hobbies
            </Link>
          </li>
          <Link to="/" className="resume">
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
