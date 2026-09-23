import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { HeroSystemVisual } from "./HeroSystemVisual";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#10233F] text-white pt-[max(5rem,calc(var(--header-height)+1rem))] pb-12 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 border-b border-[#1E3A63]"
    >
      {/* Subtle atmospheric gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(8,127,140,0.15),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(30,58,99,0.3),transparent_60%)]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-6 xl:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A63] bg-[#162C4E] px-3.5 py-1 text-xs font-semibold text-[#2DD4BF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B38A3D]" />
            <span className="tracking-wide text-xs font-semibold">Web • Automation • AI</span>
          </div>

          <h1 className="mt-4 sm:mt-5 font-display text-[2rem] sm:text-4xl lg:text-[3.35rem] font-bold leading-[1.15] tracking-tight text-white">
            Websites & Digital Systems Built for{" "}
            <span className="text-[#2DD4BF]">Growing Businesses</span>
          </h1>

          <p className="mt-3.5 sm:mt-5 max-w-xl text-base sm:text-lg text-[#D1DCE8] leading-relaxed">
            I build practical websites, chatbots, automations and voice solutions that help
            businesses capture inquiries, handle customer communication and reduce repetitive work.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              to="/contact"
              className="group inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#087F8C] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#066670] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-[#2A4365] bg-transparent px-6 py-3 text-sm font-semibold text-[#D1DCE8] transition-all duration-200 hover:bg-white/5 hover:border-[#3B5B88] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-4 w-4 text-[#8A9EB5] transition-transform group-hover:translate-x-1 group-hover:text-white" />
            </Link>
          </div>

          {/* Value Assurance Badges */}
          <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[#1E3A63] grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs text-[#8A9EB5]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#2DD4BF] shrink-0" />
              <span>Founder-Led Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#2DD4BF] shrink-0" />
              <span>Fixed Itemized Pricing</span>
            </div>
            <div className="flex items-center gap-2">
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
