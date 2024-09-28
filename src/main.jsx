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
        <Helmet>
          <title>test</title>
          <meta name="description" content="Página de inicio" />
          <meta property="og:title" content="Inicio - home" />
          <meta
            property="og:description"
            content="Contrata a Waldir para crear tu aplicación web o webapp. Desarrollador Web. Especializado en crear webs y apps únicos."
          />

          <meta
            property="og:image"
            content="https://i.postimg.cc/s2CN39F3/Screenshot-from-2024-09-17-21-41-35.png"
          />
          <meta property="og:url" content="https://wallydev.dev/" />
          <meta property="og:type" content="website" />
        </Helmet>
        <Router />
      </HelmetProvider>
    </I18nextProvider>
  </React.StrictMode>
);
