// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoAYjExRwZUreGk7XLmGYVX95UAn3nqMI",
  authDomain: "chatapp2-dd6b8.firebaseapp.com",
  projectId: "chatapp2-dd6b8",
  storageBucket: "chatapp2-dd6b8.appspot.com",
  messagingSenderId: "653381638172",
  appId: "1:653381638172:web:1932844f09d79f7019a7d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const auth = getAuth(app)