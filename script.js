const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


const slider = document.getElementById("trendingSlider");

function slideLeft() {
  slider.scrollLeft -= 350;
}

function slideRight() {
  slider.scrollLeft += 350;
}
