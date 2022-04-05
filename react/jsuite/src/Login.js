import React, { useState,useContext } from 'react'
import { useNavigate} from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { UserContext} from './UseContextUser'

export default function Login() {
  const estado=useContext(UserContext)
  const { usuario, setUsuario } =estado;
  const [nom, setNom] = useState("");
  const navigate = useNavigate();
    
  
    const handlerSubmit = (e) => { 
      e.preventDefault();
      setUsuario(nom)
      setNom("")
        navigate("/")

    }

    
  return (

    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Nom</Form.Label>
              <Form.Control type="nom" placeholder="Introduce tu nombre" onChange={(e) => setNom(e.target.value)} value={nom} name="usuario"/>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
          <Button variant="primary" onClick={handlerSubmit}>
      Enviar
    </Button>
  </Form>
  )
}
