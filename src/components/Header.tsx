'use client';

import { useState } from 'react';
import StatusBadge from './StatusBadge';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav" aria-label="Navegación principal">
        <a href="#" className="logo" onClick={() => setIsOpen(false)}>
          CasiPizza
        </a>

        <ul className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          <li>
            <a href="#historia" onClick={() => setIsOpen(false)}>Nuestra masa</a>
          </li>
          <li>
            <a href="#menu" onClick={() => setIsOpen(false)}>Menú</a>
          </li>
          <li>
            <a href="#horarios" onClick={() => setIsOpen(false)}>Horarios</a>
          </li>
        </ul>

        <StatusBadge />

        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <svg className="icon-closed" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
          </svg>
          <svg className="icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </nav>
    </header>
  );
}