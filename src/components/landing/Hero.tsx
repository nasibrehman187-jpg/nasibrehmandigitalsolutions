import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { HeroSystemVisual } from "./HeroSystemVisual";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#10233F] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 border-b border-[#1E3A63]"
    >
      {/* Subtle atmospheric gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(8,127,140,0.15),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(30,58,99,0.3),transparent_60%)]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-6 xl:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A63] bg-[#162C4E] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2DD4BF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B38A3D]" />
            <span className="tracking-widest text-xs">WEB • AUTOMATION • AI</span>
          </div>

          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.35rem] font-bold leading-[1.12] tracking-tight text-white">
            Websites & Digital Systems Built for{" "}
            <span className="text-[#2DD4BF]">Growing Businesses</span>
          </h1>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-[#D1DCE8] leading-relaxed">
            I build practical websites, chatbots, automations and voice solutions that help
            businesses capture inquiries, handle customer communication and reduce repetitive work.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#087F8C] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#066670] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-lg border border-[#2A4365] bg-[#142642]/60 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1E3A63] hover:border-[#3B5B88] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 text-[#2DD4BF] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Value Assurance Badges */}
          <div className="mt-10 pt-6 border-t border-[#1E3A63] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#A0B3C6]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#2DD4BF] shrink-0" />
              <span>Founder-Led Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#2DD4BF] shrink-0" />
              <span>Fixed Itemized Pricing</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <CheckCircle2 className="h-4 w-4 text-[#2DD4BF] shrink-0" />
              <span>Accessible & Responsive</span>
            </div>
          </div>
        </div>

        {/* Right visual - Connected System Architecture */}
        <div className="lg:col-span-6 xl:col-span-6 relative w-full lg:pr-6 xl:pr-10 2xl:pr-14">
          <HeroSystemVisual />
        </div>
      </div>
    </section>
  );
}
