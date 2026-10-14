import Image from 'next/image';
import { PIZZAS, PIZZAS_PREMIUM, DESSERTS } from '@/data/menu';

const PHONE_NUMBER = '50230883119';

// Helpers
const formatPrice = (price: string | number): string => {
  const priceStr = String(price);
  return priceStr.startsWith('Q') ? priceStr : `Q${priceStr}`;
};

const getWhatsAppLink = (message: string): string =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

// Interfaz flexible para items del menú
interface MenuItem {
  id: string;
  name: string;
  price: string | number;
  image: string;
  alt?: string;
  description?: string;
}

// Subcomponente reutilizable para tarjetas del menú
function MenuItemCard({
  item,
  isPremium = false,
  ctaText,
  waPrefix,
}: {
  item: MenuItem;
  isPremium?: boolean;
  ctaText: string;
  waPrefix: string;
}) {
  const cardClass = isPremium ? 'pizza-card-dark' : 'pizza-card';
  const priceClass = isPremium ? 'price price-gold' : 'price';
  const ctaClass = isPremium ? 'card-cta-button cta-gold' : 'card-cta-button';
  const waMessage = `${waPrefix} ${item.name}`;

  return (
    <article className={cardClass}>
      <div className="pizza-card-gallery media-gallery">
        <div className="gallery-slide is-active relative w-full h-[220px]">
          <Image
            src={item.image}
            alt={item.alt || item.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="pizza-card-top">
        <h3>{item.name}</h3>
        <span className={priceClass}>{formatPrice(item.price)}</span>
      </div>

      {item.description && (
        <p className={isPremium ? 'description-light whitespace-pre-line' : 'whitespace-pre-line'}>
          {item.id === 'la-culpable' ? (
            <>
              <strong>{item.description.split('\n')[0]}</strong>
              {'\n'}
              {item.description.split('\n').slice(1).join('\n')}
            </>
          ) : (
            item.description
          )}
        </p>
      )}

      <a
        href={getWhatsAppLink(waMessage)}
        className={ctaClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {ctaText} <span>→</span>
      </a>
    </article>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="section section-menu">
      {/* 1. PIZZAS CLÁSICAS */}
      <div className="container">
        <p className="label">Menú</p>
        <h2>Nuestras especialidades</h2>
        <p className="section-context">Precio de introducción · Entrega en San Miguel Petapa</p>

        <div className="menu-grid">
          {PIZZAS.map((pizza) => (
            <MenuItemCard
              key={pizza.id}
              item={pizza}
              ctaText="Pedir esta pizza"
              waPrefix="Hola, quiero pedir la pizza"
            />
          ))}
        </div>
      </div>

      {/* 2. PIZZAS PREMIUM */}
      <div className="section-premium-immersive">
        <div className="container">
          <div className="premium-header-content">
            <span className="label label-light">Edición Exclusiva</span>
            <h2>★ Premium Pizzas</h2>
            <p className="premium-subtitle">
              Ingredientes de alta calidad e inspiraciones artesanales
            </p>
          </div>

          <div className="menu-grid">
            {PIZZAS_PREMIUM.map((pizza) => (
              <MenuItemCard
                key={pizza.id}
                item={pizza}
                isPremium
                ctaText="Pedir esta pizza"
                waPrefix="Hola, quiero pedir la pizza Premium"
              />
            ))}
          </div>

          {/* BANNER BURRATA DARK */}
          <a
            href={getWhatsAppLink('Hola, quiero agregar una Burrata artesanal a mi pedido (+Q50)')}
            target="_blank"
            rel="noopener noreferrer"
            className="burrata-banner-dark"
          >
            <span className="burrata-badge-gold">✨ Recomendación del Chef</span>
            <div className="burrata-content-dark">
              <strong>Eleva tu experiencia:</strong> Convierte cualquier pizza en una obra maestra añadiendo una <strong>Burrata cremosa y artesanal</strong> entera por solo <strong className="highlight-gold">+Q50</strong>.
            </div>
            <span className="burrata-cta-gold">
              Agregar Burrata a mi pedido <span>→</span>
            </span>
          </a>
        </div>
      </div>

      {/* 3. POSTRES Y FOOTER */}
      <div className="container">
        <h2 className="postre-label mt-[3.5rem]">Postres</h2>
        <div className="menu-grid postres-grid">
          {DESSERTS.map((dessert) => (
            <article key={dessert.id} className="postre-card">
              <div className="postre-image-wrapper relative">
                <Image
                  src={dessert.image}
                  alt={dessert.alt || dessert.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="postre-card-content">
                <div className="pizza-card-top">
                  <h3>{dessert.name}</h3>
                  <span className="price">{formatPrice(dessert.price)}</span>
                </div>
                <p>{dessert.description}</p>
                <a
                  href={getWhatsAppLink(`Hola, quiero agregar un ${dessert.name} a mi pedido`)}
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
            href={getWhatsAppLink('Hola, quiero hacer un pedido')}
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