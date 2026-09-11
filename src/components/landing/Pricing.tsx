import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, MessageSquare } from "lucide-react";
import { SectionHeader } from "./Services";
import { Link } from "@tanstack/react-router";

const PLANS = [
  {
    name: "Starter",
    price: "$150",
    per: "One-Time",
    delivery: "3–4 Days",
    highlight: false,
    badge: null,
    description: "Perfect for a simple professional online presence.",
    scope: "1–3 page website for a landing page, portfolio or business card style site.",
    features: [
      "1–3 Page Website",
      "Landing Page, Portfolio, or Business Card Site",
      "Mobile Responsive Design",
      "Clean Professional Layout",
      "1 Revision Round",
    ],
    cta: "Choose Starter",
    ctaTo: "/contact",
  },
  {
    name: "Standard",
    price: "$350",
    per: "One-Time",
    delivery: "7–10 Days",
    highlight: true,
    badge: "Most Popular",
    description:
      "A complete professional website for businesses that need more pages, functionality and customer contact options.",
    scope: null,
    features: [
      "5–7 Page Full Website",
      "Custom Design",
      "Mobile Responsive Design",
      "Contact / RFQ Form",
      "WhatsApp Integration",
      "2 Revision Rounds",
    ],
    cta: "Choose Standard",
    ctaTo: "/contact",
  },
  {
    name: "Premium",
    price: "$700+",
    per: "One-Time",
    delivery: "12–15 Days",
    highlight: false,
    badge: null,
    description:
      "For businesses that need a more advanced and highly customized website experience.",
    scope: null,
    features: [
      "Full Custom Website",
      "Custom Animations",
      "Multi-Section Pages",
      "Custom Data Structure",
      "Mobile Responsive Design",
      "Priority Delivery",
      "3 Revision Rounds",
    ],
    cta: "Request Premium",
    ctaTo: "/contact",
  },
];

const AI_SERVICES = [
  { name: "AI Automation", price: "Custom Quote" },
  { name: "AI Chatbots", price: "Custom Quote" },
  { name: "AI Voice Agents", price: "Custom Quote" },
  { name: "Custom Digital Solutions", price: "Custom Quote" },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Pricing"
          title={
            <>
              Transparent, <span className="text-gradient">honest pricing</span>
            </>
          }
          subtitle="Fixed-price website packages with clear scope and delivery times."
        />

        {/* Website Packages */}
        <div className="mt-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Website Development Packages
          </span>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative ${p.highlight ? "lg:-my-4" : ""}`}
            >
              {p.highlight && (
                <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/60 via-blue-500/40 to-violet-500/60 blur-lg opacity-70 animate-pulse-glow" />
              )}
              <div
                className={`relative h-full rounded-3xl p-8 ${p.highlight ? "glass-strong border border-white/20" : "glass"}`}
              >
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg">
                    <Sparkles className="h-3 w-3" /> {p.badge}
                  </div>
                )}
                <div className="font-display text-lg font-medium text-muted-foreground">
                  {p.name}
                </div>
                <div className="mt-4 flex items-end gap-2">
                  <span
                    className={`font-display text-5xl font-semibold ${p.highlight ? "text-gradient" : ""}`}
                  >
                    {p.price}
                  </span>
                  <span className="mb-1 text-sm text-muted-foreground">/ {p.per}</span>
                </div>
                <div className="mt-2 text-xs text-cyan-300 font-medium">Delivery: {p.delivery}</div>

                <p className="mt-4 text-sm text-muted-foreground">{p.description}</p>
                {p.scope && <p className="mt-1 text-xs text-muted-foreground">{p.scope}</p>}

                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-cyan-400/15 text-cyan-300 shrink-0">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to={p.ctaTo}
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    p.highlight
                      ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white shadow-[0_10px_40px_-10px_rgba(56,189,248,0.6)] hover:scale-[1.02]"
                      : "border border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing notes */}
        <div className="mt-10 space-y-2 text-center text-xs text-muted-foreground">
          <p>
            Final pricing may vary depending on project scope, integrations and custom requirements.
          </p>
          <p>
            Domain, hosting and third-party paid services are not included unless specifically
            mentioned in the quotation.
          </p>
        </div>

        {/* AI / Automation Pricing */}
        <div className="mt-20">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              AI & Automation Services
            </span>
            <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
              AI and automation pricing depends on workflow complexity, integrations, API usage and
              business requirements.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AI_SERVICES.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="font-display text-base font-medium">{s.name}</div>
                <div className="mt-2 font-display text-2xl font-semibold text-gradient">
                  {s.price}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/923062320099"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition mr-3"
            >
              Get Custom Quote <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              <MessageSquare className="h-4 w-4 text-cyan-300" />
              Send Project Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
