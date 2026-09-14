import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services-data";

export function Services() {
  return (
    <section id="services" className="content-auto relative pt-24 pb-20 sm:pt-28 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Services"
          title={
            <>
              Solutions Built Around <span className="text-[#0f766e]">Your Business</span>
            </>
          }
          subtitle="From professional websites to intelligent automation, we build practical digital solutions designed around real business needs."
        />

        <div className="mt-14 sm:mt-18 border-t border-[#e7e1d6]">
          {SERVICES.map((s, i) => (
            <div
              key={s.slug}
              className="group border-b border-[#e7e1d6] py-8 sm:py-10 transition-colors duration-200 hover:bg-[#fffdfc]/60"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
                <div className="lg:col-span-1 font-mono text-sm sm:text-base font-semibold text-[#b38a3d]">
                  0{i + 1}
                </div>

                <div className="lg:col-span-4">
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#111827] group-hover:text-[#0f766e] transition-colors">
                    {s.title}
                  </h3>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-sm sm:text-base text-[#5b6472] leading-relaxed">{s.desc}</p>
                  {s.features && s.features.length > 0 && (
                    <div className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-[#5b6472]">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#111827] font-semibold">
                        DELIVERABLES:
                      </span>
                      {s.features.map((f, fi) => (
                        <span key={f} className="inline-flex items-center">
                          <span className="font-medium text-[#111827]">{f}</span>
                          {fi < (s.features?.length ?? 0) - 1 && (
                            <span className="ml-2.5 text-[#e7e1d6] select-none">•</span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="lg:col-span-2 lg:text-right flex items-center lg:justify-end pt-2 lg:pt-1">
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0f766e] group-hover:text-[#0d9488] transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  align = "center",
}: {
  tag: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0f766e]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#b38a3d]" />
        <span className="tracking-widest text-[11px]">{tag}</span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-[#111827]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#5b6472] leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
