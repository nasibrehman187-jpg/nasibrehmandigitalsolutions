import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Globe,
  Mic,
  Bot,
  Workflow,
  Layers,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./Services";
import { Link } from "@tanstack/react-router";

type ServiceTab = "websites" | "voice-agents" | "chatbots" | "automation" | "custom";

interface Plan {
  name: string;
  price: string;
  per: string;
  delivery: string;
  highlight?: boolean;
  badge?: string | null;
  description: string;
  features: string[];
  cta: string;
  serviceParam: string;
}

const WEBSITE_PLANS: Plan[] = [
  {
    name: "Starter",
    price: "$99",
    per: "One-Time",
    delivery: "3–4 Days",
    highlight: false,
    badge: null,
    description:
      "Perfect for individuals and small businesses that need a simple professional online presence.",
    features: [
      "1–3 Page Website",
      "Landing Page, Portfolio, or Simple Business Site",
      "Mobile Responsive Design",
      "Clean Professional Layout",
      "Contact Information Integration",
      "1 Revision Round",
    ],
    cta: "Choose Starter",
    serviceParam: "Website Development — Starter — $99",
  },
  {
    name: "Standard",
    price: "$199",
    per: "One-Time",
    delivery: "7–10 Days",
    highlight: true,
    badge: "Most Popular",
    description: "A complete business website with more pages and customer contact functionality.",
    features: [
      "5–7 Page Website",
      "Custom Design",
      "Mobile Responsive Design",
      "Contact / RFQ Form",
      "WhatsApp Integration",
      "2 Revision Rounds",
    ],
    cta: "Choose Standard",
    serviceParam: "Website Development — Standard — $199",
  },
  {
    name: "Premium",
    price: "$399+",
    per: "One-Time",
    delivery: "12–15 Days",
    highlight: false,
    badge: null,
    description: "For businesses that need a more customized and visually advanced website.",
    features: [
      "Full Custom Website",
      "Custom Animations",
      "Multi-Section / Multi-Page Layout",
      "Custom Data Structure",
      "Mobile Responsive Design",
      "Priority Delivery",
      "3 Revision Rounds",
    ],
    cta: "Request Premium",
    serviceParam: "Website Development — Premium — $399+",
  },
];

const VOICE_AGENT_PLANS: Plan[] = [
  {
    name: "Starter Voice Agent",
    price: "$350",
    per: "One-Time",
    delivery: "5–7 Days",
    highlight: false,
    badge: null,
    description:
      "A focused inbound AI voice assistant for handling structured customer conversations.",
    features: [
      "1 AI Voice Agent",
      "Custom System Prompt",
      "Business Knowledge Setup",
      "Inbound Call Flow",
      "Customer Inquiry Handling",
      "Basic Lead Information Collection",
      "Testing & Setup",
      "1 Revision Round",
    ],
    cta: "Choose Starter Voice Agent",
    serviceParam: "AI Voice Agent — Starter — $350",
  },
  {
    name: "Standard Voice Agent",
    price: "$500",
    per: "One-Time",
    delivery: "8–12 Days",
    highlight: true,
    badge: "Most Popular",
    description:
      "A more capable AI calling solution for businesses that need structured lead, appointment or customer workflows.",
    features: [
      "Custom AI Voice Agent",
      "Custom Conversation Flows",
      "Business Knowledge Setup",
      "Appointment / Lead Collection",
      "Structured Call Logic",
      "n8n Automation Integration",
      "API / Webhook Connection",
      "Testing & Optimization",
      "2 Revision Rounds",
    ],
    cta: "Choose Standard Voice Agent",
    serviceParam: "AI Voice Agent — Standard — $500",
  },
  {
    name: "Premium Voice Agent",
    price: "$900+",
    per: "One-Time",
    delivery: "14–20 Days",
    highlight: false,
    badge: null,
    description:
      "For advanced business calling workflows requiring custom logic, integrations and multiple conversation scenarios.",
    features: [
      "Advanced AI Voice Agent",
      "Multiple Call Scenarios",
      "Advanced Conversation Logic",
      "Lead Qualification",
      "Appointment Workflows",
      "Custom Function Calling",
      "n8n Automation Integration",
      "API / Webhook Integrations",
      "Advanced Business Logic",
      "Testing & Optimization",
      "3 Revision Rounds",
    ],
    cta: "Request Premium Voice Agent",
    serviceParam: "AI Voice Agent — Premium — $900+",
  },
];

