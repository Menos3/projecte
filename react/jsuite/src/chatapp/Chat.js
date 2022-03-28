import { collection, getDocs, query, where } from 'firebase/firestore';
import React from 'react'
import { bbddFirebase } from './firebase';

const Chat = ({id}) => {

  const q = query(collection(bbddFirebase, "Chats"), where('id', "==", id));

  const getChat = async () => {

    const resultado = await getDocs(q);

    resultado.forEach((chat) => {

      return (
        <p>
            {chat.name}
        </p>
      )

    })
  }
  
  getChat();
 
}

export default Chat