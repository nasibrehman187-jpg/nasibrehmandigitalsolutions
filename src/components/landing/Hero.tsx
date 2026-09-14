import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { HeroMobileFallback } from "./HeroMobileFallback";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20 lg:pt-24 xl:pt-28">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-6 lg:pb-8 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0f766e]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b38a3d]" />
            <span className="tracking-widest text-[11px]">WEB • AUTOMATION • AI</span>
          </div>

          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-medium leading-[1.1] tracking-tight text-[#111827]">
            Smart Digital Solutions for{" "}
            <span className="text-[#0f766e] italic">Growing Businesses</span>
          </h1>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-[#5b6472] leading-relaxed">
            We build professional websites, AI automations, chatbots and AI voice agents that help
            businesses save time, manage leads and improve customer communication.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-[#0f766e] px-6 py-3 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#0d9488] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e]"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-md border border-[#e7e1d6] bg-[#ffffff] px-6 py-3 text-sm font-medium text-[#111827] shadow-xs transition-all duration-200 hover:bg-[#f3eee6] hover:border-[#d6cebe] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e]"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 text-[#0f766e] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right visual - Light Premium Editorial composition */}
        <div className="relative w-full">
          <HeroMobileFallback />
        </div>
      </div>
    </section>
  );
}
