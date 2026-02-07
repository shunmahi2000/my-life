// document.addEventListener("DOMContentLoaded", () => {
//   const heartsBg = document.getElementById("heartsBg");
//   if (!heartsBg) return;

//   function createHeart() {
//     const heart = document.createElement("span");
//     heart.classList.add("heart");
//     heart.textContent = "❤️";

//     // Spawn from edges (avoid center)
//     const side = Math.random();
//     if (side < 0.25) {
//       heart.style.top = "5%";
//       heart.style.left = Math.random() * 90 + "%";
//     } else if (side < 0.5) {
//       heart.style.bottom = "5%";
//       heart.style.left = Math.random() * 90 + "%";
//     } else if (side < 0.75) {
//       heart.style.left = "5%";
//       heart.style.top = Math.random() * 90 + "%";
//     } else {
//       heart.style.right = "5%";
//       heart.style.top = Math.random() * 90 + "%";
//     }

//     // Random floating direction
//     heart.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
//     heart.style.setProperty("--y", `${Math.random() * 200 - 100}px`);

//     // Random duration (slow & romantic)
//     const duration = Math.random() * 10 + 10;
//     heart.style.animationDuration = `${duration}s`;

//     heartsBg.appendChild(heart);

//     setTimeout(() => heart.remove(), duration * 1000);
//   }

//   // Create hearts periodically
//   setInterval(createHeart, 1200);
// });
document.addEventListener("DOMContentLoaded", () => {
  const heartsBg = document.getElementById("heartsBg");
  if (!heartsBg) return;

  const heartEmojis = ["❤️", "💖", "💕", "💗", "♥️", "♥️", "❤️", "💖", "💕", "💗", "♥️", "♥️"];

  function createHeart() {
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.textContent =
      heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    // Spawn from edges only
    const side = Math.random();
    if (side < 0.25) {
      heart.style.top = "5%";
      heart.style.left = Math.random() * 90 + "%";
    } else if (side < 0.5) {
      heart.style.bottom = "5%";
      heart.style.left = Math.random() * 90 + "%";
    } else if (side < 0.75) {
      heart.style.left = "5%";
      heart.style.top = Math.random() * 90 + "%";
    } else {
      heart.style.right = "5%";
      heart.style.top = Math.random() * 90 + "%";
    }

    // Bigger random movement
    heart.style.setProperty("--x", `${Math.random() * 300 - 150}px`);
    heart.style.setProperty("--y", `${Math.random() * 300 - 150}px`);

    // Slower, romantic floating
    const duration = Math.random() * 8 + 8; // 8–16 sec
    heart.style.animationDuration = `${duration}s`;

    heartsBg.appendChild(heart);

    setTimeout(() => heart.remove(), duration * 1000);
  }

  // 🔥 MORE HEARTS
  setInterval(createHeart, 600); // was 1200ms
});

