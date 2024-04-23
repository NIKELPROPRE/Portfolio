const slider = document.querySelector(".slider");
let slideIndex = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 20}%)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 2) % slider.children.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex =
    (slideIndex - 3 + slider.children.length) % slider.children.length;
  showSlide(slideIndex);
}

// Autoplay (change slide every 3 seconds)
setInterval(nextSlide, 3000);

showSlide(slideIndex);

const press = document.querySelectorAll(".btn-4");
const texte = document.querySelectorAll(".email");

function hidden() {
  let texte;
  if ((press = true)) {
    texte = hidden;
  } else {
    texte;
  }
}

function effacerTexte() {
  var texteEmail = document.querySelector(".email");
  texteEmail.style.display = "none";
}
