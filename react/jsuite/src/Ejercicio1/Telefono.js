import React from 'react'
import PropTypes from 'prop-types'
import './styles/details.css'

function Telefono({ phone }) {
  return (
    <div className="telf">
          <h3>{ phone}</h3>
    </div>
  )
}

Telefono.propTypes = {
    phone : PropTypes.string,
}

export default Telefono
