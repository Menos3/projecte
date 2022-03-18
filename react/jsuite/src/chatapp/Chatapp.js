import React, {useEffect, useState} from 'react'
import * as data from './BaseDatos.json'
import {nanoid} from 'nanoid';
import User from "./User";
import {Table, Button} from 'react-bootstrap'

const Chatapp = () => {

  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [id, setId] = useState('');
  const [error, setError] = useState(null);

  const bbdd =(JSON.parse(JSON.stringify(data)));
  
  useEffect ( ()=> {

    setMensajes(bbdd.messages);
    console.log(mensajes)
  
  },[]);

  const agregarMensaje = e => {

    e.preventDefault();

    if(!mensaje.trim()) {

      console.log("Campo vacio");
      return;
    }

    setMensajes([...mensajes, {id: nanoid.generate(), message: mensaje, chat_id: nanoid.generate(), author_id: nanoid.generate(), published: "22/2/22"}]);
    setMensaje('');
  }

  const eliminarMensaje = id => {

    const arrayFiltrado = mensajes.filter(item => item.id !== id)
    setMensajes(arrayFiltrado);
  }

  const editar = item => {

    setModoEdicion(true);
    setMensaje(item.message);
    setId(item.id);
  }

  const editarMensaje = e => {

    e.preventDefault();

    if(!mensaje.trim()) {

      console.log("Campo vacio");
      return;
    }

    const arrayEditado = mensajes.map(item => item.id === id ? {id, mensaje} : item)
    setMensajes(arrayEditado);
    setModoEdicion(false);
    setMensaje('');
    setId('');
    setError(null)
  }

  return (
      <>
        <div className="container mt-5">
          <h1 className='text-center'>CRUD MENSAJES</h1>
          <hr/>
          <div className='row'>
            <div className='col-8'>
              <h4 className='text-center'>Lista de Mensajes</h4>
                {
                  mensajes.length === 0 ? (

                  <li className="list-group-item">Sin Mensajes</li>

                  ) : (

                  <Table striped bordered hover>

                    <thead>

                    <tr>
                      <th>Id</th>
                      <th>Mensaje</th>
                      <th>Autor</th>

                    </tr>

                    </thead>

                    <tbody>
                    {
                      mensajes.map((e, index) => {
                        return <tr key={index}>
                          <td>{e.id}</td>
                          <td>{e.message}</td>
                          <td><User id={e.author_id}/></td>
                          <td><Button variant = "warning" onClick={() => eliminarMensaje(e.id)}>Eliminar Mensaje</Button>
                          <Button variant = "danger" onClick={() => editar(e)}>Editar Mensaje</Button></td>
                        </tr>
                      })
                    }
                    </tbody>
                  </Table>
                  )}
      
            </div>

        <div className="col-4">
          <h4 className="text-center">
            {
              modoEdicion ? 'Editar Mensaje' : 'Agregar Mensaje'
            }
          </h4>
          <form onSubmit={modoEdicion ? editarMensaje : agregarMensaje}>
            {
              error ? <span className="text-danger">{error}</span> : null
            }
            <input 
              type="text" 
              className="form-control mb-2"
              placeholder="Ingrese Mensaje"
              onChange={e => setMensaje(e.target.value)}
              value={mensaje}
            />
            {
              modoEdicion ? (
                <button className="btn btn-dark btn-block" type="submit">Editar Mensaje</button>
              ) : (
                <button className="btn btn-dark btn-block" type="submit">Agregar Mensaje</button>
              )
            }
          </form>
        </div>
      </div>
    </div>  
  </>
  )
}

export default Chatapp