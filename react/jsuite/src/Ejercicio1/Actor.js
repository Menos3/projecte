import React from 'react'
import Name from './Name'
import Avatar from './Avatar'
import Detail from './Detail'
import './styles/details.css'




function Actor(props) {
  const { name, phone, email, imgURL } = props.data
  
  return (
    <div className="actor">
  
        <Name name={name} />
        <Avatar imgURL={imgURL} />
        <div className="detall" >
          <Detail phone={phone} email={email} />
        </div>

      
      
    </div>
  )
}

export default Actor