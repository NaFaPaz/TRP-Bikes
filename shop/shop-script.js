import { products } from "./database.js";

const togglePopup = document.querySelectorAll(".popup");
const productPopup = document.querySelector(".product-popup");
const menuBtn = document.querySelectorAll(".nav-link");
const shopMenu = document.querySelector(".shop-nav");
const cardContainer = document.querySelector(".card-container");
const closePopup = document.querySelector(".close-popup");
const productFilter = document.querySelectorAll(".product-nav-link");

function handlePopup(event) {
  if (event.currentTarget.classList.contains("close-popup")) {
    productPopup.style.display = "none";
  } else {
    productPopup.style.display = "flex";
  }
}

function loadProducts(category) {
  cardContainer.innerHTML = ``;
  products.forEach((product) => {
    if (Object.keys(product.category) == category) {
      cardContainer.innerHTML += `<div class="product-card popup">
      <img
      class="product-image"
      src="${product.src}"
      alt=""
      />
      <p class="product-price">${product.price}</p>
      <p class="product-title">${product.title}</p>
      </div>`;
    }
  });
  cardContainer.addEventListener("click", handlePopup);
  closePopup.addEventListener("click", handlePopup);
}

function handleFilter(event) {
  switch (event.currentTarget.innerText) {
    case "Bicicletas":
      loadProducts("bicicletas");
      break;
    case "Rollers":
      loadProducts("rollers");
      break;
    case "Accesorios":
      loadProducts("accesorios");
      break;
  }
}

function handleMenu() {
  if (shopMenu.style.display === "flex") {
    shopMenu.style.display = "none";
    document.documentElement.style.setProperty("--hamb", "black");
  } else {
    shopMenu.style.display = "flex";
    document.documentElement.style.setProperty("--hamb", "white");
  }
}

function handleResize() {
  var w = document.documentElement.clientWidth || window.innerWidth;
  var h = window.innerHeight;

  if (w > h) {
    menuBtn.forEach((btn) => {
      btn.removeEventListener("click", handleMenu);
    });
    shopMenu.style.display = "flex";
  } else if (h > w) {
    shopMenu.style.display = "none";
    menuBtn.forEach((btn) => {
      btn.addEventListener("click", handleMenu);
    });
  }
}

window.addEventListener("load", handleResize);
window.addEventListener("resize", handleResize);
productFilter.forEach((link) => {
  link.addEventListener("click", handleFilter);
});
