// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYARySR0iOg0vBdrFSPdHX--UYxzNzwy8",
  authDomain: "auth-moha-milon-75a97.firebaseapp.com",
  projectId: "auth-moha-milon-75a97",
  storageBucket: "auth-moha-milon-75a97.appspot.com",
  messagingSenderId: "1057526244832",
  appId: "1:1057526244832:web:78ce5f3d34777e7cf3b785"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;