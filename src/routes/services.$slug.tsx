import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { SERVICES, getService } from "@/lib/services-data";
import { SectionHeader } from "@/components/landing/Services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    const { icon: _icon, ...serializable } = service;
    return { service: serializable };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found — Digital Solution" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const s = loaderData.service;
    const url = `https://nasibrehmandigitalsolutions.vercel.app/services/${s.slug}`;
    return {
      meta: [
        { title: `${s.title} — Digital Solution by Nasib Rehman` },
        { name: "description", content: s.tagline },
        { property: "og:title", content: `${s.title} — Digital Solution by Nasib Rehman` },
        { property: "og:description", content: s.tagline },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#5B6472] hover:text-[#111827] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded py-1"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All Practice Areas
        </Link>

        {/* Editorial Service Hero */}
        <div className="mt-8 border-b border-[#E7E1D6] pb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B38A3D]" />
              <span className="tracking-widest text-[11px]">PRACTICE AREA OVERVIEW</span>
            </div>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#111827]">
              {service.title}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-[#0F766E] font-medium leading-relaxed max-w-3xl">
              {service.tagline}
            </p>
            <p className="mt-4 text-base text-[#5B6472] max-w-3xl leading-relaxed">
              {service.desc}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                search={{ service: service.title }}
                className="inline-flex items-center gap-2 rounded-md bg-[#0F766E] px-6 py-3 text-sm font-semibold text-[#FFFFFF] shadow-xs hover:bg-[#0D9488] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
              >
                Discuss Your Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-md border border-[#E7E1D6] bg-[#FFFFFF] px-6 py-3 text-sm font-medium text-[#111827] hover:bg-[#F3EEE6] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>

        {/* Capabilities List */}
        <div className="py-14 sm:py-16 border-b border-[#E7E1D6]">
          <div className="text-xs uppercase tracking-wider text-[#5B6472] font-semibold mb-6">
            Capabilities
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {service.features.map((f: string, i: number) => (
              <div
                key={f}
                className="flex items-center gap-3 py-3 px-4 rounded-lg border border-[#E7E1D6] bg-[#FFFFFF] text-sm text-[#111827]"
              >
                <span className="font-mono text-xs text-[#B38A3D] font-semibold">0{i + 1}</span>
                <span className="font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="my-14 sm:my-18 rounded-2xl border border-[#E7E1D6] bg-[#FFFFFF] p-8 sm:p-12 text-center relative shadow-xs">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#111827]">
            Interested in <span className="text-[#0F766E]">{service.title}</span> for your business?
          </h3>
          <p className="mt-3 text-sm text-[#5B6472] max-w-xl mx-auto leading-relaxed">
            Direct communication with Nasib Rehman • No-obligation project discussion
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Link
              to="/contact"
              search={{ service: service.title }}
              className="inline-flex items-center gap-2 rounded-md bg-[#0F766E] px-6 py-3 text-sm font-semibold text-[#FFFFFF] shadow-xs hover:bg-[#0D9488] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
            >
              Discuss Your Project <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/923317962794?text=${encodeURIComponent(`Hi Nasib, I'm interested in ${service.title} for my business.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-emerald-600/30 bg-emerald-50 text-emerald-800 px-6 py-3 text-sm font-medium hover:bg-emerald-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
            >
              <MessageSquare className="h-4 w-4 text-emerald-600" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Explore more services */}
        <div>
          <div className="text-xs uppercase tracking-wider text-[#5B6472] font-semibold mb-6">
            Explore more services
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/services/$slug"
                params={{ slug: o.slug }}
                className="group rounded-xl p-5 border border-[#E7E1D6] bg-[#FFFFFF] transition hover:border-[#0F766E]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="font-display text-base font-semibold text-[#111827] group-hover:text-[#0F766E] transition-colors">
                    {o.title}
                  </div>
                  <div className="mt-1 text-xs text-[#5B6472] leading-relaxed">{o.tagline}</div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E7E1D6] inline-flex items-center gap-1 text-xs font-semibold text-[#0F766E]">
                  <span>Explore</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
