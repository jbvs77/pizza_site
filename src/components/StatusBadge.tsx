'use client';

import { useState, useEffect } from 'react';

export default function StatusBadge() {
  const [status, setStatus] = useState({
    text: 'Cargando estado...',
    isClosed: true,
  });

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0: Domingo, 1: Lunes, 2: Martes, 3: Miércoles, 4: Jueves, 5: Viernes, 6: Sábado
      const hour = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hour + minutes / 60;

      const openDays = [5, 6, 0]; // Viernes, Sábado, Domingo
      const openHour = 18.0; // 6:00 PM (18:00)
      const closeHour = 22.0; // 10:00 PM (22:00)

      const isOpenDay = openDays.includes(day);
      const isOpenHours = currentTime >= openHour && currentTime < closeHour;

      if (isOpenDay && isOpenHours) {
        setStatus({
          text: 'Masa leudando • Horno Encendido',
          isClosed: false,
        });
      } else if (isOpenDay && currentTime < openHour) {
        setStatus({
          text: 'Horno Apagado • Abrimos hoy a las 6:00 PM',
          isClosed: true,
        });
      } else {
        // Determinamos dinámicamente qué mensaje de próximo día mostrar
        let nextDayText = 'Abrimos el Viernes';
        
        if (day === 5 && currentTime >= closeHour) {
          nextDayText = 'Abrimos mañana (Sábado)';
        } else if (day === 6 && currentTime >= closeHour) {
          nextDayText = 'Abrimos mañana (Domingo)';
        }

        setStatus({
          text: `Horno Apagado • ${nextDayText}`,
          isClosed: true,
        });
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000); // Evalúa cada 60 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="status-float-wrapper">
      <div className={`live-badge live-badge--sm ${status.isClosed ? 'is-closed' : ''}`}>
        <span className="live-dot" />
        <span className="live-text">{status.text}</span>
      </div>
    </div>
  );
}