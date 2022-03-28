import React, {useEffect, useState} from 'react'
import User from "./User";
import Chat from "./Chat"
import {Table, Button} from 'react-bootstrap'

import {bbddFirebase} from './firebase'
import {collection, query, getDocs, addDoc, serverTimestamp, deleteDoc, doc, setDoc, orderBy, onSnapshot} from 'firebase/firestore';

const Chatapp = () => {

  //DOCUMENTO JSON DE DONDE SE COGEN LOS REGISTROS
  // const bbddJson = (JSON.parse(JSON.stringify(data)));

  //STATES
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [id, setId] = useState('');
  const [error, setError] = useState(null);
  const [chat, setChat] = useState("");
  const [chats, setChats] = useState([]);

  //REFERENCIAS A LAS TABLAS DE FIREBASE
  const messageCollectionRef = collection(bbddFirebase, "Messages");
  const chatCollectionRef = collection(bbddFirebase, "Chats");

  const q = query(collection(bbddFirebase, "Messages"), orderBy('published', 'asc'));

  //FUNCIONES PARA RECUPERAR LOS REGISTROS DE LAS COLECCIONES
  const getChats = async () => {

    const datosChats = await getDocs(chatCollectionRef);

    setChats(datosChats.docs.map((valor) => {

      return {...valor.data(), id:valor.id}

    }))
  }

  useEffect(() => {

    onSnapshot(q, (snapshot) => {

      setMensajes(snapshot.docs.map((valor) => {

        return({...valor.data(), id:valor.id})

      }))
    })

    getChats();

  }, [])
  
  const agregarMensaje = e => {

    e.preventDefault();

    if(!mensaje.trim()) {

      console.log("Campo vacio");
      return;
    }

    addDoc(messageCollectionRef, {
      message: mensaje,
      chat_id: "lBKvrl44ZHw1ucuvTQAL",
      author_id: "2rYhkxRddVQtXgP3LAvK",
      published: serverTimestamp()
    })

    setMensaje('');
  }

  const eliminarMensaje = id => {

    deleteDoc(doc(bbddFirebase, "Messages", id));
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

    setDoc(doc(bbddFirebase, "Messages", id), {

      message: mensaje,
      published: serverTimestamp()

    });

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
                      {/* <th>Autor</th>
                      <th>Grupo</th> */}
                      <th>Opciones</th>

                    </tr>

                    </thead>

                    <tbody>
                    {
                      mensajes.map((element, index) => {

                        return <tr key={index}>
                          <td>{element.id}</td>
                          <td>{element.message}</td>
                          {/* <td><User id={element.author_id}/></td>
                          <td><Chat id={element.chat_id}/></td> */}
                          <td><Button variant = "danger" onClick={() => eliminarMensaje(element.id)}>Eliminar Mensaje</Button>
                          <Button variant = "warning" onClick={() => editar(element)}>Editar Mensaje</Button></td>
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