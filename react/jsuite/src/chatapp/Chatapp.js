import React, {useEffect, useState} from 'react'
import * as data from './BaseDatos.json'
import {nanoid} from 'nanoid';
import User from "./User";
import Chat from "./Chat"
import {Table, Button} from 'react-bootstrap'

const Chatapp = () => {

  const bbdd = (JSON.parse(JSON.stringify(data)));

  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState(bbdd.messages);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [id, setId] = useState('');
  const [error, setError] = useState(null);
  const [chat, setChat] = useState("");
  const [chats, setChats] = useState(bbdd.chats);

  const agregarMensaje = e => {

    e.preventDefault();

    if(!mensaje.trim()) {

      console.log("Campo vacio");
      return;
    }

    setMensajes([...mensajes, {id: nanoid(), message: mensaje, chat_id: chat.id, author_id: 1, published: "22/2/22"}]);
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

    const arrayEditado = mensajes.map(item => item.id === id ? {...item, message: mensaje} : item)
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
                      <th>Grupo</th>

                    </tr>

                    </thead>

                    <tbody>
                    {
                      mensajes.map((element, index) => {
                        return <tr key={index}>
                          <td>{element.id}</td>
                          <td>{element.message}</td>
                          <td><User id={element.author_id}/></td>
                          <td><Chat id={element.chat_id}/></td>
                          <td><Button variant = "warning" onClick={() => eliminarMensaje(element.id)}>Eliminar Mensaje</Button>
                          <Button variant = "danger" onClick={() => editar(element)}>Editar Mensaje</Button></td>
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
            <div>
              <p>Escull el xat a on vols enviar el missatge:</p>
              <select onChange={e => setChat(e.target.value)} key="chats">
              
              {
                chats.map(index => (
                  <option key = {index.id} value = {index.id}>{index.name}</option>
                ))
              }
              
              </select>
            </div>

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