const CHATBOT_PLANS: Plan[] = [
  {
    name: "Starter Chatbot",
    price: "$150",
    per: "One-Time Setup",
    delivery: "3–5 Days",
    highlight: false,
    badge: null,
    description:
      "A focused AI chat assistant for answering common questions and capturing visitor leads.",
    features: [
      "1 AI Chatbot",
      "Custom System Prompt",
      "Business Knowledge & FAQ Setup",
      "Website Widget Integration",
      "Lead Information Capture",
      "Testing & Setup",
      "1 Revision Round",
    ],
    cta: "Choose Starter Chatbot",
    serviceParam: "AI Chatbot — Starter — $150",
  },
  {
    name: "Business Chatbot",
    price: "$300",
    per: "One-Time Setup",
    delivery: "7–10 Days",
    highlight: true,
    badge: "Most Popular",
    description:
      "A structured chat assistant connected to business tools for automated lead handling and FAQs.",
    features: [
      "Custom AI Chatbot",
      "Custom Conversation Flows",
      "Business Knowledge & FAQ Setup",
      "Lead Capture & Notification",
      "Webhook / Google Sheets Integration",
      "Testing & Optimization",
      "2 Revision Rounds",
    ],
    cta: "Choose Business Chatbot",
    serviceParam: "AI Chatbot — Business — $300",
  },
  {
    name: "Advanced Chatbot",
    price: "$550+",
    per: "One-Time Setup",
    delivery: "12–15 Days",
    highlight: false,
    badge: null,
    description:
      "For businesses that require complex conversational flows, database connections and custom logic.",
    features: [
      "Advanced AI Chatbot",
      "Multiple Conversation Scenarios",
      "Dynamic API / Database Integration",
      "Custom Business Logic",
      "Lead Qualification Workflows",
      "Testing & Optimization",
      "3 Revision Rounds",
    ],
    cta: "Request Advanced Chatbot",
    serviceParam: "AI Chatbot — Advanced — $550+",
  },
];

const AUTOMATION_PLANS: Plan[] = [
  {
    name: "Starter Automation",
    price: "$200",
    per: "One-Time Setup",
    delivery: "3–5 Days",
    highlight: false,
    badge: null,
    description:
      "A single essential workflow automation to connect tools and eliminate manual data entry.",
    features: [
      "1 Core Workflow",
      "n8n Automation Setup",
      "Google Sheets / Email Integration",
      "Form Submission Workflow",
      "Testing & Handover",
      "1 Revision Round",
    ],
    cta: "Choose Starter Automation",
    serviceParam: "AI Automation — Starter — $200",
  },
  {
    name: "Business Automation",
    price: "$400",
    per: "One-Time Setup",
    delivery: "7–10 Days",
    highlight: true,
    badge: "Most Popular",
    description:
      "Multi-step automated workflows to manage leads, notifications and system synchronizations.",
    features: [
      "Up to 3 Connected Workflows",
      "Multi-Step Automation (n8n)",
      "CRM / Lead Management Connection",
      "Webhooks & API Integration",
      "Error Handling & Notification",
      "2 Revision Rounds",
    ],
    cta: "Choose Business Automation",
    serviceParam: "AI Automation — Business — $400",
  },
  {
    name: "Advanced Automation",
    price: "$750+",
    per: "One-Time Setup",
    delivery: "12–15 Days",
    highlight: false,
    badge: null,
    description:
      "For complex multi-system automations combining AI logic, custom webhooks and business databases.",
    features: [
      "Custom Multi-System Automation",
      "Complex Business Process Automation",
      "Custom Webhooks & API Orchestration",
      "AI Agent / LLM Integration",
      "Multi-Step Logic & Database Sync",
      "3 Revision Rounds",
    ],
    cta: "Request Advanced Automation",
    serviceParam: "AI Automation — Advanced — $750+",
  },
];

