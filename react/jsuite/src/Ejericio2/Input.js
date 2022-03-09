import React from 'react'
import PropTypes from 'prop-types'

function Input({ handler }) {
  //creamos funcion para recoger el valor del input de


  function Recoger(e) { 
    e.preventDefault();
    const value = e.target.value
    handler(value)
  }

  return (

    // onChange cada vez que cambia genera un EVENTO
    //recoge toda la info del alrededors y se la pasa a RECOGER
    //el onChange (e) es el contexto del input.
    //SABER LO QUE ES (STRING O NUMERITOOOOOOOOOOOOOO)
    <>
      <input type='number' onChange={(e) => { Recoger(e)}}></input>
    </>
  )
}

Input.propTypes = {}

export default Input
