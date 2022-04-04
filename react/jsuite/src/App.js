import React, {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Login'
import Chatapp from './chatapp/Chatapp'
import GestorTickets from './proyecte/Commons/GestorTickets'
import { Routes, Route } from "react-router-dom";
import Home from './Home'
import { UserContext } from './UseContextUser';



const App = () => {
  const estado=useState("cristina")
  const [usuario, setUsuario] = estado;

  return (
    <UserContext.Provider value={{usuario:usuario, setUsuario:setUsuario}}>
    <Routes>
        <Route path="/" element={<Home estado={ estado} />} >
          <Route path="/" element={<GestorTickets estado={ estado}/>}/>
          <Route  path="/tickets" element={<GestorTickets estado={ estado} />}/>
          <Route path="/chatapp" element={<Chatapp estado={ estado} />} />
          <Route path="/login" element={<Login estado={ estado}/>} />
          
        
        </Route>
      </Routes>
    </UserContext.Provider>
  )
}

export default App