// 🌸 Slideshow Logic
const images = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg","photo5.jpg","photo6.jpg","photo8.jpg","photo9.jpg","photo10.jpg","photo11.jpg","photo12.jpg"];
let currentIndex = 0;

const slideshowImage = document.getElementById("slideshowImage");
const nextBtn = document.getElementById("nextBtn");
const loveBtn = document.getElementById("loveBtn");
const loveMessage = document.getElementById("loveMessage");
const voiceSection = document.getElementById("voiceSection");
const voiceNote = document.getElementById("voiceNote");

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  slideshowImage.style.opacity = 0;
  setTimeout(() => {
    slideshowImage.src = "images/" + images[currentIndex];
    slideshowImage.style.opacity = 1;
  }, 400);
}

nextBtn.addEventListener("click", showNextImage);

// 💕 Show Love Message + Voice Note
loveBtn.addEventListener("click", () => {
  loveMessage.classList.add("show");

  

  setTimeout(() => {
    voiceSection.classList.add("show");
    // Optional: Auto-play voice note (only after click interaction)
    voiceNote.play().catch(() => {
      console.log("Auto-play blocked, user can play manually.");
    });
  }, 2500);
});

// 💖 Floating Hearts Animation
const heartsContainer = document.createElement("div");
heartsContainer.classList.add("hearts");
document.body.appendChild(heartsContainer);

function createHeart() {
  const heart = document.createElement("img");
  heart.src = "https://cdn-icons-png.flaticon.com/512/833/833472.png";
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  const size = Math.random() * 0.5 + 0.5;
  heart.style.transform = `scale(${size})`;

  const duration = Math.random() * 4 + 6;
  heart.style.animationDuration = `${duration}s`;

  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}

let spawnInterval = window.innerWidth < 600 ? 1000 : 600;
setInterval(createHeart, spawnInterval);
