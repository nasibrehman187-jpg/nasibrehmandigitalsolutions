import { createFileRoute } from "@tanstack/react-router";
import { Process } from "../components/landing/Process";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "How We Work — 5-Step Delivery Process | Nasib Rehman" },
      {
        name: "description",
        content:
          "A structured 5-step delivery process from requirements and planning to build, testing, and handover for websites, automations, and voice AI solutions.",
      },
      {
        property: "og:title",
        content: "How We Work — 5-Step Delivery Process | Nasib Rehman",
      },
      {
        property: "og:description",
        content:
          "A structured 5-step delivery process from requirements and planning to build, testing, and handover for websites, automations, and voice AI solutions.",
      },
      { property: "og:url", content: "https://nasibrehmandigitalsolutions.vercel.app/process" },
      {
        name: "twitter:title",
        content: "How We Work — 5-Step Delivery Process | Nasib Rehman",
      },
      {
        name: "twitter:description",
        content:
          "A structured 5-step delivery process from requirements and planning to build, testing, and handover for websites, automations, and voice AI solutions.",
      },
    ],
    links: [{ rel: "canonical", href: "https://nasibrehmandigitalsolutions.vercel.app/process" }],
  }),
  component: () => <Process as="h1" />,
});
