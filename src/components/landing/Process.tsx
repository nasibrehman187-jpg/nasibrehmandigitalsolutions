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
    <section id="process" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          tag="How We Work"
          title={
            <>
              A simple <span className="text-gradient">process</span> from start to launch
            </>
          }
          subtitle="A simple process from understanding your requirements to launching the final solution."
        />

        <div className="mt-20 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-violet-500/60 to-transparent" />
          <div className="space-y-12">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col md:flex-row ${i % 2 ? "md:flex-row-reverse" : ""} items-start md:items-center gap-6`}
              >
                <div className="md:w-1/2 pl-12 md:pl-0 md:px-10">
                  <div className="glass rounded-2xl p-6">
                    <div className="font-display text-3xl font-semibold text-gradient">{s.n}</div>
                    <h3 className="mt-2 font-display text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2">
                  <div className="relative h-4 w-4 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 shadow-[0_0_20px_rgba(56,189,248,0.9)]">
                    <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400/50" />
                  </div>
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
