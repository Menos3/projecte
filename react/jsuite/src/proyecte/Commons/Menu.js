import React, { useState } from 'react'
import { Button} from 'react-bootstrap'


const tecnicos = [
  { value: 0, label: "Armand" },
  { value: 1, label: "Pep" },
  { value: 2, label: "Cristina" }
];

const componentes = [
  { value: 0, label: "Monitos LG" },
  { value: 1, label: "teclado Asus" },
  { value: 2, label: "raton omoton" }
];

console.log(tecnicos, componentes)

function Menu(props) {
  const [listTicket, setListTicket]=useState([])
  const [ticket, s5etTicket] = useState(
    { idTecnicos: -1, idComponentes: -1, titulo: "Titulo del Ticket", description: "Describe la informacion" }
  );

  const handlerCargarTecnico = function (e){ 
    e.preventDefault();
    const opcion = e.target.value;
    console.log(opcion);
    setIdTecnicos(opcion);
  
  }

  // const handlerCargarComponente = function (e) { 
  //   e.preventDefault();
  //   const optComp = e.target.value;
  //   console.log(optComp);
  //   setTicket(tick);
  // }

  const handlerEnviar = function (e) { 
    e.preventDefault();
    setListTicket([...listTicket, ticket]);


  
  // }
  return (
    <div>
      <form onSubmit={handlerEnviar}>
        <div className="row">
          <div className="col-2">
            <h3>Titulo</h3>
            <input onChange={}></input>
          </div>
          <div className="col-2">
            <h3>Description</h3>
            <inputo onChange={ }></input>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <h3>Técnicos</h3> 
            <select name="tec" id='selTecnicos' onClick={ handlerCargarTecnico}>
              <option value={-1}>Selecciona un tecnnico</option>
              {
                tecnicos.map((e, id) => (<option key={"tecnico"+id} value={id} >{e.label}</option>) )
              }
            </select>
            
          </div>
          <div className='col-4'>
            <h3>Componentes</h3>
            <select name='Com' id='selCom' onClick={ handlerCargarComponente}>
              <option value={-1}>Selecciona un componente</option>
              {
                componentes.map((e, id) => (<option key={"componente" + id} value={id}>{e.label} </option>))
              }
            </select>
          </div>
          <Button className='col-1' variant="success" type='submit'>Enviar</Button>
        </div>
      </form>
    </div>
  )
}



export default Menu
