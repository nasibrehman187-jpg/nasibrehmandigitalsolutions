import { Mail, MessageSquare, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { CONTACT_INFO } from "@/lib/contact";
import { LEGAL_LINKS } from "@/lib/navigation";
import { BrandLink } from "./BrandLink";

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
    <footer className="content-auto relative mt-20 border-t border-[#E7E1D6] pt-16 bg-[#111827]">
      <div className="mx-auto max-w-7xl px-6 pb-20 sm:pb-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <BrandLink inverted />
            <p className="mt-4 max-w-xs text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              Engineering practical websites, automations and AI systems for growing businesses.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-[#9CA3AF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B38A3D]" />
              <span>Available for remote projects</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-display text-sm font-semibold text-[#F7F3EC]">Services</div>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#9CA3AF]">
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
            <div className="font-display text-sm font-semibold text-[#F7F3EC]">Quick Links</div>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#9CA3AF]">
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
            <div className="font-display text-sm font-semibold text-[#F7F3EC]">Direct Contact</div>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm text-[#9CA3AF] hover:text-[#F7F3EC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6] rounded"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400 shrink-0" />
                  WhatsApp ({CONTACT_INFO.phone})
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2 text-xs sm:text-sm text-[#9CA3AF] hover:text-[#F7F3EC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6] rounded"
                >
                  <Mail className="h-4 w-4 text-[#14B8A6] shrink-0" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-xs sm:text-sm text-[#9CA3AF]">
                  <MapPin className="h-4 w-4 text-[#B38A3D] shrink-0 mt-0.5" />
                  {CONTACT_INFO.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[#9CA3AF]">
          <div className="text-center md:text-left">
            © 2026 Digital Solution by Nasib Rehman. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-1 text-center md:text-right">
            {LEGAL_LINKS.map((item, index) => (
              <span key={item.to} className="inline-flex items-center gap-4">
                {index > 0 && <span className="text-white/20 select-none">•</span>}
                <Link
                  to={item.to}
                  className="hover:text-[#14B8A6] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#14B8A6] rounded"
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
