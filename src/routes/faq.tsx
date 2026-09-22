import { createFileRoute } from "@tanstack/react-router";
import { FAQSection } from "../components/landing/FAQSection";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Nasib Rehman" },
      {
        name: "description",
        content:
          "Common questions answered on project timelines, website packages, hosting requirements, n8n workflows, third-party tool accounts, and voice AI costs.",
      },
      {
        property: "og:title",
        content: "Frequently Asked Questions | Nasib Rehman",
      },
      {
        property: "og:description",
        content:
          "Common questions answered on project timelines, website packages, hosting requirements, n8n workflows, third-party tool accounts, and voice AI costs.",
      },
      { property: "og:url", content: "https://nasibrehmandigitalsolutions.vercel.app/faq" },
      {
        name: "twitter:title",
        content: "Frequently Asked Questions | Nasib Rehman",
      },
      {
        name: "twitter:description",
        content:
          "Common questions answered on project timelines, website packages, hosting requirements, n8n workflows, third-party tool accounts, and voice AI costs.",
      },
    ],
    links: [{ rel: "canonical", href: "https://nasibrehmandigitalsolutions.vercel.app/faq" }],
  }),
  component: () => <FAQSection as="h1" />,
});
