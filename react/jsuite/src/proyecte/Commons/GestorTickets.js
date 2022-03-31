import React, { useState ,useEffect} from 'react'
import ListaTickets from './ListaTickets'
import Formulario from './Formulario'
import { bbddFirebase  } from '../../fireDataBase'
import { collection, doc, orderBy, query,  addDoc, serverTimestamp, deleteDoc, setDoc, onSnapshot} from "firebase/firestore"


const selects = {
  tecnicos :[
    { value: 0, label: "Armand" },
    { value: 1, label: "Pep" },
    { value: 2, label: "Cristina" }
  ],
   componentes :[
    { value: 0, label: "Monitos LG" },
    { value: 1, label: "teclado Asus" },
    { value: 2, label: "raton omoton" }
  ]

}

//index de la linea con un slice

function GestorTickets(props) {
  //se lo paso al componente ListaTickets
  const [editModo, setEditModo] = useState(false);
  const [listTicket, setListTicket] = useState([])
  const [formData, setFormData] = useState({ titulo: "", descripcion: "", asset_id: "", assignacion_id: "" });
  console.log("aaaa")


  const ticketsCollection = collection(bbddFirebase, "Tickets")
 
  console.log("aaaa")
  const q = query(ticketsCollection, orderBy('titulo', 'asc'));

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      console.log("snap",snapshot)
      const newDades = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
      console.log("dades", newDades)
      setListTicket(newDades)
    })

  }, []);

  
  
  
  
  
  const handlerSave = (e,ticket) => {
    console.log("t",ticket)
    e.preventDefault();
    addDoc(ticketsCollection, {
      ...ticket,
      creacion:serverTimestamp()
    })

    console.log(listTicket)
  }
  const handlerDelete = (id) => { 
    console.log("id",id)
    deleteDoc(doc(bbddFirebase,"Tickets",id))
  }
  const handlerEdit = (id) => { 
    // const ticket = listTicket.filter(tic => tic.id === id)[0];
    setFormData(listTicket.find(tic => tic.id === id));
    setEditModo(true);
    
    
  }
  const editarTicket = (e, id) => { 

    e.preventDefault();
    setDoc(doc(bbddFirebase, "Tickets", id), {
      ...formData
    });
    setEditModo(false)
    setFormData({ titulo: "", descripcion: "", asset_id: "", assignacion_id: "" })
  }
//Los Tickets se los quede el Gestor
// const fechaActual = function () { 
  //   fechaActual = now date();
    

  // }
  // }
  return (
    <div>
      {/* <Formulario saveTicket={handlerSave} formData={formData} setFormData={setFormData} funcione={ editarTicket} estadoEditar={editModo}  />
      <ListaTickets listTicket={listTicket} deleted={handlerDelete} edit={handlerEdit} /> */}
      <Formulario saveTicket={handlerSave} selects={selects} formData={formData} setFormData={setFormData} funcione={ editarTicket} estadoEditar={editModo}  />
      <ListaTickets selects={selects} listTicket={listTicket} deleted={handlerDelete} edit={ handlerEdit} />
    </div>
  )
}


export default GestorTickets
