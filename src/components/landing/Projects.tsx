import { motion } from "framer-motion";
import { ArrowRight, Globe, Mic, Stethoscope, Building2, Package, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./SectionHeader";
import { BrowserFrame } from "./BrowserFrame";
import { ProjectInquiryLink } from "./ProjectInquiryLink";

export function Projects() {
  return (
    <section id="projects" className="content-auto relative pt-20 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Projects & Demos"
          title={
            <>
              Selected Projects & <span className="text-[#087F8C]">Demonstration Builds</span>
            </>
          }
          subtitle="A mix of portfolio builds and concept demonstration projects showing practical website and AI solutions."
        />

        {/* Studio Legend / Classification */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200/60 px-3.5 py-1.5 text-teal-800 font-medium">
            <span className="h-2 w-2 rounded-full bg-[#087F8C]" />
            <span>Concept / Demo Builds (Capabilities Showcase)</span>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200/60 px-3.5 py-1.5 text-amber-800 font-medium">
            <span className="h-2 w-2 rounded-full bg-amber-600" />
            <span>Developer Portfolio Builds</span>
          </span>
        </div>

        {/* Editorial Case Study Flow */}
        <div className="mt-14 sm:mt-18 space-y-12 sm:space-y-16">
          {/* PROJECT 1 — SmileCare Dental Clinic (Split: Visual Left, Narrative Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#DCE4EC] bg-white p-6 sm:p-10 shadow-xs hover:border-[#087F8C]/40 hover:shadow-md transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Visual Preview Frame */}
              <div className="lg:col-span-6">
                <BrowserFrame address="smilecare-clinic.preview" badge="Interactive Prototype">
                  {/* Mockup Canvas */}
                  <div className="p-6 sm:p-8 bg-[#FAFCFF] space-y-5">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3.5">
                      <div className="flex items-center gap-2">
                        <Stethoscope className="h-4 w-4 text-[#087F8C]" />
                        <span className="font-display text-sm font-bold text-[#142338]">
                          SmileCare Clinic
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium">
                        Mon–Sat 9am–7pm
                      </span>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-[#087F8C]">
                        Preventative & Cosmetic Dentistry
                      </div>
                      <h4 className="mt-2 font-display text-lg sm:text-xl font-bold text-[#142338] leading-snug">
                        Gentle, modern dental treatments for your whole family.
                      </h4>
                      <p className="mt-2 text-xs text-[#526174] leading-relaxed">
                        Comprehensive oral diagnostics, restorative care, and cosmetic smile design
                        in a welcoming setting.
                      </p>
                    </div>
                    <div className="flex gap-2.5 pt-1">
                      <div className="rounded-lg bg-[#087F8C] px-4 py-2 text-xs font-semibold text-white shadow-xs">
                        Request Visit
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-[#142338]">
                        Our Treatments
                      </div>
                    </div>
                  </div>
                </BrowserFrame>
              </div>

              {/* Narrative Content */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-xs font-bold text-slate-400">01</span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-teal-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#087F8C] border border-teal-200/50">
                    Website Development
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-amber-700 border border-amber-200/50">
                    Concept Website
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#142338]">
                  SmileCare Dental Clinic
                </h3>
                <p className="text-sm sm:text-base text-[#526174] leading-relaxed">
                  A dental clinic website concept designed to present practice services clearly,
                  provide key patient information and make it easier to submit appointment requests.
                </p>
                <div className="pt-2 rounded-xl bg-slate-50 border border-slate-100 p-3.5">
                  <div className="text-[11px] uppercase tracking-wider text-[#142338] font-bold mb-1.5">
                    Key Elements:
                  </div>
                  <div className="text-xs text-[#526174] leading-relaxed">
                    Responsive Design · Service Pages · Appointment Request Form · Contact
                    Integration · Mobile-Friendly Interface
                  </div>
                </div>
                <div className="pt-2">
                  <ProjectInquiryLink
                    service="Website Development"
                    project="SmileCare Dental Clinic"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 2 — AI Restaurant Voice Agent (Reverse Split: Narrative Left, Visual Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#DCE4EC] bg-white p-6 sm:p-10 shadow-xs hover:border-[#087F8C]/40 hover:shadow-md transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Narrative Content */}
              <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-xs font-bold text-slate-400">02</span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-teal-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#087F8C] border border-teal-200/50">
                    AI Voice Agent
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-amber-700 border border-amber-200/50">
                    Concept AI Demo
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#142338]">
                  AI Restaurant Voice Agent
                </h3>
                <p className="text-sm sm:text-base text-[#526174] leading-relaxed">
                  A conversational voice assistant concept built to demonstrate telephone call
                  handling, menu assistance, structured order collection and customer verification.
                </p>
                <div className="pt-2 rounded-xl bg-slate-50 border border-slate-100 p-3.5">
                  <div className="text-[11px] uppercase tracking-wider text-[#142338] font-bold mb-1.5">
                    Key Elements:
                  </div>
                  <div className="text-xs text-[#526174] leading-relaxed">
                    Voice Conversation · Menu Assistance · Order Collection · Customer Detail
                    Collection · Order Confirmation Workflow
                  </div>
                </div>
                <div className="pt-2">
                  <ProjectInquiryLink
                    service="AI Voice Agent"
                    project="AI Restaurant Voice Agent"
                  />
                </div>
              </div>

              {/* Case-Study Composition Card */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="rounded-xl border border-slate-200 bg-[#FAFCFF] p-6 sm:p-7 shadow-xs space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#087F8C]/10 text-[#087F8C]">
                        <Mic className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <div className="font-display text-base font-bold text-[#142338]">
                          AI Restaurant Voice Agent
                        </div>
                        <div className="text-[11px] text-[#526174]">Demonstration Case Study</div>
                      </div>
                    </div>
                    <span className="rounded-md border border-amber-200/60 bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-800">
                      Concept AI Demo
                    </span>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs text-[#526174] leading-relaxed">
                      Designed as an AI capability demonstration to explore automated conversational
                      telephone handling for hospitality businesses.
                    </p>

                    <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 shadow-2xs">
                      <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#142338]">
                        Demonstrated Capabilities
                      </div>
                      <ul className="space-y-2 text-xs text-[#526174]">
                        <li className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#087F8C] mt-1.5 shrink-0" />
                          <span>
                            <strong className="text-[#142338] font-semibold">
                              Inbound Call Handling:
                            </strong>{" "}
                            Conversational responses to customer inquiries and menu questions
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#087F8C] mt-1.5 shrink-0" />
                          <span>
                            <strong className="text-[#142338] font-semibold">
                              Structured Order Collection:
                            </strong>{" "}
                            Capturing requested food items, quantities and delivery preferences
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#087F8C] mt-1.5 shrink-0" />
                          <span>
                            <strong className="text-[#142338] font-semibold">
                              Order Confirmation Workflow:
                            </strong>{" "}
                            Verifying customer details before concluding the conversation
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-[11px] text-[#526174]">
                    <span>AI Voice Agent Demonstration</span>
                    <span className="text-amber-700 font-semibold">Concept Build</span>
                  </div>
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
            className="rounded-2xl border border-[#DCE4EC] bg-white p-6 sm:p-10 shadow-xs hover:border-[#087F8C]/40 hover:shadow-md transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-xs font-bold text-slate-400">03</span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-teal-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#087F8C] border border-teal-200/50">
                    Custom Digital Solution
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-amber-700 border border-amber-200/50">
                    Concept / Demo
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#142338]">
                  Dental Clinic Digital System
                </h3>
                <p className="text-sm sm:text-base text-[#526174] leading-relaxed">
                  A digital system concept created to demonstrate how a clinic website can connect
                  with inquiry capture, appointment workflows and automated notification routing.
                </p>
                <div className="pt-2 rounded-xl bg-slate-50 border border-slate-100 p-3.5">
                  <div className="text-[11px] uppercase tracking-wider text-[#142338] font-bold mb-1.5">
                    Key Elements:
                  </div>
                  <div className="text-xs text-[#526174] leading-relaxed">
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
                    className="group/cta inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F8C] hover:text-[#066570] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C] rounded py-1"
                  >
                    <span>Discuss a Similar Solution</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl border border-slate-200 bg-[#FAFCFF] p-6 space-y-4 shadow-2xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-xs font-bold tracking-wide text-[#142338] uppercase">
                      Workflow Architecture
                    </span>
                    <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-lg border border-slate-200 bg-white p-3.5 space-y-1 shadow-2xs">
                      <div className="flex items-center justify-between text-xs font-semibold text-[#142338]">
                        <span>01 · Website Interface</span>
                        <span className="text-[10px] text-[#087F8C] font-bold bg-teal-50 px-1.5 py-0.5 rounded">
                          Front-End
                        </span>
                      </div>
                      <p className="text-[11px] text-[#526174] leading-snug">
                        Professional clinic presentation showcasing services, practice hours and
                        doctor profiles.
                      </p>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-white p-3.5 space-y-1 shadow-2xs">
                      <div className="flex items-center justify-between text-xs font-semibold text-[#142338]">
                        <span>02 · Inquiry & Intake Form</span>
                        <span className="text-[10px] text-[#087F8C] font-bold bg-teal-50 px-1.5 py-0.5 rounded">
                          Lead Capture
                        </span>
                      </div>
                      <p className="text-[11px] text-[#526174] leading-snug">
                        Captures patient consultation requests and preferred appointment slots.
                      </p>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-white p-3.5 space-y-1 shadow-2xs">
                      <div className="flex items-center justify-between text-xs font-semibold text-[#142338]">
                        <span>03 · Notification & Sync</span>
                        <span className="text-[10px] text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded">
                          Automation
                        </span>
                      </div>
                      <p className="text-[11px] text-[#526174] leading-snug">
                        Structured notification routing to clinic staff and automated confirmation
                        messaging.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 text-[10.5px] text-[#526174] text-center border-t border-slate-200">
                    Demonstration concept showing integration between web intake and practice
                    workflows
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
            className="rounded-2xl border border-[#DCE4EC] bg-white p-6 sm:p-10 shadow-xs hover:border-[#087F8C]/40 hover:shadow-md transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Visual Preview Frame */}
              <div className="lg:col-span-6">
                <BrowserFrame
                  address="realestate-portfolio.preview"
                  badge="Portfolio Concept Preview"
                >
                  <div className="p-6 sm:p-8 bg-[#FAFCFF] space-y-5">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3.5">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-amber-600" />
                        <span className="font-display text-sm font-bold text-[#142338]">
                          Luxury Real Estate Website
                        </span>
                      </div>
                      <span className="text-[11px] text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded">
                        Portfolio Build
                      </span>
                    </div>

                    {/* Property Card Mockup */}
                    <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#087F8C]">
                          Curated Portfolio
                        </span>
                        <span className="text-xs font-medium text-[#142338]">
                          Sample Presentation
                        </span>
                      </div>
                      <h4 className="font-display text-base font-bold text-[#142338]">
                        Curated Architectural Residences & Estates
                      </h4>
                      <div className="flex flex-wrap gap-2 text-xs text-[#526174] border-t border-slate-100 pt-2.5">
                        <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                          Property Showcase
                        </span>
                        <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                          Investor Layout
                        </span>
                        <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                          Inquiry Forms
                        </span>
                        <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                          Responsive UI
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2.5 pt-1">
                      <div className="rounded-lg bg-[#087F8C] px-4 py-2 text-xs font-semibold text-white shadow-xs">
                        Request Similar Build
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-[#142338]">
                        View Structure
                      </div>
                    </div>
                  </div>
                </BrowserFrame>
              </div>

              {/* Narrative Content */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-xs font-bold text-slate-400">04</span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-teal-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#087F8C] border border-teal-200/50">
                    Website Development
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-amber-700 border border-amber-200/50">
                    Portfolio Build
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#142338]">
                  Luxury Real Estate Website
                </h3>
                <p className="text-sm sm:text-base text-[#526174] leading-relaxed">
                  A portfolio website build designed to showcase high-end property listings,
                  structured architectural galleries and direct inquiry forms for prospective
                  buyers.
                </p>
                <div className="pt-2 rounded-xl bg-slate-50 border border-slate-100 p-3.5">
                  <div className="text-[11px] uppercase tracking-wider text-[#142338] font-bold mb-1.5">
                    Key Elements:
                  </div>
                  <div className="text-xs text-[#526174] leading-relaxed">
                    Premium Property Presentation · Responsive Design · Inquiry Forms · Modern
                    Interface · Investor-focused Layout
                  </div>
                </div>
                <div className="pt-2">
                  <ProjectInquiryLink
                    service="Website Development"
                    project="Luxury Real Estate Website"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 5 — Surgical B2B Export Website (Reverse Split: Narrative Left, Visual Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#DCE4EC] bg-white p-6 sm:p-10 shadow-xs hover:border-[#087F8C]/40 hover:shadow-md transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Narrative Content */}
              <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-xs font-bold text-slate-400">05</span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-teal-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#087F8C] border border-teal-200/50">
                    Website Development
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-amber-700 border border-amber-200/50">
                    Portfolio Build
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#142338]">
                  Surgical B2B Export Website
                </h3>
                <p className="text-sm sm:text-base text-[#526174] leading-relaxed">
                  A portfolio website build structured for instrument exporters to present product
                  lines, certification information and structured quotation request forms.
                </p>
                <div className="pt-2 rounded-xl bg-slate-50 border border-slate-100 p-3.5">
                  <div className="text-[11px] uppercase tracking-wider text-[#142338] font-bold mb-1.5">
                    Key Elements:
                  </div>
                  <div className="text-xs text-[#526174] leading-relaxed">
                    Product Catalog · Certification Display Areas · RFQ Form · WhatsApp Integration
                    · Mega-menu Navigation
                  </div>
                </div>
                <div className="pt-2">
                  <ProjectInquiryLink
                    service="Website Development"
                    project="Surgical B2B Export Website"
                  />
                </div>
              </div>

              {/* Visual Preview Frame */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <BrowserFrame address="surgical-export.preview" badge="Export B2B Portal">
                  <div className="p-6 sm:p-8 bg-[#FAFCFF] space-y-5">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3.5">
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-[#087F8C]" />
                        <span className="font-display text-sm font-bold text-[#142338]">
                          Surgical B2B Export Website
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#087F8C] bg-teal-50 px-2 py-0.5 rounded border border-teal-200/50">
                        Portfolio Build
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 text-xs">
                      <div className="rounded-lg border border-slate-200 bg-white p-3 text-center shadow-2xs">
                        <span className="font-semibold text-[#142338] block">Micro-Surgical</span>
                        <span className="text-[10px] text-[#526174] mt-0.5 block">Grade 316L</span>
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-white p-3 text-center shadow-2xs">
                        <span className="font-semibold text-[#142338] block">Dental Care</span>
                        <span className="text-[10px] text-[#526174] mt-0.5 block">
                          Titanium Coated
                        </span>
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-white p-3 text-center shadow-2xs">
                        <span className="font-semibold text-[#142338] block">Diagnostic</span>
                        <span className="text-[10px] text-[#526174] mt-0.5 block">
                          CE / ISO Standard
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2.5 pt-1">
                      <div className="rounded-lg bg-[#087F8C] px-4 py-2 text-xs font-semibold text-white shadow-xs">
                        Request Wholesale RFQ
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-[#142338]">
                        Download Catalog
                      </div>
                    </div>
                  </div>
                </BrowserFrame>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footnote Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-5 text-xs text-[#526174] leading-relaxed"
        >
          <span className="font-bold text-[#142338] uppercase tracking-wider mr-1.5">Note:</span>
          Projects 1–3 are concept/demo builds created to demonstrate capability. Projects 4–5 are
          portfolio builds created by the developer. Any certification badges shown within the
          Surgical B2B Export demo website are part of the sample exporter content and do not
          represent certifications owned by Digital Solution.
        </motion.div>
      </div>
    </section>
  );
}
