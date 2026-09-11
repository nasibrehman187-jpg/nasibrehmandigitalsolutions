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
      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">
            Ready to <span className="text-gradient">build something?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Explore the full website to see services, real projects and transparent pricing.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              { to: "/services", label: "Services" },
              { to: "/projects", label: "Projects" },
              { to: "/process", label: "Process" },
              { to: "/pricing", label: "Pricing" },
              { to: "/faq", label: "FAQ" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm backdrop-blur-md transition hover:bg-white/10"
              >
                {l.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
