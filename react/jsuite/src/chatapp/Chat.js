import React from 'react'
import PropTypes from 'prop-types'
import * as data from './BaseDatos.json'

const Chat = ({id}) => {

    const chats = (JSON.parse(JSON.stringify(data))).chats;
    const chat = chats.filter(element => {return element.id === id})[0];

  return (
    <p>
        {chat.name}
    </p>
  )
}

Chat.propTypes = {
    name : PropTypes.string
}

export default Chat