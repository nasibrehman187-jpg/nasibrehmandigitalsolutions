export function HeroMobileFallback() {
  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-[#e7e1d6] bg-[#ffffff] p-6 sm:p-10 shadow-xs"
      aria-hidden="true"
    >
      {/* Precision architectural linework background */}
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full pointer-events-none opacity-60"
      >
        {/* Subtle grid pattern */}
        <defs>
          <pattern id="studio-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f3eee6" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="500" height="500" fill="url(#studio-grid)" />

        {/* Concentric harmonic circles */}
        <circle cx="250" cy="220" r="170" stroke="#e7e1d6" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="250" cy="220" r="120" stroke="#e7e1d6" strokeWidth="1" />
        <circle cx="250" cy="220" r="70" stroke="#0f766e" strokeWidth="1" strokeOpacity="0.35" />

        {/* Architectural alignment axes */}
        <line x1="250" y1="20" x2="250" y2="420" stroke="#e7e1d6" strokeWidth="1" />
        <line x1="50" y1="220" x2="450" y2="220" stroke="#e7e1d6" strokeWidth="1" />
        <line
          x1="120"
          y1="90"
          x2="380"
          y2="350"
          stroke="#e7e1d6"
          strokeWidth="0.75"
          strokeDasharray="2 4"
        />
        <line
          x1="120"
          y1="350"
          x2="380"
          y2="90"
          stroke="#e7e1d6"
          strokeWidth="0.75"
          strokeDasharray="2 4"
        />

        {/* Corner registration marks */}
        <path d="M 30 40 L 40 40 L 40 30" stroke="#b38a3d" strokeWidth="1.5" />
        <path d="M 470 40 L 460 40 L 460 30" stroke="#b38a3d" strokeWidth="1.5" />
        <path d="M 30 460 L 40 460 L 40 470" stroke="#b38a3d" strokeWidth="1.5" />
        <path d="M 470 460 L 460 460 L 460 470" stroke="#b38a3d" strokeWidth="1.5" />
      </svg>

      {/* Bespoke Editorial Monogram Composition */}
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center text-center">
        {/* Studio Monogram Emblem */}
        <div className="relative my-4 sm:my-6 flex items-center justify-center">
          <div className="relative grid h-28 w-28 sm:h-32 sm:w-32 place-items-center rounded-2xl border border-[#e7e1d6] bg-[#fffdfc] shadow-xs">
            {/* Inner frame */}
            <div className="absolute inset-1.5 rounded-xl border border-[#e7e1d6]/70" />

            {/* Monogram Display Typography */}
            <div className="relative flex flex-col items-center">
              <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#111827]">
                D<span className="text-[#0f766e]">S</span>
              </span>
              <span className="mt-0.5 text-[9px] font-mono uppercase tracking-[0.25em] text-[#b38a3d]">
                FOUNDER-LED
              </span>
            </div>

            {/* Corner accents */}
            <span className="absolute -top-1 -left-1 h-2 w-2 border-t-2 border-l-2 border-[#0f766e]" />
            <span className="absolute -bottom-1 -right-1 h-2 w-2 border-b-2 border-r-2 border-[#b38a3d]" />
          </div>
        </div>

        {/* Brand Title & Identity */}
        <div className="w-full">
          <div className="font-display text-lg sm:text-xl font-semibold tracking-tight text-[#111827]">
            Digital Solution <span className="text-[#0f766e]">by Nasib Rehman</span>
          </div>
        </div>
      </div>
    </div>
  );
}
