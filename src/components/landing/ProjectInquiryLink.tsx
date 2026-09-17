import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function ProjectInquiryLink({ service, project }: { service: string; project: string }) {
  return (
    <Link
      to="/contact"
      search={{ service, project }}
      className="inline-flex min-h-11 items-center gap-2 text-xs sm:text-sm font-semibold text-[#0f766e] hover:text-[#0d9488] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e] rounded"
    >
      <span>Discuss a Similar Solution</span>
      <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
    </Link>
  );
}
