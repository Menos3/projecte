import React, {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Login'
import Registro from './Registro'
import Chatapp from './chatapp/Chatapp'
import GestorTickets from './proyecte/Commons/GestorTickets'
import NoAutenticated  from './NoAutenticated';
import { Routes, Route } from "react-router-dom";
import Home from './Home'
import { UserContext } from './UseContextUser';



const App = () => {
  const estado=useState("")
  const [usuario, setUsuario] = estado;

  return (
    <UserContext.Provider value={{ usuario: usuario, setUsuario: setUsuario }}>
      
        <Routes>
          <Route path="/" element={ usuario ? <Home estado = { estado } /> : <Login estado={estado}/>}>
            {/* <Route path="/" element={<GestorTickets estado={estado} />} /> */}
            <Route path="/tickets" element={<GestorTickets estado={estado} />} />
            <Route path="/chatapp" element={<Chatapp estado={estado} />} />
            {/* <Route path="/register" element={<Register estado={estado} />} /> */}
          </Route>
        </Routes>

      
    
    </UserContext.Provider>
  )
}

export default App