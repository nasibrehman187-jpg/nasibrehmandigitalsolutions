import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { SERVICES, getService } from "@/lib/services-data";
import { SectionHeader } from "@/components/landing/Services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
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
      <div className="mx-auto max-w-7xl px-6">
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-sm text-[#5B6472] hover:text-[#111827] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded"
        >
          <ArrowLeft className="h-4 w-4" /> All services
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-[#0F766E] text-white shadow-sm">
              <service.icon className="h-7 w-7 text-white" />
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[#111827]">
              {service.title}
            </h1>
            <p className="mt-3 text-lg text-[#5B6472]">{service.tagline}</p>
            <p className="mt-4 text-sm text-[#5B6472] max-w-xl leading-relaxed">{service.desc}</p>

            <div className="mt-6 max-w-xl">
              <div className="text-xs uppercase tracking-wider text-[#5B6472] font-semibold mb-3">
                Capabilities
              </div>
              <ul className="grid gap-2 sm:grid-cols-2">
                {service.features.map((f: string) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#111827]">
                    <CheckCircle2 className="h-4 w-4 text-[#0F766E] mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                search={{ service: service.title }}
                className="inline-flex items-center gap-2 rounded-full bg-[#0F766E] px-6 py-3 text-sm font-semibold text-[#FFFFFF] shadow-sm hover:bg-[#0D9488] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
              >
                Discuss Your Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-[#E7E1D6] bg-[#FFFFFF] px-6 py-3 text-sm font-medium text-[#111827] hover:bg-[#F3EEE6] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-3xl border border-[#E7E1D6] bg-[#FFFFFF] p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#0F766E] text-white shrink-0">
                  <service.icon className="h-6 w-6 text-white" />
                </span>
                <div>
                  <div className="font-display text-xl font-semibold text-[#111827]">
                    {service.title}
                  </div>
                  <div className="mt-1 text-sm text-[#5B6472]">{service.tagline}</div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {service.features.slice(0, 5).map((f: string) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 rounded-xl border border-[#E7E1D6] bg-[#F3EEE6] px-4 py-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#0F766E] shrink-0" />
                    <span className="text-sm text-[#111827]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-3xl border border-[#E7E1D6] bg-[#FFFFFF] p-8 sm:p-12 text-center relative shadow-sm">
          <div className="relative">
            <h3 className="font-display text-3xl sm:text-4xl font-semibold text-[#111827]">
              Interested in <span className="text-[#0F766E]">{service.title}</span> for your
              business?
            </h3>
            <p className="mt-3 text-[#5B6472] max-w-xl mx-auto">
              Direct communication with Nasib Rehman • No-obligation project discussion
            </p>
            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <Link
                to="/contact"
                search={{ service: service.title }}
                className="inline-flex items-center gap-2 rounded-full bg-[#0F766E] px-6 py-3 text-sm font-semibold text-[#FFFFFF] shadow-sm hover:bg-[#0D9488] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
              >
                Discuss Your Project <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/923317962794?text=${encodeURIComponent(`Hi Nasib, I'm interested in ${service.title} for my business.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 text-emerald-800 px-6 py-3 text-sm font-medium hover:bg-emerald-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
              >
                <MessageSquare className="h-4 w-4 text-emerald-600" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Other services */}
        <div className="mt-20">
          <div className="mb-6 text-xs uppercase tracking-wider text-[#5B6472] font-semibold">
            Explore more services
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/services/$slug"
                params={{ slug: o.slug }}
                className="group rounded-2xl p-5 border border-[#E7E1D6] bg-[#FFFFFF] transition hover:-translate-y-0.5 hover:border-[#0F766E]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] shadow-sm"
              >
                <div className="inline-grid h-10 w-10 place-items-center rounded-lg bg-[#0F766E] text-white">
                  <o.icon className="h-5 w-5 text-white" />
                </div>
                <div className="mt-3 font-semibold text-[#111827]">{o.title}</div>
                <div className="mt-1 text-xs text-[#5B6472]">{o.tagline}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#0F766E]">
                  Explore{" "}
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
