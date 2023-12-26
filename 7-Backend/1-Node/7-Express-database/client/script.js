const form = document.querySelector("#form");
const create = document.querySelector("#create");
const allProducts = document.querySelector("#products");

create.addEventListener("click", async (e) => {
  e.preventDefault();
  let res = await fetch(
    "https://hilarious-fish-overshirt.cyclic.app/api/v1/products/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(new FormData(form)),
    }
  );
  if (res.status === 201) {
    alert("Product added successfully");
    window.location.reload();
  }
});

allProducts.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "./products.html";
});
