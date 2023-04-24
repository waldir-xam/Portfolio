import React, { useState } from "react";
import { Icon } from "../../../Icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./MenuButton.scss";

const MenuButton = ({ onClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <button className="menu-open-btn" onClick={toggleMenu}>
      {showMenu ? (
        <Icon className="menu-close-btn" css="icon" icon={faTimes} />
      ) : (
        <Icon className="menu-open-btn" css="icon" icon={faBars} />
      )}
    </button>
  );
};

export default MenuButton;
