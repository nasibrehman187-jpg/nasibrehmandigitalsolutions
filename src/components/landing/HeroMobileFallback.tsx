import { Globe, Workflow, ShieldCheck, ArrowUpRight } from "lucide-react";

export function HeroMobileFallback() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-[#e7e1d6] bg-[#fffdfc] p-6 sm:p-8 shadow-xs"
      aria-hidden="true"
    >
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Elegant geometric studio background linework */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full pointer-events-none opacity-40"
      >
        <circle cx="200" cy="200" r="160" stroke="#e7e1d6" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="200" cy="200" r="110" stroke="#e7e1d6" strokeWidth="1" />
        <circle cx="200" cy="200" r="60" stroke="#0f766e" strokeWidth="1" strokeOpacity="0.25" />
        <line
          x1="200"
          y1="20"
          x2="200"
          y2="380"
          stroke="#e7e1d6"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <line
          x1="20"
          y1="200"
          x2="380"
          y2="200"
          stroke="#e7e1d6"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      </svg>

      {/* Layered Editorial Studio Composition */}
      <div className="relative z-10 flex w-full max-w-md flex-col gap-3.5 sm:gap-4.5">
        {/* Studio Crest Header */}
        <div className="flex items-center justify-between border-b border-[#e7e1d6] pb-2.5 text-[11px] uppercase tracking-wider text-[#5b6472]">
          <span className="flex items-center gap-1.5 font-medium text-[#111827]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0f766e]" />
            Founder-Led Studio
          </span>
          <span className="font-normal text-[#5b6472]">Khairpur, Pakistan</span>
        </div>

        {/* Primary Editorial Service Card */}
        <div className="rounded-2xl border border-[#e7e1d6] bg-[#ffffff] p-4 sm:p-5 shadow-xs transition-transform duration-300 hover:-translate-y-0.5">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#f3eee6] text-[#0f766e]">
                <Globe className="h-4.5 w-4.5" />
              </span>
              <div>
                <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[#0f766e]">
                  Web Architecture
                </div>
                <div className="font-display text-sm font-bold text-[#111827]">
                  Modern Business Websites
                </div>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-[#5b6472]/60" />
          </div>
          <p className="mt-2 text-xs text-[#5b6472] leading-relaxed">
            Responsive, fast-loading business sites engineered for credibility, lead capture, and
            seamless WhatsApp communication.
          </p>
          <div className="mt-2.5 flex flex-wrap gap-1.5 text-[10.5px] font-medium text-[#5b6472]">
            <span className="rounded-md border border-[#e7e1d6] bg-[#f3eee6]/70 px-2 py-0.5">
              Clean UI
            </span>
            <span className="rounded-md border border-[#e7e1d6] bg-[#f3eee6]/70 px-2 py-0.5">
              Mobile-First
            </span>
            <span className="rounded-md border border-[#e7e1d6] bg-[#f3eee6]/70 px-2 py-0.5">
              Inquiry Forms
            </span>
          </div>
        </div>

        {/* Secondary Editorial Service Card */}
        <div className="rounded-2xl border border-[#e7e1d6] bg-[#ffffff] p-4 sm:p-5 shadow-xs transition-transform duration-300 hover:-translate-y-0.5">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#f3eee6] text-[#b38a3d]">
                <Workflow className="h-4.5 w-4.5" />
              </span>
              <div>
                <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[#b38a3d]">
                  Automation & Voice
                </div>
                <div className="font-display text-sm font-bold text-[#111827]">
                  n8n & Voice AI Systems
                </div>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-[#5b6472]/60" />
          </div>
          <p className="mt-2 text-xs text-[#5b6472] leading-relaxed">
            Structured workflow automations, custom AI assistants, and intelligent inbound voice
            agents connected to your business tools.
          </p>
          <div className="mt-2.5 flex flex-wrap gap-1.5 text-[10.5px] font-medium text-[#5b6472]">
            <span className="rounded-md border border-[#e7e1d6] bg-[#f3eee6]/70 px-2 py-0.5">
              n8n Flows
            </span>
            <span className="rounded-md border border-[#e7e1d6] bg-[#f3eee6]/70 px-2 py-0.5">
              AI Chatbots
            </span>
            <span className="rounded-md border border-[#e7e1d6] bg-[#f3eee6]/70 px-2 py-0.5">
              Voice Agents
            </span>
          </div>
        </div>

        {/* Trust & Engagement Footer Strip */}
        <div className="flex items-center justify-between rounded-xl border border-[#e7e1d6] bg-[#f3eee6]/60 px-3.5 py-2 text-[11px] text-[#5b6472]">
          <span className="flex items-center gap-1.5 font-medium text-[#111827]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#0f766e]" />
            Direct Communication
          </span>
          <span>No middlemen • Transparent scope</span>
        </div>
      </div>
    </div>
  );
}
