import { createFileRoute } from "@tanstack/react-router";
import { Pricing } from "../components/landing/Pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Digital Solution by Nasib Rehman" },
      {
        name: "description",
        content:
          "Website development packages from $99, AI Chatbots from $150, AI Automation from $200, AI Voice Agents from $400, and Custom Solutions from $500+. Transparent, one-time setup pricing.",
      },
      { property: "og:title", content: "Pricing — Digital Solution by Nasib Rehman" },
      {
        property: "og:description",
        content:
          "Transparent pricing for websites from $99, AI chatbots from $150, AI automation from $200, AI voice agents from $400, and custom solutions from $500+.",
      },
    ],
  }),
  component: () => <Pricing />,
});
