import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "../components/landing/Projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Demos — Digital Solution by Nasib Rehman" },
      {
        name: "description",
        content:
          "Selected projects and demonstration systems showcasing websites, AI automation, chatbots and voice agent solutions.",
      },
      { property: "og:title", content: "Projects & Demos — Digital Solution by Nasib Rehman" },
      {
        property: "og:description",
        content:
          "Selected projects and demos by Digital Solution — websites, AI automation, chatbots and voice agents.",
      },
    ],
  }),
  component: () => <Projects />,
});
