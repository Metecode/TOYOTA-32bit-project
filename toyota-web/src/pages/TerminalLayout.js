import { NavLink, Outlet } from "react-router-dom";
import { url } from "../utils";
import { I18nProvider } from "../translation";
import translate from "../translation/translate";
import LangSwitcher from "../components/LangSwitcher";
import { AppContext } from "../context";
import { useContext } from "react";

export default function TerminalLayout() {
  const {state} = useContext(AppContext)
  return (
    <I18nProvider locale={state.siteLang}>
      <>
        <nav>
          <NavLink to={url("terminal")}>AnaSayfa</NavLink>
          <NavLink to={url("terminal.errorList")}>HataListesi</NavLink>
          <NavLink to={url("terminal.profile")}>Profil</NavLink>
          <NavLink to={url("terminal.errorEntryPage")}>HataGiris</NavLink>
          <LangSwitcher/>
        </nav>
        <Outlet></Outlet>
      </>
    </I18nProvider>
  );
}
