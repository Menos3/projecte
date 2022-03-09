import React from 'react'
import PropTypes from 'prop-types'

function Boton({ handler, name }) {
  
  return (
      <>
      <button onClick={() => handler()}>{ name}</button>
      </>
  )
}

Boton.propTypes = {}

export default Boton
