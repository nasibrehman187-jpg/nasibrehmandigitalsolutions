import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./Services";

const SERVICES = [
  {
    num: "01",
    title: "Website Development",
    desc: "Modern, responsive websites designed to help businesses build credibility, generate inquiries and make it easier for customers to get in touch.",
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
    num: "02",
    title: "AI Chatbots",
    desc: "AI chat assistants for FAQs, customer questions, lead capture and structured business support.",
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
    num: "03",
    title: "AI Automation",
    desc: "Custom n8n workflows, APIs and system connections that reduce repetitive manual work and connect business tools.",
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
    num: "04",
    title: "AI Voice Agents",
    desc: "AI calling assistants for customer inquiries, appointment requests, lead qualification and structured business call workflows.",
    slug: "ai-voice-agents",
    capabilities: [
      "Inbound Call Handling",
      "Customer Inquiries",
      "Appointment Requests",
      "Lead Qualification",
      "Call Automation",
    ],
  },
  {
    num: "05",
    title: "Custom Digital Solutions",
    desc: "Websites, automation, chatbots and voice AI can be combined into a custom solution based on your specific business workflow.",
    slug: "custom-digital-solutions",
    capabilities: [
      "Multi-System Architecture",
      "Combined Web & AI",
      "Custom Workflow Automation",
      "Tailored Integrations",
      "Bespoke Business Logic",
    ],
    isCustom: true,
  },
];

export function HomeServices() {
  return (
    <section id="services" className="content-auto relative pt-12 pb-20 sm:pt-16 sm:pb-28">
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

        {/* Editorial Numbered Rows */}
        <div className="mt-14 sm:mt-18 border-t border-[#e7e1d6]">
          {SERVICES.map((s) => (
            <div
              key={s.slug}
              className="group border-b border-[#e7e1d6] py-8 sm:py-10 transition-colors duration-200 hover:bg-[#fffdfc]/60"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
                {/* Numeral */}
                <div className="lg:col-span-1 text-sm sm:text-base font-medium text-[#111827]/50">
                  {s.num}
                </div>

                {/* Service Title */}
                <div className="lg:col-span-4">
                  <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#111827] group-hover:text-[#0f766e] transition-colors">
                    {s.title}
                  </h3>
                </div>

                {/* Description & Inline Capabilities */}
                <div className="lg:col-span-5">
                  <p className="text-sm sm:text-base text-[#5b6472] leading-relaxed">{s.desc}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-[#5b6472]">
                    <span className="text-[10.5px] uppercase tracking-wider text-[#111827] font-semibold">
                      INCLUDES:
                    </span>
                    {s.capabilities.map((cap, ci) => (
                      <span key={cap} className="inline-flex items-center">
                        <span className="font-medium text-[#111827]">{cap}</span>
                        {ci < s.capabilities.length - 1 && (
                          <span className="ml-2.5 text-[#e7e1d6] select-none">•</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <div className="lg:col-span-2 lg:text-right flex items-center lg:justify-end pt-2 lg:pt-1">
                  <Link
                    to={s.isCustom ? "/contact" : "/services/$slug"}
                    params={s.isCustom ? undefined : { slug: s.slug }}
                    search={s.isCustom ? { service: "Custom Digital Solution" } : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f766e] group-hover:text-[#0d9488] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e] rounded py-1 px-1.5"
                  >
                    <span>{s.isCustom ? "Discuss Project" : "Learn more"}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
