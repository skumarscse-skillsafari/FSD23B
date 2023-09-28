// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

import {
  getDatabase,
  ref,
  set,
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

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const signUpBtn = document.querySelector("#signup-btn");
const alertMsg = document.querySelector("#alert");
const state = document.querySelector("#state");
const country = document.querySelector("#country");
const comment = document.querySelector("#comment");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    username.value !== "" &&
    email.value !== "" &&
    password.value !== "" &&
    confirmPassword.value !== "" &&
    state.value !== "" &&
    country.value !== "" &&
    comment.value !== ""
  ) {
    if (password.value === confirmPassword.value) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userDetails) => {
          // const user = userDetails.user;
          console.log(userDetails.user.uid);
          const db = getDatabase();
          set(ref(db, "userDetails/" + userDetails.user.uid), {
            username: username.value,
            email: email.value,
            password: password.value,
            userId: userDetails.user.uid,
            state: state.value,
            country: country.value,
            comments: comment.value,
          });
          alertMsg.classList.add("alert-primary");
          alertMsg.textContent = "User created successfully";
          // alert("User created successfully");
          setTimeout(() => {
            alertMsg.classList.remove("alert-primary");
            alertMsg.textContent = "";
            window.location.href = "./index.html";
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alertMsg.classList.add("alert-danger");
      alertMsg.textContent = "Password and confirm password must be same";
      setTimeout(() => {
        alertMsg.classList.remove("alert-danger");
        alertMsg.textContent = "";
      }, 3000);
      // alert("Password and confirm password must be same");
    }
  } else {
    alertMsg.classList.add("alert-danger");
    alertMsg.textContent = "All fields are mandatory";
    setTimeout(() => {
      alertMsg.classList.remove("alert-danger");
      alertMsg.textContent = "";
    }, 3000);
    // alert("All fields are mandatory");
  }
});
