// import { useEffect } from "react";
import "./ParticleAnimation.css";

import { useEffect, useRef } from "react";

function ParticleAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const numParticles = 25;
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.setProperty("--random-x", Math.random().toString());
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `-5px`;
      particle.style.animationDuration = `${Math.random() * 10 + 18}s`;
      particle.style.animationDelay = `${i * 0.5}s`;
      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach((particle) => container.removeChild(particle));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed left-0 top-0 z-50 h-screen w-screen overflow-hidden"
    />
  );
}

export default ParticleAnimation;
