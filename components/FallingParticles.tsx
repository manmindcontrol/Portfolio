"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vy: number;
  vx: number;
  r: number;
  alpha: number;
  twinkle: number;
  twinkleSpeed: number;
}

const CYAN = "6,182,212";
const COUNT = 55;

export default function FallingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let W = 0;
    let H = 0;
    let particles: Particle[] = [];

    const spawn = (fromTop = false): Particle => ({
      x: Math.random() * W,
      y: fromTop ? -10 : Math.random() * H,
      vy: 0.3 + Math.random() * 0.7,
      vx: (Math.random() - 0.5) * 0.15,
      r: 0.6 + Math.random() * 1.6,
      alpha: 0.15 + Math.random() * 0.45,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.012 + Math.random() * 0.02,
    });

    const init = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      particles = Array.from({ length: COUNT }, () => spawn());
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      particles.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx;
        p.twinkle += p.twinkleSpeed;

        if (p.y > H + 10) {
          Object.assign(p, spawn(true));
          return;
        }

        const a = p.alpha * (0.55 + 0.45 * Math.sin(p.twinkle));

        // Soft glow: draw bigger transparent circle first
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${CYAN},${a * 0.15})`;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${CYAN},${a})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    init();
    window.addEventListener("resize", init);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.75 }}
    />
  );
}
