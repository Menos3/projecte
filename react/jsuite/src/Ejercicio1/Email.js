import React from 'react'
import PropTypes from 'prop-types'

function Email({ email }) {
  return (
      <>
          <h3>{ email}</h3>
      </>
  )
}

Email.propTypes = {
    email: PropTypes.string
}

export default Email
