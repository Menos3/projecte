import React from 'react'
import PropTypes from 'prop-types'
import './styles/details.css'

function Name({ name}) {
  return (
      <div className='container__name'>
          <h3 className="name">{name}</h3>
      </div>
  )
}

Name.propTypes = {
    name: PropTypes.string
}

export default Name
