import { products } from "./database.js";

const productPopup = document.querySelector(".product-popup");
const menuBtn = document.querySelectorAll(".nav-link");
const shopMenu = document.querySelector(".shop-nav");
const cardContainer = document.querySelector(".card-container");
const productFilter = document.querySelectorAll(".product-nav-link");
const cart = document.querySelector(".cart");
const cartIcon = document.querySelector(".cart-icon");

let totals = [];

function handleAdd(event) {
  products.forEach((product) => {
    if (
      event.target.parentElement.previousElementSibling.getAttribute("src") ===
      product.src
    ) {
      cart.innerHTML += `<div class="cart-item">
        <img src="${product.src}" alt="" class="product-avatar" />
        <p class="product-title">${product.title} <span class="product-price">$ ${product.price}</span>
        </p>
        <a class="remove-item" href="#">
        <img class="remove-icon" src="./hiclipart.com.png" alt="" />
        </a>
        </div>`;
      totals.push(parseInt(product.price));
    }
  });
  const removeItem = document.querySelectorAll(".remove-item");
  removeItem.forEach((remove) => {
    remove.addEventListener("click", handleRemove);
  });
  handlePopup(event);
  const totalPrice = totals.reduce((total, price) => {
    total += price;
    return total;
  }, 0);
  const priceTotal = document.querySelector(".total-price");
  priceTotal.textContent = `${totalPrice},000`;
}

function handlePopup(event) {
  const productImage = event.currentTarget.querySelector(".product-image");
  if (event.target.classList.contains("popup")) {
    productPopup.style.display = "none";
  } else {
    productPopup.style.display = "flex";
    products.forEach((product) => {
      if (productImage.getAttribute("src") === product.src) {
        productPopup.innerHTML = `<img
          class="product-image"
          src="${product.src}"
          alt=""
          />
          <div class="product-info">
          <a class="close-popup popup"></a>
          <p class="product-title">${product.title}</p>
          <p class="product-price">$ ${product.price}</p>
          <p class="product-description">${product.description}</p>
          <a class="add-btn add popup">Agregar</a>`;
      }
    });
    const addBtn = document.querySelector(".add");
    const closePopup = document.querySelector(".close-popup");
    closePopup.addEventListener("click", handlePopup);
    addBtn.addEventListener("click", handleAdd);
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
        <p class="product-price">$ ${product.price}</p>
        <p class="product-title">${product.title}</p>
        </div>`;
    }
  });
  const productCard = document.querySelectorAll(".product-card");
  productCard.forEach((card) => {
    card.addEventListener("click", handlePopup);
  });
}

function toggleClass(event, links) {
  links.forEach((link) => {
    if (link.classList.contains("active")) {
      link.classList.toggle("active");
    }
  });
  event.target.classList.toggle("active");
}

function handleFilter(event) {
  switch (event.currentTarget.innerText) {
    case "Bicicletas":
      loadProducts("bicicletas");
      toggleClass(event, productFilter);
      break;
    case "Rollers":
      loadProducts("rollers");
      toggleClass(event, productFilter);
      break;
    case "Accesorios":
      loadProducts("accesorios");
      toggleClass(event, productFilter);
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

function handleRemove(event) {
  const src =
    event.currentTarget.parentElement.firstElementChild.getAttribute("src");
  const index = totals.indexOf(src);
  totals.splice(index, 1);
  const priceTotal = document.querySelector(".total-price");
  const totalPrice = totals.reduce((total, price) => {
    total += price;
    return total;
  }, 0);
  if (totals.length === 0) {
    priceTotal.textContent = `${totalPrice}`;
  } else {
    priceTotal.textContent = `${totalPrice},000`;
  }
  event.currentTarget.parentElement.remove();
}

function handleCart() {
  cart.classList.toggle("active");
}

window.addEventListener("load", handleResize);
window.addEventListener("resize", handleResize);
productFilter.forEach((link) => {
  link.addEventListener("click", handleFilter);
});
cartIcon.addEventListener("click", handleCart);
