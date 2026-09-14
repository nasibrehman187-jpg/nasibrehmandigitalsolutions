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
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          tag="How We Work"
          title={
            <>
              A Clear, Direct <span className="text-[#0f766e]">Process</span> from Start to Launch
            </>
          }
          subtitle="Every project follows a straightforward, structured path so you know exactly what is happening at each stage."
        />

        {/* Minimalist Typographic Numbered Sequence */}
        <div className="mt-14 sm:mt-18 border-t border-[#e7e1d6]">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group border-b border-[#e7e1d6] py-8 sm:py-10 transition-colors duration-200 hover:bg-[#fffdfc]/50"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-8 items-baseline">
                {/* Numeral */}
                <div className="sm:col-span-2 font-mono text-2xl sm:text-3xl font-semibold text-[#b38a3d]">
                  {s.n}
                </div>

                {/* Step Title */}
                <div className="sm:col-span-4">
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#111827] group-hover:text-[#0f766e] transition-colors">
                    {s.title}
                  </h3>
                </div>

                {/* Step Description */}
                <div className="sm:col-span-6">
                  <p className="text-sm sm:text-base text-[#5b6472] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
