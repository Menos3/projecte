import React from 'react'
import Botton from './Botton'
//aqui utilizo el boton
export default function Ticket() {
    // const list = [1, 2, 3, 4, 5, 6, 7];
    const names = ["raul", "maria", "alfonso"];
    return (
        <>
            <div>Aqui va el formulario</div>
            {names.map(element => <Botton name={element} color="white" />)
            }
            
        </>
        )
}
