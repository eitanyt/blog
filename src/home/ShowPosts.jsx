import { useEffect, useState } from "react";

export function ShowPosts({ tag, page }) {
    const [data, setData] = useState([]);

    function getPosts(request) {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch(request, { signal })
            .then(res => res.json())
            .then(res => setData(res.posts));

        return () => controller.abort()
    }


    useEffect(function () {
        const url = tag ? `https://dummyjson.com/posts/search?tags=${tag}` : `https://dummyjson.com/posts?skip=${page}&limit=10`
        const abort = getPosts(url)

        return function cancel() {
            setData(null);
            abort()
        }
    }, [tag, page]);
    
    console.log(data);

    return (
        <div className="shou-posts">
            {data ? data.map((post, index) => (
                <article key={index} className="post">
                    <h1>{post.title}</h1>
                </article>
            )
            ) : null}
        </div>
    )
}

