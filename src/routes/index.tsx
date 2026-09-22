import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Hero } from "../components/landing/Hero";
import { HomeServices } from "../components/landing/HomeServices";
import { WhyUs } from "../components/landing/WhyUs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Websites & AI Automation in Pakistan | Nasib Rehman" },
      {
        name: "description",
        content:
          "Websites, AI chatbots, n8n automation and voice agents by Nasib Rehman in Pakistan. Explore services, demo projects and pricing for your business.",
      },
      {
        property: "og:title",
        content: "Websites & AI Automation in Pakistan | Nasib Rehman",
      },
      {
        property: "og:description",
        content:
          "Websites, AI chatbots, n8n automation and voice agents by Nasib Rehman in Pakistan. Explore services, demo projects and pricing for your business.",
      },
      { property: "og:url", content: "https://nasibrehmandigitalsolutions.vercel.app/" },
      {
        name: "twitter:title",
        content: "Websites & AI Automation in Pakistan | Nasib Rehman",
      },
      {
        name: "twitter:description",
        content:
          "Websites, AI chatbots, n8n automation and voice agents by Nasib Rehman in Pakistan. Explore services, demo projects and pricing for your business.",
      },
    ],
    links: [{ rel: "canonical", href: "https://nasibrehmandigitalsolutions.vercel.app/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <HomeServices />
      <WhyUs />
      <section className="relative border-t border-[#E7E1D6] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111827]">
            Ready to Build a <span className="text-[#0F766E]">Practical Digital Solution?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5B6472] max-w-2xl mx-auto leading-relaxed">
            Explore our services, concept builds and transparent package pricing, or discuss your
            exact business requirements directly with Nasib Rehman.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#0F766E] px-7 py-3 text-sm font-semibold text-[#FFFFFF] shadow-xs hover:bg-[#0D9488] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-[#E7E1D6] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#5B6472]">
            {[
              { to: "/services", label: "Services" },
              { to: "/projects", label: "Projects & Demos" },
              { to: "/process", label: "How We Work" },
              { to: "/pricing", label: "Pricing Packages" },
              { to: "/faq", label: "FAQ" },
            ].map((l, i) => (
              <span key={l.to} className="inline-flex items-center gap-6">
                <Link
                  to={l.to}
                  className="font-medium text-[#5B6472] hover:text-[#0F766E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded py-0.5"
                >
                  {l.label}
                </Link>
                {i < 4 && <span className="text-[#E7E1D6] select-none">•</span>}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
