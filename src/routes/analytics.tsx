import { createFileRoute } from "@tanstack/react-router";
import ActivityAreaChart from "@/components/analytics/ActivityAreaChart";
import CategoryDonutChart from "@/components/analytics/CategoryDonutChart";
import ConfidenceLineChart from "@/components/analytics/ConfidenceLineChart";
import InterviewBarChart from "@/components/analytics/InterviewBarChart";
import ScoreTrendChart from "@/components/analytics/ScoreTrendChart";
import SkillBubbleChart from "@/components/analytics/SkillBubbleChart";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";

export const Route = createFileRoute("/analytics")({
  component: AnalyticsPage,
});

function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard label="Total Sessions" value="94" trend="+12" trendUp />
          <StatCard label="Avg Score" value="84%" trend="+5%" trendUp />
          <StatCard label="Practice Hours" value="156h" trend="+18h" trendUp />
          <StatCard label="Streak" value="14 days" trend="Best: 21" />
        </div>
        <ScoreTrendChart />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2"><ActivityAreaChart /></div>
          <CategoryDonutChart />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <SkillBubbleChart />
          <InterviewBarChart />
        </div>
        <ConfidenceLineChart />
      </div>
    </DashboardLayout>
  );
}
