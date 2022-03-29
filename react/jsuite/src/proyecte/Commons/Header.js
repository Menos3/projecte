import React from 'react'


const Header = () => {
  return (
    <div className="menusuperior">

      <img className="menusuperior__img--logo  menusuperior__img--esquerra"  src="./img/logo.png " alt=" d"/>
      <div className="menusuperior__botonera">
          <button className="menusuperior__botonera--boton ">Comandes</button>
        <button className="menusuperior__botonera--boton ">Incidencias</button>
        <button className="menusuperior__botonera--boton ">Seguridad</button>
        <button className="menusuperior__botonera--boton ">Tareas</button>
        <button className="menusuperior__botonera--boton ">Inventario</button>
        <button className="menusuperior__botonera--boton ">Mensajeria</button>
      </div>
    

      <img class="menusuperior__img--usuari menusuperior__img--dreta "src="./img/perfil-del-usuario.png " alt=" "/>
    </div>
  )
}

export default Header