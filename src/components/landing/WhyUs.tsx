import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { ShieldCheck, Laptop, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

const WHY_POINTS = [
  {
    n: "01",
    title: "Clear Project Scope",
    desc: "Every project starts with an agreed scope, transparent deliverables and practical expectations before any build begins.",
    tag: "Scope & Planning",
  },
  {
    n: "02",
    title: "Direct Communication",
    desc: "You communicate directly with Nasib Rehman throughout planning, development, review and handover.",
    tag: "Zero Middlemen",
  },
  {
    n: "03",
    title: "Built for Business Requirements",
    desc: "Websites, automations and assistants are built around how your business works rather than a one-size-fits-all template.",
    tag: "Tailored Engineering",
  },
  {
    n: "04",
    title: "No-Obligation Discussion",
    desc: "Review your requirements and discuss practical solution options before making any project commitments.",
    tag: "Low Risk",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="content-auto relative py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Why Digital Solution"
          title={
            <>
              Why Choose <span className="text-[#087F8C]">Digital Solution?</span>
            </>
          }
          subtitle="A founder-led service dedicated to building practical websites, automations and digital systems for your business."
        />

        {/* Asymmetric Modern Grid Layout */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column — Founder Commitment Card (Deep Navy) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-2xl bg-[#10233F] p-8 sm:p-10 text-white flex flex-col justify-between shadow-lg relative overflow-hidden"
          >
            {/* Ambient decoration */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-[#087F8C]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-300 border border-white/10">
                <ShieldCheck className="h-3.5 w-3.5 text-teal-400" />
                <span>Founder-Led Quality</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                Practical Digital Solutions Built Around Your Business
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                You work directly with Nasib Rehman throughout the project — from understanding the
                requirement to final delivery.
              </p>

              <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-xs text-slate-300 leading-relaxed space-y-2">
                <span className="font-semibold text-white block">Ideal Business Fit:</span>
                <p>
                  Best suited to clinics, real estate businesses and local service businesses
                  looking for a stronger online presence or simpler customer-handling workflows.
                </p>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/10 space-y-3.5">
              <div className="flex items-center gap-3 text-xs text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0" />
                <span>
                  Direct communication with Nasib Rehman • No-obligation project discussion
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-200">
                <Laptop className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Available for remote projects</span>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#087F8C] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-[#066570] transition shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column — 4 Crisp Modern Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_POINTS.map((point, i) => (
              <motion.div
                key={point.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-2xl border border-[#DCE4EC] bg-white p-6 sm:p-7 shadow-xs hover:border-[#087F8C]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-display text-slate-300 group-hover:text-[#087F8C] transition-colors">
                      {point.n}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 rounded-md px-2 py-0.5 border border-slate-200">
                      {point.tag}
                    </span>
                  </div>

                  <h4 className="mt-4 font-display text-lg font-bold text-[#142338] group-hover:text-[#087F8C] transition-colors">
                    {point.title}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-[#526174] leading-relaxed">
                    {point.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-[#087F8C]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#087F8C]" />
                  <span>Founder Assurance</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
