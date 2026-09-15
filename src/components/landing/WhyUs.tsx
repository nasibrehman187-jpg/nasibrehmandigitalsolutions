import { motion } from "framer-motion";
import { SectionHeader } from "./Services";
import { ShieldCheck, Laptop } from "lucide-react";

const WHY_POINTS = [
  {
    n: "01",
    title: "Clear Project Scope",
    desc: "Every project starts with an agreed scope, transparent deliverables and practical expectations before any build begins.",
  },
  {
    n: "02",
    title: "Direct Communication",
    desc: "You communicate directly with Nasib Rehman throughout planning, development, review and handover.",
  },
  {
    n: "03",
    title: "Built for Business Requirements",
    desc: "Websites, automations and assistants are built around how your business works rather than a one-size-fits-all template.",
  },
  {
    n: "04",
    title: "No-Obligation Discussion",
    desc: "Review your requirements and discuss practical solution options before making any project commitments.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="content-auto relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Why Digital Solution"
          title={
            <>
              Why Choose <span className="text-[#0f766e]">Digital Solution?</span>
            </>
          }
          subtitle="A founder-led service dedicated to building practical websites, automations and digital systems for your business."
        />

        {/* Editorial Split Layout */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column — Large Editorial Statement & Ethos */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#111827] leading-[1.15]">
              Practical Digital Solutions Built Around Your Business
            </h3>
            <p className="text-base text-[#5b6472] leading-relaxed">
              You work directly with Nasib Rehman throughout the project — from understanding the
              requirement to final delivery.
            </p>
            <p className="text-sm text-[#5b6472] leading-relaxed">
              Best suited to clinics, real estate businesses and local service businesses looking
              for a stronger online presence or simpler customer-handling workflows.
            </p>

            <div className="pt-4 border-t border-[#e7e1d6] space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-[#111827] font-medium">
                <ShieldCheck className="h-4 w-4 text-[#0f766e] shrink-0" />
                <span>
                  Direct communication with Nasib Rehman • No-obligation project discussion
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#111827] font-medium">
                <Laptop className="h-4 w-4 text-[#b38a3d] shrink-0" />
                <span>Available for remote projects</span>
              </div>
            </div>
          </div>

          {/* Right Column — 4 Numbered Text Blocks with Hairline Dividers */}
          <div className="lg:col-span-7 border-t border-[#e7e1d6]">
            {WHY_POINTS.map((point, i) => (
              <motion.div
                key={point.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group border-b border-[#e7e1d6] py-7 sm:py-8 transition-colors duration-200"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline">
                  <span className="sm:col-span-2 text-sm sm:text-base font-medium text-[#111827]/40">
                    {point.n}
                  </span>
                  <div className="sm:col-span-10">
                    <h4 className="font-display text-lg sm:text-xl font-medium text-[#111827] group-hover:text-[#0f766e] transition-colors">
                      {point.title}
                    </h4>
                    <p className="mt-2 text-sm text-[#5b6472] leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
