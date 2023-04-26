import React, { useContext, useState } from "react";
import { LOCALES } from "../../translation";
import { AppContext } from "../../context";
import "./index.css";
export default () => {
  const [lang, setLang] = useState("TURKISH");
  const { dispatch } = useContext(AppContext);

  const changeLanguageHandler = (lang) => {
    setLang(lang);
  };
  const setLanguage = (siteLang) => {
    dispatch({ type: "setLang", siteLang });
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
