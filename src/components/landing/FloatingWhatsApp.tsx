import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { CONTACT_INFO } from "@/lib/contact";

export function FloatingWhatsApp() {
  return (
    <motion.aside
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-40"
      aria-label="Direct WhatsApp Contact"
    >
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp with ${CONTACT_INFO.name} (${CONTACT_INFO.phone})`}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white shadow-[0_4px_24px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_32px_rgba(16,185,129,0.7)]"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-500 opacity-25" />
        <MessageSquare className="h-6 w-6 fill-white/20 stroke-[2.2]" />

        {/* Floating Tooltip */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-xl border border-white/10 bg-black/90 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-xl backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100">
          Chat on WhatsApp • {CONTACT_INFO.phone}
        </span>
      </a>
    </motion.aside>
  );
}
