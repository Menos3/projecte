import React ,{ useState, useEffect} from 'react'
import { db } from '../../firebase'
import { collection, doc, orderBy, query, where, getDocs, addDoc, serverTimestamp, deleteDoc, setDoc, onSnapshot} from "firebase/firestore"


export default function Usuarios() {
    const [users, setUsers] = useState({id:"", name:"" });
    const usersCollection = collection(db, "Tecnico");
    const qdbu=query(usersCollection, orderBy("name", "asc"));
    useEffect(() => { 
        onSnapshot(qdbu, (snapshot) => { 

            console.log("snap", snapshot)
            

        })
    })
  
  
  
    return (
    <div>Usuarios</div>
  )
}
