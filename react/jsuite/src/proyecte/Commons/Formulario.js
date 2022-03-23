import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { nanoid} from 'nanoid'

//Estado propios
//handler  pasarselo del gestor al fomulario

export default function Formulario({selects,saveTicket}) {
    
    const [formData, setFormData] = useState({titulo:"", descripcion:"", asset:"",assignacion:""});
    
    const handlerInputTitulo = (valueTitulo) => {
        setFormData({ ...formData, titulo: valueTitulo });
    }
    const handlerInputDescripcion = (valueDescrip) => {
        setFormData({ ...formData, descripcion: valueDescrip });

    }
    const handlerSelTec = (valueSelecTec) => {
        setFormData({ ...formData, assignacion: valueSelecTec });

    }
    const handlerSelAss = (valueSelecAss) => {
        setFormData({ ...formData, asset: valueSelecAss });

    }
    //al 
    const handlerSubmit = (e) => { 
        e.preventDefault();
        if (!formData.titulo || !formData.descripcion || !formData.asset || !formData.assignacion) {
            return 
        }

        saveTicket({...formData, id:nanoid()});
        
    }
    
   
   
   
   
   
    return (
    // Hacer un handler para cada linea del formulario de O
    // Hacer un Handler generico
    <form onSubmit={ handlerSubmit }>
        <h1>CRUD TICKETS</h1>
        <div className="row">
          <div className="col-4">
            <h3>Titulo</h3>
                <input onChange={e => handlerInputTitulo(e.target.value)}></input>
          </div>
          <div className="col-4">
            <h3>Descripcion</h3>
            <input onChange={e => handlerInputDescripcion(e.target.value)}></input>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <h3>Técnicos</h3> 
            <select name="tec" id='selTecnicos' onChange={e=>handlerSelTec(e.target.value)}>
              <option value={-1}>Selecciona un tecnnico</option>
              {
                selects.tecnicos.map((e, id) => (<option key={"tecnico" + id} value={e.value} >{ e.label}</option>) )
              }
            </select>
            {/* <input type='date' onChange={e=>setTicket({...ticket,creacion:})}></input> */}
          </div>
          <div className='col-4'>
            <h3>Componentes</h3>
            <select name='Com' id='selCom' onChange={e=>handlerSelAss(e.target.value)}>
              <option value={-1}>Selecciona un componente</option>
              {
                selects.componentes.map((e, id) => (<option key={"componente" + id} value={id}>{e.label} </option>))
              }
            </select>
          </div>
        </div>
          <Button className='col-1' variant="success" type='submit'>Enviar</Button>
      </form>
  )
}
