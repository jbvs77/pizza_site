import Image from 'next/image';
import { PIZZAS, DESSERTS } from '@/data/menu';

export default function MenuSection() {
  return (
    <section id="menu" className="section section-menu">
      <div className="container">
        <p className="label">Menú</p>
        <h2>Nuestras especialidades</h2>
        <p className="section-context">Precio de introducción · Entrega en San Miguel Petapa</p>

        {/* Pizzas */}
        <div className="menu-grid">
          {PIZZAS.map((pizza) => (
            <article key={pizza.id} className="pizza-card">
              <div className="pizza-card-gallery media-gallery">
                <div className="gallery-slide is-active" style={{ position: 'relative', width: '100%', height: '220px' }}>
                  <Image
                    src={pizza.image}
                    alt={pizza.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="pizza-card-top">
                <h3>{pizza.name}</h3>
                <span className="price">{pizza.price}</span>
              </div>
              <p>{pizza.description}</p>
              <a
                href={`https://wa.me/50230883119?text=Hola%2C%20quiero%20pedir%20la%20pizza%20${encodeURIComponent(pizza.name)}`}
                className="card-cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir esta pizza <span>→</span>
              </a>
            </article>
          ))}
        </div>

        {/* Postres */}
        <h2 className="postre-label">Postres</h2>
        <div className="menu-grid">
          {DESSERTS.map((dessert) => (
            <article key={dessert.id} className="postre-card">
              <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                <Image
                  src={dessert.image}
                  alt={dessert.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="pizza-card-image"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="postre-card-content">
                <div className="pizza-card-top">
                  <h3>{dessert.name}</h3>
                  <span className="price">{dessert.price}</span>
                </div>
                <p>{dessert.description}</p>
                <a
                  href={`https://wa.me/50230883119?text=Hola%2C%20quiero%20agregar%20un%20${encodeURIComponent(dessert.name)}%20a%20mi%20pedido`}
                  className="card-cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agregar postre <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="menu-footer-cta">
          <a
            href="https://wa.me/50230883119?text=Hola%2C%20quiero%20hacer%20un%20pedido"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Haz tu pedido completo por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}