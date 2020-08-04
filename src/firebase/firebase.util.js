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

// Sign in with Google
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// Sign in with Facebook
const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;
