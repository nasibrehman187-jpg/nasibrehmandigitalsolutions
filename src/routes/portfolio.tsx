import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  loader: () => {
    throw redirect({ to: "/projects", replace: true });
  },
  component: () => null,
});
