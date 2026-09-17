import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Bot,
  Workflow,
  Mic,
  Layers,
  CheckCircle2,
  Lock,
  MessageSquare,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./Services";

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
      className="content-auto relative pt-20 pb-20 sm:pt-24 sm:pb-28 bg-[#F6F8FB]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Services"
          title={
            <>
              Solutions Built Around <span className="text-[#087F8C]">Your Business</span>
            </>
          }
          subtitle="From practical business websites to workflow automations, we build digital solutions engineered around how your business actually works."
        />

        {/* Distinctive Service Feature Stack */}
        <div className="mt-14 sm:mt-18 space-y-8">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-[#DCE4EC] bg-white p-6 sm:p-8 lg:p-10 shadow-xs hover:border-[#087F8C]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Narrative & Deliverables */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#E6F5F6] text-[#087F8C] border border-[#087F8C]/20 shadow-2xs">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-md bg-[#F6F8FB] border border-[#DCE4EC] px-2.5 py-0.5 text-xs font-mono font-semibold text-[#526174]">
                        SERVICE 0{i + 1}
                      </span>
                      <span className="rounded-md bg-[#E6F5F6] border border-[#087F8C]/20 px-2.5 py-0.5 text-xs font-semibold text-[#087F8C]">
                        {s.priceRange}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#142338]">
                      {s.title}
                    </h3>

                    <p className="text-base text-[#526174] leading-relaxed">{s.desc}</p>

                    {/* Capabilities Tags */}
                    <div className="pt-2">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#142338] mb-2.5">
                        Key Deliverables:
                      </div>
                      <div className="flex flex-wrap gap-x-2.5 gap-y-2.5">
                        {s.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#DCE4EC] bg-[#F6F8FB] px-3 py-1 text-sm font-medium text-[#142338]"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#087F8C]" />
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Links */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        to={s.isCustom ? "/contact" : "/services/$slug"}
                        params={s.isCustom ? undefined : { slug: s.slug }}
                        search={s.isCustom ? { service: "Custom Digital Solutions" } : undefined}
                        className="group inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[#087F8C] px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-[#066670] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
                      >
                        <span>
                          {s.isCustom ? "Discuss Custom Solution" : `View ${s.title} Details`}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <Link
                        to="/pricing"
                        className="group inline-flex min-h-10 items-center justify-center gap-1 text-xs sm:text-sm font-semibold text-[#087F8C] hover:text-[#066670] transition-colors px-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
                      >
                        <span>Compare Packages</span>
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Distinctive Interface Visual */}
                  <div className="lg:col-span-5">
                    {/* Visual 1: Website Development */}
                    {s.slug === "website-development" && (
                      <div className="rounded-xl border border-[#DCE4EC] bg-[#F6F8FB] p-4 shadow-2xs">
                        <div className="flex items-center justify-between border-b border-[#DCE4EC] pb-2 text-xs text-[#526174]">
                          <div className="flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-red-400" />
                            <span className="h-2 w-2 rounded-full bg-amber-400" />
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                          </div>
                          <span className="font-mono text-xs">yourbusiness.com</span>
                          <span className="text-xs text-[#087F8C]">Mobile-Ready</span>
                        </div>
                        <div className="mt-3 space-y-2.5 bg-white rounded-lg p-3 border border-[#DCE4EC]">
                          <div className="h-3 w-1/3 bg-[#087F8C]/20 rounded" />
                          <div className="h-5 w-4/5 bg-[#142338]/10 rounded font-semibold text-xs flex items-center px-2 text-[#142338]">
                            Modern Service Showcase
                          </div>
                          <div className="grid grid-cols-3 gap-1.5 pt-1">
                            <div className="h-10 bg-[#F6F8FB] rounded border border-[#DCE4EC] flex flex-col justify-center px-2">
                              <div className="h-2 w-10 bg-[#087F8C]/40 rounded" />
                              <div className="h-1.5 w-6 bg-[#142338]/20 rounded mt-1" />
                            </div>
                            <div className="h-10 bg-[#F6F8FB] rounded border border-[#DCE4EC] flex flex-col justify-center px-2">
                              <div className="h-2 w-10 bg-[#087F8C]/40 rounded" />
                              <div className="h-1.5 w-6 bg-[#142338]/20 rounded mt-1" />
                            </div>
                            <div className="h-10 bg-[#F6F8FB] rounded border border-[#DCE4EC] flex flex-col justify-center px-2">
                              <div className="h-2 w-10 bg-[#087F8C]/40 rounded" />
                              <div className="h-1.5 w-6 bg-[#142338]/20 rounded mt-1" />
                            </div>
                          </div>
                          <div className="flex justify-between items-center pt-1 border-t border-[#DCE4EC] text-xs text-[#526174]">
                            <span>Contact & RFQ Form</span>
                            <span className="text-[#087F8C] font-medium">WhatsApp Sync</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 2: AI Chatbots */}
                    {s.slug === "ai-chatbots" && (
                      <div className="rounded-xl border border-[#DCE4EC] bg-[#F6F8FB] p-4 shadow-2xs">
                        <div className="flex items-center justify-between border-b border-[#DCE4EC] pb-2 text-xs text-[#526174]">
                          <div className="flex items-center gap-1.5">
                            <Bot className="h-3.5 w-3.5 text-[#087F8C]" />
                            <span className="font-semibold text-[#142338]">
                              Business Knowledge Assistant
                            </span>
                          </div>
                          <span className="text-[#087F8C] font-mono text-xs font-semibold">
                            ● Active
                          </span>
                        </div>
                        <div className="mt-3 space-y-2 text-xs">
                          <div className="rounded-lg bg-white border border-[#DCE4EC] p-2.5 max-w-[85%] text-[#142338] shadow-2xs">
                            <span className="text-xs text-[#526174] block font-medium">
                              Website Visitor
                            </span>
                            "What are your working hours and prices for standard websites?"
                          </div>
                          <div className="rounded-lg bg-[#E6F5F6] border border-[#087F8C]/30 p-2.5 ml-auto max-w-[85%] text-[#142338] shadow-2xs">
                            <span className="text-xs text-[#087F8C] block font-semibold">
                              AI Assistant
                            </span>
                            "We build standard websites for $199 with a 7–10 day turnaround. Would
                            you like to connect with Nasib Rehman directly?"
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 3: AI Automation */}
                    {s.slug === "ai-automation" && (
                      <div className="rounded-xl border border-[#DCE4EC] bg-[#F6F8FB] p-4 shadow-2xs">
                        <div className="flex items-center justify-between border-b border-[#DCE4EC] pb-2 text-xs text-[#526174]">
                          <div className="flex items-center gap-1.5">
                            <Workflow className="h-3.5 w-3.5 text-[#087F8C]" />
                            <span className="font-semibold text-[#142338]">
                              n8n Workflow Execution
                            </span>
                          </div>
                          <span className="text-[#087F8C] font-mono text-xs">Success 100%</span>
                        </div>
                        <div className="mt-3 space-y-2 text-xs">
                          <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#DCE4EC] shadow-2xs">
                            <span className="text-[#142338] font-medium">
                              1. Form Submission Received
                            </span>
                            <span className="text-[#087F8C] font-mono text-xs">Triggered</span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#DCE4EC] shadow-2xs">
                            <span className="text-[#142338] font-medium">
                              2. Google Sheets & CRM Row Created
                            </span>
                            <span className="text-[#087F8C] font-mono text-xs">Logged</span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-[#E6F5F6] border border-[#087F8C]/30 shadow-2xs">
                            <span className="text-[#087F8C] font-semibold">
                              3. WhatsApp Notification to Founder
                            </span>
                            <span className="text-[#087F8C] font-mono text-xs">Delivered</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 4: AI Voice Agents */}
                    {s.slug === "ai-voice-agents" && (
                      <div className="rounded-xl border border-[#DCE4EC] bg-[#F6F8FB] p-4 shadow-2xs">
                        <div className="flex items-center justify-between border-b border-[#DCE4EC] pb-2 text-xs text-[#526174]">
                          <div className="flex items-center gap-1.5">
                            <Mic className="h-3.5 w-3.5 text-[#087F8C]" />
                            <span className="font-semibold text-[#142338]">
                              Inbound Call Handler
                            </span>
                          </div>
                          <span className="text-[#087F8C] font-mono text-xs">00:42 In Call</span>
                        </div>
                        <div className="mt-3 space-y-2 bg-white rounded-lg p-3 border border-[#DCE4EC]">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[#526174]">Speech-to-Text / LLM Engine</span>
                            <span className="font-mono text-xs text-[#087F8C]">
                              Ultra-low latency
                            </span>
                          </div>
                          <div className="flex items-center gap-1 h-5 pt-1">
                            <span className="w-1.5 h-3 bg-[#087F8C] rounded-full" />
                            <span className="w-1.5 h-5 bg-[#087F8C] rounded-full" />
                            <span className="w-1.5 h-2 bg-[#087F8C] rounded-full" />
                            <span className="w-1.5 h-4 bg-[#087F8C] rounded-full" />
                            <span className="w-1.5 h-3 bg-[#087F8C] rounded-full" />
                            <span className="w-1.5 h-4.5 bg-[#087F8C] rounded-full" />
                            <span className="w-1.5 h-2 bg-[#087F8C] rounded-full" />
                            <span className="text-xs text-[#526174] ml-2 font-mono">
                              Voice Audio Stream
                            </span>
                          </div>
                          <div className="pt-2 border-t border-[#DCE4EC] flex justify-between text-xs text-[#526174]">
                            <span>Lead Qualification</span>
                            <span className="text-[#087F8C] font-semibold">
                              Appointment Scheduled
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 5: Custom Digital Solutions */}
                    {s.slug === "custom-digital-solutions" && (
                      <div className="rounded-xl border border-[#DCE4EC] bg-[#F6F8FB] p-4 shadow-2xs">
                        <div className="flex items-center justify-between border-b border-[#DCE4EC] pb-2 text-xs text-[#526174]">
                          <div className="flex items-center gap-1.5">
                            <Layers className="h-3.5 w-3.5 text-[#087F8C]" />
                            <span className="font-semibold text-[#142338]">
                              Bespoke Architecture
                            </span>
                          </div>
                          <span className="text-[#087F8C] font-mono text-xs">Tailored</span>
                        </div>
                        <div className="mt-3 space-y-2 text-xs">
                          <div className="p-2 rounded-lg bg-white border border-[#DCE4EC] text-[#142338] shadow-2xs flex justify-between items-center">
                            <span>Web App Frontend (TypeScript + React)</span>
                            <span className="text-xs text-[#087F8C] font-mono">Layer 1</span>
                          </div>
                          <div className="p-2 rounded-lg bg-white border border-[#DCE4EC] text-[#142338] shadow-2xs flex justify-between items-center">
                            <span>Automations, APIs & Webhooks Engine</span>
                            <span className="text-xs text-[#087F8C] font-mono">Layer 2</span>
                          </div>
                          <div className="p-2 rounded-lg bg-[#E6F5F6] border border-[#087F8C]/30 text-[#142338] shadow-2xs flex justify-between items-center">
                            <span className="font-semibold text-[#087F8C]">
                              AI Agents + Business Database Sync
                            </span>
                            <span className="text-xs text-[#087F8C] font-mono font-bold">
                              Layer 3
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
