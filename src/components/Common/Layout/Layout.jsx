import React, { useState,useEffect } from "react";
import { Header, Footer } from "../../../index";
import { ThemeContext } from "../../../index";
import "./Layout.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}-theme`}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
