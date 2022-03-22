import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { nanoid} from 'nanoid'


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
  const [ticket, setTicket] = useState(
    { id:nanoid(),idTecnicos: -1, nameTec: -1,idComponentes: -1,nameComponentes:-1, titulo: "Titulo del Ticket", description: "Describe la informacion"}
  );
 
  // const handlerCargarTecnico = function (e){ 
  //   e.preventDefault();
  //   const opcion = e.target.value;
  //   console.log(opcion);
  //   setIdTecnicos(opcion);
  // }
  const handlerEnviar = function (e) {
    e.preventDefault();
    setListTicket([...listTicket, ticket]);
    console.log(ticket);
  }
  const borrarTicket =id=> { 
  
    const lista = listTicket.filter(ticket => ticket.id !== id);
    setListTicket(lista)
  }
  const editarTicket = e => { 
    e.preventDefault();
    if (!ticket.trim()) { 
      return
    }




    
  }
  
 
  // const fechaActual = function () { 
  //   fechaActual = now date();
    

  // }
  // }
  return (
    <div>
      <form onSubmit={ handlerEnviar }>
        <h1>CRUD TICKETS</h1>
        <div className="row">
          <div className="col-4">
            <h3>Titulo</h3>
            <input onChange={e => setTicket({...ticket,titulo:e.target.value})}></input>
          </div>
          <div className="col-4">
            <h3>Description</h3>
            <input onChange={e => setTicket({...ticket,titulo:e.target.value})}></input>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <h3>Técnicos</h3> 
            <select name="tec" id='selTecnicos' onChange={e=>setTicket({...ticket,idTecnicos:e.target.value, nameTec:e.target.value})}>
              <option value={-1}>Selecciona un tecnnico</option>
              {
                tecnicos.map((e, id) => (<option key={"tecnico" + id} value={e.value} >{ e.label}</option>) )
              }
            </select>
            {/* <input type='date' onChange={e=>setTicket({...ticket,creacion:})}></input> */}
          </div>
          <div className='col-4'>
            <h3>Componentes</h3>
            <select name='Com' id='selCom' onChange={e=>setTicket({...ticket,idComponentes:e.target.value})}>
              <option value={-1}>Selecciona un componente</option>
              {
                componentes.map((e, id) => (<option key={"componente" + id} value={id}>{e.label} </option>))
              }
            </select>
          </div>
        </div>
          <Button className='col-1' variant="success" type='submit'>Enviar</Button>
      </form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Descripcion</th>
            <th>Nombre Asset</th>
            <th>Assignacion</th>
          </tr>
        </thead>
        <tbody>
          { listTicket.length ===0 ? (<tr> No hay Ningun ticket</tr>):(listTicket.map((e, index) => {
            console.log(e);
            return <tr key={"ticket " + index} ><td>{e.id}</td><td>{e.titulo}</td><td>{e.description}</td><td>{e.name}</td><td>{e.idComponentes}</td><td><Button variant="danger" onClick={ ()=> borrarTicket(e.id)}>Borrar</Button><Button variant="warning" type="submit">Editar</Button></td>
          </tr>})
          )}
        </tbody>
      </Table>
    </div>
  )
}


export default Menu
