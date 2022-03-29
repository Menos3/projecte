import { getDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react'
import { bbddFirebase } from './firebase';

const Chat = ({id}) => {

  const [chatName, setChatName] = useState("");

  const getChatName = async () => {

    const docRef = doc(bbddFirebase, "Chats", id);
    const docSnap = await getDoc(docRef);

    setChatName(docSnap.data().name);
  }
  
  getChatName();

  return (
    <>
      {chatName}
    </>
  )
  
}

export default Chat;