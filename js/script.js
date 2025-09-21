// Toggle Mobile Menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Slider Logic
let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let slides = document.querySelectorAll(".slide");
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndex].style.display = "block";
}

// Auto Slide
setInterval(() => { changeSlide(1); }, 4000);
