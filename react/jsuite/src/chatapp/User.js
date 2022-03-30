import { doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { bbddFirebase } from '../fireDataBase';

const User = ({id}) => {

  const [username, setUsername] = useState("");

  const getUsername = async () => {

    const docRef = doc(bbddFirebase, "Users", id);
    const docSnap = await getDoc(docRef);

    setUsername(docSnap.data().username);
  }

  getUsername();

  return (
    <>
      {username}
    </>
  )
  
}

export default User;