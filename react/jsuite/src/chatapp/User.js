import { collection, getDocs, query, where } from 'firebase/firestore';
import React from 'react'
import { bbddFirebase } from './firebase';

const User = ({id}) => {

  const q = query(collection(bbddFirebase, "Users"), where('id', "==", id));

  const getUser = async () => {

    const resultado = await getDocs(q);
  
    resultado.forEach((usuario) => {

    return (
      <>
        {usuario.username}
      </>
    )

    })
  }
  
  getUser();
}

export default User