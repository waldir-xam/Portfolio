import React, { useState } from "react";
import { Header, Footer } from "../../../index";
import { ThemeContext } from "../../../index";
import "./Layout.scss";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}-theme`}>
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};
 
export default Layout;
