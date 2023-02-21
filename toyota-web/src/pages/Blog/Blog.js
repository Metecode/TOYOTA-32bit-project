import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { url } from "../../utils"

export default function Blog() {
    const[searchParams, setSearchParams] = useSearchParams()
    const[search, setSearch] = useState(searchParams.get('search')||'')

    useEffect(()=>{
        searchParams.set('search', search)
        if (!search) {
            searchParams.delete('search')
        }
        setSearchParams(Object.fromEntries([...searchParams]))
    },[search])

    const posts = [
        {
            id:1,
            title:'post 1',
            url: 'post-1'
        },
        {
            id:2,
            title:'post 2',
            url: 'post-2-aydin-bilmemne'
        },
    ]

    return(
        <div>

            <input type="text" defaultValue={search} onChange={e=> setSearch(e.target.value)} />

            <ul>
                {posts.map(post => (
                    <li>
                        <Link to={url('home.blog.post',{
                            id: post.id,
                            url: post.url 
                        })}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}