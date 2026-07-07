import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/technical")({
  component: TechnicalLayout,
});

function TechnicalLayout() {
  return <Outlet />;
}
