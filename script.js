const header = document.querySelector("header");
const themeButton = document.querySelector(".theme-Button");
const navBar = document.querySelector(".nav-bar");
const footer = document.querySelector("footer");
const label = document.querySelector("label");
const menuBtn = document.querySelectorAll(".nav-link");
const hamb = document.querySelector(".hamb");

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
    document.documentElement.style.setProperty("--hamb", "white");
  } else {
    navBar.style.display = "flex";
    header.style.height = "100vh";
    if (themeButton.checked === true) {
      document.documentElement.style.setProperty("--hamb", "white");
    } else {
      document.documentElement.style.setProperty("--hamb", "black");
    }
  }
}

menuBtn.forEach((btn) => {
  btn.addEventListener("click", handleMenu);
});

themeButton.addEventListener("click", handleBg);
