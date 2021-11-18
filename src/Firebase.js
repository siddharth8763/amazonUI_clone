import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//firebase version 9 compatibility has been added.

const firebaseConfig = {
  apiKey: "AIzaSyB8pDFD17EhrSsEVi0eRP7aijkvbWgKBu4",
  authDomain: "clone-sid8763.firebaseapp.com",
  projectId: "clone-sid8763",
  storageBucket: "clone-sid8763.appspot.com",
  messagingSenderId: "708655616816",
  appId: "1:708655616816:web:26885676062385b6652ef5",
  measurementId: "G-GQ4XES5KG0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
