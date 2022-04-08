import React, { useState ,useContext, useEffect} from 'react'
import ListaTickets from './ListaTickets'
import Formulario from './Formulario'
import { bbddFirebase } from '../../fireDataBase'

import { collection,doc, orderBy, query, where,  addDoc, serverTimestamp, deleteDoc, setDoc, onSnapshot} from "firebase/firestore"
import { UserContext } from '../../UseContextUser'
// const selects = {
//   tecnicos :[
//     { value: 0, label: "Armand" },
//     { value: 1, label: "Pep" },
//     { value: 2, label: "Cristina" }
//   ],
//    componentes :[
  //     { value: 0, label: "Monitos LG" },
  //     { value: 1, label: "teclado Asus" },
//     { value: 2, label: "raton omoton" }
//   ]
// }

//index de la linea con un slice

function GestorTickets(props) {
  //se lo paso al componente ListaTickets
  const [editModo, setEditModo] = useState(false);
  const [listTicket, setListTicket] = useState([])
  const [formData, setFormData] = useState({ titulo: "", descripcion: "", asset_id: "", assignacion_id: "" });
  const [listTecnicos, setListTecnicos] = useState([]);
  const [listAssets, setListAssets] = useState([]);
  const {usuario} = useContext(UserContext)
  console.log("usuariiii",usuario)
  
 
  
  const assetCollection= collection(bbddFirebase, "Assets");
  
  const assets=()=>{
    const queryAssets= query(assetCollection)

    return queryAssets
  }
  

  const tecnicosCollection = collection(bbddFirebase, "Tecnicos");
  // Esto son los tecnicos
  const tecnicos = () => { 
    const queryTecnicos = query(tecnicosCollection);
  
   
    return queryTecnicos
  }
  
  const ticketsCollection = collection(bbddFirebase, "Tickets")
  const tickets=()=>{
    const q = query(ticketsCollection, orderBy('titulo', 'asc'));
    return q;
  
  }

 

  useEffect(() => {
    onSnapshot(tecnicos(), (snapshot) => {
      const newTecnicos = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
      setListTecnicos(newTecnicos)
    })
    onSnapshot(assets(), (snapshot) => {
      const newAssets = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
      setListAssets(newAssets)
    })
    onSnapshot(tickets(), (snapshot) => {
      const newDades = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
      setListTicket([...newDades])
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
      <Formulario saveTicket={handlerSave} tec={listTecnicos} ass={listAssets} formData={formData} setFormData={setFormData} funcione={ editarTicket} estadoEditar={editModo}  />
      <ListaTickets user={usuario} tec={listTecnicos} ass={listAssets} listTicket={listTicket} deleted={handlerDelete} edit={ handlerEdit} />
    </div>
  )
}


export default GestorTickets
