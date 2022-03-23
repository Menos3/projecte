import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Body from './proyecte/Commons/Body'
import Footer from './proyecte/Commons/Footer'
import Header from './proyecte/Commons/Header'
import GestorTickets from './proyecte/Commons/GestorTickets'



const App = () => {
  return (
    <>
      <Header/>
      <Body />
      <GestorTickets/>
      <Footer/>
     
    </>
  )
}

export default App