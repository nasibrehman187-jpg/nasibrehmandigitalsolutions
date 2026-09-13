import { motion } from "framer-motion";
import { ArrowRight, Globe, Bot, Mic, Workflow } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Particles } from "./Particles";
import { HeroMobileFallback } from "./HeroMobileFallback";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20 lg:pt-24 xl:pt-28">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0">
        <Particles density={14} />
      </div>
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-6 lg:pb-8 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#d6a84b]/30 bg-[#d6a84b]/10 px-3.5 py-1 text-xs text-[#f7f3e8] backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="h-2 w-2 rounded-full bg-[#14b8a6] shadow-[0_0_8px_#14b8a6]" />
            </span>
            <span className="font-medium tracking-wide">WEB • AUTOMATION • AI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-semibold leading-[1.08] tracking-tight text-[#f7f3e8]"
          >
            Smart Digital Solutions <span className="text-gradient">for Growing Businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-4 max-w-xl text-base sm:text-lg text-[#a8b0bf] leading-relaxed"
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
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#0f8b8d] to-[#14b8a6] px-6 py-3 text-sm font-semibold text-[#f7f3e8] shadow-[0_4px_20px_-4px_rgba(20,184,166,0.4)] transition-all duration-300 hover:shadow-[0_6px_28px_-4px_rgba(20,184,166,0.6)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6]"
            >
              <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
              Discuss Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-[rgba(247,243,232,0.12)] bg-[#111827] px-6 py-3 text-sm font-medium text-[#f7f3e8] transition-all duration-300 hover:bg-[#162033] hover:border-[#14b8a6]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6]"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 text-[#14b8a6] transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 sm:mt-7 flex flex-wrap items-center gap-2 text-xs text-[#a8b0bf]"
          >
            {[
              { icon: Globe, label: "Website Development" },
              { icon: Workflow, label: "AI Automation" },
              { icon: Bot, label: "AI Chatbots" },
              { icon: Mic, label: "AI Voice Agents" },
            ].map((item, i) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(247,243,232,0.08)] bg-white/[0.02] px-3 py-1"
              >
                <item.icon className="h-3 w-3 text-[#14b8a6]" />
                <span>{item.label}</span>
                {i < 3 && <span className="ml-1 text-white/20">•</span>}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right visual */}
        <div className="relative h-[380px] w-full sm:h-[440px] lg:h-[470px] xl:h-[510px]">
          <div className="absolute inset-0 rounded-[2rem]">
            <HeroMobileFallback />
          </div>

          {/* Floating capability cards - refined, high-contrast, premium */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="absolute left-0 top-6 w-60 rounded-2xl p-4 shadow-2xl shadow-black/70 border border-[rgba(247,243,232,0.14)] bg-[#111827]/95 backdrop-blur-md animate-float"
          >
            <div className="flex items-center gap-2 text-xs text-[#14b8a6] font-semibold">
              <Globe className="h-3.5 w-3.5 text-[#14b8a6]" /> Website Development
            </div>
            <div className="mt-1.5 font-display text-sm font-bold text-[#f7f3e8] tracking-tight">
              Modern, Responsive Websites
            </div>
            <div className="mt-1.5 text-xs text-[#a8b0bf] leading-relaxed">
              Custom Layouts • Mobile-First • Inquiries
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute right-0 top-28 w-60 rounded-2xl p-4 shadow-2xl shadow-black/70 border border-[rgba(247,243,232,0.14)] bg-[#111827]/95 backdrop-blur-md animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center gap-2 text-xs text-[#d6a84b] font-semibold">
              <Workflow className="h-3.5 w-3.5 text-[#d6a84b]" /> AI Automation
            </div>
            <div className="mt-1.5 font-display text-sm font-bold text-[#f7f3e8] tracking-tight">
              n8n Workflows & Integrations
            </div>
            <div className="mt-1.5 text-xs text-[#a8b0bf] leading-relaxed">
              APIs • Webhooks • System Sync
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="absolute bottom-4 left-4 sm:left-6 flex items-center gap-3 rounded-2xl p-3.5 pr-5 shadow-2xl shadow-black/70 border border-[rgba(247,243,232,0.14)] bg-[#111827]/95 backdrop-blur-md animate-float"
            style={{ animationDelay: "3s" }}
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0f8b8d]/20 border border-[#0f8b8d]/40">
              <Bot className="h-4 w-4 text-[#14b8a6]" />
            </span>
            <div>
              <div className="text-xs text-[#14b8a6] font-semibold">AI Voice & Chatbots</div>
              <div className="font-display text-xs font-bold text-[#f7f3e8]">
                Intelligent Customer Interactions
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
