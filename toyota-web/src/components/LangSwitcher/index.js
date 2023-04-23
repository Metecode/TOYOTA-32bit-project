import React, { useContext } from "react";
import { LOCALES } from "../../translation";
import { AppContext } from "../../context";
export default ()=>{
    const {dispatch} = useContext(AppContext);

    const setLanguage = siteLang => dispatch({type: "setLang", siteLang})
    return <div>
        {Object.keys(LOCALES).map(locale => {
            return <button key={locale} onClick={()=>setLanguage(LOCALES[locale])}>{locale}</button>
        })}
    </div>
}