import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Building2, Globe, Mic, Package, Stethoscope } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./Services";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const PROJECTS = [
  {
    icon: Stethoscope,
    title: "SmileCare Dental Clinic",
    service: "Website Development",
    label: "Concept Website",
    labelColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    desc: "A modern dental clinic website concept designed to showcase services, build trust and make it easier for patients to send appointment requests.",
    features: [
      "Responsive Design",
      "Service Pages",
      "Appointment Request Form",
      "Contact Integration",
      "Mobile-Friendly Interface",
    ],
    grad: "from-cyan-500/20 to-blue-500/10",
  },
  {
    icon: Mic,
    title: "AI Restaurant Voice Agent",
    service: "AI Voice Agent",
    label: "Concept AI Demo",
    labelColor: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    desc: "A conversational voice assistant concept designed to answer customer calls, collect structured food orders and confirm order details.",
    features: [
      "Voice Conversation",
      "Menu Assistance",
      "Order Collection",
      "Customer Detail Collection",
      "Order Confirmation Workflow",
    ],
    grad: "from-violet-500/20 to-fuchsia-500/10",
  },
  {
    icon: Stethoscope,
    title: "Dental Clinic Digital System",
    service: "Custom Digital Solution",
    label: "Concept / Demo",
    labelColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    desc: "A digital solution concept combining a professional clinic website with inquiry and appointment workflows.",
    features: [
      "Website",
      "Inquiry Capture",
      "Appointment Requests",
      "Lead Organization",
      "Automation-ready Workflow",
    ],
    grad: "from-emerald-500/20 to-cyan-500/10",
  },
  {
    icon: Building2,
    title: "Luxury Real Estate Website",
    service: "Website Development",
    label: "Portfolio Build",
    labelColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    desc: "A premium real estate website built as a portfolio project for luxury property presentation and investor inquiries.",
    features: [
      "Premium Property Presentation",
      "Responsive Design",
      "Inquiry Forms",
      "Modern Interface",
      "Investor-focused Layout",
    ],
    grad: "from-amber-500/20 to-rose-500/10",
  },
  {
    icon: Package,
    title: "Surgical B2B Export Website",
    service: "Website Development",
    label: "Portfolio Build",
    labelColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    desc: "A reusable B2B website template built for surgical and dental instrument exporters, featuring product presentation, business credentials and RFQ functionality.",
    features: [
      "Product Catalog",
      "Certification Display Areas",
      "RFQ Form",
      "WhatsApp Integration",
      "Mega-menu Navigation",
    ],
    grad: "from-sky-500/20 to-indigo-500/10",
  },
];

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 15 });

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative pt-24 pb-20 sm:pt-28 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Projects"
          title={
            <>
              Projects & <span className="text-gradient">Demos</span>
            </>
          }
          subtitle="Selected projects and demonstration systems showcasing the type of digital solutions we can build for businesses."
        />

        {/* Label legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-300">
            Concept Website / Concept AI Demo — design concepts and demo builds
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-amber-300">
            Portfolio Build — built by the developer as practice projects
          </span>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <TiltCard className="group relative h-full">
                <div className="glass relative h-full overflow-hidden rounded-2xl p-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${p.grad} opacity-60 transition-opacity group-hover:opacity-100`}
                  />
                  <div className="relative flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="inline-grid h-10 w-10 place-items-center rounded-xl bg-white/10 border border-white/10 shrink-0">
                        <p.icon className="h-5 w-5 text-cyan-300" />
                      </div>
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${p.labelColor}`}
                      >
                        {p.label}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-5 flex-1">
                      <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>

                    {/* Features */}
                    <div className="mt-5">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">
                        Features
                      </div>
                      <ul className="flex flex-wrap gap-1.5">
                        {p.features.map((f) => (
                          <li
                            key={f}
                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="mt-5 pt-4 border-t border-white/5">
                      <Link
                        to="/contact"
                        search={{ service: p.service, project: p.title }}
                        className="group/cta inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] rounded-md py-1"
                      >
                        Discuss a Similar Solution{" "}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Note about certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-xs text-muted-foreground"
        >
          <strong className="text-foreground/80">Note:</strong> Projects 1–3 are concept/demo builds
          created to demonstrate capability. Projects 4–5 are portfolio builds created by the
          developer. Any certification badges shown within the Surgical B2B Export demo website are
          part of the sample exporter content and do not represent certifications owned by Digital
          Solution.
        </motion.div>
      </div>
    </section>
  );
}
