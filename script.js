const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

let isPlaying = false;

// Mobile navigation
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Music controls
musicBtn.addEventListener("click", async () => {
  if (!isPlaying) {
    try {
      await music.play();
      isPlaying = true;
      musicBtn.textContent = "♫ Music ON";
    } catch (error) {
      musicBtn.textContent = "Try Music Again ♫";
      alert("Please check that music.mp3 is in the same folder as index.html.");
    }
  } else {
    music.pause();
    isPlaying = false;
    musicBtn.textContent = "♫ Music";
  }
});

// Open the love letter
document.getElementById("openLetter").addEventListener("click", () => {
  document.getElementById("message").scrollIntoView({
    behavior: "smooth",
  });

  createHearts(12);
});

// Show more
document.getElementById("moreBtn").addEventListener("click", () => {
  document.getElementById("love").scrollIntoView({
    behavior: "smooth",
  });
});

// Virtual hug
document.getElementById("hugBtn").addEventListener("click", () => {
  const hugMessage = document.getElementById("hugMessage");

  hugMessage.textContent =
    "Sending you the biggest hug, baby Julie! 🫂💗 Imagine me holding you close and whispering, 'Palangga ta gd ka. Ari lang ko permi para sa imo, baby.'";

  createHearts(22);
});

// Secret love buttons
const secretMessage = document.getElementById("secretMessage");

document.querySelectorAll(".love-buttons button").forEach((button) => {
  button.addEventListener("click", () => {
    secretMessage.textContent = button.dataset.message;
    createHearts(8);
  });
});

// Prayer button
document.getElementById("prayerBtn").addEventListener("click", () => {
  document.getElementById("prayerResponse").textContent =
    "Amen! May God bless you and your family today and always, baby Julie. 🤍🙏";

  createHearts(10);
});

// Floating heart animation
function createHearts(amount) {
  const symbols = ["💗", "💕", "♡", "💖", "🌸"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");

    heart.className = "heart-pop";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 95 + "vw";
    heart.style.top = 45 + Math.random() * 40 + "vh";
    heart.style.animationDelay = Math.random() * 0.5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2500);
  }
}

// Gentle hearts when the page loads
window.addEventListener("load", () => {
  setTimeout(() => createHearts(7), 800);
});
