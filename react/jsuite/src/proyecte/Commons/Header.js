import React from 'react'
import { Nav } from 'react-bootstrap'
import Formulario from './Formulario.js'



const Header = () => {
  return (
    

      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Lista de Tickets</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Crear Ticket</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Cambiar de Usuario</Nav.Link>
        </Nav.Item>
      </Nav>

      // <img className="menusuperior__img--logo  menusuperior__img--esquerra"  src="./img/logo.png " alt=" d"/>
      // <div className="menusuperior__botonera">
      //     <button className="menusuperior__botonera--boton ">Comandes</button>
      //   <button className="menusuperior__botonera--boton ">Incidencias</button>
      //   <button className="menusuperior__botonera--boton ">Seguridad</button>
      //   <button className="menusuperior__botonera--boton ">Tareas</button>
      //   <button className="menusuperior__botonera--boton ">Inventario</button>
      //   <button className="menusuperior__botonera--boton ">Mensajeria</button>
      // </div>
    

      // <img class="menusuperior__img--usuari menusuperior__img--dreta "src="./img/perfil-del-usuario.png " alt=" "/>
    
  )
}

export default Header