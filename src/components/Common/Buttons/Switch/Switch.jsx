import React, { useContext } from "react";
import { Icon } from "../../../Icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../../Context/ThemeContext";
import "./Switch.scss";

const Switch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button className="toggle-theme" onClick={toggleTheme}>
        {theme === "light" ? (
          <Icon className="dark" css="icon" icon={faMoon} />
        ) : (
          <Icon className="light" css="icon" icon={faSun} />
        )}
      </button>
    </>
  );
};

export default Switch;
