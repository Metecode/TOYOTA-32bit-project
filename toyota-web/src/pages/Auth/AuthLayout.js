import { Outlet } from "react-router";
import { useContext } from "react";
import { AppContext } from "../../context";
import { I18nProvider } from "../../translation";
export default function Authlayout() {
    const {state} = useContext(AppContext)
    return(
        <I18nProvider locale={state.siteLang}>
            <Outlet></Outlet>
        </I18nProvider>
    )
}