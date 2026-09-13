import { createFileRoute } from "@tanstack/react-router";
import { Services } from "../components/landing/Services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Digital Solution by Nasib Rehman" },
      {
        name: "description",
        content:
          "Professional website development, AI automation, AI chatbots and AI voice agent services for businesses.",
      },
      { property: "og:title", content: "Services — Digital Solution by Nasib Rehman" },
      {
        property: "og:description",
        content:
          "Websites, AI automation, chatbots and voice agents — practical digital solutions for growing businesses.",
      },
    ],
  }),
  component: () => <Services />,
});
