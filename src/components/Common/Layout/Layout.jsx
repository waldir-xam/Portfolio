import React, { useState, useEffect } from "react";
import { Header, Footer } from "../../../index";
import { ThemeContext } from "../../../index";
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import { GoogleFontsOptimizer } from "../../Context/FontsOptimizer";
import MetaTags from "../../../pages/meta/MetaTagsTS";

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
      <MetaTags
        title="Karol & Hector"
        url={`https://i.postimg.cc/s2CN39F3/Screenshot-from-2024-09-17-21-41-35.png`}
        description="bienvenido"
        image={imageUrl}
        robots="noindex, nofollow"
        additionalTags={[
          { property: "og:image:secure_url", content: imageUrl },
          { property: "og:image:width", content: "1200" },
          { property: "og:image:height", content: "630" },
          { property: "og:image:type", content: "image/jpeg" },
        ]}
      />
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
