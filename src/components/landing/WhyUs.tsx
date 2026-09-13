import { motion } from "framer-motion";
import { SectionHeader } from "./Services";
import { Lightbulb, Puzzle, Cpu, MessageSquare } from "lucide-react";

const WHY_CARDS = [
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    desc: "We focus on useful systems designed around real business problems instead of unnecessary complexity.",
    color: "from-cyan-400/20 to-blue-500/20",
    iconColor: "text-cyan-300",
  },
  {
    icon: Puzzle,
    title: "Custom Built",
    desc: "Every website or automation is adapted to the project requirements instead of forcing every business into the same solution.",
    color: "from-blue-400/20 to-indigo-500/20",
    iconColor: "text-blue-300",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    desc: "Solutions can combine modern web technologies, n8n automation, AI models, APIs, webhooks and voice AI.",
    color: "from-violet-400/20 to-fuchsia-500/20",
    iconColor: "text-violet-300",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    desc: "Work directly with the developer throughout planning, development, review and launch.",
    color: "from-fuchsia-400/20 to-rose-500/20",
    iconColor: "text-fuchsia-300",
  },
];

export function WhyUs() {
  return (
    <section className="content-auto relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Why Digital Solution"
          title={
            <>
              Why <span className="text-gradient">Digital Solution?</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <div className="glass relative h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span
                  className={`inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${card.color} border border-white/10`}
                >
                  <card.icon className={`h-5 w-5 ${card.iconColor}`} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
