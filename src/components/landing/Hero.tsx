import { motion } from "framer-motion";
import { ArrowRight, Globe, Bot, Mic, Workflow } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { HeroMobileFallback } from "./HeroMobileFallback";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20 lg:pt-24 xl:pt-28">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-6 lg:pb-8 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#e7e1d6] bg-[#ffffff] px-3.5 py-1 text-xs text-[#5b6472] shadow-xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0f766e]" />
            <span className="font-medium tracking-wide uppercase text-[11px]">
              WEB • AUTOMATION • AI
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-semibold leading-[1.08] tracking-tight text-[#111827]"
          >
            Smart Digital Solutions <span className="text-[#0f766e]">for Growing Businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-4 max-w-xl text-base sm:text-lg text-[#5b6472] leading-relaxed"
          >
            We build professional websites, AI automations, chatbots and AI voice agents that help
            businesses save time, manage leads and improve customer communication.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3.5"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0f766e] px-6 py-3 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#0d9488] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e]"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-[#e7e1d6] bg-[#ffffff] px-6 py-3 text-sm font-medium text-[#111827] shadow-xs transition-all duration-200 hover:bg-[#f3eee6] hover:border-[#d6cebe] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e]"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 text-[#0f766e] transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 sm:mt-7 flex flex-wrap items-center gap-2 text-xs text-[#5b6472]"
          >
            {[
              { icon: Globe, label: "Website Development" },
              { icon: Workflow, label: "AI Automation" },
              { icon: Bot, label: "AI Chatbots" },
              { icon: Mic, label: "AI Voice Agents" },
            ].map((item, i) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#e7e1d6] bg-[#ffffff] px-3 py-1 shadow-xs"
              >
                <item.icon className="h-3 w-3 text-[#0f766e]" />
                <span>{item.label}</span>
                {i < 3 && <span className="ml-1 text-[#5b6472]/30">•</span>}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right visual - Light Premium Editorial composition */}
        <div className="relative w-full">
          <HeroMobileFallback />
        </div>
      </div>
    </section>
  );
}
