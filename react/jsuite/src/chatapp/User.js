import React from 'react'
import PropTypes from 'prop-types'
import * as data from './BaseDatos.json'

const User = ({id}) => {

    const usuarios = (JSON.parse(JSON.stringify(data))).users;
    const usuario = usuarios.filter(element => {return element.id === id})[0];
  return (
    <>
        {usuario.username}
    </>
  )
}

User.propTypes = {
  username: PropTypes.string
}

export default User