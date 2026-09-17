import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  tag: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
  inverted?: boolean;
};

export function SectionHeader({
  tag,
  title,
  subtitle,
  align = "center",
  as: Heading = "h2",
  inverted = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <div
        className={cn(
          "inline-flex items-center gap-2 text-xs font-semibold tracking-wide rounded-full px-3 py-1",
          inverted
            ? "bg-[#162C4E] border border-[#1E3A63] text-[#2DD4BF]"
            : "bg-[#E6F5F6] border border-[#087F8C]/20 text-[#087F8C]",
        )}
      >
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#B38A3D]" />
        <span>{tag}</span>
      </div>
      <Heading
        className={cn(
          "mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight",
          inverted ? "text-white" : "text-[#142338]",
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            inverted ? "text-[#B0C0D4]" : "text-[#526174]",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
