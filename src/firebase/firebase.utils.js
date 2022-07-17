import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAALvRLXKoKIU63V0T99P6EcJSRDeH0Zx0",
    authDomain: "crwn-clothing-bcb1a.firebaseapp.com",
    projectId: "crwn-clothing-bcb1a",
    storageBucket: "crwn-clothing-bcb1a.appspot.com",
    messagingSenderId: "832792708581",
    appId: "1:832792708581:web:13bc62041fef7762ff1b0c",
    measurementId: "G-7XH4WYDMBS"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;



