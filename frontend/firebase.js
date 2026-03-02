// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "hope-de8fd.firebaseapp.com",
  projectId: "hope-de8fd",
  storageBucket: "hope-de8fd.firebasestorage.app",
  messagingSenderId: "963749736909",
  appId: "1:963749736909:web:63689bcf7c21dcaa7c9484"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}