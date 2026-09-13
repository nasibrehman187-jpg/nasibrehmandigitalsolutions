import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

export function Particles({ density = 16, inView = true }: { density?: number; inView?: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const isCoarse =
      typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 1.25);

    const resize = () => {
      w = canvas.clientWidth || window.innerWidth || 1200;
      h = canvas.clientHeight || window.innerHeight || 800;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const effectiveCount = isCoarse ? 10 : density;

    const parts = Array.from({ length: effectiveCount }).map(() => ({
      x: Math.random() * Math.max(w - 40, 100) + 20,
      y: Math.random() * Math.max(h - 40, 100) + 20,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.5 + 0.5,
      c: Math.random() > 0.7 ? "214, 168, 75" : "20, 184, 166",
    }));

    // Static draw for reduced motion or coarse pointers
    if (reducedMotion || isCoarse) {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.c}, 0.4)`;
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

    const draw = () => {
      if (!inView || !isTabVisible) {
        return;
      }

      ctx.clearRect(0, 0, w, h);

      // Draw lightweight glowing dots with no line calculation overhead
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.c}, 0.55)`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
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
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
