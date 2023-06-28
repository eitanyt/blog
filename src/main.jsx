import React from 'react'
import ReactDOM from 'react-dom/client'
import {Login} from './login/login.jsx'
import {Root,About,Personal} from './home/Root.jsx'
import {Home} from './home/Home.jsx'
import {createBrowserRouter, Route, RouterProvider, createRoutesFromElements} from "react-router-dom";
import "./style/style.scss";
import Post from './home/Post.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path = "/" element={<Root/>}>
    {/* <Route path = "contacts/:contactId" element = {<App/>} /> */}
    <Route path = "About" element={<About/>}/>
    <Route index  element={<Home/>}/>
    <Route path = "home" element={<Home/>}/>
    <Route path = "Personal" element={<Personal/>}/>
    <Route path = "Login" element={<Login/>}/>
    <Route path = "posts/:postId" element={<Post/>}/>
  </Route>
  
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
