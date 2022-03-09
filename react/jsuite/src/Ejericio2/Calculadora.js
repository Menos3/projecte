import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Pantalla from './Pantalla'
import Input from './Input'
import Boton from './Boton'


function Calculadora() {

  const [contador, setContador] = useState(0);
  //manejadors que le sume uno

  function Sumar() { 
    setContador(contador+1);
  }
  function Resta() { 
    setContador(contador - 1);
  }
  function Reset() { 
    setContador(0);
  }
  function Introducir(value) { 
    setContador(value);
  }

  return (
    <>
      <Pantalla value={contador}/>
      {/* reset */}
      <Boton handler={Reset} name='RESET'/>
      {/* Suma */}
      <Boton handler={Sumar} name='SUMAR 1'/>
      {/* Resta */}
      <Boton handler={Resta} name='RESTAR 1' />
      {/* valor que se sumara */}
      <Input handler={Introducir}/>
    </>
  )
}

Calculadora.propTypes = {}

export default Calculadora
