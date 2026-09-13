import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "../components/landing/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Digital Solution by Nasib Rehman" },
      {
        name: "description",
        content:
          "Discuss your website, AI automation or digital project with Nasib Rehman. Send your requirements via form or WhatsApp.",
      },
      { property: "og:title", content: "Contact — Digital Solution by Nasib Rehman" },
      {
        property: "og:description",
        content: "Get in touch with Digital Solution to discuss your project requirements.",
      },
      { property: "og:url", content: "https://nasibrehmandigitalsolutions.vercel.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://nasibrehmandigitalsolutions.vercel.app/contact" }],
  }),
  component: () => <Contact />,
});
