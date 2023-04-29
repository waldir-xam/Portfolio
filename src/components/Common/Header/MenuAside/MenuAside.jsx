import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../../Icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./MenuAside.scss";

const MenuAside = ({ isOpen, onClose }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
    onClose();
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={`offcanvasMenu ${showMenu ? "show" : ""}`} ref={menuRef}>
      <button className="menu-open-btn" onClick={closeMenu}>
        <Icon className="menu-close-btn" css="icon" icon={faTimes} />
      </button>
      <ul className="menu-responsive">
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
      </ul>
    </nav>
  );
};

export default MenuAside;
