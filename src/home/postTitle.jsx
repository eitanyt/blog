import { Link } from 'react-router-dom'

export default function PostTitle({post}) {
    
    return(
        <div className="post-title">
        <Link to={`../home/${post.id}`} state={post}>
            <h1>{post.title}</h1>
            {post.reactions? <span>{`${post.reactions} comments`}</span>: <span>No comments</span>}
        </Link>
        </div>
    )
}