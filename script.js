// Fade-in ao rolar
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

// Tema claro / escuro
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

// Tracklist simples, sem significado das músicas
const tracks = document.querySelectorAll(".tracklist li");

tracks.forEach(track => {
  track.addEventListener("click", () => {
    tracks.forEach(item => item.classList.remove("selected"));
    track.classList.add("selected");
  });
});

// Efeito no título da aba
const originalTitle = document.title;

window.addEventListener("blur", () => {
  document.title = "mk — transmission paused";
});

window.addEventListener("focus", () => {
  document.title = originalTitle;
});