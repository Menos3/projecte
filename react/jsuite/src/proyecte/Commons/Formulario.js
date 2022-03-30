import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { nanoid} from 'nanoid'

//Estado propios
//handler  pasarselo del gestor al fomulario

export default function Formulario({ selects, saveTicket,formData,setFormData, estadoEditar, funcione}) {
  console.log("estado",estadoEditar)
    
  
  const handlerInputTitulo = (valueTitulo) => {
        setFormData({ ...formData, titulo: valueTitulo });
    }
    const handlerInputDescripcion = (valueDescrip) => {
        setFormData({ ...formData, descripcion: valueDescrip });

    }
    const handlerSelTec = (valueSelecTec) => {
        setFormData({ ...formData, assignacion_id: valueSelecTec*1 });

    }
    const handlerSelAss = (valueSelecAss) => {
        setFormData({ ...formData, asset_id: valueSelecAss*1 });

    }
    
  const handlerSubmit = (e) => { 
    e.preventDefault();
      let value = Object.values(formData).find((t) => {
        console.log("t",t)
        if (t === "" || t === null) return true;
      });

      if (value !== undefined) {
        return;
      }
        console.log("fd",formData)
        saveTicket(e,formData);
  }

   
   
    return (
    // Hacer un handler para cada linea del formulario de O
    // Hacer un Handler generico
      <form className="center" onSubmit={e=>estadoEditar ? funcione(e,formData.id) : handlerSubmit(e)  }>
        <h1 className="text-center">CRUD TICKETS</h1>
        <div className="row ">
          <div className="col-4">
            <h3>Titulo</h3>
            <input onChange={e => handlerInputTitulo(e.target.value)} value={ formData.titulo }></input>
          </div>
          <div className="col-4">
            <h3>Descripcion</h3>
            <input onChange={e => handlerInputDescripcion(e.target.value)} value={ formData.descripcion }></input>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <h3>Técnicos</h3> 
            <select name="tec" id='selTecnicos' value={ formData.assignacion} onChange={e=>handlerSelTec(e.target.value)}>
              <option value={-1}>Selecciona un tecnnico</option>
              {
                selects.tecnicos.map((e, id) => (<option key={"tecnico" + id} value={e.value} >{ e.label}</option>) )
              }
            </select>
            {/* <input type='date' onChange={e=>setTicket({...ticket})}></input> */}
          </div>
          <div className='col-4'>
            <h3>Componentes</h3>
            <select value={ formData.asset} name='Com' id='selCom' onChange={e=>handlerSelAss(e.target.value)}>
              <option value={-1}>Selecciona un componente</option>
              {
                selects.componentes.map((e, id) => (<option key={"componente" + id} value={e.value}>{e.label} </option>))
              }
            </select>
          </div>
        </div>
        
        {
          estadoEditar ? (
          <button className="btn btn-warning btn-block" type="submit">Editar</button>)   : (<button className="btn btn-dark btn-block" type="submit">Agregar</button>)
        }
      </form>
  )
}
