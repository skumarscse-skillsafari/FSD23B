// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsiU9XD7qDGK-iHW2TxSAg4k57Nz6mXGY",
  authDomain: "fsd23b.firebaseapp.com",
  projectId: "fsd23b",
  storageBucket: "fsd23b.appspot.com",
  messagingSenderId: "86482132216",
  appId: "1:86482132216:web:6508dff5e9bff7b38daf0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Profile
// Get ID
let idUrl = new URLSearchParams(location.search);
console.log(idUrl);
const [id] = idUrl.values();
console.log(id);

const db = getDatabase();
const userRef = ref(db, "userDetails/" + id);
onValue(userRef, (snapshot) => {
  //   const data = snapshot.val();
  let userData = snapshot.val();
  console.log(userData);
  const welcome = document.querySelector("#welcome");
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const userID = document.querySelector("#userID");

  welcome.textContent = `Welcome, ${userData?.username}`;
  username.textContent = `Username: ${userData?.username}`;
  email.textContent = `Email: ${userData?.email}`;
  userID.textContent = `User ID: ${userData?.userId}`;
  let sessionData = {
    username: userData.username,
    userId: userData.userId,
    email: userData.email,
  };
  sessionStorage.setItem(id, JSON.stringify(sessionData));
});

const signOutBtn = document.querySelector("#signOutBtn");
signOutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sessionStorage.removeItem(id);
  window.location.href = "./";
});
