import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    desc: "We discuss your business, requirements, challenges and the result you want to achieve.",
    highlight: "Initial Discovery",
  },
  {
    n: "02",
    title: "Plan",
    desc: "We define the required features, scope, technology and project cost before development begins.",
    highlight: "Fixed Scope & Pricing",
  },
  {
    n: "03",
    title: "Build",
    desc: "The website, automation or AI solution is developed according to the approved requirements.",
    highlight: "Dedicated Engineering",
  },
  {
    n: "04",
    title: "Review",
    desc: "You review the project and agreed revisions are completed before launch.",
    highlight: "Refinement & Testing",
  },
  {
    n: "05",
    title: "Launch",
    desc: "After final approval and payment, the completed solution is deployed and handed over.",
    highlight: "Production Handover",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="content-auto relative pt-20 pb-20 sm:pt-24 sm:pb-28 bg-[#F8FAFC]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          tag="How We Work"
          title={
            <>
              A Clear, Direct <span className="text-[#087F8C]">Process</span> from Start to Launch
            </>
          }
          subtitle="Every project follows a straightforward, structured path so you know exactly what is happening at each stage."
        />

        {/* Modern Connected Stepper Flow */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-[#DCE4EC] bg-white p-6 shadow-xs hover:border-[#087F8C]/40 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#087F8C]/10 text-xs font-bold text-[#087F8C] group-hover:bg-[#087F8C] group-hover:text-white transition-colors">
                    {s.n}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Step {i + 1}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#087F8C]">
                    {s.highlight}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-[#142338]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#526174] leading-relaxed">{s.desc}</p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-medium text-slate-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#087F8C]" />
                <span>Verified Milestones</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process CTA Footer */}
        <div className="mt-12 rounded-2xl border border-[#DCE4EC] bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h4 className="font-display text-base sm:text-lg font-bold text-[#142338]">
              Ready to start your project?
            </h4>
            <p className="text-xs sm:text-sm text-[#526174] mt-0.5">
              Direct communication with Nasib Rehman • No-obligation project discussion
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#087F8C] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-[#066570] transition shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C] shrink-0"
          >
            <span>Start Step 01</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
