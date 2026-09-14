import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck, Mail, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Digital Solution by Nasib Rehman" },
      {
        name: "description",
        content:
          "Privacy Policy for Digital Solution by Nasib Rehman. Transparent disclosures on data handling, communication channels, and website usage.",
      },
      { property: "og:title", content: "Privacy Policy — Digital Solution by Nasib Rehman" },
      {
        property: "og:description",
        content:
          "Privacy Policy for Digital Solution by Nasib Rehman. Transparent disclosures on data handling and communication.",
      },
      { property: "og:url", content: "https://nasibrehmandigitalsolutions.vercel.app/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://nasibrehmandigitalsolutions.vercel.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
            <span>Legal & Privacy</span>
          </div>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-[#111827] tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-[#5B6472]">
            Digital Solution by Nasib Rehman • Khairpur, Sindh, Pakistan • Effective Date: September
            2026
          </p>
        </header>

        <div className="mt-10 space-y-8 text-sm text-[#5B6472] leading-relaxed">
          <section className="rounded-lg border border-[#E7E1D6] bg-[#FFFFFF] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#111827]">
              1. Overview & Data Flow
            </h2>
            <p className="mt-3">
              Digital Solution is an independent digital services studio founded and led by Nasib
              Rehman, based in Khairpur, Sindh, Pakistan. We specialize in website development, AI
              chatbots, AI automation workflows, AI voice agents, and custom digital systems.
            </p>
            <p className="mt-3">
              This website serves informational and project inquiry purposes.{" "}
              <strong className="text-[#111827]">
                The website itself does not currently store contact-form submissions in a database.
              </strong>{" "}
              When you fill out the project inquiry form on this site, your details are prepared and
              transferred directly by you through WhatsApp or your chosen email application.
            </p>
          </section>

          <section className="rounded-lg border border-[#E7E1D6] bg-[#FFFFFF] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#111827]">
              2. Information Received & How It Is Used
            </h2>
            <p className="mt-3">
              When you initiate contact via WhatsApp or email, we receive the information you choose
              to share, which may include your name, business name, contact information (email
              address, phone number), service interests, budget range, and project requirements.
            </p>
            <p className="mt-3">
              We aim to handle information shared with us responsibly and only for legitimate
              project and communication purposes, specifically:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li>Responding to your project inquiries and questions</li>
              <li>Discussing project feasibility, scope, timeline, and pricing estimates</li>
              <li>Communicating during the course of an agreed project</li>
              <li>Maintaining professional correspondence related to services rendered</li>
            </ul>
            <p className="mt-3">
              <strong className="text-[#111827]">
                We do not sell, rent, or trade your personal information to third parties for
                advertising or commercial marketing purposes.
              </strong>
            </p>
          </section>

          <section className="rounded-lg border border-[#E7E1D6] bg-[#FFFFFF] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#111827]">
              3. Third-Party Communications & External Services
            </h2>
            <p className="mt-3">
              When you choose to communicate via WhatsApp or email, your data transmission is
              facilitated by third-party platforms (such as Meta Platforms / WhatsApp, or your email
              service provider). These providers process data according to their own respective
              terms and privacy policies. We encourage you to review their policies if you have
              questions about how those platforms manage transmissions.
            </p>
          </section>

          <section className="rounded-lg border border-[#E7E1D6] bg-[#FFFFFF] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#111827]">
              4. Cookies & Website Analytics
            </h2>
            <p className="mt-3">
              This website does not deploy third-party advertising cookies, cross-site trackers, or
              marketing pixels. Essential browser storage may be utilized solely for basic
              client-side user interface preferences (such as responsive layout adjustments).
            </p>
          </section>

          <section className="rounded-lg border border-[#E7E1D6] bg-[#FFFFFF] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#111827]">
              5. Contact Information & Inquiries
            </h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy, or if you wish to review, update,
              or request the deletion of contact details you previously shared via email or
              WhatsApp, please reach out directly:
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
