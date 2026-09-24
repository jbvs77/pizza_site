export default function HoursFooter() {
  return (
    <>
      <section id="horarios" className="section section-hours">
        <div className="container">
          <p className="label">Horarios</p>
          <h2>Solo de Jueves a Domingo</h2>
          <p className="hours-days">Jueves · Viernes · Sábado · Domingo</p>
          <p className="hours-time">
            <time dateTime="17:00">17:00</time> — <time dateTime="21:00">21:00</time>
          </p>
          <p className="section-context hours-note">
            Tenemos una cantidad limitada de masas cada semana para garantizar su calidad.<br />
            Entregas únicamente en San Miguel Petapa.
          </p>
          <a
            href="https://wa.me/50230883119?text=Hola%2C%20quiero%20hacer%20un%20pedido"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Asegura tu pizza
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="logo">CasiPizza</span>
          <address>San Miguel Petapa, Guatemala</address>

          <a
            href="https://www.tiktok.com/@casipizza?_r=1&_t=ZS-99SU2UQXEQv"
            className="footer-tiktok-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
            <span>Síguenos en TikTok</span>
          </a>
        </div>
      </footer>
    </>
  );
}