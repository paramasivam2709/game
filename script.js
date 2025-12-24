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

const homeBtn = document.getElementById("homeDropdown");
const dropdownMenu = document.getElementById("dropdownMenu");

/* TOGGLE DROPDOWN */
homeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle("show");
});

/* CLOSE WHEN CLICK OUTSIDE */
document.addEventListener("click", () => {
  dropdownMenu.classList.remove("show");
});

/* PREVENT CLOSE WHEN CLICK INSIDE */
dropdownMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});



