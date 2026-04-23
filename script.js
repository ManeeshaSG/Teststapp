"}
let currentSlide = 0;

const photos = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg"
];

const texts = [
  "From the moment I met you...",
  "You became my happiness...",
  "Every moment with you is special...",
  "You are my forever 💖"
];

function nextScreen(num) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen" + num).classList.add("active");
}

function noClick() {
  document.getElementById("noText").innerText = "Aww come on… just try 😤";
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= photos.length) {
    nextScreen(5);
    return;
  }
  document.getElementById("photo").src = photos[currentSlide];
  document.getElementById("text").innerText = texts[currentSlide];