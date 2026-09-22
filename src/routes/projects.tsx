import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "../components/landing/Projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Demo Systems | Nasib Rehman" },
      {
        name: "description",
        content:
          "Explore demo websites, chatbot concepts, workflow automations and voice agent examples by Nasib Rehman. Review the projects and discuss your requirements.",
      },
      {
        property: "og:title",
        content: "Projects & Demo Systems | Nasib Rehman",
      },
      {
        property: "og:description",
        content:
          "Explore demo websites, chatbot concepts, workflow automations and voice agent examples by Nasib Rehman. Review the projects and discuss your requirements.",
      },
      { property: "og:url", content: "https://nasibrehmandigitalsolutions.vercel.app/projects" },
      {
        name: "twitter:title",
        content: "Projects & Demo Systems | Nasib Rehman",
      },
      {
        name: "twitter:description",
        content:
          "Explore demo websites, chatbot concepts, workflow automations and voice agent examples by Nasib Rehman. Review the projects and discuss your requirements.",
      },
    ],
    links: [{ rel: "canonical", href: "https://nasibrehmandigitalsolutions.vercel.app/projects" }],
  }),
  component: () => <Projects as="h1" />,
});
