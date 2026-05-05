"use client";

import { useEffect, useRef } from "react";

const BG = "7,13,26";
const C1 = "6,182,212";   // cyan
const C2 = "99,102,241";  // indigo
const PARTICLE_COUNT = 220;
const SPEED = 1.1;
const FADE = 0.045;

interface Particle {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  color: string;
}

export default function HeroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;
    let W = 0;
    let H = 0;
    let particles: Particle[] = [];

    const reset = (p: Particle) => {
      p.x = Math.random() * W;
      p.y = Math.random() * H;
      p.life = 0;
      p.maxLife = 130 + Math.random() * 200;
      p.color = Math.random() > 0.72 ? C2 : C1;
    };

    const init = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      ctx.fillStyle = `rgb(${BG})`;
      ctx.fillRect(0, 0, W, H);
      particles = Array.from({ length: PARTICLE_COUNT }, () => {
        const p: Particle = { x: 0, y: 0, life: 0, maxLife: 200, color: C1 };
        reset(p);
        p.life = Math.random() * p.maxLife;
        return p;
      });
    };

    // Flow field: two overlapping sine waves → organic curling motion
    const fieldAngle = (x: number, y: number, time: number) => {
      const s = 0.0028;
      return (
        Math.sin(x * s + time * 0.008) *
          Math.cos(y * s * 0.9 + time * 0.006) *
          Math.PI * 1.6 +
        Math.cos(x * s * 0.6 - time * 0.005 + y * s * 0.4) * Math.PI * 0.7
      );
    };

    const draw = () => {
      // Fade trail
      ctx.fillStyle = `rgba(${BG},${FADE})`;
      ctx.fillRect(0, 0, W, H);

      particles.forEach((p) => {
        const a = fieldAngle(p.x, p.y, t);
        p.x += Math.cos(a) * SPEED;
        p.y += Math.sin(a) * SPEED;
        p.life++;

        if (
          p.life > p.maxLife ||
          p.x < -4 || p.x > W + 4 ||
          p.y < -4 || p.y > H + 4
        ) {
          reset(p);
          return;
        }

        const progress = p.life / p.maxLife;
        const alpha = Math.sin(progress * Math.PI) * 0.7;
        const r = 0.7 + progress * 1.1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${alpha})`;
        ctx.fill();
      });

      // Darken top third so text stays readable
      const topMask = ctx.createLinearGradient(0, 0, 0, H * 0.42);
      topMask.addColorStop(0, `rgba(${BG},0.92)`);
      topMask.addColorStop(1, `rgba(${BG},0)`);
      ctx.fillStyle = topMask;
      ctx.fillRect(0, 0, W, H * 0.42);

      t++;
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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
