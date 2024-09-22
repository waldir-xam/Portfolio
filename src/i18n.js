import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          hero: {
            greeting: "Hi! I'm <1>Waldir Apaza</1>",
            description:
              "+3 Years of experience <1>Fullstack Web Developer</1> with a solid background in <2>software development</2>",
            contactButton: "Contact me",
            linkedInButton: "LinkedIn",
            status: "Available for work",
          },
        },
      },
      es: {
        translation: {
          hero: {
            greeting: "¡Hola! Soy <1>Waldir Apaza</1>",
            description:
              "+3 años de experiencia como <1>Desarrollador Web Fullstack</1> con una sólida formación en <2>desarrollo de software</2>",
            contactButton: "Contáctame",
            linkedInButton: "LinkedIn",
            status: "Disponible para trabajar",
          },
        },
      },
    },
  });

export default i18n;
