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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Create user profile
export const createUserProfileDoc = async (userAuth, additionlData) => {
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // create user profile if not exits
  if (!snapShot.exists) {
    // get data from userAuth to add those to doc
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionlData,
      });
    } catch (error) {
      console.log("Error when creating user profile", error.message);
    }
  }

  return userRef;
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
