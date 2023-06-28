import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
// import { getPosts } from "./ShowPosts";



export default function Post(props) {
    const { postId } = useParams()
    const { state } = useLocation();
    const [data, setData] = useState(null)

    function getPosts(request) {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch(request, { signal })
            .then(res => res.json())
            .then(res => setData(res.comments)
            )
        return () => controller.abort()
    };

    // async function getComments(postId) {

    // }
    useEffect(function (params) {
        const url = `https://dummyjson.com/posts/${postId}/comments`
        const abort = getPosts(url)
        return () => {
            abort()
        }
    }, [postId])
    // console.log(data.comments);
    return (
        <div className="postComponet">
            <article className="post">
                <h1>{state.title}</h1>
                <p>{state.body}</p>
            </article>
            {data && data.map((comment, index) => {
                return (<><p key={index}><span>{comment.user.username}</span>{comment.body}</p></>
                )
            })}
        </div>
    )
}