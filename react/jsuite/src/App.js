import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Body from './proyecte/Commons/Body'
import Footer from './proyecte/Commons/Footer'
import Header from './proyecte/Commons/Header'
import Menu from './proyecte/Commons/Menu'




const App = () => {
  return (
    <>
      <Header/>
      <Body />
      <Menu></Menu>
      <Footer/>
     
    </>
  )
}

export default App