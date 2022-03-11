import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Boton from './Boton'
import Input from './Input'
import Cesta from './Cesta'





function Form(props) {
   
    const  [listaCompra, setListaCompra ] = useState()

    function insertarCosas(e) { 
        e.preventDefault();
        
    }



  return (
    <div>
          <form action=''>
              <Input />
              <Boton funcion={""} name={ ""}/>
              <Cesta lista={listaCompra}/>
          </form>
    </div>
  )
}

Form.propTypes = {}

export default Form
