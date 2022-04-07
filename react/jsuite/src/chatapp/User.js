import { doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { bbddFirebase } from '../fireDataBase';

const User = ({id}) => {

  const [username, setUsername] = useState("");

  const getUsername = async () => {

    const docRef = doc(bbddFirebase, "Tecnicos", id);
    const docSnap = await getDoc(docRef);
    setUsername(docSnap.data().name);
  }

  getUsername();

  return (
    <>
      {username}
    </>
  )
  
}

export default User;