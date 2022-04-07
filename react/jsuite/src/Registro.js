import React, { useState,useContext } from 'react'
import { useNavigate} from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { UserContext } from './UseContextUser'
import { bbddFirebase  } from './fireDataBase'
import { collection,doc, orderBy, query,  addDoc, serverTimestamp, deleteDoc, setDoc, onSnapshot} from "firebase/firestore"





export default function Registro() {

    const [userData, setUserData] = useState({ name: "", password: "", email: "" })
    const tecnicosCollection = collection(bbddFirebase, "Tecnicos");


 
    //seteamos el nombre
    const handlerName = (valueName) => {
        setUserData({ ...userData, name: valueName })
    }
    const handlerPass = (valuePass) => {

        setUserData({ ...userData, password: valuePass })
    }
    const handlerEmail = (valueEmail) => {

        setUserData({ ...userData, email: valueEmail })
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(userData)
        let values = Object.values(userData).find((u) => {

            if (u === "" || u === null) return true;
        });
        if (values !== undefined) {
            return;
        }
        handlerSaveUser(e, userData);
    
    }
    const handlerSaveUser = (e, user) => {
        console.log("u", user)
        e.preventDefault();
        addDoc(tecnicosCollection, {
            ...userData
        })

    }




    return (


        <form className="center" onSubmit={e => handlerSubmit(e)}>

            <h1>Login</h1>
            <div className="row ">
                <div className="col-4">
                    <h3>Nombre</h3>
                    <input type="text" onChange={e => handlerName(e.target.value)} value={userData.name}></input>
                </div>
                <div className="col-4">
                    <h3>Email</h3>
                    <input type="email" onChange={e => handlerEmail(e.target.value)} value={userData.email}></input>
                </div>
                <div className="col-4">
                    <h3>Password</h3>
                    <input type="password" onChange={e => handlerPass(e.target.value)}></input>
                </div>
            </div>
            <button className="btn btn-dark btn-block" type="submit">Agregar</button>


        </form>
    )
}