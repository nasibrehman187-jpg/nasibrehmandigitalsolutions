import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <section id="services" className="content-auto relative pt-24 pb-20 sm:pt-28 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Services"
          title={
            <>
              Solutions Built Around <span className="text-[#087F8C]">Your Business</span>
            </>
          }
          subtitle="From practical business websites to workflow automations, we build practical digital solutions designed around real business needs."
        />

        <div className="mt-14 sm:mt-18 space-y-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group rounded-2xl border border-[#DCE4EC] bg-white p-6 sm:p-8 shadow-xs hover:border-[#087F8C]/40 hover:shadow-md transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-1 flex items-center">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-sm font-bold text-slate-400 group-hover:bg-[#087F8C] group-hover:text-white transition-colors">
                    0{i + 1}
                  </span>
                </div>

                <div className="lg:col-span-3">
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#142338] group-hover:text-[#087F8C] transition-colors">
                    {s.title}
                  </h3>
                </div>

                <div className="lg:col-span-6">
                  <p className="text-base text-[#526174] leading-relaxed">{s.desc}</p>
                  {s.features && s.features.length > 0 && (
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {s.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-lg bg-slate-50 border border-slate-200/80 px-3 py-1 text-sm font-medium text-[#142338]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="lg:col-span-2 lg:text-right flex items-center lg:justify-end pt-2 lg:pt-0">
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-[#142338] group-hover:bg-[#087F8C] group-hover:text-white group-hover:border-[#087F8C] transition-all"
                  >
                    <span>View Service</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { SectionHeader } from "./SectionHeader";
