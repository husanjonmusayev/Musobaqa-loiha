let btn = document.querySelectorAll(".btn");
const hamburger = document.querySelector(".hamburger");
const navs = document.querySelector(".navs");
let nav = false;

hamburger.addEventListener("click", function () {
  if (!nav) {
    navs.style.display = "block";
    nav = true;
  } else {
    navs.style.display = "none";
    nav = false;
  }
});
btn.addEventListener("click", function () {
  window.location.assign("");
});
