"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { hero } from "@/lib/content";

export function HeroReveal() {
  const [position, setPosition] = useState(50);
  const [nudged, setNudged] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPosition(54);
      window.setTimeout(() => setPosition(50), 520);
      setNudged(true);
    }, 900);
    return () => window.clearTimeout(timer);
  }, []);

  const updateFromPointer = (clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <section className="hero section-pad" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{hero.copy}</p>
        <h1 id="hero-title">{hero.title}</h1>
      </div>

      <div
        ref={trackRef}
        className={`reveal ${nudged ? "nudge-done" : ""}`}
        onPointerMove={(event) => {
          if (event.buttons === 1) updateFromPointer(event.clientX);
        }}
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          updateFromPointer(event.clientX);
        }}
      >
        <Image src={hero.before} alt="Before interior transformation" fill priority sizes="100vw" />
        <div className="reveal-after" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
          <Image src={hero.after} alt="After interior transformation" fill priority sizes="100vw" />
        </div>
        <div className="reveal-label reveal-label-before">Before</div>
        <div className="reveal-label reveal-label-after">After</div>
        <div
          className="reveal-handle"
          style={{ left: `${position}%` }}
          role="slider"
          tabIndex={0}
          aria-label="Before and after image divider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") setPosition((value) => Math.max(0, value - 2));
            if (event.key === "ArrowRight") setPosition((value) => Math.min(100, value + 2));
            if (event.key === "Home") setPosition(0);
            if (event.key === "End") setPosition(100);
          }}
        >
          <span aria-hidden="true" className="handle-pill">↔</span>
        </div>
      </div>
    </section>
  );
}
