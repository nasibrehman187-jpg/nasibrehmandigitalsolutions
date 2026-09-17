import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  tag: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
};

export function SectionHeader({
  tag,
  title,
  subtitle,
  align = "center",
  as: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#B38A3D]" />
        <span className="tracking-widest text-[11px]">{tag}</span>
      </div>
      <Heading className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl text-[#111827]">
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#5B6472] leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
