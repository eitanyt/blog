import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getdata } from "./ShowPosts";



export default function Post(props) {
    const { postId } = useParams()
    const { state } = useLocation();
    const [data, setData] = useState(null)
    const navigate = useNavigate();
	
    const goBack = () => {
		navigate(-1);
	}

    
    useEffect(function (params) {
        const url = `https://dummyjson.com/posts/${postId}/comments`
        const abort = getdata(url,res => setData(res.comments))
        return () => {
            abort()
        }
    }, [postId])

    return (
        <div className="postComponet">
            <button onClick={goBack}>Back</button>
            <article className="post">
                {/* <p>{state}</p> */}
                <h1>{state.title}</h1>
                <p>{state.body}</p>
            </article>
            {data && data.map((comment, index) => {
                return (<><p key={comment.id}><span>{comment.user.username}</span>{comment.body}</p></>
                )
            })}
        </div>
    )
}