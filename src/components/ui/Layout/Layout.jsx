import React, { useState, useEffect } from "react";
import { Header, Footer } from "../../../barrell";
import { ThemeContext } from "../../../barrell";
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import { GoogleFontsOptimizer } from "../../Context/FontsOptimizer";
//import SEO from "../../../pages/meta/HelmetSEO";
import { Helmet } from "react-helmet-async";
//import MetaTags from "../../../pages/meta/MetaTagsTS";

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
      <Helmet>
        <title>Portfolio de wallydev</title>
        <meta name="description of layout" content="layout content" />
        <meta property="og:title" content="wallydev- layout" />
        <meta
          property="og:description"
          content="Descripción general del layout"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/s2CN39F3/Screenshot-from-2024-09-17-21-41-35.png"
        />
        <meta property="og:url" content="https://wallydev.dev" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className={`App ${theme}-theme`}>
        <GoogleFontsOptimizer />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
