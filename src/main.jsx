import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Login} from './login/login.jsx'
import {Root,About,Personal,Home} from './home/home'
import {createBrowserRouter, Route, RouterProvider, createRoutesFromElements} from "react-router-dom";
// import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path = "/" element={<Root/>}>
    <Route path = "contacts/:contactId" element = {<App/>} />
    <Route path = "About" element={<About/>}/>
    <Route path = "home" element={<Home/>}/>
    <Route path = "Personal" element={<Personal/>}/>
    <Route path = "Login" element={<Login/>}/>
  </Route>
  
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
