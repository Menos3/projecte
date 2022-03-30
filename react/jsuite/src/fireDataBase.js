// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCh2vCn3wK12WH7P-xLw-_ijn81DAbBzwQ",
    authDomain: "reactfirebase-6b81f.firebaseapp.com",
    projectId: "reactfirebase-6b81f",
    storageBucket: "reactfirebase-6b81f.appspot.com",
    messagingSenderId: "907429320551",
    appId: "1:907429320551:web:78fe3db82e2013407b81c2"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const bbddFirebase = getFirestore(app);