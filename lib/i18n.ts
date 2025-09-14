"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
          formTitle: "Form",
          name: "Name",
          role: "Role",
          color: "Favorite Color",
          submit: "Save",
          footer: "Made with ",
          changeLang: "Change to Spanish",
          tab: "  ",
        },
      },
      es: {
        translation: {
          welcome: "Bienvenido",
          formTitle: "Formulario",
          name: "Nombre",
          role: "Rol",
          color: "Color Favorito",
          submit: "Guardar",
          footer: "Hecho con ",
          changeLang: "Cambiar a Inglés",
          tab: "  ",
        },
      },
    },
    lng: "es", // idioma inicial
    fallbackLng: "es",
    interpolation: { escapeValue: false },
  });
}

export { i18n };
