import { useParams } from "react-router"



export default function Post() {

    const {url, id} = useParams()
    console.log(url)
    return(
        <div>
            blog post = {url} - {id}
        </div>
    )
}