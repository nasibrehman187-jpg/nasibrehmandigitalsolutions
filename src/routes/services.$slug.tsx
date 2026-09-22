import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { SERVICES, getService } from "@/lib/services-data";
import { SectionHeader } from "@/components/landing/Services";
import { getPricingCategoryForService } from "@/lib/pricing-categories";

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

function ServiceDiagram({ slug }: { slug: string }) {
  if (slug === "website-development") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-[#FAFCFF] p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F8C]">
            Front-End Architecture
          </span>
          <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
            Next.js / Vite / TS
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
          <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-2xs">
            <span className="font-bold text-[#142338] block">UI / UX</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">Mobile-First</span>
          </div>
          <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-2xs">
            <span className="font-bold text-[#142338] block">Speed</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">Core Web Vitals</span>
          </div>
          <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-2xs">
            <span className="font-bold text-[#142338] block">Forms</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">Lead Capture</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "ai-voice-agents") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-[#FAFCFF] p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Voice Telephony Flow
          </span>
          <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
            Vapi / Retell AI
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
          <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-2xs">
            <span className="font-bold text-[#142338] block">Inbound Call</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">&lt;500ms Latency</span>
          </div>
          <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-2xs">
            <span className="font-bold text-[#142338] block">AI Knowledge</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">Structured Prompt</span>
          </div>
          <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-2xs">
            <span className="font-bold text-[#142338] block">Booking Sync</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">Webhook Action</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "ai-chatbots") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-[#FAFCFF] p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F8C]">
            Conversational Agent Flow
          </span>
          <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
            GPT-4o / Claude
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
          <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-2xs">
            <span className="font-bold text-[#142338] block">Visitor Chat</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">24/7 Availability</span>
          </div>
          <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-2xs">
            <span className="font-bold text-[#142338] block">FAQ Retrieval</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">Instant Answers</span>
          </div>
          <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-2xs">
            <span className="font-bold text-[#142338] block">Lead Intake</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">Sheets / CRM</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "ai-automation") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-[#FAFCFF] p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
            Workflow Automation Pipeline
          </span>
          <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
            n8n / Webhooks
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
          <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-2xs">
            <span className="font-bold text-[#142338] block">Trigger Node</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">Form / Email / API</span>
          </div>
          <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-2xs">
            <span className="font-bold text-[#142338] block">Logic Branch</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">AI Processing</span>
          </div>
          <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-2xs">
            <span className="font-bold text-[#142338] block">Execution Sync</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">Instant Routing</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-[#FAFCFF] p-6 shadow-xs space-y-4">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#087F8C]">
          Unified Multi-System Setup
        </span>
        <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
          Custom Stack
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
        <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-2xs">
          <span className="font-bold text-[#142338] block">Web Frontend</span>
          <span className="text-[10px] text-slate-500 mt-0.5 block">Customer Portal</span>
        </div>
        <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-2xs">
          <span className="font-bold text-[#142338] block">AI & Workflows</span>
          <span className="text-[10px] text-slate-500 mt-0.5 block">Integrated Engines</span>
        </div>
        <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-2xs">
          <span className="font-bold text-[#142338] block">Data Sync</span>
          <span className="text-[10px] text-slate-500 mt-0.5 block">Unified Operations</span>
        </div>
      </div>
    </div>
  );
}

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#526174] hover:text-[#142338] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C] rounded py-1"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All Services
        </Link>

        {/* Editorial Service Hero */}
        <div className="mt-8 border-b border-[#DCE4EC] pb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#087F8C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#087F8C]" />
              <span>Service Details</span>
            </div>
            <h1 className="mt-4 font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#142338]">
              {service.title}
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-[#087F8C] font-semibold leading-relaxed max-w-3xl">
              {service.tagline}
            </p>
            <p className="mt-3 text-sm sm:text-base text-[#526174] max-w-3xl leading-relaxed">
              {service.desc}
            </p>

            {/* Visual System Architecture Diagram */}
            <div className="mt-8 max-w-2xl">
              <ServiceDiagram slug={service.slug} />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                search={{ service: service.title }}
                className="inline-flex items-center gap-2 rounded-xl bg-[#087F8C] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-[#066570] transition min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/pricing"
                search={{ category: getPricingCategoryForService(service.slug) }}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-[#142338] hover:bg-slate-50 transition min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
              >
                <span>View Pricing</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Capabilities List */}
        <div className="py-14 sm:py-16 border-b border-[#DCE4EC]">
          <div className="text-xs uppercase tracking-wider text-[#142338] font-bold mb-6">
            Key Capabilities & Deliverables
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {service.features.map((f: string, i: number) => (
              <div
                key={f}
                className="flex items-center gap-3.5 py-3.5 px-4 rounded-xl border border-[#DCE4EC] bg-white text-xs sm:text-sm text-[#142338] shadow-2xs"
              >
                <span className="grid h-6 w-6 place-items-center rounded-md bg-teal-50 text-xs font-bold text-[#087F8C] shrink-0">
                  0{i + 1}
                </span>
                <span className="font-semibold">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="my-14 sm:my-18 rounded-2xl border border-[#DCE4EC] bg-white p-8 sm:p-12 text-center relative shadow-xs">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#142338]">
            Interested in <span className="text-[#087F8C]">{service.title}</span> for your business?
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-[#526174] max-w-xl mx-auto leading-relaxed">
            Direct communication with Nasib Rehman • No-obligation project discussion
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Link
              to="/contact"
              search={{ service: service.title }}
              className="inline-flex items-center gap-2 rounded-xl bg-[#087F8C] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-[#066570] transition min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/923317962794?text=${encodeURIComponent(`Hi Nasib, I'm interested in ${service.title} for my business.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-50 text-emerald-800 px-6 py-3 text-xs sm:text-sm font-semibold hover:bg-emerald-100 transition min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
            >
              <MessageSquare className="h-4 w-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Explore more services */}
        <div>
          <div className="text-xs uppercase tracking-wider text-[#142338] font-bold mb-6">
            Explore more services
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/services/$slug"
                params={{ slug: o.slug }}
                className="group rounded-2xl p-5 border border-[#DCE4EC] bg-white transition hover:border-[#087F8C]/40 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="font-display text-base font-bold text-[#142338] group-hover:text-[#087F8C] transition-colors">
                    {o.title}
                  </div>
                  <div className="mt-1 text-xs text-[#526174] leading-relaxed line-clamp-2">
                    {o.tagline}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 inline-flex items-center gap-1 text-xs font-semibold text-[#087F8C]">
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
