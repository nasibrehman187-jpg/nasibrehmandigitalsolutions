import { motion } from "framer-motion";
import { Globe, Workflow, Bot, Mic, Cog, CheckCircle2, Wrench } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./Services";

const SERVICES = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Modern, responsive websites designed to help businesses build credibility, generate inquiries and make it easier for customers to get in touch.",
    accent: "text-[#14b8a6]",
    iconBg: "from-[#0f8b8d]/20 to-[#14b8a6]/10 border-[#0f8b8d]/30",
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
    accent: "text-[#14b8a6]",
    iconBg: "from-[#0f8b8d]/20 to-[#2dd4bf]/10 border-[#0f8b8d]/30",
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
    accent: "text-[#14b8a6]",
    iconBg: "from-[#0f8b8d]/20 to-[#14b8a6]/10 border-[#0f8b8d]/30",
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
    accent: "text-[#d6a84b]",
    iconBg: "from-[#d6a84b]/20 to-[#997528]/10 border-[#d6a84b]/30",
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
    <section id="services" className="content-auto relative pt-8 pb-18 sm:pt-10 lg:pt-12 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Services"
          title={
            <>
              Solutions Built Around <span className="text-[#0f766e]">Your Business</span>
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
              <div className="relative h-full flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-7 border border-[#e7e1d6] bg-[#ffffff] shadow-xs transition-all duration-300 hover:border-[#0f766e]/40 hover:-translate-y-0.5 hover:shadow-sm">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#f3eee6] text-[#0f766e] border border-[#e7e1d6]">
                      <s.icon className="h-6 w-6 text-[#0f766e]" />
                    </div>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0f766e] hover:text-[#0d9488] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e] rounded-md py-1 px-2.5 bg-[#f3eee6] hover:bg-[#e7e1d6]/60 border border-[#e7e1d6]"
                    >
                      Learn more →
                    </Link>
                  </div>

                  <h3 className="mt-5 font-display text-xl sm:text-2xl font-bold tracking-tight text-[#111827]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5b6472]">{s.desc}</p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#e7e1d6]">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#5b6472] mb-2.5">
                    Core Capabilities
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {s.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#e7e1d6] bg-[#f3eee6]/70 px-2.5 py-1 text-xs font-medium text-[#111827]"
                      >
                        <CheckCircle2 className="h-3 w-3 text-[#0f766e] shrink-0" />
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
          <div className="relative rounded-2xl p-6 sm:p-8 border border-[#e7e1d6] bg-[#ffffff] shadow-xs overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#f3eee6] text-[#b38a3d] border border-[#e7e1d6] shrink-0">
                  <Wrench className="h-6 w-6 text-[#b38a3d]" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-[#111827]">
                    Custom Digital Solutions
                  </h3>
                  <p className="mt-1 text-sm text-[#5b6472] max-w-2xl leading-relaxed">
                    Websites, automation, chatbots and voice AI can be combined into a custom
                    solution based on your specific business workflow.
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                search={{ service: "Custom Digital Solution" }}
                className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-[#0f766e] px-5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#0d9488] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e]"
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
