import { Link } from "react-router-dom"


export default function Page404() {
    return(
        <div>
            <h1>Sayfa bulunamadi</h1>
            <Link to="/">Anasayfaya don </Link>
        </div>
    )
}