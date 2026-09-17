import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageSquare, X } from "lucide-react";
import { CONTACT_INFO } from "@/lib/contact";
import { NAV_LINKS } from "@/lib/navigation";
import { BrandLink } from "./BrandLink";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#10233F]/95 backdrop-blur-md border-b border-[#1E3A63] shadow-md"
          : "bg-[#10233F]/90 backdrop-blur-sm border-b border-[#1E3A63]/50"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 sm:py-4"
      >
        <BrandLink inverted onClick={() => setOpen(false)} />

        {/* Desktop Nav Items — Centered */}
        <ul className="hidden items-center gap-6 xl:gap-8 lg:flex lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
          {NAV_LINKS.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{
                  className: "text-[#2DD4BF] font-semibold after:scale-x-100",
                }}
                inactiveProps={{
                  className: "text-[#D1DCE8] hover:text-white font-medium after:scale-x-0",
                }}
                className="relative py-1 text-sm tracking-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C] rounded after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-[#2DD4BF] after:rounded-full after:transition-transform"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className="lg:hidden rounded-lg p-2 text-white hover:text-[#2DD4BF] border border-[#1E3A63] bg-[#162C4E] shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </nav>

      {open && (
        <div
          ref={menuRef}
          id="mobile-nav"
          className="lg:hidden border-t border-[#1E3A63] bg-[#10233F] shadow-xl max-h-[calc(100dvh-4.5rem)] overflow-y-auto"
        >
          <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl px-6 py-4">
            <ul className="flex flex-col gap-1.5">
              {NAV_LINKS.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: n.to === "/" }}
                    activeProps={{
                      className:
                        "text-[#2DD4BF] bg-[#162C4E] font-semibold border-l-2 border-[#087F8C] pl-3.5",
                    }}
                    inactiveProps={{
                      className: "text-[#D1DCE8] hover:text-white hover:bg-[#162C4E]/60",
                    }}
                    className="flex min-h-11 items-center rounded-lg px-4 py-2.5 text-sm transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center justify-center rounded-lg bg-[#087F8C] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#066670]"
                >
                  Discuss Your Project
                </Link>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#1E3A63] bg-[#162C4E] px-4 py-2.5 text-center text-sm font-semibold text-emerald-300 hover:bg-[#1E3A63] transition"
                >
                  <MessageSquare aria-hidden="true" className="h-4 w-4" />
                  WhatsApp ({CONTACT_INFO.phone})
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
