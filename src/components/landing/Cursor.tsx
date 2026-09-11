import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 40, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 400, damping: 40, mass: 0.3 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      ref={ref}
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="h-full w-full rounded-full bg-cyan-400/20 blur-2xl" />
      <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-cyan-300" />
    </motion.div>
  );
}
