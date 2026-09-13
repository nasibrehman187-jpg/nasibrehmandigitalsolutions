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
    <footer className="content-auto relative mt-20 border-t border-[rgba(247,243,232,0.06)] pt-16 bg-[#070D17]">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0F8B8D]/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 pb-20 sm:pb-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6] rounded-lg"
              aria-label="Digital Solution — Home"
            >
              <img
                src="/logo-icon.png"
                alt="Digital Solution logo mark"
                width={34}
                height={34}
                className="h-8.5 w-8.5 rounded-lg object-cover border border-[rgba(247,243,232,0.1)] opacity-90 transition group-hover:opacity-100"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-semibold">
                  <span className="text-[#F7F3E8]">Digital</span>{" "}
                  <span className="text-[#14B8A6]">Solution</span>
                </span>
                <span className="text-[10.5px] text-[#A8B0BF]">by Nasib Rehman</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-xs sm:text-sm text-[#A8B0BF] leading-relaxed">
              Engineering practical websites, automations and AI systems for growing businesses.
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[rgba(247,243,232,0.1)] bg-white/[0.02] px-3 py-1 text-[11px] text-[#A8B0BF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D6A84B]" />
              Available for remote projects
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-display text-sm font-semibold text-[#F7F3E8]">Services</div>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#A8B0BF]">
              {SERVICES_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-[#14B8A6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6] rounded"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-display text-sm font-semibold text-[#F7F3E8]">Quick Links</div>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#A8B0BF]">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-[#14B8A6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6] rounded"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-display text-sm font-semibold text-[#F7F3E8]">Direct Contact</div>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://wa.me/923317962794"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm text-[#A8B0BF] hover:text-[#F7F3E8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6] rounded"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400 shrink-0" />
                  WhatsApp (+92 331 7962794)
                </a>
              </li>
              <li>
                <a
                  href="mailto:nasibrehman187@gmail.com"
                  className="flex items-center gap-2 text-xs sm:text-sm text-[#A8B0BF] hover:text-[#F7F3E8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6] rounded"
                >
                  <Mail className="h-4 w-4 text-[#14B8A6] shrink-0" />
                  nasibrehman187@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-xs sm:text-sm text-[#A8B0BF]">
                  <MapPin className="h-4 w-4 text-[#D6A84B] shrink-0 mt-0.5" />
                  Khairpur, Sindh, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[rgba(247,243,232,0.06)] pt-6 text-xs text-[#A8B0BF]">
          <div className="text-center md:text-left">
            © 2026 Digital Solution by Nasib Rehman. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-1 text-center md:text-right">
            <Link
              to="/privacy"
              className="hover:text-[#14B8A6] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#14B8A6] rounded"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link
              to="/terms"
              className="hover:text-[#14B8A6] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#14B8A6] rounded"
            >
              Terms of Service
            </Link>
            <span className="text-white/20">•</span>
            <Link
              to="/disclaimer"
              className="hover:text-[#14B8A6] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#14B8A6] rounded"
            >
              Disclaimer
            </Link>
            <span className="text-white/20">•</span>
            <Link
              to="/accessibility"
              className="hover:text-[#14B8A6] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#14B8A6] rounded"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
