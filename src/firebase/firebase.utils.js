import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDbrwerlJrjwmet23TxVXNWRUPD0BhjfxM",
    authDomain: "crown-db-ea4f9.firebaseapp.com",
    databaseURL: "https://crown-db-ea4f9.firebaseio.com",
    projectId: "crown-db-ea4f9",
    storageBucket: "crown-db-ea4f9.appspot.com",
    messagingSenderId: "711323480926",
    appId: "1:711323480926:web:4aed38d49ff9613e2155cf"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;