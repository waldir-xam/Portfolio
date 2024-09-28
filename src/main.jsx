/* import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Router";
import { HelmetProvider } from "react-helmet-async";
import "@/i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  </React.StrictMode>
);
 */

import React from "react";
import ReactDOM from "react-dom/client";
import Router from "@/router/Router";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </I18nextProvider>
  </React.StrictMode>
);
