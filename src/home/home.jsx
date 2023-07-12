import { useState } from 'react'
import {ShowPosts} from './ShowPosts'
import { ChangePage } from './ChangPage'
import { Outlet } from 'react-router-dom'

export function Home(params) {
   const [page, setPage] = useState(0)
   const [tag, setTag] = useState(null)
  
   return(
      <>
      <div className="home-img">
        <h1>אל תבזבז את זמנך</h1>
        </div>
        <div className='tags'>תגיות</div>
      <div className="posts">
        <ShowPosts page={page} tag={tag}/>
        <Outlet />
      </div>
      <div className="users">
        
      </div>
      <ChangePage setPage={setPage} page={page}/>
      </>
    )
  }