import { useEffect, useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { Header } from "./Header";

function Root(params) {
  
  return (
    <>
      <Header />
      <div className="childmane homeComponent">
      <div className="home-img">
        <h1>אל תבזבז את זמנך</h1>
      </div>
      <Outlet />
      {/* <Outlet context={[data, setData]} /> */}
    </div>
      <div style={{
        fontSize: 40, position: 'fixed',
        top: '65px',
        right: '0',
      }}>&#9855;</div>
    </>
  )
}

function About(params) {
  return (
    <div>Home</div>
  )
}
function Personal(params) {
  return (
    <div>Personal</div>
  )
}



export { Root, About, Personal }