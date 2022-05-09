import React from 'react'
import PropTypes from 'prop-types'
// import * as data from './BaseDatos.json'
import Ticket from './Ticket'
import { Table } from 'react-bootstrap'
import { Form , Select} from 'react-bootstrap'

function ListTickets(props) {
    // const [ticket, setTicket] = useState("");
    // const [listTicket, setListTicket] = useState([]);
    // const options = [
    //     { value: 0, label: "Armand" },
    //     { value: 1, label: "Pep" },
    //     { value: 2, label: "Cristina" },
    //     { value: 3, label: "Jordi" }
    // ];
    

    // handleChange = selectedOptions => { 
    //     this.setState({ selectedOptions });
    // }

    // const db=(JSON.parse(JSON.stringify(data)));
  return (
      <div className="list-tickets">
            <Form >
                <input placeholder="Introduce titulo del ticket"></input>
              {/* <Select options={ options}>
                 
                </Select>
                <button onChange={ }></button>
               */}
            </Form>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Descripcion</th>
                    <th>Creacion</th>
                    <th>Actualizacion</th>
                    <th>Nombre Asset</th>
                    <th>Autor</th>
                    <th>Assignacion</th>
                </tr>
            </thead>
            <tbody>

                {/* {db.tickets.map((element, i) => { 
                    console.log(element.name)
                    return <Ticket key={i} data={element} />
                })} */}
            </tbody>
          </Table>      
          
      </div>
  )
}

ListTickets.propTypes = {
    key: PropTypes.string,
    data: PropTypes.object
}

export default ListTickets
