import React, { useState,useContext } from 'react'
import { useNavigate} from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { UserContext } from './UseContextUser'
import { bbddFirebase } from './fireDataBase'
import Registro from './Registro'
import { collection, query, where, getDocs} from "firebase/firestore"

function Login() {
  // esto viene de la App
  const estado = useContext(UserContext)
  //para pasarle el nombre a esta estado
  const { usuario, setUsuario } = estado;
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [login, setLogin] = useState(true);

  const collectionTecnicos = collection(bbddFirebase, 'Tecnicos');

  const handlerSubmit = async (e) => {

    e.preventDefault();

    // hacer una query por el campo email
    const qu = query(collectionTecnicos, where('email', '==', email));
    const quSnapshot = await getDocs(qu);

    quSnapshot.docs.map((valor) => {

      // de lo que recogemos, se compara el email y la contraseña con los valores de los input
      // si coincide, se envia a la Home seteando el usuario

      if(valor.data().email === email && valor.data().password === password) {

        setUsuario(valor.data().name);

      } else {

        setLogin(false);
      }
      
    })

    navigate("/")

  }
  
  return (
    <>
      {
        login ? (
          <div>
            < Form >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>email</Form.Label>
                <Form.Control type="email" placeholder="Introduce el email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" />
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} name="password"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" onClick={handlerSubmit}>
                Enviar
              </Button>
            </Form >
          </div>
        ) : (
          <div>
            <Registro />
          </div>
        )}
    </> 
  )
}
  
export default Login