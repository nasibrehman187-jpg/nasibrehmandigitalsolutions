import { createFileRoute } from "@tanstack/react-router";
import { Process } from "../components/landing/Process";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "How We Work — Digital Solution by Nasib Rehman" },
      {
        name: "description",
        content:
          "A simple 5-step process from understanding your requirements to launching the final website, automation or AI solution.",
      },
      { property: "og:title", content: "How We Work — Digital Solution by Nasib Rehman" },
      {
        property: "og:description",
        content:
          "How Digital Solution designs, builds and delivers websites, AI automation and digital solutions.",
      },
      { property: "og:url", content: "https://nasibrehmandigitalsolutions.vercel.app/process" },
    ],
    links: [{ rel: "canonical", href: "https://nasibrehmandigitalsolutions.vercel.app/process" }],
  }),
  component: () => <Process as="h1" />,
});
