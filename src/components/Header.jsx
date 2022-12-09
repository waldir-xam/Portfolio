import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-left">
        <Link to="/">
          <i class="fa-solid fa-code"></i> Waldir
        </Link>
      </div>
      <nav className="menu-header">
        <ul>
          <li>
            <Link to="/">
              <span className="hashTag">#</span>inicio
            </Link>
          </li>
          <li>
            <Link to="/proyectos">
              <span className="hashTag">#</span>proyectos
            </Link>
          </li>
          <li>
            <Link to="/sobre-mi">
              <span className="hashTag">#</span>sobre-mi
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="hashTag">#</span>contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
