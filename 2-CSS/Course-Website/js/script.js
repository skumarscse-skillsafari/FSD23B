let hambar = document.getElementById("ham-menu");
console.log(hambar);
let navBar = document.getElementById("nav-bar");
console.log(navBar);
let scrollTop = document.getElementById("scroll-top");
let liEles = document.querySelectorAll("li");
console.log(liEles);

hambar.addEventListener("click", function () {
  navBar.classList.toggle("active");
  hambar.classList.toggle("fa-circle-xmark");
});

liEles.forEach((liEle) => {
  liEle.addEventListener("click", function () {
    navBar.classList.toggle("active");
    hambar.classList.toggle("fa-circle-xmark");
  });
});

scrollTop.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
