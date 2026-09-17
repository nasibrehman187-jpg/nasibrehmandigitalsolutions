import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { CONTACT_INFO } from "@/lib/contact";

export function FloatingWhatsApp() {
  return (
    <motion.aside
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:bottom-6 sm:right-6 z-40"
      aria-label="Direct WhatsApp Contact"
    >
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp with ${CONTACT_INFO.name} (${CONTACT_INFO.phone})`}
        className="group relative flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-950/20 transition-transform duration-200 hover:scale-105 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      >
        <MessageSquare className="h-5 w-5 sm:h-5.5 sm:w-5.5 fill-white/20 stroke-[2.2]" />

        {/* Floating Tooltip — hidden on touch devices, shown on desktop hover */}
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-3 py-1.5 text-xs font-medium text-[#111827] opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block">
          Chat on WhatsApp • {CONTACT_INFO.phone}
        </span>
      </a>
    </motion.aside>
  );
}
