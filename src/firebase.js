// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs9_7NnEZyp7PdIb_1xXH6n8DFORsd0Nk",
  authDomain: "email-auth-15bc6.firebaseapp.com",
  projectId: "email-auth-15bc6",
  storageBucket: "email-auth-15bc6.appspot.com",
  messagingSenderId: "245740299507",
  appId: "1:245740299507:web:702410151b481442ed8386"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);