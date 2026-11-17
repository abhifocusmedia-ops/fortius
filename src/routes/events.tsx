import { createFileRoute, redirect } from "@tanstack/react-router";

// The original site's /events link resolves to the events list.
export const Route = createFileRoute("/events")({
  beforeLoad: () => { throw redirect({ to: "/events-list", statusCode: 301 }); },
});
