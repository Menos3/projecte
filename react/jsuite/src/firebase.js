// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrcijD22NN-sxjHp4BXiPwpzORTCEhcSU",
  authDomain: "fir-tickets-edb57.firebaseapp.com",
  projectId: "fir-tickets-edb57",
  storageBucket: "fir-tickets-edb57.appspot.com",
  messagingSenderId: "1067477593751",
  appId: "1:1067477593751:web:99679a5ae5bc23595c83d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);
