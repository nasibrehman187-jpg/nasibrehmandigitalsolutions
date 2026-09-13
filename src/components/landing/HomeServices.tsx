import { motion } from "framer-motion";
import { Globe, Workflow, Bot, Mic, Cog, CheckCircle2, Wrench } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./Services";

const SERVICES = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Modern, responsive websites designed to help businesses build credibility, generate inquiries and make it easier for customers to get in touch.",
    accent: "text-cyan-400",
    iconBg: "from-cyan-500/15 to-blue-500/15 border-cyan-500/20",
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
    icon: Bot,
    title: "AI Chatbots",
    desc: "AI chat assistants for FAQs, customer questions, lead capture and structured business support.",
    accent: "text-cyan-300",
    iconBg: "from-cyan-500/15 to-indigo-500/15 border-cyan-500/20",
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
    icon: Workflow,
    title: "AI Automation",
    desc: "Custom n8n workflows, APIs and system connections that reduce repetitive manual work and connect business tools.",
    accent: "text-blue-400",
    iconBg: "from-blue-500/15 to-indigo-500/15 border-blue-500/20",
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
    icon: Mic,
    title: "AI Voice Agents",
    desc: "AI calling assistants for customer inquiries, appointment requests, lead qualification and structured business call workflows.",
    accent: "text-[#818cf8]",
    iconBg: "from-indigo-500/15 to-[#818cf8]/15 border-[#818cf8]/20",
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
    <section id="services" className="content-auto relative pt-14 pb-20 lg:pt-18 lg:pb-28">
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

        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative"
            >
              <div className="glass relative h-full flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:-translate-y-1">
                {/* Hairline top gradient border on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className={`inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${s.iconBg} border`}
                    >
                      <s.icon className={`h-6 w-6 ${s.accent}`} />
                    </div>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md py-1 px-1.5"
                    >
                      Learn more →
                    </Link>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.06]">
                  <div className="text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-2.5">
                    Core Capabilities
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {s.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="h-3 w-3 text-cyan-400 shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions Full-width Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 relative group"
        >
          <div className="glass relative rounded-2xl p-6 sm:p-8 border border-white/10 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#818cf8]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-[#818cf8]/15 border border-cyan-500/20 shrink-0">
                  <Wrench className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-white">
                    Custom Digital Solutions
                  </h3>
                  <p className="mt-1 text-sm text-slate-400 max-w-2xl leading-relaxed">
                    Websites, automation, chatbots and voice AI can be combined into a custom
                    solution based on your specific business workflow.
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                search={{ service: "Custom Digital Solution" }}
                className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:from-cyan-400 hover:to-blue-500 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
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
