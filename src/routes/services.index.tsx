import { createFileRoute } from "@tanstack/react-router";
import { Services } from "../components/landing/Services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Digital Solution by Nasib Rehman" },
      {
        name: "description",
        content:
          "Professional website development, AI chatbots, AI automation, AI voice agents, and custom digital solutions for growing businesses.",
      },
      { property: "og:title", content: "Services — Digital Solution by Nasib Rehman" },
      {
        property: "og:description",
        content:
          "Websites, AI chatbots, AI automation, AI voice agents, and custom digital solutions for growing businesses.",
      },
      { property: "og:url", content: "https://nasibrehmandigitalsolutions.vercel.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://nasibrehmandigitalsolutions.vercel.app/services" }],
  }),
  component: () => <Services as="h1" />,
});
