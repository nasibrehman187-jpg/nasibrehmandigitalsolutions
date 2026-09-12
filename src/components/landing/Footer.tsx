import { Mail, MessageSquare, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

const SERVICES_LINKS = [
  { label: "Website Development", to: "/services/website-development" },
  { label: "AI Automation", to: "/services/ai-automation" },
  { label: "AI Chatbots", to: "/services/ai-chatbots" },
  { label: "AI Voice Agents", to: "/services/ai-voice-agents" },
];

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Process", to: "/process" },
  { label: "Pricing", to: "/pricing" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5 pt-16">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-gradient" />
      <div className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="group flex items-center gap-2.5"
              aria-label="Digital Solution — Home"
            >
              <img
                src="/logo-icon.jpg"
                alt="Digital Solution logo mark"
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg object-cover opacity-90 transition group-hover:opacity-100"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-semibold">
                  <span className="text-foreground">Digital</span>{" "}
                  <span className="text-[#087E8B]">Solution</span>
                </span>
                <span className="text-[10px] text-muted-foreground">by Nasib Rehman</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Websites, automation and AI solutions for modern businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="font-display text-sm font-semibold">Services</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {SERVICES_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-display text-sm font-semibold">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-display text-sm font-semibold">Contact</div>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://wa.me/923317962794"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400 shrink-0" />
                  WhatsApp (+92 331 7962794)
                </a>
              </li>
              <li>
                <a
                  href="mailto:nasibrehman187@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                  nasibrehman187@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-violet-400 shrink-0 mt-0.5" />
                  Khairpur, Sindh, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground">
          <div>© 2026 Digital Solution by Nasib Rehman. All rights reserved.</div>
          <div className="flex gap-6">
            <span className="text-muted-foreground/50">
              Website Development • AI Automation • AI Chatbots • AI Voice Agents
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
