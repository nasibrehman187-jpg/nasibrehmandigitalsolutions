import { Shield, Calendar, ArrowRight, Lock, Check } from "lucide-react";

export function HeroMobileFallback() {
  return (
    <div
      className="relative w-full max-w-xl mx-auto rounded-2xl border border-[#e7e1d6] bg-[#ffffff] p-2.5 sm:p-3.5 shadow-lg shadow-[#111827]/4 overflow-hidden"
      aria-hidden="true"
    >
      {/* Clean Device / Browser Frame Top */}
      <div className="flex items-center justify-between border-b border-[#e7e1d6] bg-[#f7f3ec]/70 px-4 py-2.5 rounded-t-xl">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#d6cebe]" />
          <span className="h-2 w-2 rounded-full bg-[#d6cebe]" />
          <span className="h-2 w-2 rounded-full bg-[#d6cebe]" />
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-[#e7e1d6] bg-[#ffffff] px-3 py-1 text-[11px] text-[#5b6472]">
          <Lock className="h-3 w-3 text-[#0f766e]" />
          <span>smilecare-clinic.preview</span>
        </div>
        <div className="text-[11px] font-medium text-[#5b6472] hidden sm:block">
          Concept Website Demo
        </div>
      </div>

      {/* Website Hero Preview Canvas */}
      <div className="p-6 sm:p-8 bg-[#fffdfc] rounded-b-xl space-y-6">
        {/* Practice Mini Navbar */}
        <div className="flex items-center justify-between border-b border-[#e7e1d6]/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-[#0f766e] text-white">
              <Shield className="h-3.5 w-3.5" />
            </span>
            <div>
              <div className="font-display text-sm font-semibold text-[#111827]">
                SmileCare Dental Clinic
              </div>
              <div className="text-[10px] text-[#5b6472]">Family & Cosmetic Care</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-[#5b6472] hidden sm:inline">Mon–Fri 8am–6pm</span>
            <span className="rounded-md bg-[#0f766e] px-2.5 py-1 text-[11px] font-medium text-white">
              Book Online
            </span>
          </div>
        </div>

        {/* Practice Hero Content */}
        <div className="pt-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#0f766e]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b38a3d]" />
            Comprehensive Oral Care
          </span>

          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#111827] leading-[1.18]">
            Gentle, modern dental care designed around your family.
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-[#5b6472] leading-relaxed max-w-md">
            Providing preventative dentistry, restorative treatments, and aesthetic smile design in
            a calm, welcoming clinic environment.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-[#0f766e] px-4 py-2 text-xs font-semibold text-white">
              <Calendar className="h-3.5 w-3.5" />
              Schedule Visit
            </span>
            <span className="inline-flex items-center gap-1 rounded-md border border-[#e7e1d6] bg-[#ffffff] px-3.5 py-2 text-xs font-medium text-[#111827]">
              View Treatments
              <ArrowRight className="h-3 w-3 text-[#0f766e]" />
            </span>
          </div>
        </div>

        {/* 3 Real Clinic Value Pillars */}
        <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-[#e7e1d6]/80">
          <div className="rounded-lg border border-[#e7e1d6] bg-[#f7f3ec]/40 p-2.5 text-left">
            <div className="text-[11px] font-semibold text-[#111827]">Preventative</div>
            <div className="mt-0.5 text-[10px] text-[#5b6472] leading-tight">
              Routine checkups & cleanings
            </div>
          </div>
          <div className="rounded-lg border border-[#e7e1d6] bg-[#f7f3ec]/40 p-2.5 text-left">
            <div className="text-[11px] font-semibold text-[#111827]">Restorative</div>
            <div className="mt-0.5 text-[10px] text-[#5b6472] leading-tight">
              Implants & natural crowns
            </div>
          </div>
          <div className="rounded-lg border border-[#e7e1d6] bg-[#f7f3ec]/40 p-2.5 text-left">
            <div className="text-[11px] font-semibold text-[#111827]">Emergency</div>
            <div className="mt-0.5 text-[10px] text-[#5b6472] leading-tight">
              Same-day urgent relief
            </div>
          </div>
        </div>

        {/* Honest Portfolio Attribution Footnote */}
        <div className="flex items-center justify-between pt-3 border-t border-[#e7e1d6] text-[11px] text-[#5b6472]">
          <span className="flex items-center gap-1.5 text-[#111827] font-medium">
            <Check className="h-3.5 w-3.5 text-[#0f766e]" />
            Selected Portfolio Build — SmileCare Dental Clinic
          </span>
          <span className="text-[#b38a3d] font-medium">Concept Website</span>
        </div>
      </div>
    </div>
  );
}
