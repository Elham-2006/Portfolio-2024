const btnNavEl = document.querySelector(".mobile-nav-btn");
const headerNavEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerNavEl.classList.toggle("nav-open");
});
