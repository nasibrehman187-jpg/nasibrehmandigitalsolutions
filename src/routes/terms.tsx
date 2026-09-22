import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText, Mail, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Digital Solution by Nasib Rehman" },
      {
        name: "description",
        content:
          "Terms of Service for Digital Solution by Nasib Rehman. Terms covering project scope, milestone delivery, revisions, third-party software, and payments.",
      },
      {
        property: "og:title",
        content: "Terms of Service — Digital Solution by Nasib Rehman",
      },
      {
        property: "og:description",
        content:
          "Terms of Service for Digital Solution by Nasib Rehman. Terms covering project scope, milestone delivery, revisions, third-party software, and payments.",
      },
      { property: "og:url", content: "https://nasibrehmandigitalsolutions.vercel.app/terms" },
      {
        name: "twitter:title",
        content: "Terms of Service — Digital Solution by Nasib Rehman",
      },
      {
        name: "twitter:description",
        content:
          "Terms of Service for Digital Solution by Nasib Rehman. Terms covering project scope, milestone delivery, revisions, third-party software, and payments.",
      },
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
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#526174] hover:text-[#142338] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C] rounded py-1"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <header className="mt-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#087F8C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#087F8C]" />
            <span>Legal & Service Terms</span>
          </div>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-[#142338] tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[#526174]">
            Digital Solution by Nasib Rehman • Khairpur, Sindh, Pakistan • Effective Date: September
            2026
          </p>
        </header>

        <div className="mt-10 space-y-6 text-sm text-[#526174] leading-relaxed">
          <section className="rounded-2xl border border-[#DCE4EC] bg-white p-6 sm:p-8 shadow-xs">
            <h2 className="font-display text-lg font-bold text-[#142338]">1. Services Offered</h2>
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

          <section className="rounded-2xl border border-[#DCE4EC] bg-white p-6 sm:p-8 shadow-xs">
            <h2 className="font-display text-lg font-bold text-[#142338]">
              2. Individual Project Agreements & Scope
            </h2>
            <p className="mt-3">
              This website provides general information and package estimates. Because every client
              workflow is unique:
            </p>
            <p className="mt-3 font-semibold text-[#142338]">
              Project scope, deliverables, timelines, payment terms, revisions,
              intellectual-property transfer, and any ongoing support are agreed separately in the
              written proposal or project agreement.
            </p>
            <p className="mt-3">
              Work commences only once both parties have agreed upon the designated project scope
              and deliverables.
            </p>
          </section>

          <section className="rounded-2xl border border-[#DCE4EC] bg-white p-6 sm:p-8 shadow-xs">
            <h2 className="font-display text-lg font-bold text-[#142338]">
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

          <section className="rounded-2xl border border-[#DCE4EC] bg-white p-6 sm:p-8 shadow-xs">
            <h2 className="font-display text-lg font-bold text-[#142338]">
              4. Website Use & Intellectual Property
            </h2>
            <p className="mt-3">
              The contents, design, branding, and text of this website are the property of Nasib
              Rehman / Digital Solution. You may not scrape, copy, or redistribute website assets
              for unauthorized commercial purposes without prior written consent.
            </p>
          </section>

          <section className="rounded-2xl border border-[#DCE4EC] bg-white p-6 sm:p-8 shadow-xs">
            <h2 className="font-display text-lg font-bold text-[#142338]">
              5. Contact & Inquiries
            </h2>
            <p className="mt-3">
              For any questions regarding these Terms of Service or to request a written project
              proposal:
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm">
              <a
                href="mailto:nasibrehman187@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-[#142338] hover:border-[#087F8C]/40 transition min-h-[44px]"
              >
                <Mail className="h-4 w-4 text-[#087F8C]" /> nasibrehman187@gmail.com
              </a>
              <a
                href="https://wa.me/923317962794"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-50 text-emerald-800 px-4 py-2.5 hover:bg-emerald-100 transition min-h-[44px]"
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
