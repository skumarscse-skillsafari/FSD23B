const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signInBtn = document.querySelector("#signin-btn");

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(email);
  console.log(password);
  console.log(signInBtn);
  const allUsers = Object.values(localStorage);
  const allUsersObj = allUsers.map((user) => JSON.parse(user));
  console.log(allUsersObj);

  const findUser = allUsersObj.find((user) => {
    if (user.email === email.value && user.password === password.value) {
      return user;
    }
  });
  findUser ? console.log(findUser) : console.log("No user found");
  if (findUser) {
    const { id } = findUser;
    window.location.href = `./profile.html?id=${id}`;
  } else {
    alert("Invalid credentials");
  }
});
