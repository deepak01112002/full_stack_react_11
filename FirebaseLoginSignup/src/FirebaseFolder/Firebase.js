// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA30gRJHclHLqXLhUEYf6qvRp09Zo4_O4E",
  authDomain: "fullstack111-1fe74.firebaseapp.com",
  projectId: "fullstack111-1fe74",
  storageBucket: "fullstack111-1fe74.appspot.com",
  messagingSenderId: "574779617115",
  appId: "1:574779617115:web:22355623a069d0576cf47e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get Firestore

export const db = getFirestore(app)