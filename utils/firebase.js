// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6Miapwii80lGO3k4TYIrxcwAEm9Cz1zs",
  authDomain: "dumb-funny.firebaseapp.com",
  projectId: "dumb-funny",
  storageBucket: "dumb-funny.appspot.com",
  messagingSenderId: "1012770436734",
  appId: "1:1012770436734:web:9959cf7443ea032eea0a2f"
};

const auth = getAuth(firebaseApp)

