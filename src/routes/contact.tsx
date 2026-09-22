import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "../components/landing/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Project Inquiry | Nasib Rehman" },
      {
        name: "description",
        content:
          "Discuss your website, AI automation, or chatbot project with Nasib Rehman. Direct project inquiry form and quick WhatsApp communication available.",
      },
      {
        property: "og:title",
        content: "Contact & Project Inquiry | Nasib Rehman",
      },
      {
        property: "og:description",
        content:
          "Discuss your website, AI automation, or chatbot project with Nasib Rehman. Direct project inquiry form and quick WhatsApp communication available.",
      },
      { property: "og:url", content: "https://nasibrehmandigitalsolutions.vercel.app/contact" },
      {
        name: "twitter:title",
        content: "Contact & Project Inquiry | Nasib Rehman",
      },
      {
        name: "twitter:description",
        content:
          "Discuss your website, AI automation, or chatbot project with Nasib Rehman. Direct project inquiry form and quick WhatsApp communication available.",
      },
    ],
    links: [{ rel: "canonical", href: "https://nasibrehmandigitalsolutions.vercel.app/contact" }],
  }),
  component: () => <Contact as="h1" />,
});
