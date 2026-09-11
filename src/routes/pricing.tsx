import { createFileRoute } from "@tanstack/react-router";
import { Pricing } from "../components/landing/Pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Digital Solution by Nasib Rehman" },
      {
        name: "description",
        content:
          "Website development packages from $150. AI automation and chatbot projects quoted individually. Transparent, one-time pricing.",
      },
      { property: "og:title", content: "Pricing — Digital Solution by Nasib Rehman" },
      {
        property: "og:description",
        content:
          "Website packages from $150. AI automation, chatbots and voice agents quoted individually.",
      },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Pricing />
    </div>
  ),
});
