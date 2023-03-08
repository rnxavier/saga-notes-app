import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/database";

const db = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
});

export const databaseURL = "";
export default db;
