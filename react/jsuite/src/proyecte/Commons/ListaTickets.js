import React from 'react'

import { Table, Button } from 'react-bootstrap'

function ListaTickets({ ass, tec,listTicket, deleted, edit }) {
    


// console.log("sc",ass, tec)
    
    return (
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
            
        {listTicket.length ===0 ? (<tr> No hay Ningun ticket</tr>):(listTicket.map((elem, index) => {
            
            const asset = ass.filter((componente) => { 
                console.log(componente, elem);
                return componente.id===elem.asset_id.toString();
            })[0];
            const tecnico = tec.filter((tecnico) => {
                return tecnico.id === elem.assignacion_id
            })[0];
            console.log(tecnico,asset);
            if (asset && tecnico) { return <tr key={"ticket " + index} ><td>{elem.id}</td><td>{elem.titulo}</td><td>{elem.descripcion}</td><td>{tecnico.name}</td><td>{asset.name}</td><td><Button variant="danger" onClick={() => deleted(elem.id)} >Borrar</Button><Button variant="warning" type="submit" onClick={()=>edit(elem.id) }>Editar</Button></td>
            {/* return <tr key={"ticket " + index} ><td>{elem.id}</td><td>{elem.titulo}</td><td>{elem.descripcion}</td><td><Button variant="danger" onClick={() => deleted(elem.id)} >Borrar</Button><Button variant="warning" type="submit" onClick={()=>edit(elem.id) }>Editar</Button></td> */}
            </tr>}
            
        })

        )}
        </tbody>
  </Table>
        
  )
}



export default ListaTickets
