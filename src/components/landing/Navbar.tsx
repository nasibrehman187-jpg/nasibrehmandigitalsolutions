import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, MessageSquare } from "lucide-react";
import { Link } from "@tanstack/react-router";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/process", label: "Process" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", onKeyDown);
      };
    }
  }, [open]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080d16]/92 backdrop-blur-md border-b border-[rgba(247,243,232,0.08)] shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 sm:py-4">
        <Link
          to="/"
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6] rounded-lg p-1"
          aria-label="Digital Solution — Home"
        >
          {/* DS brand mark */}
          <div className="relative">
            <img
              src="/logo-icon.png"
              alt="Digital Solution logo mark"
              width={34}
              height={34}
              className="h-8.5 w-8.5 rounded-lg object-cover border border-[rgba(247,243,232,0.12)] shadow-[0_0_16px_-4px_rgba(20,184,166,0.3)] transition duration-300 group-hover:border-[#14b8a6]/50 group-hover:shadow-[0_0_24px_-4px_rgba(20,184,166,0.5)]"
            />
          </div>
          {/* Brand name text */}
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-tight">
              <span className="text-[#f7f3e8]">Digital</span>{" "}
              <span className="text-[#14b8a6]">Solution</span>
              <span className="inline-block h-1 w-1 rounded-full bg-[#d6a84b] ml-1.5 align-middle opacity-80" />
            </span>
            <span className="text-[10.5px] text-[#a8b0bf] tracking-wide font-normal">
              by Nasib Rehman
            </span>
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <ul className="hidden items-center gap-1 rounded-full border border-[rgba(247,243,232,0.08)] bg-[#111827]/85 p-1.5 lg:flex shadow-inner">
          {NAV.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{
                  className:
                    "text-[#f7f3e8] bg-[#162033] font-medium shadow-sm border border-[rgba(247,243,232,0.12)]",
                }}
                inactiveProps={{
                  className: "text-[#a8b0bf] hover:text-[#f7f3e8] hover:bg-white/[0.04]",
                }}
                className="relative rounded-full px-3.5 py-1.5 text-xs tracking-wide transition-all"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Header CTA */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 rounded-full border border-[#0f8b8d]/40 bg-gradient-to-r from-[#0f8b8d]/15 to-[#14b8a6]/10 px-4.5 py-2 text-xs font-semibold text-[#f7f3e8] transition-all duration-300 hover:border-[#14b8a6]/70 hover:bg-[#0f8b8d]/25 hover:shadow-[0_0_20px_-4px_rgba(20,184,166,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#14b8a6] shadow-[0_0_8px_#14b8a6]" />
            <span>Discuss Your Project</span>
          </Link>
        </div>

        <button
          className="lg:hidden rounded-lg p-2 text-[#f7f3e8] hover:text-white border border-[rgba(247,243,232,0.10)] bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6]"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="lg:hidden border-t border-[rgba(247,243,232,0.08)] bg-[#111827] shadow-2xl"
        >
          <ul className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1.5">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: n.to === "/" }}
                  activeProps={{
                    className:
                      "text-[#f7f3e8] bg-[#162033] font-medium border border-[rgba(247,243,232,0.10)]",
                  }}
                  inactiveProps={{
                    className: "text-[#a8b0bf] hover:text-[#f7f3e8] hover:bg-white/[0.04]",
                  }}
                  className="block rounded-xl px-4 py-2.5 text-sm transition-colors"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-gradient-to-r from-[#0f8b8d] to-[#14b8a6] px-4 py-2.5 text-center text-sm font-semibold text-[#f7f3e8] shadow-md hover:opacity-95"
              >
                Discuss Your Project
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/923317962794"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-center text-sm font-semibold text-emerald-400 hover:bg-emerald-500/20 transition"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp (+92 331 7962794)
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
