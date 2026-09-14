import { motion } from "framer-motion";
import { ArrowRight, Globe, Mic, Stethoscope, Building2, Package, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./Services";

export function Projects() {
  return (
    <section id="projects" className="content-auto relative pt-20 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Projects & Demos"
          title={
            <>
              Selected Projects & <span className="text-[#0f766e]">Demonstration Builds</span>
            </>
          }
          subtitle="A mix of portfolio builds and concept demonstration projects showing practical website and AI solutions."
        />

        {/* Studio Legend / Classification */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-[#5b6472]">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0f766e]" />
            <span className="text-xs font-medium text-[#111827]">
              Concept / Demo Builds (Capabilities Showcase)
            </span>
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b38a3d]" />
            <span className="text-xs font-medium text-[#111827]">Developer Portfolio Builds</span>
          </span>
        </div>

        {/* Editorial Case Study Flow */}
        <div className="mt-14 sm:mt-20 space-y-16 sm:space-y-20">
          {/* PROJECT 1 — SmileCare Dental Clinic (Split: Visual Left, Narrative Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#e7e1d6] pt-12"
          >
            {/* Visual Preview Frame */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-[#e7e1d6] bg-[#ffffff] shadow-xs">
                {/* Browser bar */}
                <div className="flex items-center justify-between border-b border-[#e7e1d6] bg-[#f7f3ec]/60 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#e7e1d6]" />
                    <span className="h-2 w-2 rounded-full bg-[#e7e1d6]" />
                    <span className="h-2 w-2 rounded-full bg-[#e7e1d6]" />
                  </div>
                  <span className="text-[11px] text-[#5b6472]">smilecare-clinic.preview</span>
                </div>
                {/* Mockup Canvas */}
                <div className="p-6 sm:p-8 bg-[#fffdfc] space-y-5">
                  <div className="flex items-center justify-between border-b border-[#e7e1d6] pb-3.5">
                    <div className="flex items-center gap-2">
                      <Stethoscope className="h-4 w-4 text-[#0f766e]" />
                      <span className="font-display text-sm font-semibold text-[#111827]">
                        SmileCare Clinic
                      </span>
                    </div>
                    <span className="text-[11px] text-[#5b6472]">Mon–Sat 9am–7pm</span>
                  </div>
                  <div>
                    <div className="text-[10.5px] uppercase tracking-wider font-semibold text-[#0f766e]">
                      Preventative & Cosmetic Dentistry
                    </div>
                    <h4 className="mt-2 font-display text-lg sm:text-xl font-medium text-[#111827] leading-snug">
                      Gentle, modern dental treatments for your whole family.
                    </h4>
                    <p className="mt-2 text-xs text-[#5b6472] leading-relaxed">
                      Comprehensive oral diagnostics, restorative care, and cosmetic smile design in
                      a welcoming setting.
                    </p>
                  </div>
                  <div className="flex gap-2.5 pt-1">
                    <div className="rounded-md bg-[#0f766e] px-3.5 py-1.5 text-xs font-semibold text-white">
                      Request Visit
                    </div>
                    <div className="rounded-md border border-[#e7e1d6] px-3.5 py-1.5 text-xs font-medium text-[#111827]">
                      Our Treatments
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-medium text-[#111827]/50">01</span>
                <span className="text-[#e7e1d6]">•</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0f766e]">
                  Website Development
                </span>
                <span className="text-[#e7e1d6]">•</span>
                <span className="text-xs font-medium uppercase tracking-wider text-[#b38a3d]">
                  Concept Website
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                SmileCare Dental Clinic
              </h3>
              <p className="text-sm sm:text-base text-[#5b6472] leading-relaxed">
                A modern dental clinic website concept designed to showcase services, build trust
                and make it easier for patients to send appointment requests.
              </p>
              <div className="pt-2">
                <div className="text-[11px] uppercase tracking-wider text-[#111827] font-semibold mb-1.5">
                  Key Elements:
                </div>
                <div className="text-xs text-[#5b6472] leading-relaxed">
                  Responsive Design · Service Pages · Appointment Request Form · Contact Integration
                  · Mobile-Friendly Interface
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/contact"
                  search={{ service: "Website Development", project: "SmileCare Dental Clinic" }}
                  className="group/cta inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f766e] hover:text-[#0d9488] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e] rounded py-1"
                >
                  Discuss a Similar Solution
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 2 — AI Restaurant Voice Agent (Reverse Split: Narrative Left, Visual Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#e7e1d6] pt-12"
          >
            {/* Narrative Content */}
            <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-medium text-[#111827]/50">02</span>
                <span className="text-[#e7e1d6]">•</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0f766e]">
                  AI Voice Agent
                </span>
                <span className="text-[#e7e1d6]">•</span>
                <span className="text-xs font-medium uppercase tracking-wider text-[#b38a3d]">
                  Concept AI Demo
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                AI Restaurant Voice Agent
              </h3>
              <p className="text-sm sm:text-base text-[#5b6472] leading-relaxed">
                A conversational voice assistant concept designed to answer customer calls, collect
                structured food orders and confirm order details.
              </p>
              <div className="pt-2">
                <div className="text-[11px] uppercase tracking-wider text-[#111827] font-semibold mb-1.5">
                  Key Elements:
                </div>
                <div className="text-xs text-[#5b6472] leading-relaxed">
                  Voice Conversation · Menu Assistance · Order Collection · Customer Detail
                  Collection · Order Confirmation Workflow
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/contact"
                  search={{ service: "AI Voice Agent", project: "AI Restaurant Voice Agent" }}
                  className="group/cta inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f766e] hover:text-[#0d9488] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e] rounded py-1"
                >
                  Discuss a Similar Solution
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Editorial Case-Study Composition (Priority C: Honest approved copy, no fake telephony/browser data) */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-2xl border border-[#e7e1d6] bg-[#ffffff] p-6 sm:p-8 shadow-xs space-y-5">
                <div className="flex items-center justify-between border-b border-[#e7e1d6] pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#0f766e]/10 text-[#0f766e]">
                      <Mic className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="font-display text-base font-medium text-[#111827]">
                        AI Restaurant Voice Agent
                      </div>
                      <div className="text-[11px] text-[#5b6472]">Demonstration Case Study</div>
                    </div>
                  </div>
                  <span className="rounded-md border border-[#e7e1d6] bg-[#f7f3ec]/60 px-2.5 py-1 text-[11px] font-medium text-[#b38a3d]">
                    Concept AI Demo
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-xs text-[#5b6472] leading-relaxed">
                    Designed as an AI capability demonstration to explore automated conversational
                    telephone handling for hospitality businesses.
                  </p>

                  <div className="rounded-xl border border-[#e7e1d6] bg-[#f7f3ec]/40 p-4 space-y-3">
                    <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[#111827]">
                      Demonstrated Capabilities
                    </div>
                    <ul className="space-y-2 text-xs text-[#5b6472]">
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0f766e] mt-1.5 shrink-0" />
                        <span>
                          <strong className="text-[#111827] font-medium">
                            Inbound Call Handling:
                          </strong>{" "}
                          Conversational responses to customer inquiries and menu questions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0f766e] mt-1.5 shrink-0" />
                        <span>
                          <strong className="text-[#111827] font-medium">
                            Structured Order Collection:
                          </strong>{" "}
                          Capturing requested food items, quantities and delivery preferences
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0f766e] mt-1.5 shrink-0" />
                        <span>
                          <strong className="text-[#111827] font-medium">
                            Order Confirmation Workflow:
                          </strong>{" "}
                          Verifying customer details before concluding the conversation
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#e7e1d6] text-[11px] text-[#5b6472]">
                  <span>AI Voice Agent Demonstration</span>
                  <span className="text-[#b38a3d] font-medium">Concept Build</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 3 — Dental Clinic Digital System (Full-Width Featured Block) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="border-t border-[#e7e1d6] pt-12"
          >
            <div className="rounded-2xl border border-[#e7e1d6] bg-[#ffffff] p-8 sm:p-10 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-medium text-[#111827]/50">03</span>
                    <span className="text-[#e7e1d6]">•</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0f766e]">
                      Custom Digital Solution
                    </span>
                    <span className="text-[#e7e1d6]">•</span>
                    <span className="text-xs font-medium uppercase tracking-wider text-[#b38a3d]">
                      Concept / Demo
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    Dental Clinic Digital System
                  </h3>
                  <p className="text-sm sm:text-base text-[#5b6472] leading-relaxed">
                    A digital solution concept combining a professional clinic website with inquiry
                    and appointment workflows.
                  </p>
                  <div className="pt-2">
                    <div className="text-[11px] uppercase tracking-wider text-[#111827] font-semibold mb-1.5">
                      Key Elements:
                    </div>
                    <div className="text-xs text-[#5b6472] leading-relaxed">
                      Website · Inquiry Capture · Appointment Requests · Lead Organization ·
                      Automation-ready Workflow
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link
                      to="/contact"
                      search={{
                        service: "Custom Digital Solution",
                        project: "Dental Clinic Digital System",
                      }}
                      className="group/cta inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f766e] hover:text-[#0d9488] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e] rounded py-1"
                    >
                      Discuss a Similar Solution
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-1" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-xl border border-[#e7e1d6] bg-[#f7f3ec]/50 p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#e7e1d6]">
                      <span className="text-xs font-semibold tracking-wide text-[#111827] uppercase">
                        Workflow Architecture
                      </span>
                      <Sparkles className="h-3.5 w-3.5 text-[#b38a3d]" />
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-lg border border-[#e7e1d6] bg-[#ffffff] p-3.5 space-y-1">
                        <div className="flex items-center justify-between text-xs font-medium text-[#111827]">
                          <span>01 · Website Interface</span>
                          <span className="text-[10.5px] text-[#0f766e] font-medium">
                            Front-End
                          </span>
                        </div>
                        <p className="text-[11px] text-[#5b6472] leading-snug">
                          Professional clinic presentation showcasing services, practice hours and
                          doctor profiles.
                        </p>
                      </div>

                      <div className="rounded-lg border border-[#e7e1d6] bg-[#ffffff] p-3.5 space-y-1">
                        <div className="flex items-center justify-between text-xs font-medium text-[#111827]">
                          <span>02 · Inquiry & Intake Form</span>
                          <span className="text-[10.5px] text-[#0f766e] font-medium">
                            Lead Capture
                          </span>
                        </div>
                        <p className="text-[11px] text-[#5b6472] leading-snug">
                          Captures patient consultation requests and preferred appointment slots.
                        </p>
                      </div>

                      <div className="rounded-lg border border-[#e7e1d6] bg-[#ffffff] p-3.5 space-y-1">
                        <div className="flex items-center justify-between text-xs font-medium text-[#111827]">
                          <span>03 · Notification & Sync</span>
                          <span className="text-[10.5px] text-[#b38a3d] font-medium">
                            Automation
                          </span>
                        </div>
                        <p className="text-[11px] text-[#5b6472] leading-snug">
                          Structured notification routing to clinic staff and automated confirmation
                          messaging.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 text-[10.5px] text-[#5b6472] text-center border-t border-[#e7e1d6]">
                      Demonstration concept showing integration between web intake and practice
                      workflows
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 4 — Luxury Real Estate Website (Split: Visual Left, Narrative Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#e7e1d6] pt-12"
          >
            {/* Visual Preview Frame */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-[#e7e1d6] bg-[#ffffff] shadow-xs">
                <div className="flex items-center justify-between border-b border-[#e7e1d6] bg-[#f7f3ec]/60 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#e7e1d6]" />
                    <span className="h-2 w-2 rounded-full bg-[#e7e1d6]" />
                    <span className="h-2 w-2 rounded-full bg-[#e7e1d6]" />
                  </div>
                  <span className="text-[11px] text-[#5b6472]">realestate-portfolio.preview</span>
                </div>
                <div className="p-6 sm:p-8 bg-[#fffdfc] space-y-5">
                  <div className="flex items-center justify-between border-b border-[#e7e1d6] pb-3.5">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-[#b38a3d]" />
                      <span className="font-display text-sm font-semibold text-[#111827]">
                        Luxury Real Estate Website
                      </span>
                    </div>
                    <span className="text-[11px] text-[#b38a3d] font-medium">Portfolio Build</span>
                  </div>

                  {/* Property Card Mockup */}
                  <div className="rounded-xl border border-[#e7e1d6] bg-[#f7f3ec]/40 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0f766e]">
                        Curated Portfolio
                      </span>
                      <span className="text-xs font-medium text-[#111827]">
                        Sample Presentation
                      </span>
                    </div>
                    <h4 className="font-display text-base font-medium text-[#111827]">
                      Curated Architectural Residences & Estates
                    </h4>
                    <div className="flex flex-wrap gap-3 text-xs text-[#5b6472] border-t border-[#e7e1d6]/70 pt-2.5">
                      <span>Property Showcase</span>
                      <span>•</span>
                      <span>Investor Layout</span>
                      <span>•</span>
                      <span>Inquiry Forms</span>
                      <span>•</span>
                      <span>Responsive UI</span>
                    </div>
                  </div>

                  <div className="flex gap-2.5 pt-1">
                    <div className="rounded-md bg-[#0f766e] px-3.5 py-1.5 text-xs font-semibold text-white">
                      Request Similar Build
                    </div>
                    <div className="rounded-md border border-[#e7e1d6] px-3.5 py-1.5 text-xs font-medium text-[#111827]">
                      View Structure
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-medium text-[#111827]/50">04</span>
                <span className="text-[#e7e1d6]">•</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0f766e]">
                  Website Development
                </span>
                <span className="text-[#e7e1d6]">•</span>
                <span className="text-xs font-medium uppercase tracking-wider text-[#b38a3d]">
                  Portfolio Build
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                Luxury Real Estate Website
              </h3>
              <p className="text-sm sm:text-base text-[#5b6472] leading-relaxed">
                A premium real estate website built as a portfolio project for luxury property
                presentation and investor inquiries.
              </p>
              <div className="pt-2">
                <div className="text-[11px] uppercase tracking-wider text-[#111827] font-semibold mb-1.5">
                  Key Elements:
                </div>
                <div className="text-xs text-[#5b6472] leading-relaxed">
                  Premium Property Presentation · Responsive Design · Inquiry Forms · Modern
                  Interface · Investor-focused Layout
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/contact"
                  search={{
                    service: "Website Development",
                    project: "Luxury Real Estate Website",
                  }}
                  className="group/cta inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f766e] hover:text-[#0d9488] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e] rounded py-1"
                >
                  Discuss a Similar Solution
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 5 — Surgical B2B Export Website (Reverse Split: Narrative Left, Visual Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#e7e1d6] pt-12"
          >
            {/* Narrative Content */}
            <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-medium text-[#111827]/50">05</span>
                <span className="text-[#e7e1d6]">•</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0f766e]">
                  Website Development
                </span>
                <span className="text-[#e7e1d6]">•</span>
                <span className="text-xs font-medium uppercase tracking-wider text-[#b38a3d]">
                  Portfolio Build
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                Surgical B2B Export Website
              </h3>
              <p className="text-sm sm:text-base text-[#5b6472] leading-relaxed">
                A reusable B2B website template built for surgical and dental instrument exporters,
                featuring product presentation, business credentials and RFQ functionality.
              </p>
              <div className="pt-2">
                <div className="text-[11px] uppercase tracking-wider text-[#111827] font-semibold mb-1.5">
                  Key Elements:
                </div>
                <div className="text-xs text-[#5b6472] leading-relaxed">
                  Product Catalog · Certification Display Areas · RFQ Form · WhatsApp Integration ·
                  Mega-menu Navigation
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/contact"
                  search={{
                    service: "Website Development",
                    project: "Surgical B2B Export Website",
                  }}
                  className="group/cta inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f766e] hover:text-[#0d9488] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e] rounded py-1"
                >
                  Discuss a Similar Solution
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Visual Preview Frame */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl border border-[#e7e1d6] bg-[#ffffff] shadow-xs">
                <div className="flex items-center justify-between border-b border-[#e7e1d6] bg-[#f7f3ec]/60 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#e7e1d6]" />
                    <span className="h-2 w-2 rounded-full bg-[#e7e1d6]" />
                    <span className="h-2 w-2 rounded-full bg-[#e7e1d6]" />
                  </div>
                  <span className="text-[11px] text-[#5b6472]">surgical-export.preview</span>
                </div>
                <div className="p-6 sm:p-8 bg-[#fffdfc] space-y-5">
                  <div className="flex items-center justify-between border-b border-[#e7e1d6] pb-3.5">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-[#0f766e]" />
                      <span className="font-display text-sm font-semibold text-[#111827]">
                        Surgical B2B Export Website
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-[#0f766e] bg-[#0f766e]/10 px-2 py-0.5 rounded">
                      Portfolio Build
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 text-xs">
                    <div className="rounded-lg border border-[#e7e1d6] bg-[#f7f3ec]/40 p-3 text-center">
                      <span className="font-medium text-[#111827] block">Micro-Surgical</span>
                      <span className="text-[10px] text-[#5b6472] mt-0.5 block">Grade 316L</span>
                    </div>
                    <div className="rounded-lg border border-[#e7e1d6] bg-[#f7f3ec]/40 p-3 text-center">
                      <span className="font-medium text-[#111827] block">Dental Care</span>
                      <span className="text-[10px] text-[#5b6472] mt-0.5 block">
                        Titanium Coated
                      </span>
                    </div>
                    <div className="rounded-lg border border-[#e7e1d6] bg-[#f7f3ec]/40 p-3 text-center">
                      <span className="font-medium text-[#111827] block">Diagnostic</span>
                      <span className="text-[10px] text-[#5b6472] mt-0.5 block">
                        CE / ISO Standard
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2.5 pt-1">
                    <div className="rounded-md bg-[#0f766e] px-3.5 py-1.5 text-xs font-semibold text-white">
                      Request Wholesale RFQ
                    </div>
                    <div className="rounded-md border border-[#e7e1d6] px-3.5 py-1.5 text-xs font-medium text-[#111827]">
                      Download Catalog
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Editorial Footnote Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 border-t border-[#e7e1d6] pt-6 text-xs text-[#5b6472] leading-relaxed"
        >
          <span className="font-semibold text-[#111827] uppercase tracking-wider mr-1.5">
            Note:
          </span>
          Projects 1–3 are concept/demo builds created to demonstrate capability. Projects 4–5 are
          portfolio builds created by the developer. Any certification badges shown within the
          Surgical B2B Export demo website are part of the sample exporter content and do not
          represent certifications owned by Digital Solution.
        </motion.div>
      </div>
    </section>
  );
}
