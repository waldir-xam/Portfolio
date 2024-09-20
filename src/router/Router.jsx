import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../index";
import Layout from "../components/Common/Layout/Layout";
import ErrorPage from "../pages/error/errorPage";
import NotFoundPage from "../pages/error/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
