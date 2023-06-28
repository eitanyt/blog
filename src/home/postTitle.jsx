import { Link } from 'react-router-dom'

export default function PostTitle({post}) {
    
    return(
        <div className="post">
        <Link to={`../posts/${post.id}`} state={post}>
            <h1>{post.title}</h1>
            {post.reactions? <span>{`${post.reactions} comments`}</span>: <span>No comments</span>}
        </Link>
        </div>
    )
}