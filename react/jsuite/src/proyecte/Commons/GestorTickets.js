import React, { useState } from 'react'
import ListaTickets from './ListaTickets'
import Formulario from './Formulario'
import { Button, Table } from 'react-bootstrap'
import { nanoid} from 'nanoid'

const selects = {
  tecnicos :[
    { value: 0, label: "Armand" },
    { value: 1, label: "Pep" },
    { value: 2, label: "Cristina" }
  ],
   componentes :[
    { value: 0, label: "Monitos LG" },
    { value: 1, label: "teclado Asus" },
    { value: 2, label: "raton omoton" }
  ]

}

//index de la linea con un slice

function GestorTickets(props) {
  //se lo paso al componente ListaTickets
  const [listTicket, setListTicket]=useState([])
  
  const handlerSave = (ticket) => {
   
    setListTicket([...listTicket, ticket]);
    console.log(listTicket)

  }
 
//Los Tickets se los quede el Gestor
// const fechaActual = function () { 
  //   fechaActual = now date();
    

  // }
  // }
  return (
    <div>
      <Formulario saveTicket={handlerSave} selects={selects}/>
      <ListaTickets selects={selects} listTicket={listTicket}/>
      {/* <Table striped bordered hover>
            {console.log(listTicket)}
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
        {listTicket.length ===0 ? (<tr> No hay Ningun ticket</tr>):(listTicket.map((e, index) => {
        
            return <tr key={"ticket " + index} ><td>{e.id}</td><td>{e.titulo}</td><td>{e.descripcion}</td><td>{e.label}</td><td>{e.idComponentes}</td><td><Button variant="danger" >Borrar</Button><Button variant="warning" type="submit">Editar</Button></td>
        </tr>})
        )}
        </tbody>
      </Table> */}
    </div>
  )
}


export default GestorTickets
