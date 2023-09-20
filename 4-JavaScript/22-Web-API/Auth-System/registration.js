const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const signUpBtn = document.querySelector("#signup-btn");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //   console.log(username.value);
  //   console.log(email.value);
  //   console.log(password.value);
  //   console.log(confirmPassword.value);

  if (
    username.value === "" ||
    email.value === "" ||
    password.value === "" ||
    confirmPassword.value === ""
  ) {
    alert("Fields should not be empty");
  } else {
    if (password.value === confirmPassword.value) {
      const userId = Math.floor(Math.random() * 100);
      //   console.log(userId);
      const userObj = {
        id: userId,
        username: username.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      };
      console.log(userObj);
      localStorage.setItem(userId, JSON.stringify(userObj));
      username.value = "";
      (email.value = ""), (password.value = ""), (confirmPassword.value = "");
    } else {
      alert("Enter password and confirm password as same");
    }
  }
});
