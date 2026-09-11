import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/testimonials")({
  loader: () => {
    throw redirect({ to: "/", replace: true });
  },
  component: () => null,
});
