const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


const btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
    btn.classList.add("active");
});

btn.onclick = function() {
    modal.style.display = "block";
  }

const card = document.querySelector(".card");

card.addEventListener("click", function() {
    card.classList.add("active");
});