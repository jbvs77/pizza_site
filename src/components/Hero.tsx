export default function Hero() {
  return (
    <section className="hero" aria-label="Presentación principal">
      <video className="hero-video" autoPlay muted loop playsInline poster="/images/masa-hero-poster.jpg">
        <source src="/videos/hero_home_vide_new.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="label">San Miguel Petapa · Masa real</p>
        <h1>CasiPizza</h1>
        <p className="hero-lead">
          Pizza artesanal de verdad.<br />
          Sabores únicos. +48 horas de fermentación.
        </p>
        <p className="hero-context">
          Harina de fuerza · Fermentación en frío · Solo de Jueves a Domingo
        </p>
        <div className="hero-actions">
          <a href="#menu" className="cta-button">Ver el menú</a>
          <a
            href="https://wa.me/50230883119?text=Hola%2C%20quiero%20hacer%20un%20pedido"
            className="cta-button secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}