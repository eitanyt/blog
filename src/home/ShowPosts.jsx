import { useEffect, useState } from "react";
import PostTitle from "./postTitle";

export function getdata(request,setData) {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(request, { signal })
        .then(res => res.json())
        .then(res => setData(res));

    return () => controller.abort()
}

export function ShowPosts({ tag, page }) {
    const [data, setData] = useState([]);
    const url = tag ? `https://dummyjson.com/posts/search?tags=${tag}` : `https://dummyjson.com/posts?skip=${page*10}&limit=10`


    useEffect(function () {
        
        const abort = getdata(url,res => setData(res.posts))

        return () => abort()
    }, [tag, page]);
    
    console.log(data);

    return (
        <div className="shou-posts">
            {data && data.map((post, index) => (
                // <PostTitle post={post} key={post.id} />
                <PostTitle post={post} key={post.id} />
            )
            )}
        </div>
    )
}

