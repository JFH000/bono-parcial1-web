"use client";
import { useTranslation } from "react-i18next";
import { getContrastColor, useUser } from "../context/UserContext";

export default function Footer() {
  const { user } = useUser();
  const { t } = useTranslation();
  return (
    <footer className="text-center mt-4 p-3 bg-light border-top">
      <small
        className="mx-2"
        style={{
          color: user.backgroundColor,
          background: getContrastColor(user.backgroundColor),
        }}
      >
        {t("footer")}
        <span className="mx-1">♥</span>
        <span className="mx-1">♥</span>
        <span className="mx-1">♥</span>
      </small>
    </footer>
  );
}
