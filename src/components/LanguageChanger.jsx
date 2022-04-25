import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "./../store/application.store";
import { useTranslation } from "react-i18next";
import { TranslateIcon } from "@heroicons/react/solid";

const LanguageChanger = () => {

  const { language } = useSelector((state) => state.application);
  
  const dispatch = useDispatch();

  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
     dispatch(setLanguage(lng));
   // window.location.reload(false);
  };

  const languages = [
    { name: "Türkçe", code: "tr" },
    { name: "English", code: "en" },
  ];

  const selectedLanguage = i18n.language;

  return (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex="0" className="btn btn-ghost">
          <TranslateIcon className="h-8 w-8 text-white" />
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box"
        >
          {languages.map((language) => {
            return (
              <li key={language.code}>
                <button
                  className={
                    selectedLanguage === language.code ? "text-primary" : ""
                  }
                  onClick={() => changeLanguage(language.code)}
                >
                  {language.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default LanguageChanger;
