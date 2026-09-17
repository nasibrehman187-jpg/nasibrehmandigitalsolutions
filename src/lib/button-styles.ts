import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex max-w-full items-center justify-center gap-2 rounded-md text-center text-sm font-semibold leading-snug cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#087F8C] text-white shadow-xs hover:bg-[#066670]",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-[#DCE4EC] bg-white text-[#142338] shadow-xs hover:bg-[#F6F8FB] hover:border-[#C5D3E0]",
        secondary: "bg-[#EEF3F8] text-[#142338] shadow-xs hover:bg-[#E2EAF2]",
        navy: "bg-[#10233F] text-white shadow-xs hover:bg-[#162C4E] border border-[#1E3A63]",
        navyOutline: "border border-[#2A4365] bg-transparent text-white hover:bg-white/10",
        tealOutline: "border border-[#087F8C] bg-white text-[#087F8C] hover:bg-[#E6F5F6]",
        ghost: "hover:bg-[#F6F8FB] hover:text-[#142338]",
        link: "text-[#087F8C] underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-11 px-5 py-3",
        sm: "min-h-11 px-3 py-2",
        lg: "min-h-12 px-6 py-3",
        icon: "h-11 w-11 shrink-0 p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
