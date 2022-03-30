import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Chatapp from './chatapp/Chatapp'
import GestorTickets from './proyecte/Commons/GestorTickets'
import { Routes, Route } from "react-router-dom";
import Home from './Home'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
          <Route path="/" element={<GestorTickets />}/>
          <Route  path="/tickets" element={<GestorTickets />}/>
          <Route path="/chatapp" element={<Chatapp />} />
        
        </Route>
      </Routes>
  )
}

export default App