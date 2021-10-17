import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
 
const firebaseConfig = {
    apiKey: "AIzaSyBDZciYdKfQQcMG8aDwq0lfjRmBNKsViaw",
    authDomain: "heroesforhire-8e366.firebaseapp.com",
    projectId: "heroesforhire-8e366",
    storageBucket: "heroesforhire-8e366.appspot.com",
    messagingSenderId: "717058021461",
    appId: "1:717058021461:web:5f005e4e7a0b69b5405cdc",
    measurementId: "G-MMZ72MCBK4"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app);