import React from 'react'
import PropTypes from 'prop-types'
import Asset from './Asset'
import Usser from './Usser'

function Ticket(props) {
  const { id, title, desc, created ,updated,asset_id,author_id, assigned_id} = props.data 
  return (

      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{desc}</td>
        <td>{created}</td>
        <td>{updated}</td>
        <td><Asset id={ asset_id} /></td>
        <td><Usser id={author_id} /></td>
        <td><Usser id={assigned_id }/></td>
      
        
      </tr>
  
  )
}

Ticket.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  created: PropTypes.string,
  updated: PropTypes.string,
  Asset: PropTypes.object,
  Usser:PropTypes.object

}

export default Ticket
