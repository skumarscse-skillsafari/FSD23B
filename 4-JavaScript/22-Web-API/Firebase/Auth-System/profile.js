// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getAuth,
  deleteUser,
  updateEmail,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  onValue,
  update,
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

const welcome = document.querySelector("#welcome");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const userID = document.querySelector("#userID");
const userPassword = document.querySelector("#userPassword");
const state = document.querySelector("#state");
const country = document.querySelector("#country");
const comment = document.querySelector("#comment");

const db = getDatabase();
const userRef = ref(db, "userDetails/" + id);
onValue(userRef, (snapshot) => {
  //   const data = snapshot.val();
  let userData = snapshot.val();
  console.log(userData);
  welcome.textContent = `Welcome, ${userData?.username}`;
  username.textContent = `Username: ${userData?.username}`;
  email.textContent = `Email: ${userData?.email}`;
  userID.textContent = `User ID: ${userData?.userId}`;
  userPassword.textContent = `User Password: ${userData?.password}`;
  state.textContent = `User State: ${userData?.state}`;
  country.textContent = `User Country: ${userData?.country}`;
  comment.textContent = `Comment: ${userData?.comments}`;

  let sessionData = {
    username: userData?.username,
    userId: userData?.userId,
    email: userData?.email,
  };
  sessionStorage.setItem(id, JSON.stringify(sessionData));
});

const signOutBtn = document.querySelector("#signOutBtn");
signOutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sessionStorage.removeItem(id);
  window.location.href = "./";
});

const usernameM = document.querySelector("#usernameM");
const emailM = document.querySelector("#emailM");
const passwordM = document.querySelector("#passwordM");
const confirmPasswordM = document.querySelector("#confirmPasswordM");
const stateM = document.querySelector("#stateM");
const countryM = document.querySelector("#countryM");
const commentM = document.querySelector("#commentM");
const editBtn = document.querySelector("#edit-user");
const openModal = document.querySelector("#open-modal");

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  onValue(userRef, (snapshot) => {
    const userData = snapshot.val();
    console.log(userData);
    usernameM.value = userData?.username;
    emailM.value = userData?.email;
    passwordM.value = userData?.password;
    confirmPasswordM.value = userData?.confirmPassword;
    stateM.value = userData?.state;
    countryM.value = userData?.country;
    commentM.value = userData?.comments;
  });
});

editBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("Are you sure to edit the details?")) {
    let newUserDetails = {
      username: usernameM?.value,
      userId: id,
      email: emailM?.value,
      password: passwordM?.value,
      state: stateM?.value,
      country: countryM.value,
      comments: commentM.value,
    };
    console.log(newUserDetails);
    let updates = {};
    updates["/userDetails/" + id] = newUserDetails;
    update(ref(db), updates);

    window.location.reload();
  }
});

const deleteUserBtn = document.querySelector("#delete-user");
deleteUserBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("Are you sure to delete the user?")) {
    let updates = {};
    updates["/userDetails/" + id] = null;
    update(ref(db), updates);
    const auth = getAuth();
    const user = auth?.currentUser;

    deleteUser(user)
      .then(() => {
        alert("User deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });

    sessionStorage.removeItem(id);
    setTimeout(() => {
      window.location.href = "index.html";
    }, 3000);
  }
});
