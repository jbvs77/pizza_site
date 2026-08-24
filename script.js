const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

// ── Galerías rotativas (imágenes y/o videos) ──
// Se usa en las pizza-card y en la galería de videos de "Por qué somos distintos".
// Para agregar o quitar tomas, copia/borra un bloque .gallery-slide y cambia el src.
const GALLERY_INTERVAL_MS = 4000;

document.querySelectorAll(".media-gallery").forEach((gallery) => {
  const slides = Array.from(gallery.querySelectorAll(".gallery-slide"));
  if (slides.length <= 1) return;

  let current = slides.findIndex((slide) => slide.classList.contains("is-active"));
  if (current === -1) {
    current = 0;
    slides[0].classList.add("is-active");
  }

  const playVideoIn = (slide) => {
    const video = slide.querySelector("video");
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {
        /* el navegador puede bloquear el autoplay hasta haber interacción; se ignora */
      });
    }
  };

  const pauseVideoIn = (slide) => {
    const video = slide.querySelector("video");
    if (video) video.pause();
  };

  playVideoIn(slides[current]);

  setInterval(() => {
    pauseVideoIn(slides[current]);
    slides[current].classList.remove("is-active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("is-active");
    playVideoIn(slides[current]);
  }, GALLERY_INTERVAL_MS);
});