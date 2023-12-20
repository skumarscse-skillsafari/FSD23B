const form = document.querySelector("#form");
const create = document.querySelector("#create");
const allProducts = document.querySelector("#products");

create.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("http://localhost:5000/api/v1/products/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(new FormData(form)),
  });
});

allProducts.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "./products.html";
});
