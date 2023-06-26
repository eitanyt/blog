import { useState } from 'react'
import {ShowPosts} from './ShowPosts'
export function Home(params) {
   const [page, setPage] = useState(0)
   const [tag, setTag] = useState(null)
  
   return(
      <>
      <div className="home-img">
        <h1>הבלוג הכי טוב</h1>
        </div>
        <div className='tags'>תגיות</div>
      <div className="posts">
        <ShowPosts page={page} tag={tag}/>
      </div>
      <div className="users">
        
      </div>
      <div className='change-pages center'>מעבר דפים</div>
      </>
    )
  }