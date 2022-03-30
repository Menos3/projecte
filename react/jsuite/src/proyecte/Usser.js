import React from 'react'
import PropTypes from 'prop-types'
import * as data from './BaseDatos.json'


function Usser({ id}) {
    const users = (JSON.parse(JSON.stringify(data))).users;
    const user = users.filter(element => {return element.id===id })[0];
  return (
      <>
          { user.username}
      </>
  )
}

Usser.propTypes = {
    username: PropTypes.string
}

export default Usser

