import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

export function Particles({ density = 32, inView = true }: { density?: number; inView?: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // If reduced motion is requested or mobile coarse pointer, render static particles once or disable
    const isCoarse =
      typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 1.5);

    const resize = () => {
      w = canvas.clientWidth || window.innerWidth || 1200;
      h = canvas.clientHeight || window.innerHeight || 800;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Adjusted count: much lighter on mobile or lower density
    const effectiveCount = isCoarse ? 12 : density;

    const parts = Array.from({ length: effectiveCount }).map(() => ({
      x: Math.random() * Math.max(w - 40, 100) + 20,
      y: Math.random() * Math.max(h - 40, 100) + 20,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.5 + 0.5,
      c: Math.random() > 0.5 ? "34, 211, 238" : "168, 85, 247",
    }));

    // Static draw for reduced motion or coarse pointers
    if (reducedMotion || isCoarse) {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.c}, 0.5)`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      return;
    }

    let isTabVisible =
      typeof document !== "undefined" ? document.visibilityState === "visible" : true;

    const onVisibilityChange = () => {
      isTabVisible = document.visibilityState === "visible";
      if (isTabVisible && inView) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const maxDistSq = 90 * 90;

    const draw = () => {
      if (!inView || !isTabVisible) {
        return;
      }

      ctx.clearRect(0, 0, w, h);

      // Draw particles without expensive software shadowBlur
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.c}, 0.65)`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Connect nearby particles using squared Euclidean distance (avoids Math.hypot)
      for (let i = 0; i < parts.length; i++) {
        const a = parts[i];
        for (let j = i + 1; j < parts.length; j++) {
          const b = parts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const alpha = 0.08 * (1 - dist / 90);
            ctx.strokeStyle = `rgba(120, 160, 255, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    if (inView && isTabVisible) {
      raf = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [density, inView, reducedMotion]);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
