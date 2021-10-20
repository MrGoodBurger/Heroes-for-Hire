import { initializeApp, firebase } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
// import firebaseui from "firebaseui";


const firebaseConfig = {
    apiKey: "AIzaSyBDZciYdKfQQcMG8aDwq0lfjRmBNKsViaw",
    authDomain: "heroesforhire-8e366.firebaseapp.com",
    projectId: "heroesforhire-8e366",
    storageBucket: "heroesforhire-8e366.appspot.com",
    messagingSenderId: "717058021461",
    appId: "1:717058021461:web:5f005e4e7a0b69b5405cdc",
    measurementId: "G-MMZ72MCBK4"
  };


  // var ui = new firebaseui.auth.AuthUI(firebaseui());

  // ui.start('#firebaseui-auth-container', {
  //   signInOptions: [
  //     {
  //       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //       SignInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
  //     }
  //   ],
  // });

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app);