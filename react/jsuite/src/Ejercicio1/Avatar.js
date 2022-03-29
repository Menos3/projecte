import React from 'react'
import PropTypes from 'prop-types'

function Avatar({ imgURL, name }) {
  return (
    <div className="avatar">
        <img src={imgURL} alt={ name}></img>
    </div>
  )
}

Avatar.propTypes = {
    imgURL: PropTypes.string,
    name: PropTypes.string,
}

export default Avatar
