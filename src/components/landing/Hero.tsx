import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Globe, Bot, Mic, Workflow } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Particles } from "./Particles";
import { HeroMobileFallback } from "./HeroMobileFallback";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const HeroScene = lazy(() => import("./HeroScene").then((m) => ({ default: m.HeroScene })));

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [inView, setInView] = useState(true);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 18 });

  // Viewport and pointer detection: Only load 3D on desktop (>=1024px) with fine pointer
  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    setIsDesktop(media.matches);

    const onMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };
    media.addEventListener("change", onMediaChange);
    return () => media.removeEventListener("change", onMediaChange);
  }, []);

  // IntersectionObserver to pause 3D scene and particles when hero is scrolled out of view
  useEffect(() => {
    const el = wrap.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { rootMargin: "100px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Throttled mouse tilt for desktop only
  useEffect(() => {
    if (reducedMotion || !isDesktop) return;
    const el = wrap.current;
    if (!el) return;

    let ticking = false;
    let rect = el.getBoundingClientRect();

    const updateRect = () => {
      rect = el.getBoundingClientRect();
    };
    window.addEventListener("resize", updateRect, { passive: true });

    const onMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          mx.set((e.clientX - rect.left) / rect.width - 0.5);
          my.set((e.clientY - rect.top) / rect.height - 0.5);
          ticking = false;
        });
        ticking = true;
      }
    };

    el.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      el.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", updateRect);
    };
  }, [mx, my, reducedMotion, isDesktop]);

  return (
    <section id="home" ref={wrap} className="relative overflow-hidden pt-24 lg:pt-28 xl:pt-32">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0">
        <Particles density={32} inView={inView} />
      </div>
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-12 lg:pb-16 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            WEB • AUTOMATION • AI
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 sm:mt-5 font-display text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] font-semibold leading-[1.08] tracking-tight"
          >
            Smart Digital Solutions{" "}
            <span className="text-gradient animate-gradient">for Growing Businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 sm:mt-5 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            We build professional websites, AI automations, chatbots and AI voice agents that help
            businesses save time, manage leads and improve customer communication.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(56,189,248,0.55)] transition-transform hover:scale-[1.03]"
            >
              <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
              Discuss Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-md transition hover:bg-white/10"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 text-cyan-300 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-7 sm:mt-8 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
          >
            {[
              { icon: Globe, label: "Website Development" },
              { icon: Workflow, label: "AI Automation" },
              { icon: Bot, label: "AI Chatbots" },
              { icon: Mic, label: "AI Voice Agents" },
            ].map((item, i) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm"
              >
                <item.icon className="h-3 w-3 text-cyan-300" />
                {item.label}
                {i < 3 && <span className="ml-1 text-white/20">•</span>}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          style={
            reducedMotion || !isDesktop
              ? { transformPerspective: 1000 }
              : { rotateX: rx, rotateY: ry, transformPerspective: 1000 }
          }
          className="relative h-[420px] w-full sm:h-[480px] lg:h-[500px] xl:h-[560px]"
        >
          <div className="absolute inset-0 rounded-[2rem]">
            {isDesktop ? (
              <Suspense fallback={<HeroMobileFallback />}>
                <HeroScene inView={inView} />
              </Suspense>
            ) : (
              <HeroMobileFallback />
            )}
          </div>

          {/* Floating capability cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass-strong absolute left-0 top-8 w-52 rounded-2xl p-4 shadow-[0_0_40px_-10px_rgba(34,211,238,0.4)] animate-float"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Globe className="h-3.5 w-3.5 text-cyan-300" /> Website Development
            </div>
            <div className="mt-2 font-display text-base font-semibold">Professional Sites</div>
            <div className="mt-2 text-xs text-muted-foreground">
              Responsive • Modern • Conversion-focused
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glass-strong absolute right-0 top-32 w-52 rounded-2xl p-4 shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)] animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Workflow className="h-3.5 w-3.5 text-violet-300" /> AI Automation
            </div>
            <div className="mt-2 font-display text-base font-semibold">n8n Workflows</div>
            <div className="mt-2 text-xs text-muted-foreground">APIs • Webhooks • Automation</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="glass-strong absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl p-3 pr-5 shadow-[0_0_40px_-10px_rgba(56,189,248,0.35)] animate-float"
            style={{ animationDelay: "2s" }}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500">
              <Mic className="h-4 w-4 text-white" />
            </span>
            <div>
              <div className="text-xs text-muted-foreground">AI Voice Agents</div>
              <div className="font-display text-sm">Automated Call Handling</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
