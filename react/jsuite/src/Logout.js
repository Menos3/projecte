import Alert from 'react-bootstrap/Alert'
import { Button } from 'react-bootstrap'
import React, {useContext, useState} from 'react'
import { UserContext } from './UseContextUser'
import { useNavigate} from 'react-router-dom'

const Logout = () => {

    const estado = useContext(UserContext);
    const {usuario, setUsuario} = estado;
    const ventana = true;
    const navigate = useNavigate();
    
    const handleLogout = (e) => {

        e.preventDefault();
        setUsuario("");
        navigate("/");
    }

    return (
        
        <>
          <Alert show = {ventana} variant="info">
            <Alert.Heading>LOGOUT</Alert.Heading>
            <p>
              Quiere cerrar sesion?
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={handleLogout} variant="outline-success">Si</Button>
              <Button onClick={(e) => ventana = false} variant="outline-danger">No</Button>
            </div>
          </Alert>
        </>
      );
}

export default Logout