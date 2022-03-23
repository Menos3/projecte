import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'react-bootstrap'

function ListaTickets({ selects, listTicket }) {
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
                return componente.value===parseInt(elem.asset)
            })[0];
            const tecnico = selects.tecnicos.filter((tecnico) => {
                return tecnico.value === parseInt(elem.assignacion)
            })[0];
            return <tr key={"ticket " + index} ><td>{elem.id}</td><td>{elem.titulo}</td><td>{elem.descripcion}</td><td>{tecnico.label}</td><td>{asset.label}</td><td><Button variant="danger" >Borrar</Button><Button variant="warning" type="submit">Editar</Button></td>
        </tr>})
        )}
        </tbody>
  </Table>
        
  )
}

ListaTickets.propTypes = {}

export default ListaTickets
