const conteneur = [...document.querySelectorAll(".conteneur")];
const icon4 = [...document.querySelectorAll(".icon4")];
const icon5 = [...document.querySelectorAll(".icon5")];

conteneur.forEach((item, i) => {
  let conteneurDimensions = item.getBoundingClientRect();
  let conteneurWidth = conteneurDimensions.width;

  icon4[i].addEventListener("click", () => {
    item.scrollLeft += conteneurWidth;
  });

  icon5[i].addEventListener("click", () => {
    item.scrollRight -= conteneurWidth;
  });
});

const slider = document.querySelector(".slider");
const sliderItems = document.querySelectorAll(".rectangle-3");
const prevButton = document.querySelector(".icon4");
const nextButton = document.querySelector(".icon5");
let currentIndex = 0;

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % sliderItems.length;
  updateSlider();
});

function updateSlider() {
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

updateSlider();
