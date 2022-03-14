import React, { useState} from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';


import { nanoid} from 'nanoid'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App(props) {

  const [cosas, setCosas] = useState("")

  const anadirCosas = (e) => { 

    e.preventDefault();
    if (!cosas) { 
      console.log(" no me vale")
    }
    setCosas("")
    setListaCositas([...listaCositas, {
      id: nanoid(),
      name:cosas

    }])
  }
  const [listaCositas, setListaCositas] = useState([])
    return (
    <div className="container mt-5">
      <div className="col-8">
        <ul className="list-group">
          <li className="list-group-item">
            {/* <button className="btn btn-sm btn-danger float-right" >Borrar</button>
            <button className="btn btn-sm btn-warning float-right" >Editar</button> */}
              <Button className="btn btn-sm btn-warning">Editar</Button>
              <Button className="btn btn-sm btn-danger">Borrar</Button>
          </li>
        </ul>
      </div>
      <div className="col-4">
        <form onSubmit={anadirCosas }>
            <input type="text" className="form-control mb-2" placeholder="añade cositas" value={ cosas} onChange={e=>setCosas(e.target.value)}/>
          <button className="btn btn-dark btn-block" type="submit"> Añadir</button>
        </form>
      </div>
    </div>
  )
}

App.propTypes = {}

export default App
