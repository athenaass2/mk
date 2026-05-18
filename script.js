/*
  mk album site
  JavaScript puro
  Funcionalidades:
  - Fade-in ao rolar
  - Tema claro/escuro
  - Tracklist interativa
  - Archive cards clicáveis
*/

// Fade-in com Intersection Observer
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2
  }
);

fadeElements.forEach(element => {
  observer.observe(element);
});

// Tema escuro/claro
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("mk-theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "dark";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");

  themeToggle.textContent = isLight ? "dark" : "light";
  localStorage.setItem("mk-theme", isLight ? "light" : "dark");
});

// Tracklist interativa
const tracks = document.querySelectorAll(".tracklist li");
const trackHint = document.getElementById("trackHint");

tracks.forEach(track => {
  track.addEventListener("mouseenter", () => {
    const note = track.getAttribute("data-note");
    trackHint.textContent = note;
  });

  track.addEventListener("mouseleave", () => {
    trackHint.textContent = "passe o mouse nas faixas";
  });

  track.addEventListener("click", () => {
    const note = track.getAttribute("data-note");
    trackHint.textContent = `selected: ${note}`;
  });
});

// Archive cards clicáveis
const archiveCards = document.querySelectorAll(".archive-card");
const archiveOutput = document.getElementById("archiveOutput");

archiveCards.forEach(card => {
  card.addEventListener("click", () => {
    const message = card.getAttribute("data-message");
    archiveOutput.textContent = message;

    archiveCards.forEach(item => {
      item.classList.remove("active");
    });

    card.classList.add("active");
  });
});

// Pequeno efeito de título no navegador
const originalTitle = document.title;

window.addEventListener("blur", () => {
  document.title = "mk — transmission paused";
});

window.addEventListener("focus", () => {
  document.title = originalTitle;
});