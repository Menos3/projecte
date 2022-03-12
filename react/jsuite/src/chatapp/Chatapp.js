import React, {useState} from 'react'
import * as data from './BaseDatos.json'
import Message from './Message'
import shortid from 'shortid';

const Chatapp = () => {

  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [id, setId] = useState('');
  const [error, setError] = useState(null);

  const bbdd =(JSON.parse(JSON.stringify(data)));
  
  setMensajes(bbdd.messages);

  const agregarMensaje = e => {

    e.preventDefault();

    if(!mensaje.trim()) {

      console.log("Campo vacio");
      return;
    }

    setMensajes([...mensajes, {id: shortid.generate(), mensaje, chat_id: shortid.generate(), author_id: shortid.generate(), published: "22/2/22"}]);
    setMensaje('');
  }

  const eliminarMensaje = id => {

    const arrayFiltrado = mensajes.filter(item => item.id !== id)
    setMensajes(arrayFiltrado);
  }

  const editar = item => {

    setModoEdicion(true);
    setMensaje(item.mensaje);
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
    <h1>CRUD MENSAJES</h1>
    <br/>
    </div>

    <div className= "lista-chats">
      <thead> {/* Cabecera de la tabla */}
        <tr>
          <th>Id</th>
          <th>Mensaje</th>
          <th>Chat</th>
          <th>Autor</th>
          <th>Publicado</th>
        </tr>
      </thead>

      <tbody>
        {
          mensajes.length === 0 ? (
            <li className="list-group-item">Sin Tareas</li>
          ) : (
            mensajes.map(item => (

              <li className="list-group-item" key={item.id}>
                <span className="lead">{item.mensaje}</span>
                <button className="btn btn-sm btn-danger float-right mx-2"onClick={() => eliminarMensaje(item.id)}>Eliminar Mensaje</button>
                <button className="btn btn-sm btn-warning float-right" onClick={() => editar(item)}>Editar Mensaje</button>
              </li>
            ))
          )
        }
      
      </tbody>
    </div>
      <br/>
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
    </>
  )
}

export default Chatapp