import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only render and attach on desktop with fine pointer and no reduced motion
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches;
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || isReducedMotion) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId = 0;
    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }

      // Update dot position immediately via transform
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    // Smooth trailing ring loop using direct DOM transform (zero React re-renders)
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      rafId = requestAnimationFrame(animateRing);
    };
    rafId = requestAnimationFrame(animateRing);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Trailing glow ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40 opacity-0 transition-opacity duration-300 will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
      {/* Precision core dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 opacity-0 transition-opacity duration-300 shadow-[0_0_8px_rgba(34,211,238,0.8)] will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
    </>
  );
}
