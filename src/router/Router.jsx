import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, AboutMe, Projects } from "../index";
import Layout from "../components/Common/Layout/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
