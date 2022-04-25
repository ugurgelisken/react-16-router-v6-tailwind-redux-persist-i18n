import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActivePage } from "./../store/application.store";
import { t } from "i18next";

const _404 = () => {
  document.title = `${t("title")} | ${t("pages.404")}`;
  const dispatch = useDispatch();
  dispatch(setActivePage(null));

  const navigate = useNavigate();

  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      navigate("/");
    }, 2000);
    return () => window.clearTimeout(timeoutID);
  }, [history]);

  return (
    <div className="bg-white h-screen grid place-content-center">
      <div className="text-center">
        <h1 className="text-6xl">404</h1>
        <p className="text-xl">{t("page.404")}</p>
      </div>
    </div>
  );
};

export default _404;
