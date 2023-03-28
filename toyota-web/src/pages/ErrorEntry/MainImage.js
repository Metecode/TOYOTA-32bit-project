import { useSite} from '../../context'

export default function MainImage() {

    const {image , dispatch} = useSite()

    const mainImage = ()=>{
        dispatch({type:"TOGGLE_IMAGE",image:"./assets/img/car.jpg"})
    }
    return(
        <>
        Mevcut tema = {image} <br />
            <button onClick={mainImage}>Resmi degistir</button>
        </>
    )
}