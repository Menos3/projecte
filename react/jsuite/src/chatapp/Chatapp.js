import React from 'react'
import PropTypes from 'prop-types'
import * as data from './BaseDatos.json'
import Message from './Message'

const Chatapp = (props) => {

  const bbddData = (JSON.parse(JSON.stringify(data)));

  return (
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
      {bbddData.messages.map((element, index) => {
        console.log(element.message);
        return <Message key={index} datos={element}/>
      })};
      </tbody>
    </div>
  )
}

Chatapp.propTypes = {}

export default Chatapp