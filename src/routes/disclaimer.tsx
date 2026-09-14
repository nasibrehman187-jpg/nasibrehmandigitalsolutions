import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, AlertCircle, Mail, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Digital Solution by Nasib Rehman" },
      {
        name: "description",
        content:
          "Disclaimer for Digital Solution by Nasib Rehman. Clarifications regarding demonstration builds, AI systems, third-party platforms, and business outcomes.",
      },
      { property: "og:title", content: "Disclaimer — Digital Solution by Nasib Rehman" },
      {
        property: "og:description",
        content:
          "Disclaimer for Digital Solution by Nasib Rehman. Clarifications regarding demo builds, AI systems, and business outcomes.",
      },
      { property: "og:url", content: "https://nasibrehmandigitalsolutions.vercel.app/disclaimer" },
    ],
    links: [
      { rel: "canonical", href: "https://nasibrehmandigitalsolutions.vercel.app/disclaimer" },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-[#5B6472] hover:text-[#111827] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <header className="mt-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B38A3D]" />
            <span>Legal Disclaimer</span>
          </div>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-[#111827] tracking-tight">
            Disclaimer
          </h1>
          <p className="mt-2 text-sm text-[#5B6472]">
            Digital Solution by Nasib Rehman • Khairpur, Sindh, Pakistan • Effective Date: September
            2026
          </p>
        </header>

        <div className="mt-10 space-y-8 text-sm text-[#5B6472] leading-relaxed">
          <section className="rounded-lg border border-[#E7E1D6] bg-[#FFFFFF] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#111827]">
              1. Demonstration Projects & Portfolio Builds
            </h2>
            <p className="mt-3">
              Projects and demonstrations displayed on this website may include concept websites,
              interactive demos, and developer portfolio builds engineered to showcase technical
              capability, interface architecture, and system design.
            </p>
            <p className="mt-3">
              <strong className="text-[#111827]">
                These showcase items must not be interpreted as paid-client engagements,
                endorsements, or client results unless explicitly identified as such.
              </strong>{" "}
              Any company names, trade names, or scenarios used within concept demonstrations are
              for illustrative purposes only.
            </p>
          </section>

          <section className="rounded-lg border border-[#E7E1D6] bg-[#FFFFFF] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#111827]">
              2. Artificial Intelligence & Automated Systems
            </h2>
            <p className="mt-3">
              AI chatbots, automated calling agents, and generative AI workflows utilize
              probabilistic language models. Outputs can vary based on prompt construction, training
              data, model updates, and user input nuances. While we engineer structured prompts,
              system guardrails, and deterministic fallbacks, clients are advised to monitor
              automated customer interactions periodically.
            </p>
          </section>

          <section className="rounded-lg border border-[#E7E1D6] bg-[#FFFFFF] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#111827]">
              3. Third-Party Platforms & Service Availability
            </h2>
            <p className="mt-3">
              Digital Solution builds solutions that integrate with third-party software, hosting
              environments, telecommunication networks, and external APIs. Third-party platforms can
              modify their pricing, terms, API availability, usage limits, or technical interfaces
              at any time without prior notice. Digital Solution is not liable for service
              interruptions caused by third-party infrastructure outages.
            </p>
          </section>

          <section className="rounded-lg border border-[#E7E1D6] bg-[#FFFFFF] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#111827]">
              4. Business Outcomes & Performance
            </h2>
            <p className="mt-3">
              We engineer quality websites, automations, and digital tools tailored to your
              operational specifications. However, business success depends on numerous factors
              outside technical implementation (including market conditions, product pricing,
              customer demand, and sales execution).
            </p>
            <p className="mt-3">
              <strong className="text-[#111827]">
                Digital Solution makes no speculative guarantees of revenue, sales conversions,
                search engine rankings, lead quantities, or specific commercial outcomes.
              </strong>
            </p>
          </section>

          <section className="rounded-lg border border-[#E7E1D6] bg-[#FFFFFF] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#111827]">
              5. Questions & Contact
            </h2>
            <p className="mt-3">
              If you have any questions regarding these disclaimers or project terms:
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs sm:text-sm">
              <a
                href="mailto:nasibrehman187@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-[#E7E1D6] bg-[#F3EEE6] px-4 py-2 text-[#111827] hover:border-[#0F766E]/40 transition"
              >
                <Mail className="h-4 w-4 text-[#0F766E]" /> nasibrehman187@gmail.com
              </a>
              <a
                href="https://wa.me/923317962794"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-50 text-emerald-800 px-4 py-2 hover:bg-emerald-100 transition"
              >
                <MessageSquare className="h-4 w-4 text-emerald-600" /> WhatsApp: +92 331 7962794
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
