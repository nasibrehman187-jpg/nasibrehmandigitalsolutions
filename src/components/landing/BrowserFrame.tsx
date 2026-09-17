import type { ReactNode } from "react";
import { Lock } from "lucide-react";

export function BrowserFrame({
  address,
  badge,
  children,
}: {
  address: string;
  badge?: string;
  children: ReactNode;
}) {
  return (
    <div className="demo-preview relative overflow-hidden rounded-xl border border-[#DCE4EC] bg-[#FFFFFF] shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#DCE4EC] bg-[#F6F8FB] px-4 py-2.5">
        <div aria-hidden="true" className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/40" />
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-[#DCE4EC] bg-white px-2.5 py-0.5 text-[11px] text-[#526174] shadow-2xs font-mono">
          <Lock className="h-2.5 w-2.5 text-[#087F8C]" />
          <span>{address}</span>
        </div>
        {badge ? (
          <span className="text-[10px] font-medium text-[#087F8C] bg-[#E6F5F6] border border-[#087F8C]/20 px-2 py-0.5 rounded">
            {badge}
          </span>
        ) : (
          <div className="w-12 hidden sm:block" />
        )}
      </div>
      {children}
    </div>
  );
}
