import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwdTQSOVF9TeXl6o7h2nUh7S0rA_36CI0",
  authDomain: "crown-db-44bda.firebaseapp.com",
  databaseURL: "https://crown-db-44bda.firebaseio.com",
  projectId: "crown-db-44bda",
  storageBucket: "crown-db-44bda.appspot.com",
  messagingSenderId: "553698404649",
  appId: "1:553698404649:web:a951b3791b26ea64a26f38",
  measurementId: "G-RJVJNGEJFK",
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

const auth = firebase.auth();
// const firesore = firebase.firestore();

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