const TABS: {
  id: ServiceTab;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  priceRange: string;
}[] = [
  { id: "websites", label: "Website Development", icon: Globe, priceRange: "$99 – $399+" },
  { id: "chatbots", label: "AI Chatbots", icon: Bot, priceRange: "$150 – $550+" },
  { id: "automation", label: "AI Automation", icon: Workflow, priceRange: "$200 – $750+" },
  { id: "voice-agents", label: "AI Voice Agents", icon: Mic, priceRange: "$350 – $900+" },
  { id: "custom", label: "Custom Solutions", icon: Layers, priceRange: "From $500+" },
];

export function Pricing() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("websites");

  const getActivePlans = () => {
    switch (activeTab) {
      case "websites":
        return WEBSITE_PLANS;
      case "voice-agents":
        return VOICE_AGENT_PLANS;
      case "chatbots":
        return CHATBOT_PLANS;
      case "automation":
        return AUTOMATION_PLANS;
      default:
        return [];
    }
  };

  const activePlans = getActivePlans();

  const onTabKeyDown = (e: React.KeyboardEvent) => {
    const currentIndex = TABS.findIndex((t) => t.id === activeTab);
    let nextIndex = currentIndex;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      nextIndex = (currentIndex + 1) % TABS.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      nextIndex = (currentIndex - 1 + TABS.length) % TABS.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = TABS.length - 1;
    }
    if (nextIndex !== currentIndex) {
      e.preventDefault();
      const nextTab = TABS[nextIndex].id;
      setActiveTab(nextTab);
      document.getElementById(`pricing-tab-${nextTab}`)?.focus();
    }
  };

  return (
    <section id="pricing" className="content-auto relative pt-24 pb-20 sm:pt-28 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Pricing"
          title={
            <>
              Transparent, <span className="text-[#087F8C]">honest pricing</span>
            </>
          }
          subtitle="Clear package pricing with defined deliverables. Website development from $99, AI automation from $200, chatbots from $150, and voice agents from $350."
        />

        {/* Service Category Tabs — High-Contrast Segmented Control */}
        <div className="mt-10 sm:mt-12 flex justify-center w-full">
          <div
            role="tablist"
            aria-label="Service categories"
            onKeyDown={onTabKeyDown}
            className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 xl:gap-1.5 max-w-full rounded-2xl bg-slate-100/90 p-1.5 sm:p-2 xl:p-1.5 border border-slate-200 shadow-2xs"
          >
            {TABS.map((t) => {
              const isActive = activeTab === t.id;
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  id={`pricing-tab-${t.id}`}
                  aria-selected={isActive}
                  aria-controls={`pricing-panel-${t.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(t.id)}
                  className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 xl:gap-1.5 rounded-xl px-2.5 sm:px-3.5 xl:px-2 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer min-h-[44px] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C] ${
                    isActive
                      ? "bg-[#10233F] text-white shadow-sm"
                      : "text-[#526174] hover:text-[#142338] bg-white/60 sm:bg-transparent hover:bg-white"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 ${isActive ? "text-[#2DD4BF]" : "text-slate-400"}`}
                  />
                  <span>{t.label}</span>
                  <span
                    className={`inline-block text-xs px-1.5 py-0.5 xl:px-1 rounded-md font-mono ${
                      isActive ? "bg-white/15 text-[#2DD4BF]" : "bg-slate-200/70 text-[#526174]"
                    }`}
                  >
                    {t.priceRange}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tabpanel wrapper */}
        <div
          role="tabpanel"
          id={`pricing-panel-${activeTab}`}
          aria-labelledby={`pricing-tab-${activeTab}`}
          tabIndex={0}
          className="focus-visible:outline-none"
        >
          {/* 3-Card Grid for Standard Services */}
          {activeTab !== "custom" && (
            <div className="mt-12 grid gap-6 lg:grid-cols-3 items-stretch">
              {activePlans.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex"
                >
                  <div
                    className={`relative flex w-full flex-col justify-between rounded-2xl p-7 sm:p-8 transition-all duration-300 ${
                      p.highlight
                        ? "bg-white border-2 border-[#087F8C] shadow-lg ring-4 ring-[#087F8C]/10"
                        : "bg-white border border-[#DCE4EC] shadow-xs hover:border-[#087F8C]/40 hover:shadow-md"
                    }`}
                  >
                    <div>
                      {/* Reserved Badge Container — Guarantees Identical Price Alignment */}
                      <div className="h-7 flex items-center mb-3">
                        {p.badge ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                            {p.badge}
                          </span>
                        ) : (
                          <span className="invisible text-[11px] select-none" aria-hidden="true">
                            Standard Package
                          </span>
                        )}
                      </div>

                      <div className="font-display text-xl font-bold text-[#142338]">{p.name}</div>

                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-[#142338]">
                          {p.price}
                        </span>
                        <span className="text-xs text-[#526174] font-medium">/ {p.per}</span>
                      </div>

                      <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-md bg-teal-50 px-2.5 py-1 text-xs font-semibold text-[#087F8C] border border-teal-100">
                        <span>Estimated Delivery:</span>
                        <span className="font-bold">{p.delivery}</span>
                      </div>

                      <p className="mt-4 text-xs sm:text-sm text-[#526174] leading-relaxed min-h-[40px]">
                        {p.description}
                      </p>

                      <div className="mt-6 pt-5 border-t border-slate-100">
                        <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#142338] mb-3.5">
                          Included Features
                        </div>
                        <ul className="space-y-2.5">
                          {p.features.map((f) => (
                            <li key={f} className="flex items-start gap-2.5 text-xs text-[#142338]">
                              <Check className="h-4 w-4 text-[#087F8C] shrink-0 mt-0.5" />
                              <span className="leading-snug">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      search={{
                        service:
                          activeTab === "websites"
                            ? "Website Development"
                            : activeTab === "voice-agents"
                              ? "AI Voice Agent"
                              : activeTab === "chatbots"
                                ? "AI Chatbot"
                                : "AI Automation",
                        plan: p.serviceParam,
                      }}
                      className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs sm:text-sm font-semibold transition-all min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C] ${
                        p.highlight
                          ? "bg-[#087F8C] text-white shadow-xs hover:bg-[#066570]"
                          : "border border-slate-200 bg-slate-50 text-[#142338] hover:bg-slate-100"
                      }`}
                    >
                      <span>{p.cta}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* AI Voice Agent Running Cost Notice */}
          {activeTab === "voice-agents" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-10 rounded-2xl border border-amber-200/80 bg-amber-50/40 p-6 sm:p-8 text-left shadow-xs"
            >
              <div className="flex items-center gap-2 font-display text-sm sm:text-base font-bold text-amber-900">
                <AlertCircle className="h-4.5 w-4.5 text-amber-700 shrink-0" />
                <span>Voice AI Running Cost Notice</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#526174]">
                Voice Agent package prices cover development and initial setup. Ongoing third-party
                usage charges are billed separately.
              </p>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4 text-xs text-[#526174]">
                {[
                  "Voice AI platform usage",
                  "Phone number rental",
                  "Calling minutes",
                  "AI model / API usage",
                  "Speech-to-text usage",
                  "Text-to-speech usage",
                  "Automation hosting",
                  "Other required third-party software",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg bg-white p-2.5 border border-amber-200/50 shadow-2xs"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[11px] text-[#526174]">
                Package fees do not include unlimited calling minutes or bundled airtime. Usage
                charges are billed directly by your chosen platform and telephony providers based on
                actual volume.
              </p>
            </motion.div>
          )}

          {/* Custom Digital Solutions View */}
          {activeTab === "custom" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 mx-auto max-w-3xl"
            >
              <div className="rounded-2xl border border-[#DCE4EC] bg-white p-8 sm:p-12 text-center shadow-xs">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[10.5px] uppercase tracking-wider text-amber-800 font-bold">
                  <Layers className="h-3.5 w-3.5 text-amber-600" /> Multi-System Setup
                </span>
                <h3 className="mt-4 font-display text-2xl sm:text-4xl font-bold text-[#142338]">
                  Custom Digital Solutions
                </h3>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="font-sans text-4xl sm:text-5xl font-bold text-[#142338]">
                    Starting from $500+
                  </span>
                </div>
                <p className="mt-2 text-xs text-[#087F8C] font-semibold">
                  Final pricing depends on project scope
                </p>
                <p className="mt-4 text-xs sm:text-sm text-[#526174] leading-relaxed max-w-xl mx-auto">
                  If a custom project combines multiple advanced systems such as Website, Voice
                  Agent, AI Automation, Chatbot, and multiple integrations, the project scope is
                  evaluated as a whole and quoted transparently.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 text-left text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-[#FAFCFF] p-3.5 text-[#142338]">
                    <Check className="h-4 w-4 text-[#087F8C] mt-0.5 shrink-0" />
                    <span>Custom Combined Architecture (Web + AI + Workflows)</span>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-[#FAFCFF] p-3.5 text-[#142338]">
                    <Check className="h-4 w-4 text-[#087F8C] mt-0.5 shrink-0" />
                    <span>Bespoke System Integrations & Webhooks</span>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-[#FAFCFF] p-3.5 text-[#142338]">
                    <Check className="h-4 w-4 text-[#087F8C] mt-0.5 shrink-0" />
                    <span>Tailored Business Logic & Database Setup</span>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-[#FAFCFF] p-3.5 text-[#142338]">
                    <Check className="h-4 w-4 text-[#087F8C] mt-0.5 shrink-0" />
                    <span>End-to-End Testing, Handover & Revisions</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
                  <Link
                    to="/contact"
                    search={{
                      service: "Custom Digital Solution",
                      plan: "Custom Digital Solution — Starting from $500+",
                    }}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#087F8C] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-[#066570] transition-all min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
                  >
                    <span>Discuss Custom Solution</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={`https://wa.me/923317962794?text=${encodeURIComponent("Hi Nasib, I would like to discuss a Custom Digital Solution for my business.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-emerald-600/25 bg-emerald-50 px-5 py-3 text-xs sm:text-sm font-medium text-emerald-800 hover:bg-emerald-100 transition min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
                  >
                    <MessageSquare className="h-4 w-4 text-emerald-600" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Pricing notes */}
        <div className="mt-12 space-y-2 text-center text-xs text-[#526174]">
          <p>
            Final pricing may vary depending on project scope, integrations and custom requirements.
          </p>
          <p>
            Domain, hosting and third-party paid services are not included unless specifically
            mentioned in the quotation.
          </p>
        </div>

        {/* Important Cost Information */}
        <div className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#087F8C]">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
              Usage & Third-Party Costs
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl text-[#142338]">
              Important Cost Information
            </h3>
            <p className="mt-3 text-sm text-[#526174] leading-relaxed">
              Package prices cover development and initial setup unless otherwise stated.
              Third-party services and usage costs are billed separately.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {[
              "Domain & Hosting",
              "AI / API Usage",
              "Voice AI Platform Usage",
              "Phone Numbers & Calling Minutes",
              "Paid Automation Tools",
              "External Software Subscriptions",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl px-4 py-3 border border-[#DCE4EC] bg-white shadow-2xs flex items-center justify-center gap-2 text-center"
              >
                <span className="h-2 w-2 rounded-full bg-[#087F8C] shrink-0" />
                <span className="text-xs font-semibold text-[#142338]">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-3 text-center">
            <a
              href={`https://wa.me/923317962794?text=${encodeURIComponent("Hi Nasib, I would like to get a custom quote for my project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#087F8C] px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-[#066570] transition shadow-xs min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
            >
              <span>Get Custom Quote</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs sm:text-sm font-medium text-[#142338] hover:bg-slate-50 transition min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
            >
              <MessageSquare className="h-4 w-4 text-[#087F8C]" />
              <span>Send Project Details</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
