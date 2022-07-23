// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2VVuJhHOsBfVfcmh-FFpRoitCZwePXGU",
  authDomain: "next-5b4a2.firebaseapp.com",
  projectId: "next-5b4a2",
  storageBucket: "next-5b4a2.appspot.com",
  messagingSenderId: "155264550274",
  appId: "1:155264550274:web:09a3595a75ff7c8522bb9b",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
