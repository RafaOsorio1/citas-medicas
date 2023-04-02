// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5g4IbKl61_UFO7KK7vRX1HlvQF4ps9gM",
  authDomain: "citas-medicas-12bb9.firebaseapp.com",
  projectId: "citas-medicas-12bb9",
  storageBucket: "citas-medicas-12bb9.appspot.com",
  messagingSenderId: "883659273262",
  appId: "1:883659273262:web:25b82ac277bdaf45479bbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);