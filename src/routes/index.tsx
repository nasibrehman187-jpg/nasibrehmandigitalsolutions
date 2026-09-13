import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Hero } from "../components/landing/Hero";
import { HomeServices } from "../components/landing/HomeServices";
import { WhyUs } from "../components/landing/WhyUs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Solution by Nasib Rehman | Websites, AI Automation & Voice Agents" },
      {
        name: "description",
        content:
          "Digital Solution by Nasib Rehman provides professional website development, AI automation, AI chatbots and AI voice agent solutions for businesses.",
      },
      {
        property: "og:title",
        content: "Digital Solution by Nasib Rehman | Websites, AI Automation & Voice Agents",
      },
      {
        property: "og:description",
        content:
          "Digital Solution by Nasib Rehman provides professional website development, AI automation, AI chatbots and AI voice agent solutions for businesses.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <HomeServices />
      <WhyUs />
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="glass rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Ready to Build a <span className="text-gradient">Practical Digital Solution?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Explore our services, concept builds and transparent package pricing, or discuss your
              exact business requirements directly with Nasib Rehman.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-cyan-950/40 hover:from-cyan-400 hover:to-blue-500 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap justify-center gap-2 text-xs">
              {[
                { to: "/services", label: "Services" },
                { to: "/projects", label: "Projects & Demos" },
                { to: "/process", label: "How We Work" },
                { to: "/pricing", label: "Pricing Packages" },
                { to: "/faq", label: "FAQ" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-3.5 py-1.5 text-slate-300 transition hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span>{l.label}</span>
                  <ArrowRight className="h-3 w-3 text-cyan-400 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
