import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>BIENVENIDOSSSSSSSSSSSSSSSSSSSSSSSSSSSSs

      <Link to="/tickets" ><big>Tickets</big></Link>
      <Link to="/chatapp" ><big>ChatApp</big></Link>
      <hr></hr>
      <Outlet/>

          


    </div>
  )
}
