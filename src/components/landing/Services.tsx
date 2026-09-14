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

        <div className="mt-14 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative"
            >
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="relative h-full flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-7 border border-[#e7e1d6] bg-[#ffffff] shadow-xs transition-all duration-300 hover:border-[#0f766e]/40 hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e]"
              >
                <div>
                  <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[#f3eee6] text-[#0f766e] border border-[#e7e1d6]">
                    <s.icon className="h-6 w-6 text-[#0f766e]" />
                  </div>
                  <h3 className="mt-5 font-display text-xl sm:text-2xl font-bold tracking-tight text-[#111827]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5b6472]">{s.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e7e1d6] inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f766e] group-hover:text-[#0d9488] transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
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
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="inline-flex items-center gap-2 rounded-full border border-[#e7e1d6] bg-[#ffffff] px-3.5 py-1 text-xs text-[#5b6472] shadow-xs"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#0f766e]" />
        <span className="font-medium tracking-wide uppercase text-[11px]">{tag}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-[#111827]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-base sm:text-lg text-[#5b6472] leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
