import { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { Header } from "./Header";

function Root(params) {

  return (
    <>
      <Header />
      <div className="childmane">
        <Outlet />
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