import { motion } from "framer-motion";
import { Globe, Workflow, Bot, Mic, Cog, CheckCircle2, Wrench } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./Services";

const SERVICES = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Modern, responsive websites designed to help businesses build credibility, generate inquiries and make it easier for customers to get in touch.",
    color: "from-cyan-400 to-blue-500",
    slug: "website-development",
    capabilities: [
      "Business Websites",
      "Landing Pages",
      "Contact & RFQ Forms",
      "WhatsApp Integration",
      "Mobile Responsive",
    ],
  },
  {
    icon: Workflow,
    title: "AI Automation",
    desc: "Custom n8n workflows, APIs and system connections that reduce repetitive manual work and connect business tools.",
    color: "from-blue-400 to-indigo-500",
    slug: "ai-automation",
    capabilities: [
      "n8n Automation",
      "Lead Management",
      "Google Sheets",
      "API Integrations",
      "Business Process Automation",
    ],
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    desc: "AI chat assistants for FAQs, customer questions, lead capture and structured business support.",
    color: "from-violet-400 to-fuchsia-500",
    slug: "ai-chatbots",
    capabilities: [
      "Website Chatbots",
      "FAQ Assistants",
      "Lead Capture",
      "AI-powered Responses",
      "API-connected Chatbots",
    ],
  },
  {
    icon: Mic,
    title: "AI Voice Agents",
    desc: "AI calling assistants for customer inquiries, appointment requests, lead qualification and structured business call workflows.",
    color: "from-fuchsia-400 to-rose-500",
    slug: "ai-voice-agents",
    capabilities: [
      "Inbound Call Handling",
      "Customer Inquiries",
      "Appointment Requests",
      "Lead Qualification",
      "Call Automation",
    ],
  },
];

export function HomeServices() {
  return (
    <section id="services" className="content-auto relative pt-12 pb-24 lg:pt-16 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Services"
          title={
            <>
              Solutions Built Around <span className="text-gradient">Your Business</span>
            </>
          }
          subtitle="From professional websites to intelligent automation, we build practical digital solutions designed around real business needs."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/40 via-blue-500/20 to-violet-500/40 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
              <div className="glass relative h-full block overflow-hidden rounded-2xl p-6 transition-transform duration-500 group-hover:-translate-y-1">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
                  style={{ background: "conic-gradient(from 90deg, #22d3ee, #a855f7, #22d3ee)" }}
                />
                <div
                  className={`inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${s.color} shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)]`}
                >
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-1 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 text-cyan-400 shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 relative group"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-violet-500/30 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
          <div className="glass relative rounded-2xl p-6 border border-white/5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-white/10 shrink-0">
                  <Wrench className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">Custom Digital Solutions</h3>
                  <p className="mt-1 text-sm text-muted-foreground max-w-xl">
                    Websites, automation, chatbots and voice AI can be combined into a custom
                    solution based on your specific business workflow.
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
