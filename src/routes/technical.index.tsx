import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import PracticeProblemList from "@/components/practice/PracticeProblemList";

export const Route = createFileRoute("/technical/")({
  component: PracticeListPage,
});

function PracticeListPage() {
  return (
    <DashboardLayout>
      <PracticeProblemList />
    </DashboardLayout>
  );
}
