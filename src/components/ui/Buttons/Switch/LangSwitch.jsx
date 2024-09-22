import React from "react";
import { useTranslation } from "react-i18next";
import "./LangSwitch.scss";

const LangSwitch = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <div className="switch">
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        checked={i18n.language === "es"}
        onChange={toggleLanguage}
      />
      <label htmlFor="language-toggle">
        <span className={i18n.language === "en" ? "off" : "on"}>
          {i18n.language === "en" ? "EN" : "ES"}
        </span>
      </label>
    </div>
  );
};

export default LangSwitch;