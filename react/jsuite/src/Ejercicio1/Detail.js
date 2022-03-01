import React from 'react'
import Telefono from './Telefono'
import Email from './Email'


function Detail({ phone, email}) {
    
  return (
    <div className="detail">
          <Telefono phone={ phone} />
          <Email email={ email}/>
    </div>
  )
}


export default Detail
