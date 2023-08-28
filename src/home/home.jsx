import { useState } from 'react'
import { ShowPosts } from './ShowPosts'
import { ChangePage } from './ChangPage'
import { Outlet, useOutletContext } from 'react-router-dom'

export function Home(params) {
  const [page, setPage] = useState(0)
  const [tag, setTag] = useState(null)
  // const [data, setData]= useOutletContext();

  return (
    <div className="homeComponent">
      <div className='tags'>תגיות</div>
      <div className="posts">
        <ShowPosts page={page} tag={tag} />
      </div>
      <div className="users">

      </div>
      <ChangePage setPage={setPage} page={page} />
    </div>
  )
}