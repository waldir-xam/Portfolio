import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../Icons";
import { faBars, faCode, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../Header/Header.scss";
import Switch from "../Buttons/Switch/Switch.jsx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header-container">
      <Link to="/" className="link-to">
        <div className="logo-container">
          <span className="logo-icon">
            <Icon className="" css="icon" icon={faCode} />
          </span>
          <span className="logo-text">walDev</span>
        </div>
      </Link>
      <div className="nav-right">
        {/* BOTON DARKMODE */}
        <Switch />
        {/* FIN BOTON DARKMODE */}

        {/* NAVBAR PC */}
        <nav className="menu-header">
          <ul>
            <li>
              <Link to="/">
                <span className="hashTag">#</span>about
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <span className="hashTag">#</span>projects
              </Link>
            </li>
            <li>
              <Link to="/sobre-mi">
                <span className="hashTag">#</span>hobbies
              </Link>
            </li>

            <Link to="/" className="resume">
              <span className="hashTag">#</span>resume
            </Link>
          </ul>
        </nav>
        {/* FIN NAVBAR PC */}

        {/* BOTON MENU OFF CANVAS - CEL/TABLET  */}
        <button
          className="menu-open-btn"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <Icon className="menu-close-btn" css="icon" icon={faTimes} />
          ) : (
            <Icon className="menu-open-btn" css="icon" icon={faBars} />
          )}
        </button>
        {/* FIN BOTON MENU OFF CANVAS - CEL/TABLET  */}

        {/* MENU RESPONSIVE */}
        <nav className={`${showMenu ? "block" : "hidden"} offcanvasMenu`}>
          <span className="">
            <button
              className="menu-close-btn"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? (
                <Icon className="menu-close-btn" css="icon" icon={faTimes} />
              ) : (
                <Icon className="menu-open-btn" css="icon" icon={faBars} />
              )}
            </button>
          </span>
          <ul className="menu-responsive">
            <li>
              <Link to="/">
                <span className="hashTag">#</span>about
              </Link>
            </li>
            <li>
              <Link to="/proyectos">
                <span className="hashTag">#</span>projects
              </Link>
            </li>
            <li>
              <Link to="/sobre-mi">
                <span className="hashTag">#</span>hobbies
              </Link>
            </li>

            <Link to="/" className="resume">
              <span className="hashTag">#</span>resumen
            </Link>
          </ul>
        </nav>
        {/* FIN MENU RESPONSIVE*/}
      </div>
    </header>
  );
};

export default Header;
