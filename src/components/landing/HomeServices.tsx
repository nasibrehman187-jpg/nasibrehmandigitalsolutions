import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Bot,
  Workflow,
  Mic,
  Layers,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./Services";
import { getPricingCategoryForService } from "@/lib/pricing-categories";

const SERVICES = [
  {
    num: "01",
    title: "Website Development",
    tagline: "Fast, responsive business websites",
    desc: "Fast, responsive business websites designed to make services clear and make it easier for customers to contact the business through forms, phone or WhatsApp.",
    slug: "website-development",
    priceRange: "Starting at $99",
    icon: Globe,
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
    tagline: "24/7 customer inquiry assistants",
    desc: "Website chat assistants for FAQs, customer questions, lead capture and structured inquiries.",
    slug: "ai-chatbots",
    priceRange: "Starting at $150",
    icon: Bot,
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
    tagline: "Multi-step workflow automation",
    desc: "Automations that connect forms, email, Google Sheets, webhooks and business tools to reduce repetitive manual work.",
    slug: "ai-automation",
    priceRange: "Starting at $200",
    icon: Workflow,
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
    tagline: "Automated phone call handling",
    desc: "Voice assistants designed to handle structured customer calls, collect information and support lead or appointment workflows.",
    slug: "ai-voice-agents",
    priceRange: "Starting at $350",
    icon: Mic,
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
    tagline: "Bespoke web and automated architectures",
    desc: "Combined web and automation solutions tailored to workflows that do not fit a standard package.",
    slug: "custom-digital-solutions",
    priceRange: "From $500+",
    icon: Layers,
    isCustom: true,
    capabilities: [
      "Multi-System Architecture",
      "Combined Web & AI",
      "Custom Workflow Automation",
      "Tailored Integrations",
      "Bespoke Business Logic",
    ],
  },
];

export function HomeServices() {
  return (
    <section
      id="services"
      className="content-auto relative pt-16 pb-16 sm:pt-24 sm:pb-28 bg-[#F6F8FB]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          tag="Services"
          title={
            <>
              Solutions Built Around <span className="text-[#087F8C]">Your Business</span>
            </>
          }
          subtitle="From practical business websites to workflow automations, we build digital solutions engineered around how your business actually works."
        />

        {/* Compact Responsive Service Grid */}
        <div className="mt-8 sm:mt-12 lg:mt-18 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const isFeatured = s.isCustom;

            if (isFeatured) {
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="md:col-span-2 rounded-2xl border border-[#DCE4EC] bg-white p-5 sm:p-7 lg:p-10 shadow-xs hover:border-[#087F8C]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                        <span className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-xl bg-[#E6F5F6] text-[#087F8C] border border-[#087F8C]/20 shadow-2xs">
                          <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                        </span>
                        <span className="rounded-md bg-[#F6F8FB] border border-[#DCE4EC] px-2.5 py-1 text-xs font-mono font-semibold text-[#526174]">
                          SERVICE 0{i + 1}
                        </span>
                        <span className="rounded-md bg-[#E6F5F6] border border-[#087F8C]/20 px-2.5 py-1 text-xs font-semibold text-[#087F8C]">
                          {s.priceRange}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#142338]">
                        {s.title}
                      </h3>

                      <p className="text-base text-[#526174] leading-relaxed">{s.desc}</p>

                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                        <Link
                          to="/contact"
                          search={{ service: "Custom Digital Solutions" }}
                          className="group inline-flex min-h-10 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#087F8C] px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-[#066670] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
                        >
                          <span>Discuss Custom Solution</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                          to="/pricing"
                          search={{ category: getPricingCategoryForService(s.slug) }}
                          className="group inline-flex min-h-10 w-full sm:w-auto items-center justify-center gap-1 text-xs sm:text-sm font-semibold text-[#087F8C] hover:text-[#066670] transition-colors px-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
                        >
                          <span>Compare Packages</span>
                          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-[#FAFCFF] p-4 sm:p-6 space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#142338]">
                        Key Deliverables:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {s.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#DCE4EC] bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-[#142338] shadow-2xs"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#087F8C] shrink-0" />
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col justify-between rounded-2xl border border-[#DCE4EC] bg-white p-5 sm:p-7 lg:p-8 shadow-xs hover:border-[#087F8C]/40 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2">
                      <span className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-xl bg-[#E6F5F6] text-[#087F8C] border border-[#087F8C]/20 shadow-2xs">
                        <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                      </span>
                      <span className="rounded-md bg-[#F6F8FB] border border-[#DCE4EC] px-2.5 py-1 text-xs font-mono font-semibold text-[#526174]">
                        SERVICE 0{i + 1}
                      </span>
                    </div>
                    <span className="rounded-md bg-[#E6F5F6] border border-[#087F8C]/20 px-2.5 py-1 text-xs font-semibold text-[#087F8C]">
                      {s.priceRange}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold tracking-tight text-[#142338]">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-base text-[#526174] leading-relaxed">{s.desc}</p>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#142338] mb-2.5">
                      Key Deliverables:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {s.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[#DCE4EC] bg-[#F6F8FB] px-2.5 py-1 text-xs sm:text-sm font-medium text-[#142338]"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#087F8C] shrink-0" />
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group inline-flex min-h-10 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#087F8C] px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-[#066670] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
                  >
                    <span>View {s.title} Details</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/pricing"
                    search={{ category: getPricingCategoryForService(s.slug) }}
                    className="group inline-flex min-h-10 w-full sm:w-auto items-center justify-center gap-1 text-xs sm:text-sm font-semibold text-[#087F8C] hover:text-[#066670] transition-colors px-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
                  >
                    <span>Compare Packages</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
