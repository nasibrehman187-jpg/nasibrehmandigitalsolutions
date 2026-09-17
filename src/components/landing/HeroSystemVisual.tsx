import { Globe, Bot, Workflow, Mic, ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroSystemVisual() {
  return (
    <div
      className="relative w-full max-w-xl mx-auto rounded-2xl border border-[#1E3A63] bg-[#0E1E36] p-3 sm:p-5 shadow-2xl shadow-[#10233F]/80 text-white overflow-hidden pointer-events-none select-none"
      role="img"
      aria-label="Architecture diagram of integrated digital solutions: website front-end, AI chatbot, voice agent, and automation workflows"
    >
      {/* Visual Header / System Status Bar */}
      <div className="flex items-center justify-between border-b border-[#1E3A63] pb-3 text-xs text-[#8A9EB5]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/70" />
          </div>
          <span className="ml-2 hidden sm:inline-block font-mono text-xs text-[#A0B3C6]">
            digital-solution.systems
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#162C4E] border border-[#1E3A63] px-3 py-1 text-xs font-semibold text-[#2DD4BF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#087F8C]" />
            Example System Architecture
          </span>
        </div>
      </div>

      {/* Main Connected Canvas */}
      <div className="pt-4 space-y-3 sm:space-y-3.5">
        {/* Node 1: Fast Business Website */}
        <div className="rounded-xl border border-[#1E3A63] bg-[#142642] p-3.5 sm:p-4">
          <div className="flex items-center justify-between min-h-[28px] gap-2 pb-2 border-b border-[#1E3A63]/60">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-md bg-[#087F8C] text-white shrink-0">
                <Globe className="h-3.5 w-3.5" />
              </span>
              <div>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  Website Front-End
                </span>
                <span className="text-xs text-[#8A9EB5] block sm:inline sm:ml-2">
                  Responsive website
                </span>
              </div>
            </div>
            <span className="rounded bg-[#10233F] border border-[#1E3A63] px-2 py-0.5 text-xs font-mono text-[#8A9EB5] shrink-0">
              Web Core
            </span>
          </div>
          <div className="mt-2.5 flex items-center justify-between text-xs text-[#D1DCE8]">
            <span>Fast modern layout • Inquiries & consultation capture</span>
          </div>
        </div>

        {/* Node 2 & 3: Two-column grid (Chatbot + Voice Agent) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* AI Chatbot Assistant */}
          <div className="rounded-xl border border-[#1E3A63] bg-[#142642] p-3.5">
            <div className="flex items-center justify-between min-h-[28px] gap-2 pb-2 border-b border-[#1E3A63]/60">
              <div className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-[#087F8C] text-white shrink-0">
                  <Bot className="h-3.5 w-3.5" />
                </span>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-white">AI Chatbot</span>
                </div>
              </div>
              <span className="text-xs font-mono text-[#8A9EB5] bg-[#10233F] border border-[#1E3A63] px-2 py-0.5 rounded shrink-0">
                Chatbot example
              </span>
            </div>
            <div className="mt-2 space-y-1.5 text-xs">
              <div className="text-xs text-[#8A9EB5]">Customer enquiries</div>
              <div className="rounded-md bg-[#10233F] border border-[#1E3A63] p-2 text-[#D1DCE8]">
                "Can you help with service pricing?"
              </div>
              <div className="rounded-md bg-[#087F8C]/20 border border-[#087F8C]/30 p-2 text-[#E6F5F6]">
                "Yes! Packages start from $99 with defined deliverables."
              </div>
            </div>
          </div>

          {/* AI Voice Agent */}
          <div className="rounded-xl border border-[#1E3A63] bg-[#142642] p-3.5">
            <div className="flex items-center justify-between min-h-[28px] gap-2 pb-2 border-b border-[#1E3A63]/60">
              <div className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-[#087F8C] text-white shrink-0">
                  <Mic className="h-3.5 w-3.5" />
                </span>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-white">Voice Agent</span>
                </div>
              </div>
              <span className="text-xs font-mono text-[#8A9EB5] bg-[#10233F] border border-[#1E3A63] px-2 py-0.5 rounded shrink-0">
                Voice example
              </span>
            </div>
            <div className="mt-2 p-2.5 rounded-md bg-[#10233F] border border-[#1E3A63] space-y-1.5">
              <div className="flex items-center justify-between text-xs text-[#D1DCE8]">
                <span>Calls & routing</span>
              </div>
              {/* Voice wave indicator */}
              <div className="flex items-center gap-1.5 h-4 pt-1">
                <span className="w-1.5 h-2.5 bg-[#2DD4BF] rounded-full" />
                <span className="w-1.5 h-4 bg-[#2DD4BF] rounded-full" />
                <span className="w-1.5 h-2 bg-[#2DD4BF] rounded-full" />
                <span className="w-1.5 h-4.5 bg-[#2DD4BF] rounded-full" />
                <span className="w-1.5 h-2.5 bg-[#2DD4BF] rounded-full" />
                <span className="w-1.5 h-1.5 bg-[#2DD4BF] rounded-full" />
                <span className="text-xs text-[#8A9EB5] ml-2 font-mono">Speech AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Node 4: Automated Business Workflow Pipeline */}
        <div className="rounded-xl border border-[#1E3A63] bg-[#142642] p-3.5 sm:p-4">
          <div className="flex items-center justify-between min-h-[28px] gap-2 pb-2 border-b border-[#1E3A63]/60">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-md bg-[#087F8C] text-white shrink-0">
                <Workflow className="h-3.5 w-3.5" />
              </span>
              <div>
                <span className="text-xs sm:text-sm font-semibold text-white">Automation</span>
                <span className="text-xs text-[#8A9EB5] block sm:inline sm:ml-2">
                  Form → Workflow → Notification
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-[#8A9EB5] bg-[#10233F] border border-[#1E3A63] px-2 py-0.5 rounded shrink-0">
              Automation example
            </span>
          </div>

          {/* Workflow Sequence Pills */}
          <div className="mt-3 flex items-center justify-between gap-1.5 sm:gap-2 text-xs overflow-x-auto">
            <div className="rounded bg-[#10233F] border border-[#1E3A63] px-2.5 py-1 text-[#D1DCE8] shrink-0">
              Form Lead
            </div>
            <ArrowRight className="h-3.5 w-3.5 text-[#087F8C] shrink-0" />
            <div className="rounded bg-[#10233F] border border-[#1E3A63] px-2.5 py-1 text-[#D1DCE8] shrink-0">
              Logic Engine
            </div>
            <ArrowRight className="h-3.5 w-3.5 text-[#087F8C] shrink-0" />
            <div className="rounded bg-[#10233F] border border-[#1E3A63] px-2.5 py-1 text-[#D1DCE8] shrink-0">
              CRM Update
            </div>
            <ArrowRight className="h-3.5 w-3.5 text-[#087F8C] shrink-0" />
            <div className="rounded bg-[#10233F] border border-[#1E3A63] px-2.5 py-1 text-[#D1DCE8] shrink-0">
              WhatsApp Alert
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex items-center justify-between pt-2.5 border-t border-[#1E3A63] text-xs text-[#8A9EB5]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#2DD4BF]" />
            Illustrative system example
          </span>
          <span className="text-[#2DD4BF] font-medium">All deliverables itemized</span>
        </div>
      </div>
    </div>
  );
}
