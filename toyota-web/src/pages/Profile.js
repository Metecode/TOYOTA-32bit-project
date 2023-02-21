import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Profile() {

    const {setUser, user} = useAuth()
    const logoutHandle = () =>{
        setUser(false)
    }

    return(
        <div>
            Profil sayfasi <br />
            {!user && <Link to="/auth/login">Giris yap</Link> }     
            {user &&  <button onClick={logoutHandle}>Cikis yap</button>}
        </div>
    )
}