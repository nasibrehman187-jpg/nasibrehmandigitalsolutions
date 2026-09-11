import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeader } from "./Services";

const FAQ = [
  {
    q: "How much does a website cost?",
    a: "Website packages start from $99 for Starter (3–4 days), $199 for Standard (7–10 days, Most Popular), and $399+ for Premium (12–15 days). Final price depends on project scope, features, and custom requirements.",
  },
  {
    q: "What are your public service starting prices?",
    a: "Our public service starting prices are: Website Development starting from $99, AI Chatbots starting from $150, AI Automation starting from $200, AI Voice Agents starting from $400, and Custom Digital Solutions starting from $500+. Final pricing depends on project scope and technical complexity.",
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
    q: "Do you work with international clients?",
    a: "Yes. Projects are planned and delivered remotely for clients worldwide, with direct communication via WhatsApp and email.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader
          tag="FAQ"
          title={
            <>
              Common <span className="text-gradient">questions</span>
            </>
          }
        />

        <div className="mt-12 space-y-3">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-medium">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/5 border border-white/10"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
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
