import React from 'react'
// import ListaActores from './Ejercicio1/ListaActores'
import ListTickets from '../ListTickets'
import Acciones from './Acciones'
import Navegacion from './Navegacion'

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