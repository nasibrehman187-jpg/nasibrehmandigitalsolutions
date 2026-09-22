import { createFileRoute } from "@tanstack/react-router";
import { Services } from "../components/landing/Services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Digital Solutions & AI Automation Services | Nasib Rehman" },
      {
        name: "description",
        content:
          "Explore professional services by Nasib Rehman: website development, AI chatbots, n8n automation, voice agents, and custom multi-system architectures.",
      },
      {
        property: "og:title",
        content: "Digital Solutions & AI Automation Services | Nasib Rehman",
      },
      {
        property: "og:description",
        content:
          "Explore professional services by Nasib Rehman: website development, AI chatbots, n8n automation, voice agents, and custom multi-system architectures.",
      },
      { property: "og:url", content: "https://nasibrehmandigitalsolutions.vercel.app/services" },
      {
        name: "twitter:title",
        content: "Digital Solutions & AI Automation Services | Nasib Rehman",
      },
      {
        name: "twitter:description",
        content:
          "Explore professional services by Nasib Rehman: website development, AI chatbots, n8n automation, voice agents, and custom multi-system architectures.",
      },
    ],
    links: [{ rel: "canonical", href: "https://nasibrehmandigitalsolutions.vercel.app/services" }],
  }),
  component: () => <Services as="h1" />,
});
