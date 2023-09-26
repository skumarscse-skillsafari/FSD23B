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

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signInBtn = document.querySelector("#signin-btn");

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value !== "" && password.value !== "") {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userDetails) => {
        console.log(userDetails.user);
        alert("User loggedin successfully");
        window.location.href = `./profile.html?id=${userDetails.user.uid}`;
      })
      .catch((error) => console.log(error));
  } else {
    alert("All fields are mandatory");
  }
});
