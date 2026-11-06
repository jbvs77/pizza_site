'use client';

import { useState, useEffect, useRef } from 'react';

const VIDEOS = [
  { id: 1, src: '/videos/hero-video-1.mp4' },
  { id: 2, src: '/videos/hero-video-2.mp4' },  
  { id: 3, src: '/videos/IMG_2048_mini.mp4' },
  { id: 4, src: '/videos/hero-video-4.mp4' },
  
];

export default function StoryGallery() {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Cambia de slide exactamente cada 3 segundos (3000 ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % VIDEOS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Controla la reproducción desde el inicio (segundo 0) a velocidad normal
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === current) {
        video.currentTime = 0;
        video.playbackRate = 1.0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [current]);

  return (
    <div className="story-gallery media-gallery">
      {VIDEOS.map((vid, idx) => (
        <div
          key={vid.id}
          className={`gallery-slide ${idx === current ? 'is-active' : ''}`}
        >
          <video
            ref={(el) => { videoRefs.current[idx] = el; }}
            muted
            playsInline
            preload="auto"
          >
            <source src={vid.src} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
}