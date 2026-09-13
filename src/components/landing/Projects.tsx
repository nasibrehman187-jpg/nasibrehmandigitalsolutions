import { motion } from "framer-motion";
import { ArrowRight, Building2, Globe, Mic, Package, Stethoscope } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./Services";

const PROJECTS = [
  {
    icon: Stethoscope,
    title: "SmileCare Dental Clinic",
    service: "Website Development",
    label: "Concept Website",
    labelColor: "bg-[#0f8b8d]/15 text-[#14b8a6] border-[#0f8b8d]/30",
    desc: "A modern dental clinic website concept designed to showcase services, build trust and make it easier for patients to send appointment requests.",
    features: [
      "Responsive Design",
      "Service Pages",
      "Appointment Request Form",
      "Contact Integration",
      "Mobile-Friendly Interface",
    ],
  },
  {
    icon: Mic,
    title: "AI Restaurant Voice Agent",
    service: "AI Voice Agent",
    label: "Concept AI Demo",
    labelColor: "bg-[#0f8b8d]/15 text-[#14b8a6] border-[#0f8b8d]/30",
    desc: "A conversational voice assistant concept designed to answer customer calls, collect structured food orders and confirm order details.",
    features: [
      "Voice Conversation",
      "Menu Assistance",
      "Order Collection",
      "Customer Detail Collection",
      "Order Confirmation Workflow",
    ],
  },
  {
    icon: Stethoscope,
    title: "Dental Clinic Digital System",
    service: "Custom Digital Solution",
    label: "Concept / Demo",
    labelColor: "bg-[#0f8b8d]/15 text-[#14b8a6] border-[#0f8b8d]/30",
    desc: "A digital solution concept combining a professional clinic website with inquiry and appointment workflows.",
    features: [
      "Website",
      "Inquiry Capture",
      "Appointment Requests",
      "Lead Organization",
      "Automation-ready Workflow",
    ],
  },
  {
    icon: Building2,
    title: "Luxury Real Estate Website",
    service: "Website Development",
    label: "Portfolio Build",
    labelColor: "bg-[#d6a84b]/15 text-[#d6a84b] border-[#d6a84b]/30",
    desc: "A premium real estate website built as a portfolio project for luxury property presentation and investor inquiries.",
    features: [
      "Premium Property Presentation",
      "Responsive Design",
      "Inquiry Forms",
      "Modern Interface",
      "Investor-focused Layout",
    ],
  },
  {
    icon: Package,
    title: "Surgical B2B Export Website",
    service: "Website Development",
    label: "Portfolio Build",
    labelColor: "bg-[#d6a84b]/15 text-[#d6a84b] border-[#d6a84b]/30",
    desc: "A reusable B2B website template built for surgical and dental instrument exporters, featuring product presentation, business credentials and RFQ functionality.",
    features: [
      "Product Catalog",
      "Certification Display Areas",
      "RFQ Form",
      "WhatsApp Integration",
      "Mega-menu Navigation",
    ],
  },
];

function ProjectCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 ${className}`}
    >
      {children}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="content-auto relative pt-20 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Projects & Demos"
          title={
            <>
              Selected Projects & <span className="text-gradient">Demonstration Builds</span>
            </>
          }
          subtitle="Explore concept websites, demo systems, and developer portfolio builds showcasing the practical solutions we can engineer for your business."
        />

        {/* Label legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0f8b8d]/30 bg-[#0f8b8d]/10 px-3.5 py-1 text-xs font-medium text-[#f7f3e8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#14b8a6]" />
            Concept / Demo Builds
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d6a84b]/30 bg-[#d6a84b]/10 px-3.5 py-1 text-xs font-medium text-[#f7f3e8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d6a84b]" />
            Portfolio Builds
          </span>
        </div>

        <div className="mt-12 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <ProjectCard className="group relative h-full">
                <div className="glass relative h-full flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-7 border border-[rgba(247,243,232,0.08)] hover:border-[#14b8a6]/30 transition-colors">
                  {/* Hairline top gradient border */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#14b8a6]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-white/[0.04] border border-[rgba(247,243,232,0.10)] shrink-0">
                        <p.icon
                          className={`h-5 w-5 ${
                            p.label === "Portfolio Build" ? "text-[#d6a84b]" : "text-[#14b8a6]"
                          }`}
                        />
                      </div>
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10.5px] font-medium tracking-wide ${p.labelColor}`}
                      >
                        {p.label}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-5">
                      <div className="text-[11px] font-medium text-[#a8b0bf] uppercase tracking-wider">
                        {p.service}
                      </div>
                      <h3 className="mt-1 font-display text-lg font-semibold text-[#f7f3e8]">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#a8b0bf] leading-relaxed">{p.desc}</p>
                    </div>

                    {/* Features */}
                    <div className="mt-5">
                      <div className="text-[10px] uppercase tracking-wider text-[#a8b0bf] font-medium mb-2">
                        Key Elements
                      </div>
                      <ul className="flex flex-wrap gap-1.5">
                        {p.features.map((f) => (
                          <li
                            key={f}
                            className="rounded-full border border-[rgba(247,243,232,0.08)] bg-white/[0.02] px-2.5 py-1 text-[11px] text-[#a8b0bf]"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-4 border-t border-[rgba(247,243,232,0.06)]">
                    <Link
                      to="/contact"
                      search={{ service: p.service, project: p.title }}
                      className="group/cta inline-flex items-center gap-1.5 text-xs font-semibold text-[#14b8a6] hover:text-[#2dd4bf] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6] rounded-md py-1"
                    >
                      Discuss a Similar Solution{" "}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ProjectCard>
            </motion.div>
          ))}
        </div>

        {/* Note about certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 rounded-xl border border-[rgba(247,243,232,0.08)] bg-[#111827] px-5 py-4 text-xs text-[#a8b0bf] leading-relaxed"
        >
          <strong className="text-[#f7f3e8] font-medium">Note:</strong> Projects 1–3 are
          concept/demo builds created to demonstrate capability. Projects 4–5 are portfolio builds
          created by the developer. Any certification badges shown within the Surgical B2B Export
          demo website are part of the sample exporter content and do not represent certifications
          owned by Digital Solution.
        </motion.div>
      </div>
    </section>
  );
}
