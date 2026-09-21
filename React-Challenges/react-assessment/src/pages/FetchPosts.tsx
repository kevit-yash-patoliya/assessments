import { useEffect, useState } from "react"
import {axiosClient} from "../config/axios"
export interface Post{
    userId:number,
    id:number,
    title:string,
    body:string,
}
export default function FetchPosts() {
    // fix: type issue 
    const [posts, setPosts] = useState<Post[]>([])
    const [error, setError] = useState<null | string>(null)
    // fix: blank screen issue while fetching
    const [loading,setLoading] = useState<boolean>(false)
    useEffect(() => {
        async function fetchPosts() {
            try {
                setLoading(true)
                const data = await axiosClient.get("https://jsonplaceholder.typicode.com/posts")
                setPosts(data.data)
                setError(null)
            } catch (err) {
                setError("Error while fetching posts")
                console.error(err);
            } finally{
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])

    return (
        <>
        {/* fix : Loader added */}
        {loading?<h5>Loading posts...</h5>:<></>}


            {posts && posts.map((post, index) => (
                <div key={index}>
                    Title : {post?.title || "title"}
                </div>
            ))

            }
            {
                error
            }
        </>
    )
}