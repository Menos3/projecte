import React, { useContext } from 'react'
import { Button} from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { UserContext} from './UseContextUser'

export default function Home() {
  const estado = useContext(UserContext)
  const { usuario, setUsuario}= estado

  return (
    <div>BIENVENIDOSSSSSSSSSSSSSSSSSSSSSSSSSSSSs

      <Button  variant="outline-primary"><Link to="/tickets" >Tickets</Link></Button>
  

      <Button  variant="outline-primary"><Link to="/chatapp" >ChatApp</Link></Button>
      
      <Button  variant="outline-primary"><Link to="/login" >Login</Link></Button>

      <hr></hr>

      <div>{ usuario}</div>
      <Outlet/>

          


    </div>
  )
}
