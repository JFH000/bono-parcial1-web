"use client";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getContrastColor, useUser } from "../../context/UserContext";

export default function Home() {
  const { user, setUser } = useUser();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setUser({
      name: form.get("name") as string,
      role: form.get("role") as string,
      backgroundColor: form.get("color") as string,
    });
  };

  console.log(user.backgroundColor);

  return (
    <>
      <Header />
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <form
          onSubmit={handleSubmit}
          className="card p-3 shadow-sm"
          style={{
            width: "400px",
            background: getContrastColor(user.backgroundColor),
            color: user.backgroundColor,
          }}
        >
          <h2 className="mb-3 text-center">{t("formTitle")}</h2>
          <div className="mb-3">
            <label className="form-label">{t("name")}</label>
            <input
              type="text"
              name="name"
              className="form-control"
              defaultValue={user.name}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">{t("role")}</label>
            <input
              type="text"
              name="role"
              className="form-control"
              defaultValue={user.role}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">{t("color")}</label>
            <input
              defaultValue={user.backgroundColor}
              type="color"
              name="color"
              className="form-control form-control-color"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              background: user.backgroundColor,
              color: getContrastColor(user.backgroundColor),
            }}
          >
            {t("submit")}
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
