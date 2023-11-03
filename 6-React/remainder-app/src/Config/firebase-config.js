// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy7kpsXgbLaIbP9m5b7oReNbMM38TtYZw",
  authDomain: "remainder-app-fsd23b.firebaseapp.com",
  projectId: "remainder-app-fsd23b",
  storageBucket: "remainder-app-fsd23b.appspot.com",
  messagingSenderId: "767093424599",
  appId: "1:767093424599:web:19fcdb76115742594b0b92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
