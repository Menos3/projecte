import React, {useContext, useState} from 'react'
import { UserContext } from './UseContextUser'

const Logout = () => {

    const estado = useContext(UserContext);
    const {usuario, setUsuario} = estado;

  return (
    <div>Logout</div>
  )
}

export default Logout