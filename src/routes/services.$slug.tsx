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
    return {
      meta: [
        { title: `${s.title} — Digital Solution by Nasib Rehman` },
        { name: "description", content: s.tagline },
        { property: "og:title", content: `${s.title} — Digital Solution by Nasib Rehman` },
        { property: "og:description", content: s.tagline },
      ],
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
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition"
        >
          <ArrowLeft className="h-4 w-4" /> All services
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className={`inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${service.color} shadow-[0_10px_40px_-10px_rgba(56,189,248,0.6)]`}
            >
              <service.icon className="h-7 w-7 text-white" />
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              {service.title}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">{service.tagline}</p>
            <p className="mt-4 text-sm text-muted-foreground max-w-xl">{service.desc}</p>

            <div className="mt-6 max-w-xl">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                Capabilities
              </div>
              <ul className="grid gap-2 sm:grid-cols-2">
                {service.features.map((f: string) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${service.color} px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90`}
              >
                Discuss Your Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur-md hover:bg-white/10"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div
              className={`absolute -inset-6 rounded-3xl bg-gradient-to-br ${service.color} opacity-20 blur-3xl`}
            />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <span
                  className={`inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${service.color} shrink-0`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </span>
                <div>
                  <div className="font-display text-xl font-semibold">{service.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{service.tagline}</div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {service.features.slice(0, 5).map((f: string) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-20 glass rounded-3xl p-8 sm:p-12 text-center overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="relative">
            <h3 className="font-display text-3xl sm:text-4xl font-semibold">
              Interested in <span className="text-gradient">{service.title}</span> for your
              business?
            </h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Send your requirements and we can discuss what's needed for your project.
            </p>
            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white"
              >
                Discuss Your Project <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/923062320099"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Other services */}
        <div className="mt-20">
          <div className="mb-6 text-xs uppercase tracking-wider text-muted-foreground">
            Explore more services
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/services/$slug"
                params={{ slug: o.slug }}
                className="glass group rounded-2xl p-5 transition hover:-translate-y-0.5"
              >
                <div
                  className={`inline-grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br ${o.color}`}
                >
                  <o.icon className="h-5 w-5 text-white" />
                </div>
                <div className="mt-3 font-semibold">{o.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{o.tagline}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300">
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
