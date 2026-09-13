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

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-10 lg:pb-14 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3.5 py-1 text-xs text-slate-300 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            </span>
            <span className="font-medium tracking-wide">WEB • AUTOMATION • AI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-semibold leading-[1.08] tracking-tight"
          >
            Smart Digital Solutions <span className="text-gradient">for Growing Businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-4 max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed"
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
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(34,211,238,0.45)] transition-all duration-300 hover:shadow-[0_6px_28px_-4px_rgba(34,211,238,0.65)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
              Discuss Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 text-cyan-400 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 sm:mt-7 flex flex-wrap items-center gap-2 text-xs text-slate-400"
          >
            {[
              { icon: Globe, label: "Website Development" },
              { icon: Workflow, label: "AI Automation" },
              { icon: Bot, label: "AI Chatbots" },
              { icon: Mic, label: "AI Voice Agents" },
            ].map((item, i) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1"
              >
                <item.icon className="h-3 w-3 text-cyan-400" />
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

          {/* Floating capability cards - restrained and high-contrast */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="glass-strong absolute left-0 top-6 w-56 rounded-2xl p-4 shadow-xl shadow-black/50 border border-white/10 animate-float"
          >
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <Globe className="h-3.5 w-3.5 text-cyan-400" /> Website Development
            </div>
            <div className="mt-1.5 font-display text-sm font-semibold text-white">
              Modern, Responsive Websites
            </div>
            <div className="mt-1.5 text-[11px] text-slate-400">
              Custom Layouts • Mobile-First • Inquiries
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="glass-strong absolute right-0 top-28 w-56 rounded-2xl p-4 shadow-xl shadow-black/50 border border-white/10 animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <Workflow className="h-3.5 w-3.5 text-[#818cf8]" /> AI Automation
            </div>
            <div className="mt-1.5 font-display text-sm font-semibold text-white">
              n8n Workflows & Integrations
            </div>
            <div className="mt-1.5 text-[11px] text-slate-400">APIs • Webhooks • System Sync</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="glass-strong absolute bottom-4 left-4 sm:left-6 flex items-center gap-3 rounded-2xl p-3 pr-5 shadow-xl shadow-black/50 border border-white/10 animate-float"
            style={{ animationDelay: "3s" }}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-[#818cf8]/20 border border-white/10">
              <Bot className="h-4 w-4 text-cyan-400" />
            </span>
            <div>
              <div className="text-[11px] text-slate-400 font-medium">AI Voice & Chatbots</div>
              <div className="font-display text-xs font-semibold text-white">
                Intelligent Customer Interactions
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
