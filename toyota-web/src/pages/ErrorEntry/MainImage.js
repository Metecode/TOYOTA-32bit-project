import { useSite} from '../../context'
import ListItemButton from "@mui/material/ListItemButton";

export default function MainImage() {

    const {image , dispatch} = useSite()

    const mainImage = ()=>{
        dispatch({type:"TOGGLE_IMAGE",image:"./assets/img/car.jpg"})
    }
    return(
        <>
        Mevcut tema = {image} <br />
            <ListItemButton onClick={mainImage}>Resmi degistir</ListItemButton>
        </>
    )
}