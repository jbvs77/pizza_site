'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (totalScrollHeight > 0) {
        const progress = Math.min(Math.max(window.scrollY / totalScrollHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgOpacity = 0.15 + scrollProgress * (0.95 - 0.15);
  const blurAmount = 6 + scrollProgress * (20 - 6);

  // Pasamos un indicador de 0 a 1 al CSS mediante variables personalizadas
  return (
    <header
      className="header"
      style={{
        backgroundColor: `rgba(250, 249, 247, ${bgOpacity})`,
        backdropFilter: `blur(${blurAmount}px) saturate(180%)`,
        WebkitBackdropFilter: `blur(${blurAmount}px) saturate(180%)`,
        borderBottomColor: `rgba(59, 15, 26, ${0.05 + scrollProgress * 0.12})`,
        boxShadow: `0 ${10 * scrollProgress}px ${30 * scrollProgress}px -10px rgba(59, 15, 26, ${0.08 * scrollProgress})`,
        // Cambia suavemente entre blanco (#FFFFFF) arriba y Vino (#3B0F1A) conforme hace scroll
        '--nav-text-color': scrollProgress > 0.3 ? 'var(--wine)' : '#FFFFFF',
      } as React.CSSProperties}
    >
      <nav className="nav" aria-label="Navegación principal">
        <div className="nav-container">
          
          {/* Lado Izquierdo Desktop */}
          <ul className="nav-group nav-left">
            <li>
              <a href="#historia" onClick={() => setIsOpen(false)}>
                Nuestra masa
              </a>
            </li>
            <li>
              <a href="#menu" onClick={() => setIsOpen(false)}>
                Menú
              </a>
            </li>
          </ul>

          {/* Logo Centrado */}
          <a href="#" className="logo" onClick={() => setIsOpen(false)}>
            CasiPizza
          </a>

          {/* Lado Derecho Desktop */}
          <ul className="nav-group nav-right">
            <li>
              <a href="#eventos" onClick={() => setIsOpen(false)}>
                Eventos
              </a>
            </li>
            <li>
              <a href="#horarios" onClick={() => setIsOpen(false)}>
                Horarios
              </a>
            </li>
          </ul>

        </div>

        {/* Botón Mobile */}
        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <svg
            className="icon-closed"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
          </svg>

          <svg
            className="icon-open"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Menú Desplegable Mobile */}
        <div className={`nav-mobile-menu ${isOpen ? 'is-open' : ''}`}>
          <ul className="mobile-links">
            <li>
              <a href="#historia" onClick={() => setIsOpen(false)}>
                Nuestra masa
              </a>
            </li>
            <li>
              <a href="#menu" onClick={() => setIsOpen(false)}>
                Menú
              </a>
            </li>
            <li>
              <a href="#eventos" onClick={() => setIsOpen(false)}>
                Eventos
              </a>
            </li>
            <li>
              <a href="#horarios" onClick={() => setIsOpen(false)}>
                Horarios
              </a>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  );
}