// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD98UkXXtkXoeFNCRMf38m3aG_qw8cH1B4",
  authDomain: "fullstack11-55832.firebaseapp.com",
  projectId: "fullstack11-55832",
  storageBucket: "fullstack11-55832.appspot.com",
  messagingSenderId: "1009897465499",
  appId: "1:1009897465499:web:12c1e573d5a926156d483e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)