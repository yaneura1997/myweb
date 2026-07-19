const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger-menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("is-open");
  });
}