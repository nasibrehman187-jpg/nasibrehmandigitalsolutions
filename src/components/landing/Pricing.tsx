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
    price: "$400",
    per: "One-Time Setup",
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
    serviceParam: "AI Voice Agent — Starter — $400",
  },
  {
    name: "Business Voice Agent",
    price: "$800",
    per: "One-Time Setup",
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
    cta: "Choose Business Voice Agent",
    serviceParam: "AI Voice Agent — Business — $800",
  },
  {
    name: "Advanced Voice Agent",
    price: "$1,500+",
    per: "One-Time Setup",
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
    cta: "Request Advanced Voice Agent",
    serviceParam: "AI Voice Agent — Advanced — $1,500+",
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
  { id: "voice-agents", label: "AI Voice Agents", icon: Mic, priceRange: "$400 – $1,500+" },
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

  return (
    <section id="pricing" className="content-auto relative pt-24 pb-20 sm:pt-28 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Pricing"
          title={
            <>
              Transparent, <span className="text-gradient">honest pricing</span>
            </>
          }
          subtitle="Clear package pricing with defined deliverables. Website development from $99, AI automation from $200, chatbots from $150, and voice agents from $400."
        />

        {/* Service Category Tabs */}
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-2">
          {TABS.map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? "border border-cyan-400/40 bg-cyan-500/15 text-white shadow-md shadow-cyan-950/40"
                    : "border border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
                <span>{t.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${isActive ? "bg-white/15 text-cyan-300 font-semibold" : "bg-white/5 text-slate-400"}`}
                >
                  {t.priceRange}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Header Label */}
        <div className="mt-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            {activeTab === "websites" && "Website Development Packages"}
            {activeTab === "chatbots" && "AI Chatbot Development Packages"}
            {activeTab === "automation" && "AI & Workflow Automation Packages"}
            {activeTab === "voice-agents" && "AI Voice Agent Engineering Packages"}
            {activeTab === "custom" && "Custom Multi-System Architecture"}
          </span>
        </div>

        {/* 3-Card Grid for Standard Services */}
        {activeTab !== "custom" && (
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {activePlans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`relative ${p.highlight ? "lg:-my-2" : ""}`}
              >
                <div
                  className={`relative flex h-full flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
                    p.highlight
                      ? "glass-strong border-2 border-cyan-400/40 shadow-xl shadow-cyan-950/20"
                      : "glass border border-white/10 hover:border-white/20"
                  }`}
                >
                  <div>
                    {p.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-white shadow-md">
                        <Sparkles className="h-3 w-3" /> {p.badge}
                      </div>
                    )}
                    <div className="font-display text-base font-semibold text-slate-300">
                      {p.name}
                    </div>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span
                        className={`font-display text-4xl sm:text-5xl font-bold tracking-tight ${
                          p.highlight ? "text-gradient" : "text-white"
                        }`}
                      >
                        {p.price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ {p.per}</span>
                    </div>
                    <div className="mt-2 text-xs text-cyan-400 font-medium">
                      Estimated Delivery: {p.delivery}
                    </div>

                    <p className="mt-4 text-sm text-slate-400 leading-relaxed">{p.description}</p>

                    <div className="mt-6 pt-5 border-t border-white/[0.06]">
                      <div className="text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-3">
                        Included Features
                      </div>
                      <ul className="space-y-2.5">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <span className="mt-0.5 grid h-4 w-4 place-items-center rounded-full bg-cyan-400/15 text-cyan-400 shrink-0">
                              <Check className="h-2.5 w-2.5" />
                            </span>
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
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      p.highlight
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-950/40 hover:from-cyan-400 hover:to-blue-500 hover:-translate-y-0.5"
                        : "border border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    <span>{p.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
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
            className="mt-10 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 text-left"
          >
            <div className="flex items-center gap-2 font-display text-sm font-semibold text-amber-300">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>Voice AI Running Cost Notice</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Voice Agent package prices cover development and initial setup. Ongoing third-party
              usage charges are billed separately.
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-400" /> Voice AI platform usage
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-400" /> Phone number rental
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-400" /> Calling minutes
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-400" /> AI model / API usage
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-400" /> Speech-to-text usage
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-400" /> Text-to-speech usage
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-400" /> Automation hosting
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-400" /> Other required third-party
                software
              </div>
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground/80">
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
            <div className="glass-strong rounded-3xl border border-white/15 p-8 sm:p-10 text-center shadow-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 px-3 py-1 text-xs font-semibold text-cyan-300">
                <Layers className="h-3.5 w-3.5" /> Multi-System Architecture
              </span>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-white">
                Custom Digital Solutions
              </h3>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="font-display text-4xl sm:text-5xl font-bold text-gradient">
                  Starting from $500+
                </span>
              </div>
              <p className="mt-2 text-xs text-cyan-400 font-medium">
                Final pricing depends on project scope
              </p>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xl mx-auto">
                If a custom project combines multiple advanced systems such as Website, Voice Agent,
                AI Automation, Chatbot, and multiple integrations, the project scope is evaluated as
                a whole and quoted transparently.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 text-left text-xs sm:text-sm">
                <div className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/[0.02] p-3.5 text-slate-300">
                  <Check className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>Custom Combined Architecture (Web + AI + Workflows)</span>
                </div>
                <div className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/[0.02] p-3.5 text-slate-300">
                  <Check className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>Bespoke System Integrations & Webhooks</span>
                </div>
                <div className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/[0.02] p-3.5 text-slate-300">
                  <Check className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>Tailored Business Logic & Database Setup</span>
                </div>
                <div className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/[0.02] p-3.5 text-slate-300">
                  <Check className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
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
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-cyan-950/40 hover:from-cyan-400 hover:to-blue-500 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Discuss Custom Solution <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/923317962794?text=${encodeURIComponent("Hi Nasib, I would like to discuss a Custom Digital Solution for my business.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-200 hover:bg-white/[0.08] hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Pricing notes */}
        <div className="mt-12 space-y-2 text-center text-xs text-slate-400">
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
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Usage & Third-Party Costs
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold sm:text-3xl text-white">
              Important Cost Information
            </h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
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
                className="glass rounded-xl px-4 py-3 border border-white/8 flex items-center justify-center gap-2 text-center"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-3 text-center">
            <a
              href={`https://wa.me/923317962794?text=${encodeURIComponent("Hi Nasib, I would like to get a custom quote for my project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white hover:from-cyan-400 hover:to-blue-500 transition shadow-md shadow-cyan-950/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Get Custom Quote <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-200 hover:bg-white/[0.08] hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <MessageSquare className="h-4 w-4 text-cyan-400" />
              Send Project Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
