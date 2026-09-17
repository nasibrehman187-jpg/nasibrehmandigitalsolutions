import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function BrandLink({
  inverted = false,
  onClick,
}: {
  inverted?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Digital Solution — Home"
      className="group inline-flex min-h-11 shrink-0 items-center gap-2.5 rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
    >
      <picture>
        <source srcSet="/logo-icon.webp" type="image/webp" />
        <img
          src="/logo-icon.png"
          alt="Digital Solution logo mark"
          width={36}
          height={36}
          decoding="async"
          className={cn(
            "h-9 w-9 rounded-lg border object-cover shadow-xs transition duration-300",
            inverted
              ? "border-[#2D3748] group-hover:border-[#2DD4BF]/50"
              : "border-[#e7e1d6] group-hover:border-[#0f766e]/50",
          )}
        />
      </picture>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-base font-semibold tracking-tight",
            inverted ? "text-[#F7F3EC]" : "text-[#111827]",
          )}
        >
          Digital <span className={inverted ? "text-[#2DD4BF]" : "text-[#0F766E]"}>Solution</span>
          <span className="inline-block h-1 w-1 rounded-full bg-[#B38A3D] ml-1.5 align-middle opacity-90" />
        </span>
        <span
          className={cn(
            "text-[10.5px] tracking-wide font-normal mt-1",
            inverted ? "text-[#94A3B8]" : "text-[#5B6472]",
          )}
        >
          by Nasib Rehman
        </span>
      </span>
    </Link>
  );
}
