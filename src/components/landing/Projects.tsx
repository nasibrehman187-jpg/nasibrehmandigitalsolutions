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
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#111827]">
              Concept / Demo Builds (Capabilities Showcase)
            </span>
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b38a3d]" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#111827]">
              Developer Portfolio Builds
            </span>
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
                  <span className="font-mono text-[10px] text-[#5b6472]">
                    smilecare-clinic.preview
                  </span>
                </div>
                {/* Mockup Canvas */}
                <div className="p-6 sm:p-8 bg-[#fffdfc]">
                  <div className="flex items-center justify-between border-b border-[#e7e1d6] pb-4">
                    <div className="flex items-center gap-2">
                      <Stethoscope className="h-4 w-4 text-[#0f766e]" />
                      <span className="font-display text-sm font-semibold text-[#111827]">
                        SmileCare Clinic
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#5b6472]">MON–SAT 9AM–7PM</span>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="h-6 w-3/4 rounded bg-[#f3eee6]" />
                    <div className="h-3 w-full rounded bg-[#f3eee6]/70" />
                    <div className="h-3 w-5/6 rounded bg-[#f3eee6]/70" />
                  </div>
                  <div className="mt-6 flex gap-3">
                    <div className="h-8 w-28 rounded bg-[#0f766e]/15 flex items-center justify-center text-[10.5px] font-semibold text-[#0f766e]">
                      Book Visit
                    </div>
                    <div className="h-8 w-28 rounded border border-[#e7e1d6] flex items-center justify-center text-[10.5px] text-[#5b6472]">
                      Our Services
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-[#b38a3d]">01</span>
                <span className="text-[#e7e1d6]">•</span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#0f766e] font-semibold">
                  Website Development
                </span>
                <span className="text-[#e7e1d6]">•</span>
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#b38a3d]">
                  Concept Website
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#111827]">
                SmileCare Dental Clinic
              </h3>
              <p className="text-sm sm:text-base text-[#5b6472] leading-relaxed">
                A modern dental clinic website concept designed to showcase services, build trust
                and make it easier for patients to send appointment requests.
              </p>
              <div className="pt-2">
                <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#111827] font-semibold mb-2">
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
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-[#b38a3d]">02</span>
                <span className="text-[#e7e1d6]">•</span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#0f766e] font-semibold">
                  AI Voice Agent
                </span>
                <span className="text-[#e7e1d6]">•</span>
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#b38a3d]">
                  Concept AI Demo
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#111827]">
                AI Restaurant Voice Agent
              </h3>
              <p className="text-sm sm:text-base text-[#5b6472] leading-relaxed">
                A conversational voice assistant concept designed to answer customer calls, collect
                structured food orders and confirm order details.
              </p>
              <div className="pt-2">
                <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#111827] font-semibold mb-2">
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

            {/* Visual Voice Waveform Frame */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl border border-[#e7e1d6] bg-[#ffffff] shadow-xs">
                {/* Browser bar */}
                <div className="flex items-center justify-between border-b border-[#e7e1d6] bg-[#f7f3ec]/60 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#e7e1d6]" />
                    <span className="h-2 w-2 rounded-full bg-[#e7e1d6]" />
                    <span className="h-2 w-2 rounded-full bg-[#e7e1d6]" />
                  </div>
                  <span className="font-mono text-[10px] text-[#5b6472]">
                    voice-agent.inbound.call
                  </span>
                </div>
                {/* Audio Telephony Canvas */}
                <div className="p-6 sm:p-8 bg-[#fffdfc]">
                  <div className="flex items-center justify-between border-b border-[#e7e1d6] pb-4">
                    <div className="flex items-center gap-2">
                      <Mic className="h-4 w-4 text-[#b38a3d]" />
                      <span className="font-display text-sm font-semibold text-[#111827]">
                        Restaurant Inbound Assistant
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#0f766e]">ORDER #1042</span>
                  </div>
                  {/* Waveform graphic */}
                  <div className="my-6 flex items-center justify-center gap-1 h-12">
                    {[35, 60, 20, 80, 45, 95, 30, 75, 50, 90, 40, 65, 25, 85, 40].map((h, idx) => (
                      <span
                        key={idx}
                        className="w-1.5 rounded-full bg-[#0f766e]/40"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="rounded-xl border border-[#e7e1d6] bg-[#f3eee6]/50 p-3 text-xs text-[#5b6472] font-mono">
                    "I have confirmed your order for delivery: 2x Signature Platters to Main Blvd."
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
            className="border-t border-[#e7e1d6] pt-12"
          >
            <div className="rounded-2xl border border-[#e7e1d6] bg-[#ffffff] p-8 sm:p-10 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-[#b38a3d]">03</span>
                    <span className="text-[#e7e1d6]">•</span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#0f766e] font-semibold">
                      Custom Digital Solution
                    </span>
                    <span className="text-[#e7e1d6]">•</span>
                    <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#b38a3d]">
                      Concept / Demo
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#111827]">
                    Dental Clinic Digital System
                  </h3>
                  <p className="text-sm sm:text-base text-[#5b6472] leading-relaxed">
                    A digital solution concept combining a professional clinic website with inquiry
                    and appointment workflows.
                  </p>
                  <div className="pt-2">
                    <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#111827] font-semibold mb-2">
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
                  <div className="rounded-xl border border-[#e7e1d6] bg-[#f7f3ec]/50 p-6 space-y-3 font-mono text-xs text-[#5b6472]">
                    <div className="flex items-center justify-between text-[#111827] font-semibold pb-2 border-b border-[#e7e1d6]">
                      <span>SYSTEM ARCHITECTURE</span>
                      <Sparkles className="h-3.5 w-3.5 text-[#b38a3d]" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0f766e]" />
                      <span>Website Frontend (Modern UI)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0f766e]" />
                      <span>Inquiry & Intake Form Capture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#b38a3d]" />
                      <span>WhatsApp Notification Webhook</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#b38a3d]" />
                      <span>Automated Booking Synchronization</span>
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
                  <span className="font-mono text-[10px] text-[#5b6472]">
                    luxury-estates.portfolio.preview
                  </span>
                </div>
                <div className="p-6 sm:p-8 bg-[#fffdfc]">
                  <div className="flex items-center justify-between border-b border-[#e7e1d6] pb-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-[#b38a3d]" />
                      <span className="font-display text-sm font-semibold text-[#111827]">
                        Apex Estates
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#b38a3d]">PRIVATE ARCHIVE</span>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="h-24 w-full rounded bg-[#f3eee6]/80 flex items-center justify-center">
                      <span className="font-mono text-[10px] text-[#5b6472]">
                        WATERFRONT RESIDENCE WIREFRAME
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-3 w-1/3 rounded bg-[#f3eee6]" />
                      <div className="h-3 w-1/4 rounded bg-[#f3eee6]" />
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <div className="h-8 w-32 rounded bg-[#0f766e]/15 flex items-center justify-center text-[10.5px] font-semibold text-[#0f766e]">
                      Inquire Listing
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-[#b38a3d]">04</span>
                <span className="text-[#e7e1d6]">•</span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#0f766e] font-semibold">
                  Website Development
                </span>
                <span className="text-[#e7e1d6]">•</span>
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#b38a3d]">
                  Portfolio Build
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#111827]">
                Luxury Real Estate Website
              </h3>
              <p className="text-sm sm:text-base text-[#5b6472] leading-relaxed">
                A premium real estate website built as a portfolio project for luxury property
                presentation and investor inquiries.
              </p>
              <div className="pt-2">
                <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#111827] font-semibold mb-2">
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
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-[#b38a3d]">05</span>
                <span className="text-[#e7e1d6]">•</span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#0f766e] font-semibold">
                  Website Development
                </span>
                <span className="text-[#e7e1d6]">•</span>
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#b38a3d]">
                  Portfolio Build
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#111827]">
                Surgical B2B Export Website
              </h3>
              <p className="text-sm sm:text-base text-[#5b6472] leading-relaxed">
                A reusable B2B website template built for surgical and dental instrument exporters,
                featuring product presentation, business credentials and RFQ functionality.
              </p>
              <div className="pt-2">
                <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#111827] font-semibold mb-2">
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
                  <span className="font-mono text-[10px] text-[#5b6472]">
                    surgical-export.b2b.preview
                  </span>
                </div>
                <div className="p-6 sm:p-8 bg-[#fffdfc]">
                  <div className="flex items-center justify-between border-b border-[#e7e1d6] pb-4">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-[#0f766e]" />
                      <span className="font-display text-sm font-semibold text-[#111827]">
                        MedSpec Instruments
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#0f766e]">ISO COMPLIANT</span>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <div className="h-16 rounded bg-[#f3eee6]/70 flex items-center justify-center text-[9.5px] font-mono text-[#5b6472]">
                      Surgical
                    </div>
                    <div className="h-16 rounded bg-[#f3eee6]/70 flex items-center justify-center text-[9.5px] font-mono text-[#5b6472]">
                      Dental
                    </div>
                    <div className="h-16 rounded bg-[#f3eee6]/70 flex items-center justify-center text-[9.5px] font-mono text-[#5b6472]">
                      Sterile
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <div className="h-8 w-32 rounded bg-[#0f766e]/15 flex items-center justify-center text-[10.5px] font-semibold text-[#0f766e]">
                      Request RFQ
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
          <span className="font-semibold text-[#111827] font-mono uppercase tracking-wider mr-1.5">
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
