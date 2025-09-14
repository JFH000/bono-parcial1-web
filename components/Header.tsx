"use client";
import { useTranslation } from "react-i18next";
import { getContrastColor, useUser } from "../context/UserContext";
import { i18n } from "../lib/i18n";

export default function Header() {
  const { user } = useUser();
  const { t } = useTranslation();

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        color: user.backgroundColor,
        backgroundColor: getContrastColor(user.backgroundColor),
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span
          className="navbar-brand fw-bold"
          style={{ color: user.backgroundColor }}
        >
          {t("welcome")}
          {user.name && `, ${user.name}`}
        </span>

        <button
          onClick={() =>
            i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
          }
          className="btn"
          style={{
            background: user.backgroundColor,
            color: getContrastColor(user.backgroundColor),
          }}
        >
          {t("changeLang")}
        </button>
      </div>
    </nav>
  );
}
