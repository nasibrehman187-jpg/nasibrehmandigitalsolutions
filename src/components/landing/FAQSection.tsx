import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const FAQ = [
  {
    q: "How much does a website cost?",
    a: "Website packages start from $99 for Starter (3–4 days), $199 for Standard (7–10 days, Most Popular), and $399+ for Premium (12–15 days). Final price depends on project scope, features, and custom requirements.",
  },
  {
    q: "What are your public service starting prices?",
    a: "Our public service starting prices are: Website Development starting from $99, AI Chatbots starting from $150, AI Automation starting from $200, AI Voice Agents starting from $350, and Custom Digital Solutions starting from $500+. Final pricing depends on project scope and technical complexity.",
  },
  {
    q: "How long does website development take?",
    a: "Typical delivery times are 3–4 days for Starter, 7–10 days for Standard, and 12–15 days for Premium, depending on the approved scope and timely availability of required content.",
  },
  {
    q: "Are domain and hosting included?",
    a: "Domain, hosting and other third-party paid services are not included unless specifically mentioned in the quotation.",
  },
  {
    q: "How much does AI automation and chatbot development cost?",
    a: "AI Chatbots start from $150 (Starter) to $550+ (Advanced). AI Automation starts from $200 (Starter) to $750+ (Advanced). Multi-system business automations are quoted based on connected workflows and integrations.",
  },
  {
    q: "What tools do you use for automation?",
    a: "Depending on the project, solutions may use n8n, APIs, webhooks, Google Sheets, AI models and other compatible business tools.",
  },
  {
    q: "Can you build a custom solution?",
    a: "Yes. Websites, voice agents, automation and chatbots can be combined into a custom digital solution starting from $500+. Final pricing depends on project scope.",
  },
  {
    q: "Are AI API and voice calling costs included?",
    a: "Voice Agent and AI package fees cover development and initial setup. Ongoing third-party usage charges (such as telephony minutes, phone number rental, AI model tokens, and speech-to-text / text-to-speech) are billed separately by their respective providers based on actual usage.",
  },
  {
    q: "Are services available remotely?",
    a: "Yes. Digital Solution is available for remote projects, with direct communication with Nasib Rehman via WhatsApp and email throughout every phase.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="content-auto relative pt-20 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          tag="FAQ"
          title={
            <>
              Frequently Asked <span className="text-[#087F8C]">Questions</span>
            </>
          }
          subtitle="Answers to common questions regarding pricing, workflows, integrations, and project delivery."
        />

        {/* Modern Rounded Card Accordion */}
        <div className="mt-14 sm:mt-18 space-y-3.5">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#087F8C]/60 bg-[#FAFCFF] shadow-sm ring-2 ring-[#087F8C]/10"
                    : "border-[#DCE4EC] bg-white hover:border-[#087F8C]/30 hover:shadow-xs"
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C] cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[#142338]">
                    {f.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-full transition-all duration-200 shrink-0 ${
                      isOpen
                        ? "rotate-45 bg-[#087F8C] text-white"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    <Plus aria-hidden="true" className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#526174] leading-relaxed border-t border-slate-100 pt-4">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
