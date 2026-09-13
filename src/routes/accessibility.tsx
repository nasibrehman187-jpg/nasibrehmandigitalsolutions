import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Mail, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement — Digital Solution by Nasib Rehman" },
      {
        name: "description",
        content:
          "Accessibility Statement for Digital Solution by Nasib Rehman. Practical accessibility practices, design standards, and feedback contacts.",
      },
      {
        property: "og:title",
        content: "Accessibility Statement — Digital Solution by Nasib Rehman",
      },
      {
        property: "og:description",
        content:
          "Accessibility Statement for Digital Solution by Nasib Rehman. Practical accessibility standards and feedback contact.",
      },
      {
        property: "og:url",
        content: "https://nasibrehmandigitalsolutions.vercel.app/accessibility",
      },
    ],
    links: [
      { rel: "canonical", href: "https://nasibrehmandigitalsolutions.vercel.app/accessibility" },
    ],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-[#A8B0BF] hover:text-[#F7F3E8] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6] rounded"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <header className="mt-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0F8B8D]/30 bg-[#0F8B8D]/10 px-3.5 py-1 text-xs text-[#F7F3E8]">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#14B8A6]" />
            <span>Inclusive Design</span>
          </div>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-[#F7F3E8] tracking-tight">
            Accessibility Statement
          </h1>
          <p className="mt-2 text-sm text-[#A8B0BF]">
            Digital Solution by Nasib Rehman • Khairpur, Sindh, Pakistan • Effective Date: September
            2026
          </p>
        </header>

        <div className="mt-10 space-y-8 text-sm text-[#A8B0BF] leading-relaxed">
          <section className="rounded-2xl border border-[rgba(247,243,232,0.08)] bg-[#111827] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#F7F3E8]">
              1. Our Accessibility Commitment
            </h2>
            <p className="mt-3">
              Digital Solution aims to provide an accessible experience and follows recognized
              accessibility practices, including keyboard navigation, visible focus states, readable
              contrast, responsive layouts, semantic labels, and reduced-motion support.
            </p>
            <p className="mt-3">
              We aim to align with Web Content Accessibility Guidelines (WCAG 2.1 / 2.2) Level AA
              principles where practical. We do not claim formal third-party certification, but we
              actively test and engineer our interfaces to support broad usability across devices
              and assistive technologies.
            </p>
          </section>

          <section className="rounded-2xl border border-[rgba(247,243,232,0.08)] bg-[#111827] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#F7F3E8]">
              2. Implemented Accessibility Measures
            </h2>
            <p className="mt-3">
              Key accessibility measures implemented throughout this website include:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>
                <strong className="text-[#F7F3E8]">Color Contrast:</strong> Body copy, headings, and
                interactive elements are tested against deep background surfaces to meet or exceed
                recommended contrast ratios.
              </li>
              <li>
                <strong className="text-[#F7F3E8]">Keyboard Navigation:</strong> All navigation
                links, interactive buttons, and form controls are accessible via keyboard Tab
                ordering with clear visible focus indicators.
              </li>
              <li>
                <strong className="text-[#F7F3E8]">Responsive Scaling:</strong> Layouts adapt
                gracefully across screen widths from 320px mobile devices to large desktop monitors
                without horizontal overflow or text clipping.
              </li>
              <li>
                <strong className="text-[#F7F3E8]">Semantic HTML & ARIA:</strong> Landmarks (`nav`,
                `main`, `footer`, `aside`), form labels, and interactive states (`aria-expanded`,
                `aria-label`) are used to assist screen reader users.
              </li>
              <li>
                <strong className="text-[#F7F3E8]">Motion Sensitivity:</strong> Animation styles
                respect user OS preferences for reduced motion and avoid disorienting parallax or
                persistent flashing effects.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-[rgba(247,243,232,0.08)] bg-[#111827] p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-[#F7F3E8]">
              3. Accessibility Feedback & Assistance
            </h2>
            <p className="mt-3">
              We continually work to maintain and improve accessibility across all pages. If you
              experience difficulty accessing any content, encounter an interactive barrier, or have
              suggestions on how we can improve accessibility, please contact us directly:
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs sm:text-sm">
              <a
                href="mailto:nasibrehman187@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-[rgba(247,243,232,0.1)] bg-[#162033] px-4 py-2 text-[#F7F3E8] hover:border-[#14B8A6]/50 transition"
              >
                <Mail className="h-4 w-4 text-[#14B8A6]" /> nasibrehman187@gmail.com
              </a>
              <a
                href="https://wa.me/923317962794"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-300 hover:bg-emerald-500/20 transition"
              >
                <MessageSquare className="h-4 w-4 text-emerald-400" /> WhatsApp: +92 331 7962794
              </a>
            </div>
            <p className="mt-4 text-xs text-[#A8B0BF]">
              We aim to review and respond to accessibility inquiries within a reasonable timeframe.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
