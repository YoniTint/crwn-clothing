import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDeRg0aL7X9FNjg_W2J3tT1tNTOk9MGVR4",
    authDomain: "crwn-db-79740.firebaseapp.com",
    databaseURL: "https://crwn-db-79740.firebaseio.com",
    projectId: "crwn-db-79740",
    storageBucket: "crwn-db-79740.appspot.com",
    messagingSenderId: "833584348665",
    appId: "1:833584348665:web:c3cdc33bfdd1339b85d128",
    measurementId: "G-0SMMTJXWL1"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
