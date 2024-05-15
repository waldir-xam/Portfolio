import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../index";
import Layout from "../components/Common/Layout/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
