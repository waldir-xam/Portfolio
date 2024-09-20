import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Router";
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <Router />
    </HelmetProvider>
  </React.StrictMode>
);
