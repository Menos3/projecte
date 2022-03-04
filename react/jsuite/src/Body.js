import React from 'react'
// import ListaActores from './Ejercicio1/ListaActores'
import ListTickets from './proyecte/ListTickets'
import Acciones from './proyecte/Commons/Acciones'
import Navegacion from './proyecte/Commons/Navegacion'

const Body = () => {
  return (
    <>
      {/* <ListaActores /> */}
      <Navegacion/>
      <Acciones />
      <ListTickets />

    </>
  )
}

export default Body