import Image from 'next/image';
import { PIZZAS, PIZZAS_PREMIUM, DESSERTS } from '@/data/menu';

// Helper para formatear el precio de forma segura (acepta string o number)
const formatPrice = (price: string | number) => {
  const priceStr = String(price);
  return priceStr.startsWith('Q') ? priceStr : `Q${priceStr}`;
};

export default function MenuSection() {
  return (
    <section id="menu" className="section section-menu">
      <div className="container">
        <p className="label">Menú</p>
        <h2>Nuestras especialidades</h2>
        <p className="section-context">Precio de introducción · Entrega en San Miguel Petapa</p>

        {/* 1. PIZZAS CLÁSICAS / ESPECIALIDADES */}
        <div className="menu-grid">
          {PIZZAS.map((pizza) => (
            <article key={pizza.id} className="pizza-card">
              <div className="pizza-card-gallery media-gallery">
                <div className="gallery-slide is-active" style={{ position: 'relative', width: '100%', height: '220px' }}>
                  <Image
                    src={pizza.image}
                    alt={pizza.alt || pizza.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              <div className="pizza-card-top">
                <h3>{pizza.name}</h3>
                <span className="price">{formatPrice(pizza.price)}</span>
              </div>

              <p style={{ whiteSpace: 'pre-line' }}>
                {pizza.id === 'la-culpable' ? (
                  <>
                    <strong>{pizza.description.split('\n')[0]}</strong>
                    {'\n'}
                    {pizza.description.split('\n').slice(1).join('\n')}
                  </>
                ) : (
                  pizza.description
                )}
              </p>

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

        {/* 2. SECCIÓN PREMIUM CON DEGRADADO */}
        <div className="premium-gradient-wrapper">
          <h2 style={{ color: 'var(--terracotta)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ★ Premium Pizzas
          </h2>
          <p className="section-context">Ingredientes de alta calidad e inspiraciones artesanales</p>

          <div className="menu-grid" style={{ marginTop: '1.5rem' }}>
            {PIZZAS_PREMIUM.map((pizza) => (
              <article key={pizza.id} className="pizza-card premium-card">
                <div className="pizza-card-gallery media-gallery">
                  <div className="gallery-slide is-active" style={{ position: 'relative', width: '100%', height: '220px' }}>
                    <Image
                      src={pizza.image}
                      alt={pizza.alt || pizza.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>

                <div className="pizza-card-top">
                  <h3>{pizza.name}</h3>
                  <span className="price">{formatPrice(pizza.price)}</span>
                </div>

                {pizza.description && (
                  <p style={{ whiteSpace: 'pre-line' }}>{pizza.description}</p>
                )}

                <a
                  href={`https://wa.me/50230883119?text=Hola%2C%20quiero%20pedir%20la%20pizza%20Premium%20${encodeURIComponent(pizza.name)}`}
                  className="card-cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pedir esta pizza <span>→</span>
                </a>
              </article>
            ))}
          </div>

          <div className="burrata-banner">
            ✨ <strong>Eleva tu experiencia:</strong> Convierte cualquier pizza en una obra maestra añadiendo una <strong>Burrata cremosa y artesanal</strong> entera por solo <strong>+Q50</strong>.
          </div>
        </div>

        {/* 3. POSTRES */}
        <h2 className="postre-label" style={{ marginTop: '3.5rem' }}>Postres</h2>
        <div className="menu-grid postres-grid">
          {DESSERTS.map((dessert) => (
            <article key={dessert.id} className="postre-card">
              <div className="postre-image-wrapper">
                <Image
                  src={dessert.image}
                  alt={dessert.alt || dessert.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="postre-card-content">
                <div className="pizza-card-top">
                  <h3>{dessert.name}</h3>
                  <span className="price">{formatPrice(dessert.price)}</span>
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

        {/* FOOTER CTA */}
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