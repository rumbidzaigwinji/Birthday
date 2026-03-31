const screenLinks = document.querySelectorAll(".screen-link");
const screens = document.querySelectorAll(".screen");
const celebrateButton = document.getElementById("celebrateButton");
const storybook = document.querySelector(".storybook");

function showScreen(targetId) {
  screens.forEach((screen) => {
    const isTarget = screen.id === targetId;
    screen.classList.toggle("is-active", isTarget);
  });

  if (storybook) {
    storybook.dataset.currentScreen = targetId;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function createConfettiPiece() {
  const piece = document.createElement("span");
  const colors = ["#ff7b9c", "#ffc46b", "#92c59b", "#ffd9e3", "#fff0a8"];
  const shape = Math.random() > 0.45 ? "heart" : "dot";
  const duration = 2500 + Math.random() * 1800;

  piece.className = `confetti ${shape}`;
  piece.style.left = `${Math.random() * 100}vw`;
  piece.style.animationDuration = `${duration}ms`;
  piece.style.setProperty("--piece-color", colors[Math.floor(Math.random() * colors.length)]);
  piece.style.setProperty("--drift-x", `${-80 + Math.random() * 160}px`);
  piece.style.setProperty("--spin", `${-240 + Math.random() * 480}deg`);

  document.body.appendChild(piece);

  window.setTimeout(() => {
    piece.remove();
  }, duration);
}

function celebrate() {
  for (let i = 0; i < 30; i += 1) {
    window.setTimeout(createConfettiPiece, i * 90);
  }
}

screenLinks.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;

    if (!targetId) {
      return;
    }

    showScreen(targetId);

    if (targetId === "gallery" || targetId === "message") {
      celebrate();
    }
  });
});

celebrateButton.addEventListener("click", () => {
  celebrate();
});
