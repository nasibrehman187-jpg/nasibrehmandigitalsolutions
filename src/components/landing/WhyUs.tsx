import { motion } from "framer-motion";
import { SectionHeader } from "./Services";
import { Lightbulb, Puzzle, Cpu, MessageSquare, ShieldCheck, Laptop } from "lucide-react";

const WHY_CARDS = [
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    desc: "We focus on useful systems designed around real business problems instead of unnecessary complexity.",
    iconColor: "text-[#0f766e]",
  },
  {
    icon: Puzzle,
    title: "Custom Engineered",
    desc: "Every website, automation, or AI assistant is adapted to your exact project requirements instead of forcing generic templates.",
    iconColor: "text-[#0f766e]",
  },
  {
    icon: Cpu,
    title: "Modern Technology Stack",
    desc: "Solutions combine modern web standards, n8n automation, AI models, APIs, webhooks, and voice assistants.",
    iconColor: "text-[#b38a3d]",
  },
  {
    icon: MessageSquare,
    title: "Direct Founder Access",
    desc: "Work directly with Nasib Rehman throughout planning, engineering, review, and launch with zero middlemen.",
    iconColor: "text-[#0f766e]",
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
              Why Choose <span className="text-[#0f766e]">Digital Solution?</span>
            </>
          }
          subtitle="A focused, founder-led studio dedicated to engineering practical digital tools that work reliably for your business."
        />

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e7e1d6] bg-[#ffffff] px-4 py-1.5 text-xs text-[#111827] shadow-xs">
            <ShieldCheck className="h-4 w-4 text-[#0f766e] shrink-0" />
            Direct communication with Nasib Rehman • No-obligation project discussion
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e7e1d6] bg-[#ffffff] px-4 py-1.5 text-xs text-[#111827] shadow-xs">
            <Laptop className="h-4 w-4 text-[#b38a3d] shrink-0" />
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
              <div className="relative h-full flex flex-col justify-between rounded-2xl p-6 border border-[#e7e1d6] bg-[#ffffff] shadow-xs transition-all duration-300 hover:border-[#0f766e]/40 hover:-translate-y-0.5 hover:shadow-sm">
                <div>
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#f3eee6] border border-[#e7e1d6]">
                    <card.icon className={`h-5 w-5 ${card.iconColor}`} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-[#111827]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5b6472]">{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
