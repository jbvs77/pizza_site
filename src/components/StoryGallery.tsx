'use client';

import { useState, useEffect, useRef } from 'react';

const VIDEOS = [
  { id: 1, src: '/videos/tengounacita_mini.mp4' },
  { id: 2, src: '/videos/crisis_existencia2_mini.mp4' },
  { id: 3, src: '/videos/IMG_2048_mini.mp4' },
];

export default function StoryGallery() {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % VIDEOS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === current) {
        video.currentTime = 0;
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
            loop
            playsInline
            preload="metadata"
          >
            <source src={vid.src} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
}