import React from 'react'
import User from './User'
import Chat from './Chat'
import PropTypes from 'prop-types'

const Message = (props) => {

    const {id, message, chat_id, author_id, published} = props.data;

  return (
    
    <tr>
        <td>{id}</td>
        <td>{message}</td>
        <td><Chat id={chat_id}/></td>
        <td><User id={author_id}/></td>
        <td>{published}</td>
    </tr>
  )
}

Message.propTypes = {

}

export default Message