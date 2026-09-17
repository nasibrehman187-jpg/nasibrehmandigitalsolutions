import type { ReactNode } from "react";

export function BrowserFrame({ address, children }: { address: string; children: ReactNode }) {
  return (
    <div className="demo-preview relative overflow-hidden rounded-2xl border border-[#e7e1d6] bg-[#ffffff] shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e1d6] bg-[#f7f3ec]/60 px-4 py-2.5">
        <div aria-hidden="true" className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#e7e1d6]" />
          <span className="h-2 w-2 rounded-full bg-[#e7e1d6]" />
          <span className="h-2 w-2 rounded-full bg-[#e7e1d6]" />
        </div>
        <span className="text-[11px] text-[#5b6472]">{address}</span>
      </div>
      {children}
    </div>
  );
}
