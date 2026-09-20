import { createFileRoute } from "@tanstack/react-router";
import { FAQSection } from "../components/landing/FAQSection";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Digital Solution by Nasib Rehman" },
      {
        name: "description",
        content:
          "Answers to common questions about website pricing, delivery times, AI automation, domain and hosting, and how Digital Solution works.",
      },
      { property: "og:title", content: "FAQ — Digital Solution by Nasib Rehman" },
      {
        property: "og:description",
        content: "Common questions about Digital Solution services, pricing and delivery.",
      },
      { property: "og:url", content: "https://nasibrehmandigitalsolutions.vercel.app/faq" },
    ],
    links: [{ rel: "canonical", href: "https://nasibrehmandigitalsolutions.vercel.app/faq" }],
  }),
  component: () => <FAQSection as="h1" />,
});
