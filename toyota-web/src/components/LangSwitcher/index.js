import React, { useContext, useState } from "react";
import { LOCALES } from "../../translation";
import { AppContext } from "../../context";
import "./index.css";
import { saveToStorage } from "../../localeStorage";
import { getFromStorage } from "../../localeStorage";
export default () => {
  const storage = getFromStorage("lang") || "TURKISH"
  const [lang, setLang] = useState(storage);
  const { dispatch } = useContext(AppContext);

  const changeLanguageHandler = (lang) => {
    setLang(lang);
    saveToStorage("lang", lang);
  };
  const setLanguage = (siteLang) => {
    dispatch({ type: "setLang", siteLang });
    saveToStorage("siteLang", siteLang);
  };

  const options = Object.keys(LOCALES).map((locale) => {
    if (locale !== lang) {
      return (
        <li
          key={locale}
          onClick={() => {
            setLanguage(LOCALES[locale]);
            changeLanguageHandler(locale);
          }}
        >
          <div value={locale} className={locale}></div>
        </li>
      );
    }
    return null;
  });

  return (
    <div className="lang">
      <div className={lang}></div>
      <ul className="dropdown">{options}</ul>
    </div>
  );
};
