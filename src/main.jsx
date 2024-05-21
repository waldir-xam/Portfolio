import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Router";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/error/errorPage";
import Layout from "./components/Common/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Layout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router router={router} />
  </React.StrictMode>
);
