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
              A Clear, Direct <span className="text-[#0f766e]">Process</span> from Start to Launch
            </>
          }
          subtitle="Every project follows a straightforward, structured path so you know exactly what is happening at each stage."
        />

        <div className="mt-16 sm:mt-20 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#e7e1d6]" />
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
                  <div className="relative rounded-2xl p-6 sm:p-7 border border-[#e7e1d6] bg-[#ffffff] shadow-xs transition-all duration-300 hover:border-[#0f766e]/40 hover:-translate-y-0.5 hover:shadow-sm">
                    <div className="font-display text-2xl sm:text-3xl font-bold text-[#0f766e]">
                      {s.n}
                    </div>
                    <h3 className="mt-2 font-display text-lg sm:text-xl font-semibold text-[#111827]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#5b6472] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2">
                  <div className="h-4 w-4 rounded-full bg-[#ffffff] border-2 border-[#0f766e] shadow-xs" />
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
