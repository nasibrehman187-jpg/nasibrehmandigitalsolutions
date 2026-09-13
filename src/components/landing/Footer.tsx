import { Mail, MessageSquare, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

const SERVICES_LINKS = [
  { label: "Website Development", to: "/services/website-development" },
  { label: "AI Chatbots", to: "/services/ai-chatbots" },
  { label: "AI Automation", to: "/services/ai-automation" },
  { label: "AI Voice Agents", to: "/services/ai-voice-agents" },
  { label: "Custom Digital Solutions", to: "/services/custom-digital-solutions" },
];

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects & Demos", to: "/projects" },
  { label: "Process", to: "/process" },
  { label: "Pricing", to: "/pricing" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="content-auto relative mt-20 border-t border-white/[0.08] pt-16 bg-[#040612]">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 pb-20 sm:pb-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
              aria-label="Digital Solution — Home"
            >
              <img
                src="/logo-icon.jpg"
                alt="Digital Solution logo mark"
                width={34}
                height={34}
                className="h-8.5 w-8.5 rounded-lg object-cover border border-white/10 opacity-90 transition group-hover:opacity-100"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-semibold">
                  <span className="text-white">Digital</span>{" "}
                  <span className="text-cyan-400">Solution</span>
                </span>
                <span className="text-[10.5px] text-slate-400">by Nasib Rehman</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-xs sm:text-sm text-slate-400 leading-relaxed">
              Engineering practical websites, automations and AI systems for growing businesses.
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Available for remote projects
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-display text-sm font-semibold text-white">Services</div>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-400">
              {SERVICES_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-display text-sm font-semibold text-white">Quick Links</div>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-400">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-display text-sm font-semibold text-white">Direct Contact</div>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://wa.me/923317962794"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400 shrink-0" />
                  WhatsApp (+92 331 7962794)
                </a>
              </li>
              <li>
                <a
                  href="mailto:nasibrehman187@gmail.com"
                  className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                >
                  <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                  nasibrehman187@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                  <MapPin className="h-4 w-4 text-[#818cf8] shrink-0 mt-0.5" />
                  Khairpur, Sindh, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/[0.08] pt-6 text-xs text-slate-400">
          <div className="text-center md:text-left">
            © 2026 Digital Solution by Nasib Rehman. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-3 gap-y-1 text-center md:text-right">
            <span className="text-slate-400 leading-relaxed">
              Website Development • AI Chatbots • AI Automation • AI Voice Agents • Custom Solutions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
