'use client';

import { useState, useEffect } from 'react';

export default function StatusBadge() {
  const [status, setStatus] = useState({
    text: 'Horno Apagado • Abrimos el Viernes',
    isClosed: true,
  });

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Dom, 5 = Vie, 6 = Sáb
      const hour = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hour + minutes / 60;

      const openDays = [4, 5, 6, 0];
      const openHour = 17.0; // 5:00 PM
      const closeHour = 22.5; // 10:30 PM

      const isOpenDay = openDays.includes(day);
      const isOpenHours = currentTime >= openHour && currentTime < closeHour;

      if (isOpenDay && isOpenHours) {
        setStatus({
          text: 'Masa leudando • Horno Encendido',
          isClosed: false,
        });
      } else {
        const text = (isOpenDay && currentTime < openHour)
          ? 'Horno Apagado • Abrimos hoy a las 5:00 PM'
          : 'Horno Apagado • Abrimos el Viernes';

        setStatus({ text, isClosed: true });
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`live-badge live-badge--sm ${status.isClosed ? 'is-closed' : ''}`}>
      <span className="live-dot" />
      <span className="live-text">{status.text}</span>
    </div>
  );
}