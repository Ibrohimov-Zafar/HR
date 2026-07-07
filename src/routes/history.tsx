import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import HistoryFeedback from "@/components/history/HistoryFeedback";
import HistoryHero from "@/components/history/HistoryHero";
import HistoryNextSteps from "@/components/history/HistoryNextSteps";
import HistorySkillVisualization from "@/components/history/HistorySkillVisualization";

export const Route = createFileRoute("/history")({
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <DashboardLayout hideHeader mainClassName="px-2 py-4 md:px-3 md:py-5">
      <div className="space-y-6 pb-6">
        <HistoryHero score={84} />
        <div className="grid gap-6 lg:grid-cols-2">
          <HistorySkillVisualization />
          <HistoryFeedback />
        </div>
        <HistoryNextSteps />
      </div>
    </DashboardLayout>
  );
}
