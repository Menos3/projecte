import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'react-bootstrap'

function ListaTickets({ selects, listTicket, deleted, edit }) {
    


console.log("sc",selects)
    
    return (
        <Table striped bordered hover>
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
            
        {listTicket.length ===0 ? (<tr> No hay Ningun ticket</tr>):(listTicket.map((elem, index) => {
            
            const asset = selects.componentes.filter((componente) => { 
                return componente.value===parseInt(elem.asset_id)
            })[0];
            const tecnico = selects.tecnicos.filter((tecnico) => {
                return tecnico.value === parseInt(elem.assignacion_id)
            })[0];
            return <tr key={"ticket " + index} ><td>{elem.id}</td><td>{elem.titulo}</td><td>{elem.descripcion}</td><td>{tecnico.label}</td><td>{asset.label}</td><td><Button variant="danger" onClick={() => deleted(elem.id)} >Borrar</Button><Button variant="warning" type="submit" onClick={()=>edit(elem.id) }>Editar</Button></td>
            {/* return <tr key={"ticket " + index} ><td>{elem.id}</td><td>{elem.titulo}</td><td>{elem.descripcion}</td><td><Button variant="danger" onClick={() => deleted(elem.id)} >Borrar</Button><Button variant="warning" type="submit" onClick={()=>edit(elem.id) }>Editar</Button></td> */}
            </tr>
        })

        )}
        </tbody>
  </Table>
        
  )
}

ListaTickets.propTypes = {}

export default ListaTickets
