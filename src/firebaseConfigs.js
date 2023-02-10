import firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBQpKs3n8SZK2rmwFXu28ismSdeXd0OuPY",
  authDomain: "ingredientsinfo-842a6.firebaseapp.com",
  projectId: "ingredientsinfo-842a6",
  storageBucket: "ingredientsinfo-842a6.appspot.com",
  messagingSenderId: "1077503986058",
  appId: "1:1077503986058:web:8f30cbbe776a601cff6073",
  measurementId: "G-FV4NQTM3TC",
};

// Initialize Firebase

export const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
