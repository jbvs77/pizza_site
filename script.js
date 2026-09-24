document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. MENÚ NAVEGACIÓN MÓVIL (Gira el ícono de Pizza)
     ========================================================================== */
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
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
  }

  /* ==========================================================================
     2. ESTADO EN VIVO (Masa Leudando / Horno Encendido)
     ========================================================================== */
  function updateBusinessStatus() {
    const badge = document.getElementById("status-badge");
    const text = document.getElementById("status-text");

    if (!badge || !text) return;

    const now = new Date();
    const day = now.getDay(); // 0 = Domingo, 1 = Lunes, ..., 5 = Viernes, 6 = Sábado
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hour + minutes / 60;

    // Horarios de atención CasiPizza: Viernes (5), Sábado (6) y Domingo (0) de 17:00 a 22:30
    const schedule = {
      openDays: [5, 6, 0],
      openHour: 17.0, // 5:00 PM
      closeHour: 22.5 // 10:30 PM
    };

    const isOpenDay = schedule.openDays.includes(day);
    const isOpenHours = currentTime >= schedule.openHour && currentTime < schedule.closeHour;

    if (isOpenDay && isOpenHours) {
      // ESTADO: ABIERTO
      badge.classList.remove("is-closed");
      text.textContent = "Masa leudando • Horno Encendido";
    } else {
      // ESTADO: CERRADO
      badge.classList.add("is-closed");

      // Mensaje inteligente según el día
      if (isOpenDay && currentTime < schedule.openHour) {
        text.textContent = "Horno Apagado • Abrimos hoy a las 5:00 PM";
      } else {
        text.textContent = "Horno Apagado • Abrimos el Viernes";
      }
    }
  }

  // Ejecutar inmediatamente al cargar y re-evaluar cada 60 segundos
  updateBusinessStatus();
  setInterval(updateBusinessStatus, 60000);

  /* ==========================================================================
     3. GALERÍAS ROTATIVAS (Pizzas, Historia y Videos)
     ========================================================================== */
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
          /* Autoplay prevenido por políticas del navegador */
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
});