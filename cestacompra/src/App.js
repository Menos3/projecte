

import { useState} from 'react'
import { nanoid } from 'nanoid';
function App() {

  const [cesta, setCesta] = useState("");
  const [lista, setLista] = useState([]);


  function guardar(e) { 
    e.preventDefault();
    setLista([...lista, {
      id: nanoid(),
      nombre:cesta
    }
    ])
  }

  return (
    <div >
      <h3>Cesta de la Compra</h3>
      <form onSubmit={ guardar}>
        <input type="text" placeholder="Introduce productos" onChange={ (e)=> setCesta(e.target.value)}></input>
        <button type="submit">Añadir</button>

      </form>
      <ul>
        {lista.map((item, index) => (
          // Esto genera un indice único que react nunca va repetir
          <li key={`item_${index}`}>
            {item.id}-{ item.nombre}
          </li>
        ))}
        
      </ul>

     
    </div>
  );
}

export default App;
