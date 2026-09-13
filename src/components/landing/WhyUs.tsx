import { motion } from "framer-motion";
import { SectionHeader } from "./Services";
import { Lightbulb, Puzzle, Cpu, MessageSquare, ShieldCheck, Laptop } from "lucide-react";

const WHY_CARDS = [
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    desc: "We focus on useful systems designed around real business problems instead of unnecessary complexity.",
    color: "from-[#0f8b8d]/20 to-[#14b8a6]/10 border-[#0f8b8d]/30",
    iconColor: "text-[#14b8a6]",
  },
  {
    icon: Puzzle,
    title: "Custom Engineered",
    desc: "Every website, automation, or AI assistant is adapted to your exact project requirements instead of forcing generic templates.",
    color: "from-[#0f8b8d]/20 to-[#14b8a6]/10 border-[#0f8b8d]/30",
    iconColor: "text-[#14b8a6]",
  },
  {
    icon: Cpu,
    title: "Modern Technology Stack",
    desc: "Solutions combine modern web standards, n8n automation, AI models, APIs, webhooks, and voice assistants.",
    color: "from-[#d6a84b]/20 to-[#997528]/10 border-[#d6a84b]/30",
    iconColor: "text-[#d6a84b]",
  },
  {
    icon: MessageSquare,
    title: "Direct Founder Access",
    desc: "Work directly with Nasib Rehman throughout planning, engineering, review, and launch with zero middlemen.",
    color: "from-[#0f8b8d]/20 to-[#14b8a6]/10 border-[#0f8b8d]/30",
    iconColor: "text-[#14b8a6]",
  },
];

export function WhyUs() {
  return (
    <section className="content-auto relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Why Digital Solution"
          title={
            <>
              Why Choose <span className="text-gradient">Digital Solution?</span>
            </>
          }
          subtitle="A focused, founder-led studio dedicated to engineering practical digital tools that work reliably for your business."
        />

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0f8b8d]/30 bg-[#0f8b8d]/10 px-4 py-1.5 text-[#f7f3e8]">
            <ShieldCheck className="h-4 w-4 text-[#14b8a6] shrink-0" />
            Direct communication with Nasib Rehman • No-obligation project discussion
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d6a84b]/30 bg-[#d6a84b]/10 px-4 py-1.5 text-[#f7f3e8]">
            <Laptop className="h-4 w-4 text-[#d6a84b] shrink-0" />
            Available for remote projects
          </span>
        </div>

        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group"
            >
              <div className="glass relative h-full flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:border-[#14b8a6]/30 hover:-translate-y-1">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#14b8a6]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div>
                  <span
                    className={`inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${card.color} border`}
                  >
                    <card.icon className={`h-5 w-5 ${card.iconColor}`} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-[#f7f3e8]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#a8b0bf]">{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
