import { useEffect, useState } from "react"
import {axiosClient} from "../config/axios"

export default function FetchPosts() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState<null | string>(null)
    useEffect(() => {
        async function fetchPosts() {
            try {

                const data = await axiosClient.get("https://jsonplaceholder.typicode.com/posts")
                setPosts(data.data)
                setError(null)
            } catch (err) {
                setError("Error while fetching posts")
                console.error(err);
            }
        }
        fetchPosts()
    }, [])

    return (
        <>
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