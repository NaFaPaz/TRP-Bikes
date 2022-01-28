const header = document.querySelector("header");
const themeButton = document.querySelector(".theme-Button");
const navBar = document.querySelector(".nav-bar");
const footer = document.querySelector("footer");
const label = document.querySelector("label");
const menuBtn = document.querySelectorAll(".nav-link");
const hamb = document.querySelector(".hamb");
const acordeon = document.querySelectorAll(".expand");

function handleBg() {
  if (themeButton.checked === true) {
    navBar.style.backgroundColor = "var(--dark-nav-back)";
    header.style.backgroundColor = "var(--dark-back)";
    footer.style.backgroundColor = "black";
    label.style.color = "white";
    document.documentElement.style.setProperty("--hamb", "white");
  } else {
    navBar.style.backgroundColor = "var(--nav-back)";
    header.style.backgroundColor = "var(--back)";
    footer.style.backgroundColor = "var(--back)";
    label.style.color = "black";
    document.documentElement.style.setProperty("--hamb", "black");
  }
}

function handleMenu() {
  if (navBar.style.display === "flex") {
    navBar.style.display = "none";
    header.style.height = 0;
    /* header.style.pointerEvents = "none"; */
    document.documentElement.style.setProperty("--hamb", "white");
  } else {
    navBar.style.display = "flex";
    header.style.height = "100vh";
    /* header.style.pointerEvents = "auto"; */
    if (themeButton.checked === true) {
      document.documentElement.style.setProperty("--hamb", "white");
    } else {
      document.documentElement.style.setProperty("--hamb", "black");
    }
  }
}

function handleExpand(event) {
  const children = event.currentTarget.children;
  event.currentTarget.classList.toggle("expand");
  if (event.currentTarget.classList.contains("expand")) {
    for (let i = 1; i < children.length; i++) {
      children[i].style.display = "none";
    }
  } else {
    for (let i = 1; i < children.length; i++) {
      children[i].style.display = "block";
    }
  }
}

menuBtn.forEach((btn) => {
  btn.addEventListener("click", handleMenu);
});
themeButton.addEventListener("click", handleBg);
acordeon.forEach((item) => {
  item.addEventListener("click", handleExpand);
});
