import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText, Mail, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Digital Solution by Nasib Rehman" },
      {
        name: "description",
        content:
          "Terms of Service for Digital Solution by Nasib Rehman. Guidelines regarding services, project agreements, third-party platforms, and website use.",
      },
      { property: "og:title", content: "Terms of Service — Digital Solution by Nasib Rehman" },
      {
        property: "og:description",
        content:
          "Terms of Service for Digital Solution by Nasib Rehman. Guidelines regarding services, project agreements, and third-party tools.",
      },
      { property: "og:url", content: "https://nasibrehmandigitalsolutions.vercel.app/terms" },
    ],
    links: [{ rel: "canonical", href: "https://nasibrehmandigitalsolutions.vercel.app/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
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
            <span>Legal & Service Terms</span>
          </div>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-[#111827] tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-[#5B6472]">
            Digital Solution by Nasib Rehman • Khairpur, Sindh, Pakistan • Effective Date: September
            2026
          </p>
        </header>

        <div className="mt-10 space-y-8 text-sm text-[#5B6472] leading-relaxed">
          <section className="rounded-lg border border-[#E7E1D6] bg-[#FFFFFF] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#111827]">
              1. Services Offered
            </h2>
            <p className="mt-3">
              Digital Solution by Nasib Rehman provides professional design and engineering
              services, including:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li>
                Website Development (responsive business websites, landing pages, clinic and service
                sites)
              </li>
              <li>
                AI Chatbot Development (FAQ assistants, customer inquiry handling, lead capture
                bots)
              </li>
              <li>
                AI Automation (n8n workflows, webhook integrations, system and spreadsheet
                automation)
              </li>
              <li>
                AI Voice Agents (structured call-handling, appointment inquiries, lead
                qualification)
              </li>
              <li>
                Custom Digital Solutions (tailored combinations of web, automation, and AI
                workflows)
              </li>
            </ul>
          </section>

          <section className="rounded-lg border border-[#E7E1D6] bg-[#FFFFFF] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#111827]">
              2. Individual Project Agreements & Scope
            </h2>
            <p className="mt-3">
              This website provides general information and package estimates. Because every client
              workflow is unique:
            </p>
            <p className="mt-3 font-medium text-[#111827]">
              Project scope, deliverables, timelines, payment terms, revisions,
              intellectual-property transfer, and any ongoing support are agreed separately in the
              written proposal or project agreement.
            </p>
            <p className="mt-3">
              Work commences only once both parties have agreed upon the designated project scope
              and deliverables.
            </p>
          </section>

          <section className="rounded-lg border border-[#E7E1D6] bg-[#FFFFFF] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#111827]">
              3. Third-Party Platforms & Tooling
            </h2>
            <p className="mt-3">
              Some projects may depend on third-party platforms, APIs, hosting providers, AI
              services, telephony providers, or automation tools. Any required accounts,
              subscriptions, usage fees, and responsibilities will be identified in the project
              scope.
            </p>
            <p className="mt-3">
              Clients remain responsible for maintaining their own active accounts, subscriptions,
              and compliance with third-party terms of service for any external services used in
              connection with their project.
            </p>
          </section>

          <section className="rounded-lg border border-[#E7E1D6] bg-[#FFFFFF] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#111827]">
              4. Website Use & Intellectual Property
            </h2>
            <p className="mt-3">
              The contents, design, branding, and text of this website are the property of Nasib
              Rehman / Digital Solution. You may not scrape, copy, or redistribute website assets
              for unauthorized commercial purposes without prior written consent.
            </p>
          </section>

          <section className="rounded-lg border border-[#E7E1D6] bg-[#FFFFFF] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#111827]">
              5. Contact & Inquiries
            </h2>
            <p className="mt-3">
              For any questions regarding these Terms of Service or to request a written project
              proposal:
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
