import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC8jtPstjAdHiJ_ZhssW8mOrd6qK2zervU",
  authDomain: "ekommart-theme.firebaseapp.com",
  databaseURL: "https://ekommart-theme.firebaseio.com",
  projectId: "ekommart-theme",
  storageBucket: "ekommart-theme.appspot.com",
  messagingSenderId: "689163185768",
  appId: "1:689163185768:web:5bcb151b46240c239c95dd",
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Sign in with google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
