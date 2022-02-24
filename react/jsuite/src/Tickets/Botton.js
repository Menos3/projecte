import React from 'react'
//importarla
export default function Botton({ name, color}) {
    
  return (
      <button className={color} onClick={() => { console.log(name)}}>{ name}</button>
  )
}
