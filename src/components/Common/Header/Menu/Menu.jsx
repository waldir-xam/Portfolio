import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

const MenuAside = ({}) => {
  return (
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
  );
};

export default MenuAside;
