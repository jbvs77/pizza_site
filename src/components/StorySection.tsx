import StoryGallery from './StoryGallery';

export default function StorySection() {
  return (
    <section id="historia" className="section section-story">
      <div className="container">
        <p className="label label-light">Por qué somos distintos</p>
        <h2>El secreto está en el tiempo</h2>
        <div className="story-grid">
          <div className="story-media">
            <StoryGallery />
          </div>
          <div className="story-text">
            <p>
              En Guatemala, pocas pizzerías apuestan por masa real. La mayoría usa masas rápidas y pesadas. Nosotros preferimos la paciencia y el sabor auténtico.
            </p>
            <p>
              Nuestra masa reposa pacientemente durante <strong>más de 48 horas en frío</strong>. ¿El resultado? Una pizza con bordes crujientes, textura aireada, un sabor profundo y una digestión perfecta y ligera.
            </p>
            <a
              href="https://wa.me/50230883119?text=Hola%2C%20quiero%20probar%20la%20pizza%20de%20CasiPizza"
              className="cta-button secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserva tu masa hoy
            </a>
          </div>
        </div>

        <ul className="specs" aria-label="Especificaciones de nuestra masa">
          <li>
            <span className="spec-value">Harina de fuerza</span>
            <span className="spec-label">Receta propia</span>
          </li>
          <li>
            <span className="spec-value">60%</span>
            <span className="spec-label">Hidratación</span>
          </li>
          <li>
            <span className="spec-value">0.3%</span>
            <span className="spec-label">Levadura — solo para activar</span>
          </li>
          <li>
            <span className="spec-value">+48 h</span>
            <span className="spec-label">Fermentación lenta</span>
          </li>
        </ul>
      </div>
    </section>
  );
}