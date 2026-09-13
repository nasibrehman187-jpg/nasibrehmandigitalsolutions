import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { CONTACT_INFO } from "@/lib/contact";

export function FloatingWhatsApp() {
  return (
    <motion.aside
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-40"
      aria-label="Direct WhatsApp Contact"
    >
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp with ${CONTACT_INFO.name} (${CONTACT_INFO.phone})`}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white shadow-lg shadow-emerald-950/40 transition-transform duration-200 hover:scale-105"
      >
        <span className="absolute -inset-1 -z-10 rounded-full bg-emerald-500/20 blur-sm" />
        <MessageSquare className="h-6 w-6 fill-white/20 stroke-[2.2]" />

        {/* Floating Tooltip */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-xl border border-white/10 bg-[#070c1e] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100">
          Chat on WhatsApp • {CONTACT_INFO.phone}
        </span>
      </a>
    </motion.aside>
  );
}
