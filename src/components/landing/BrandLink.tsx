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
      className="group inline-flex min-h-11 shrink-0 items-center gap-2.5 rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
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
              ? "border-[#1E3A63] bg-[#162C4E] group-hover:border-[#087F8C]/60"
              : "border-[#DCE4EC] bg-[#FFFFFF] group-hover:border-[#087F8C]/50",
          )}
        />
      </picture>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-base font-bold tracking-tight",
            inverted ? "text-white" : "text-[#142338]",
          )}
        >
          Digital <span className={inverted ? "text-[#2DD4BF]" : "text-[#087F8C]"}>Solution</span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#B38A3D] ml-1.5 align-middle" />
        </span>
        <span
          className={cn(
            "text-xs tracking-wide font-medium mt-1",
            inverted ? "text-[#8A9EB5]" : "text-[#526174]",
          )}
        >
          by Nasib Rehman
        </span>
      </span>
    </Link>
  );
}
