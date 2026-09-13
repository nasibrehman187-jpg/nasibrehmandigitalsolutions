import { motion } from "framer-motion";
import { SectionHeader } from "./Services";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    desc: "We discuss your business, requirements, challenges and the result you want to achieve.",
  },
  {
    n: "02",
    title: "Plan",
    desc: "We define the required features, scope, technology and project cost before development begins.",
  },
  {
    n: "03",
    title: "Build",
    desc: "The website, automation or AI solution is developed according to the approved requirements.",
  },
  {
    n: "04",
    title: "Review",
    desc: "You review the project and agreed revisions are completed before launch.",
  },
  {
    n: "05",
    title: "Launch",
    desc: "After final approval and payment, the completed solution is deployed and handed over.",
  },
];

export function Process() {
  return (
    <section id="process" className="content-auto relative pt-20 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          tag="How We Work"
          title={
            <>
              A Clear, Direct <span className="text-gradient">Process</span> from Start to Launch
            </>
          }
          subtitle="Every project follows a straightforward, structured path so you know exactly what is happening at each stage."
        />

        <div className="mt-16 sm:mt-20 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#14b8a6]/50 via-[#d6a84b]/30 to-transparent" />
          <div className="space-y-10 sm:space-y-12">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45 }}
                className={`relative flex flex-col md:flex-row ${i % 2 ? "md:flex-row-reverse" : ""} items-start md:items-center gap-6`}
              >
                <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="glass relative rounded-2xl p-6 sm:p-7 border border-[rgba(247,243,232,0.08)] hover:border-[#14b8a6]/30 transition-colors">
                    {/* Hairline top gradient border */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#14b8a6]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="font-display text-2xl sm:text-3xl font-bold text-[#14b8a6]">
                      {s.n}
                    </div>
                    <h3 className="mt-2 font-display text-lg sm:text-xl font-semibold text-[#f7f3e8]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#a8b0bf] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-br from-[#14b8a6] to-[#0f8b8d] shadow-[0_0_12px_rgba(20,184,166,0.6)] border-2 border-[#0b1220]" />
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
