import { NavLink, Outlet } from "react-router-dom";
import { url } from "../utils";

export default function TerminalLayout() {
  return (
    <>
      <nav>
        <NavLink to={url("terminal")}>AnaSayfa</NavLink>
        <NavLink to={url("terminal.errorList")}>HataListesi</NavLink>
        <NavLink to={url("terminal.profile")}>Profil</NavLink>
        <NavLink to={url("terminal.errorEntryPage")}>HataGiris</NavLink>

      </nav>
      <Outlet></Outlet>
    </>
  );
}
